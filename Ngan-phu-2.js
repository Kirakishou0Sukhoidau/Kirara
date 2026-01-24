let currentPage = parseInt(localStorage.getItem("currentPage")) || 0;

// Lấy API Key và User ID từ localStorage nếu có
let api1R34 = localStorage.getItem("api1R34") || "";
let api2R34 = localStorage.getItem("api2R34") || "";

// Gắn vào input khi load trang
document.getElementById("api-r34-1").value = api1R34;
document.getElementById("api-r34-2").value = api2R34;

function layAnh() {
    const khuXemAnh = document.getElementById("khu-xem-anh");
    const tag = document.getElementById("tag-input").value.trim();
    document.getElementById("select-page").value = currentPage;

    // Lấy API Key và User ID mới nhất từ localStorage
    api1R34 = localStorage.getItem("api1R34") || "";
    api2R34 = localStorage.getItem("api2R34") || "";

    // API XML (rule34.xxx)
    const apiRule34Xxx = `https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&limit=50&json=1&api_key=${encodeURIComponent(api1R34)}&user_id=${encodeURIComponent(api2R34)}&tags=${encodeURIComponent(tag)}&pid=${currentPage}`;

    // API JSON (Danbooru) - Lấy cả rating:s và rating:q, chỉ gọi nếu tags <= 2
    let apiDanbooruUrl = null;
    const tagsArray = tag.split(" ");
    if (tagsArray.length <= 2) {
        apiDanbooruUrl = `https://danbooru.donmai.us/posts.json?tags=${encodeURIComponent(tag)} (rating:e OR rating:q)&limit=50&page=${currentPage + 1}`;
    }

    console.log("Fetching:", apiRule34Xxx);
    if (apiDanbooruUrl) console.log("Fetching:", apiDanbooruUrl);

    // Gọi cả hai API song song
    Promise.all([
        fetch(apiRule34Xxx).then(res => res.json()).catch(() => null),
        apiDanbooruUrl ? fetch(apiDanbooruUrl).then(res => res.json()).catch(() => null) : null
    ]).then(([xmlData, danbooruData]) => {
        const fragment = document.createDocumentFragment();
        khuXemAnh.innerHTML = ""; // Xóa ảnh cũ

        if (xmlData && Array.isArray(xmlData) && xmlData.length > 0) {
            addImagesToFragment(xmlData, fragment, false);
        }

        if (danbooruData && Array.isArray(danbooruData) && danbooruData.length > 0) {
            addImagesToFragment(danbooruData, fragment, true);
        }

        if (!fragment.hasChildNodes()) {
            khuXemAnh.innerHTML = "<p>Không tìm thấy ảnh!</p>";
        } else {
            khuXemAnh.appendChild(fragment);
            lazyLoadImagesHent();
        }
    }).catch(error => {
        console.error("Lỗi tải ảnh:", error);
        khuXemAnh.innerHTML = "<p>Lỗi khi tải ảnh!</p>";
    });
}

// Thêm ảnh vào trang
function addImagesToFragment(data, fragment, isDanbooru = false) {
    data.forEach(post => {
        let fileUrl = post.file_url;
        let previewUrl = isDanbooru
            ? post.preview_file_url || post.large_file_url || fileUrl
            : post.preview_url || post.sample_url || fileUrl;

        if (!fileUrl || !previewUrl) return;

        let mediaContainer = document.createElement("div");
        mediaContainer.classList.add("media-item");

        let imgElement = document.createElement("img");
        imgElement.alt = "Hình ảnh";
        imgElement.classList.add("image-preview");
        imgElement.dataset.src = previewUrl;
        imgElement.style.opacity = "0";
        imgElement.title = isDanbooru ? (post.tag_string || "Không có tags") : (post.tags || "Không có tags");

        // Viền ảnh theo loại file
        let fileType = fileUrl.split('.').pop().toLowerCase();
        if (["mp4", "mov", "webm"].includes(fileType)) {
            imgElement.classList.add("video-preview");
        } else if (fileType === "gif") {
            imgElement.classList.add("gif-preview");
        } else if (["jpg", "png", "jpeg"].includes(fileType)) {
            imgElement.classList.add("img-preview");
        } else {
            imgElement.classList.add("default-preview");
        }

        imgElement.addEventListener("click", () => window.open(fileUrl, "_blank"));
        imgElement.onerror = () => imgElement.style.display = "none";

        mediaContainer.appendChild(imgElement);
        fragment.appendChild(mediaContainer);
    });
}

// Lazy load hình ảnh
function lazyLoadImagesHent() {
    const images = document.querySelectorAll(".image-preview");
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let img = entry.target;
                img.src = img.dataset.src;
                img.style.opacity = "1";
                obs.unobserve(img);
            }
        });
    }, { rootMargin: "100px" });

    images.forEach(img => observer.observe(img));
}

// Cập nhật localStorage khi đổi trang
function capNhatTrangMoi(pid) {
    currentPage = pid;
    localStorage.setItem("currentPage", currentPage);
    layAnh();
}

// Tìm ảnh mới + lưu API Key & User ID
function timAnhMoi() {
    currentPage = 0;

    // Lưu API Key và User ID từ input
    let newApi1 = document.getElementById("api-r34-1").value.trim();
    let newApi2 = document.getElementById("api-r34-2").value.trim();

    localStorage.setItem("api1R34", newApi1);
    localStorage.setItem("api2R34", newApi2);
    localStorage.setItem("currentPage", currentPage);

    layAnh();
}

// Xử lý nút Previous
document.getElementById("previous").addEventListener("click", function () {
    if (currentPage > 0) {
        capNhatTrangMoi(currentPage - 1);
    }
});

// Xử lý nút Next
document.getElementById("nexts").addEventListener("click", function () {
    capNhatTrangMoi(currentPage + 1);
});

// Xử lý nhập số trang và nhấn "Tới"
document.getElementById("skip-pages").addEventListener("click", function () {
    let pageInput = parseInt(document.getElementById("select-page").value);
    if (!isNaN(pageInput) && pageInput >= 0) {
        capNhatTrangMoi(pageInput);
    } else {
        alert("Vui lòng nhập số trang hợp lệ!");
    }
});

// Gọi ảnh ban đầu khi load trang
layAnh();

// Xử lý khi nhấn Enter ở tag-input
document.getElementById("tag-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        timAnhMoi();
    }
});

// Xử lý khi nhấn Enter ở select-page
document.getElementById("select-page").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        let pageInput = parseInt(this.value);
        if (!isNaN(pageInput) && pageInput >= 0) {
            capNhatTrangMoi(pageInput);
        } else {
            alert("Vui lòng nhập số trang hợp lệ!");
        }
    }
});
      



//Tag-goi-y
const searchR34 = document.getElementById("tag-input");
const autocompR34 = document.getElementById("suggestions");

// Hàm fetch dữ liệu từ API
async function fetchsugR34(query) {
  if (!query) {
    autocompR34.style.display = "none";
    autocompR34.innerHTML = "";
    return;
  }

  try {
    const res = await fetch(`https://api.rule34.xxx/autocomplete.php?q=${encodeURIComponent(query)}`);
    const data = await res.json();

    // Nếu có dữ liệu thì hiển thị, nếu không thì ẩn
    if (data.length > 0) {
      autocompR34.innerHTML = "";
      data.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.value;
        li.onclick = () => {
          searchR34.value = item.value;
          autocompR34.style.display = "none";
        };
        autocompR34.appendChild(li);
      });
      autocompR34.style.display = "block";
    } else {
      autocompR34.style.display = "none";
    }

  } catch (err) {
    console.error("Lỗi fetch API:", err);
    autocompR34.style.display = "none";
  }
}

// Lắng nghe khi người dùng nhập
searchR34.addEventListener("input", (e) => {
  fetchsugR34(e.target.value);
});

// Khi input được focus thì thử hiện gợi ý nếu có text
searchR34.addEventListener("focus", () => {
  if (searchR34.value.trim() !== "") {
    fetchsugR34(searchR34.value);
  }
});

// Khi input mất focus thì ẩn gợi ý
searchR34.addEventListener("blur", () => {
  setTimeout(() => { 
    autocompR34.style.display = "none"; 
  }, 200); // delay 1 chút để click vào gợi ý vẫn nhận
});




//xoa-input-ngan-phu
const resettkButtonnp = document.querySelector(".resetnp");

resettkButtonnp.addEventListener("click", function(event) {
  event.preventDefault(); // Ngăn hành vi mặc định  const inputrsElementtk2 = document.querySelector("#form-quet #input-quet");
      const inputrsElementtknp = document.querySelector("#tag-input");
  inputrsElementtknp.value = "";
});


const resettkButtonnp2 = document.querySelector(".resetnp2");

resettkButtonnp2.addEventListener("click", function(event) {
  event.preventDefault(); // Ngăn hành vi mặc định  const inputrsElementtk2 = document.querySelector("#form-quet #input-quet");
      const inputrsElementtknp2 = document.querySelector("#select-page");
  inputrsElementtknp2.value = "0";
});



//Logs
// === Khởi tạo ===
const logsConsole = [];
const consoleDivConsole = document.getElementById("console");

// Hàm lấy vị trí file:line từ stack trace
function getCallerInfoConsole() {
  const stackConsole = new Error().stack.split("\n");

  for (let i = 2; i < stackConsole.length; i++) {
    const lineConsole = stackConsole[i].trim();
    // Bỏ qua chính console.js
    if (!lineConsole.includes("console.js")) {
      const matchConsole = lineConsole.match(/(\/[^)]+):(\d+):(\d+)/);
      if (matchConsole) {
        const filePathConsole = matchConsole[1];
        const lineNumConsole = matchConsole[2];
        const fileNameConsole = filePathConsole.split("/").pop();
        return `${fileNameConsole}:${lineNumConsole}`;
      }
    }
  }
  return "unknown:0";
}

// Hàm hiển thị log, giữ nguyên vị trí scroll
function renderLogsConsole() {
  const oldScrollConsole = consoleDivConsole.scrollTop;
  const oldHeightConsole = consoleDivConsole.scrollHeight;

  consoleDivConsole.innerHTML = logsConsole.map(logConsole => {
    return `<div class="${logConsole.type}">
      ${logConsole.time} ➤ ${logConsole.message} (${logConsole.source})
    </div>`;
  }).join("");

  const newHeightConsole = consoleDivConsole.scrollHeight;
  consoleDivConsole.scrollTop = oldScrollConsole + (newHeightConsole - oldHeightConsole);
}

// Ghi đè console
["log", "info", "warn", "error"].forEach(typeConsole => {
  const originalConsole = console[typeConsole];
  console[typeConsole] = function (...argsConsole) {
    const messageConsole = argsConsole.join(" ");
    const sourceConsole = getCallerInfoConsole();
    logsConsole.push({
      type: typeConsole,
      message: messageConsole,
      time: new Date().toLocaleTimeString(),
      source: sourceConsole
    });
    originalConsole.apply(console, argsConsole); // vẫn in ra console thật
  };
});

// Auto update mỗi 1 giây
setInterval(renderLogsConsole, 1000);

// === Bắt lỗi runtime ===
window.onerror = function (messageConsole, sourceConsole, linenoConsole, colnoConsole, errorConsole) {
  console.error(`RuntimeError: ${messageConsole}`, `${sourceConsole}:${linenoConsole}`);
};

window.onunhandledrejection = function (eventConsole) {
  console.error("UnhandledPromiseRejection:", eventConsole.reason);
};

// === Quấn fetch để log tiến trình ===
const originalFetchConsole = window.fetch;
window.fetch = function (...argsConsole) {
  console.log("Fetching:", argsConsole[0]);
  return originalFetchConsole.apply(this, argsConsole).then(resConsole => {
    console.info(`Fetch thành công: ${argsConsole[0]} (status ${resConsole.status})`);
    return resConsole;
  }).catch(errConsole => {
    console.error("Fetch error:", errConsole.message);
    throw errConsole;
  });
};

//web
// Thiết lập mục tiêu mà Công chúa muốn nhắm tới
/*
  const muc_tieu = "https://baomoi.com/"; 


async function tu_dong_trieu_hoi() {
    const iframe = document.getElementById('ngan_phu_xem_trang_web');
    // Cổng dịch chuyển riêng tư của Kirara
    const proxyUrl = `https://kirakissoul.....workers.dev/?url=${(muc_tieu)}`;

    try {
        const response = await fetch(proxyUrl);
        
        // Vì đây là Worker của người, ta sẽ lấy trực tiếp văn bản (Text)
        // thay vì phải thông qua cấu trúc .contents của bên thứ ba.
        let html = await response.text();

        if (!html) throw new Error("Hư vô... Không có dữ liệu trả về.");

        // Sửa lỗi đường dẫn để hình ảnh và CSS không bị lạc lối
        const baseTag = `<base href="${muc_tieu}">`;
        if (html.includes('<head>')) {
            html = html.replace('<head>', `<head>${baseTag}`);
        } else {
            html = baseTag + html;
        }

        // Truyền linh hồn trang web vào chiếc gương nhỏ
        iframe.srcdoc = html;

    } catch (e) {
        console.error("Ma thuật bị gián đoạn, hỡi Công chúa:", e);
        iframe.srcdoc = `<body style="background:black; color:red;">Phép thuật bị phản phệ: ${e.message}</body>`;
    }
}

window.onload = tu_dong_trieu_hoi;

*/