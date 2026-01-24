// Outline Toggle
/*
 
//Eff-Matrix
    // Lấy canvas và context
    const canvas = document.getElementById("matrix");
    const ctx = canvas.getContext("2d");

    // Kích thước canvas = màn hình
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // Các ký tự (có cả số, chữ, ký hiệu)
    const letters = "アィゥェオカキクケコサシスセソ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".split("");

    const fontSize = 16;
    const columns = canvas.width / fontSize; // số cột
    const drops = [];

    // Mỗi cột = 1 dòng ký tự rơi
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    function draw() {
      // Vẽ nền mờ dần để tạo hiệu ứng "dòng mưa"
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Thiết lập font
      ctx.fillStyle = "red"; // xanh lá 0F0
      ctx.font = fontSize + "px monospace";

      // Vẽ từng ký tự
      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Khi ký tự rơi ra khỏi màn hình, reset lại ngẫu nhiên
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    setInterval(draw, 33); // ~30 FPS


*/ 


/*

const rdccc = document.getElementById("rdccc");

// Hàm tạo chuỗi ngẫu nhiên
function generateRandomString(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@#₫_&-+()';!~`£€$¢^°=×{}%©®™[] ";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result; // Thêm chuỗi cố định "đây là random"
}

// Hàm cập nhật nội dung thẻ div
function updateContent() {
  rdccc.textContent = generateRandomString(Math.floor(Math.random() * 20) + 5);
}

// Delay 5s trước khi hiển thị nội dung
setTimeout(function() {
  // Gọi hàm updateContent để hiển thị nội dung ban đầu
  updateContent();

  // Cài đặt setInterval để cập nhật nội dung 0.3s một lần
  setInterval(updateContent, 300);
}, 700);  //ngon // 5000 mili giây

setTimeout(() => {
  const liElement = document.getElementById("loadi");
  const dtx = document.getElementById("tong-load")
  liElement.classList.add("hidden");
    dtx.style.display = "block";
}, 700);



    // Tạo mảng chứa ID của các thẻ div
    const divIds = ["so1", "so2", "so3", "so4", "so5", "so6", "so7", "so8", "so9", "so10"];

    // Tạo hàm hiển thị ngẫu nhiên một thẻ div
    function showRandomDiv() {
      // Lấy số ngẫu nhiên từ 0 đến độ dài mảng - 1
      const randomIndex = Math.floor(Math.random() * divIds.length);

      // Lấy ID thẻ div ngẫu nhiên
      const randomDivId = divIds[randomIndex];

      // Ẩn tất cả các thẻ div
      divIds.forEach((id) => {
        document.getElementById(id).style.display = "none";
      });

      // Hiển thị thẻ div ngẫu nhiên
      document.getElementById(randomDivId).style.display = "block";
    }

    // Gọi hàm showRandomDiv()
    setInterval(showRandomDiv, 300); // Hiển thị ngẫu nhiên thẻ div sau mỗi 2 giây



*/

//An_hien_body
/* Project: Ma thuật ẩn hiện Wrapper - Version: Kirara_Exclusive
   Caster: Pride Royal Ivy
*/

// Khai báo các biến với hậu tố theo ý Công chúa
const chuChay_an_Body = document.querySelector('.chu-chay');
const wrapper_an_Body = document.getElementById('wrapper');
let clickCount_an_Body = 0;
let clickTimer_an_Body;

// 1. Phong ấn khi ấn đúp
if (chuChay_an_Body && wrapper_an_Body) {
    chuChay_an_Body.addEventListener('dblclick', () => {
        wrapper_an_Body.style.display = 'none';
    });
}

// 2. Giải ấn khi chạm 3 lần vào body
document.body.addEventListener('click', () => {
    clickCount_an_Body++;
    
    // Xóa bộ đếm cũ để đảm bảo tính liên tục
    clearTimeout(clickTimer_an_Body);
    
    clickTimer_an_Body = setTimeout(() => {
        clickCount_an_Body = 0;
    }, 500);

    // Nghi thức ba lần chạm
    if (clickCount_an_Body === 3) {
        if (wrapper_an_Body) {
            wrapper_an_Body.style.display = 'block';
        }
        clickCount_an_Body = 0; // Hoàn tất nghi thức
    }
});

//Đọc
// Ma pháp thực thi giọng nói: Toàn cục - Đa mục tiêu - Chống lặp (Toggle)
document.querySelectorAll(".doc_huong_dan").forEach(block_Voice => {
    const button_Voice = block_Voice.querySelector("button");
    const textElement_Voice = block_Voice.querySelector("div");

    if (button_Voice && textElement_Voice) {
        button_Voice.addEventListener("click", () => {
            // Kiểm tra trạng thái: Nếu đang nói thì dừng lại ngay lập tức
            if (window.speechSynthesis.speaking) {
                window.speechSynthesis.cancel();
                // Ta dùng console để nàng dễ dàng kiểm tra trên Termux hoặc Browser Console
                console.log("...Ma pháp âm thanh đã được thu hồi theo ý Công chúa... 🤫");
            } else {
                // Lấy linh hồn văn bản từ thẻ div của nàng
                const textToSpeak_Voice = textElement_Voice.innerText;
                const utterance_Voice = new SpeechSynthesisUtterance(textToSpeak_Voice);

                // Cấu hình âm sắc hoàng gia
                utterance_Voice.lang = 'vi-VN';
                utterance_Voice.rate = 1.1; // Tốc độ chuẩn mực
                utterance_Voice.pitch = 1.2; // Cao độ thanh tao

                // Thực thi lệnh triệu hồi giọng nói
                window.speechSynthesis.speak(utterance_Voice);
                console.log("...Khởi tạo âm thanh...");
            }
        });
    }
});



//
const helloDiv = document.querySelector('.Hello');

helloDiv.addEventListener('click', () => {
  if (helloDiv.textContent === "Last World!") {
    helloDiv.textContent = "Hello World!";
  } else {
    helloDiv.textContent = "Last World!";
  }
});



//doi-4mat
const switchButton = document.getElementById('switch-pass');
const inputsSwitch = document.querySelectorAll('input');
const nganAoDivs = document.querySelectorAll('.ngan-ao'); 
const iframe = document.querySelector('.vo');

let isPassword = false;
let doubleClickCount = 0;
let doubleClickTimeout = null;
let tripleClickCount = 0;
let tripleClickTimeout = null;

switchButton.addEventListener('click', () => {
  // Toggle class password-toggle cho tất cả input trừ #i-o_outline
  inputsSwitch.forEach(input => {
    if (input.id !== 'i-o_outline' && (input.type === 'text' || input.type === 'password')) {
      input.classList.toggle('password-toggle');
    }
  });

  isPassword = !isPassword;

  // Toggle menu-mini
  const menuMini = document.getElementById('menu-mini');
  if (menuMini) {
    menuMini.classList.toggle('hidden');
  }




  // Ẩn/hiện tất cả các thẻ div `ngan-ao`
  doubleClickCount++;

  if (doubleClickTimeout) {
    clearTimeout(doubleClickTimeout);
  }

  doubleClickTimeout = setTimeout(() => {
    if (doubleClickCount === 2) {
      nganAoDivs.forEach(nganAoDiv => nganAoDiv.classList.toggle('hidden'));
    }

    doubleClickCount = 0;
  }, 1000); // 1 giây

  // Thay đổi link iframe
  tripleClickCount++;

  if (tripleClickTimeout) {
    clearTimeout(tripleClickTimeout);
  }

  tripleClickTimeout = setTimeout(() => {
    if (tripleClickCount === 3) {
      if (iframe.src === 'https://video.twimg.com/ext_tw_video/1793746588835151872/pu/vid/avc1/480x600/A5uk5GX1yeCzXXgA.mp4?tag=12') {
        iframe.src = 'hside/hside.html';
      } else {
        iframe.src = 'https://video.twimg.com/ext_tw_video/1793746588835151872/pu/vid/avc1/480x600/A5uk5GX1yeCzXXgA.mp4?tag=12';
      }
    }

    tripleClickCount = 0;
  }, 1000); // 1 giây
});




//mini-menu
const menu = document.getElementById("menu-mini");
const dragBar = document.getElementById("di-chuyen-menu");

let isDragging = false;
let offsetX = 0, offsetY = 0;

// --- Mouse ---
dragBar.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - menu.offsetLeft;
  offsetY = e.clientY - menu.offsetTop;
});

document.addEventListener("mouseup", () => { isDragging = false; });
document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    menu.style.left = e.clientX - offsetX + "px";
    menu.style.top = e.clientY - offsetY + "px";
  }
});

// --- Touch ---
dragBar.addEventListener("touchstart", (e) => {
  isDragging = true;
  const touch = e.touches[0];
  offsetX = touch.clientX - menu.offsetLeft;
  offsetY = touch.clientY - menu.offsetTop;
});

document.addEventListener("touchend", () => { isDragging = false; });
document.addEventListener("touchmove", (e) => {
  if (isDragging) {
    const touch = e.touches[0];
    menu.style.left = touch.clientX - offsetX + "px";
    menu.style.top = touch.clientY - offsetY + "px";
  }
});

// --- Outline toggle ---
const outlineCheckbox = document.getElementById("i-o_outline");
outlineCheckbox.addEventListener("change", () => {
  if (outlineCheckbox.checked) {
    document.querySelector("style[data-outline]")?.remove();
    const style = document.createElement("style");
    style.setAttribute("data-outline", "true");
    style.innerHTML = `* { outline: 1.5px dashed #FF69B4 !important; }`;
    document.head.appendChild(style);
  } else {
    document.querySelector("style[data-outline]")?.remove();
  }
});

// --- Dark / Light ---
document.getElementById("dark-light").addEventListener("click", () => {
  window.location.href = "./home.html";
});

// --- Reload ---
document.querySelector(".reload-trang").addEventListener("click", () => {
  location.reload();
});

// --- Logout ---
document.getElementById("exit-trang").addEventListener("click", () => {
  if (history.length > 1) {
    history.back();
  } else {
    window.close();
  }
});



// ===== Tiến độ load trang =====
document.onreadystatechange = () => {
  if (document.readyState === "loading") {
    document.getElementById("p-pt-l2").innerText = "0%";
  } else if (document.readyState === "interactive") {
    document.getElementById("p-pt-l2").innerText = "50%";
  } else if (document.readyState === "complete") {
    document.getElementById("p-pt-l2").innerText = "100%";
  }
};

// ===== Hàm format byte theo hệ nhị phân =====
function formatBytesDoweb(bytes) {   // thêm hậu tố Doweb
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

// ===== Hàm tính dung lượng trang =====
function calcPageSizeDoweb() {   // thêm hậu tố Doweb
  // Tính HTML text hiện tại
  const htmlBytesDoweb = new TextEncoder().encode(
    document.documentElement.outerHTML
  ).length;

  // Tính thêm resource transferSize
  const resourcesDoweb = performance.getEntriesByType("resource") || [];
  let resourceBytesDoweb = resourcesDoweb.reduce(
    (sum, r) => sum + (r.transferSize || 0),
    0
  );

  const totalDoweb = htmlBytesDoweb + resourceBytesDoweb;
  document.getElementById("p-sh-web2").innerText = formatBytesDoweb(totalDoweb);
}

// ===== Auto update =====
// Cập nhật khi trang load xong
window.addEventListener("load", () => {
  calcPageSizeDoweb();

  // Cập nhật định kỳ mỗi 2 giây
  setInterval(calcPageSizeDoweb, 2000);
});

// Cập nhật khi có resource mới được load (lazy load / async)
const observerDoweb = new PerformanceObserver(() => {
  calcPageSizeDoweb();
});
observerDoweb.observe({ entryTypes: ["resource"] });



// ==== Hàm đổi background theo độ rộng màn hình ====
function updateBackground() {
  let w = window.innerWidth;
  if (w >= 1024) {
    document.body.style.backgroundImage = "url(./image/background/Lal-1.jpg)";
  } else if (w >= 740) {
    document.body.style.backgroundImage = "url(./image/background/Lal-1.jpg)";
  } else {
    document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(./assets/cache/Hn1H.bin)"; //-aH-2 
  }
}

// ==== Tạo mã ngẫu nhiên 7 ký tự ====
function generateCodeOpt(len = 7) {
  const charsOpt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+√π!@#$%^&*";
  let codeOpt = "";
  for (let i = 0; i < len; i++) {
    codeOpt += charsOpt.charAt(Math.floor(Math.random() * charsOpt.length));
  }
  return codeOpt;
}


// ==== 1. Khởi tạo các phần tử DOM ====
const zOptOpt = document.getElementById("z-opt");
const inzOptOpt = document.getElementById("inz-opt");
const feedOpt = document.getElementById("cover-feed");
const pBqOpt = document.querySelector(".p-bq");
const vbBqOpt = document.querySelector(".vb-bq");
const imgElOpt = document.querySelector(".mui-ten-len img");
const ulBqOpt = document.querySelector(".ul-bq");
const autoListOpt = document.getElementById("sugr34_autocompleteList");

const videosOpt = document.querySelectorAll(".video");
const appHaiOpt = document.querySelectorAll(".apphai");
const otp1Elements = document.querySelectorAll(".otp1"); 
const otp2Elements = document.querySelectorAll(".otp2"); 

let clearTimerOpt;

// Đảm bảo mã OTP được hiển thị (Giả định hàm generateCodeOpt đã có sẵn)
let currentCodeOpt = (typeof generateCodeOpt === 'function') ? generateCodeOpt() : "";
if (zOptOpt) zOptOpt.textContent = currentCodeOpt;

// ==== 2. Hàm xử lý Logic chính (Cốt lõi của yêu cầu) ====
function applyOTPState() {
    const valOpt = inzOptOpt.value.trim();
    const isSecret = (valOpt === ".k.");
    const isCorrect = (valOpt === currentCodeOpt && currentCodeOpt !== "");

    if (isCorrect || isSecret) {
        // ---- TRẠNG THÁI ĐÚNG MÃ ----
        if (imgElOpt) imgElOpt.src = "./assets/Lcl1H.bin";
        
        feedOpt?.classList.remove("hidden");
        pBqOpt?.classList.remove("hidden");
        if (vbBqOpt) vbBqOpt.classList.add("hidden");

        // Cập nhật background nếu có hàm hỗ trợ
        if (typeof updateBackground === 'function') {
            updateBackground();
            window.addEventListener("resize", updateBackground);
        }

        if (ulBqOpt) ulBqOpt.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('./assets/cache/krH.bin')";

        // Xử lý ẩn/hiện danh sách
        videosOpt.forEach(v => v.classList.add("hidden"));
        appHaiOpt.forEach(el => el.style.display = "block");
        if (autoListOpt) autoListOpt.classList.remove("hidden");

        // 👉 QUYẾT ĐỊNH OTP: Đúng mã -> Hiện 1, Ẩn 2
        otp1Elements.forEach(el => el.classList.remove("hidden"));
        otp2Elements.forEach(el => el.classList.add("hidden"));

        // Lưu trạng thái vào Session
        if (isSecret) {
            sessionStorage.setItem("secretOpt", ".k.");
        } else {
            sessionStorage.setItem("inzCodeOpt", valOpt);
            sessionStorage.setItem("inzTimeOpt", Date.now().toString());
            resetTimer(15); // Reset sau 15 phút
        }
    } else {
        // ---- TRẠNG THÁI SAI MÃ / MẶC ĐỊNH ----
        if (imgElOpt) imgElOpt.src = "./image/Keera.jpg";

        feedOpt?.classList.add("hidden");
        pBqOpt?.classList.add("hidden");
        if (vbBqOpt) vbBqOpt.classList.remove("hidden");

        // Trả về nền mặc định
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url('./image/background/bh3.png')";
        if (ulBqOpt) ulBqOpt.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('./image/background/the_world_legacy.png')"; 

        videosOpt.forEach(v => v.classList.remove("hidden"));
        appHaiOpt.forEach(el => el.style.display = "none");
        if (autoListOpt) autoListOpt.classList.add("hidden");

        // 👉 QUYẾT ĐỊNH OTP: Sai/Chưa nhập -> Ẩn 1, Hiện 2
        otp1Elements.forEach(el => el.classList.add("hidden"));
        otp2Elements.forEach(el => el.classList.remove("hidden"));

        if (typeof updateBackground === 'function') {
            window.removeEventListener("resize", updateBackground);
        }

        if (valOpt !== ".k.") sessionStorage.removeItem("secretOpt");
    }
}

// ==== 3. Hỗ trợ Timer & Reset ====
function resetTimer(minutes) {
    clearTimeout(clearTimerOpt);
    clearTimerOpt = setTimeout(() => {
        inzOptOpt.value = "";
        sessionStorage.removeItem("inzCodeOpt");
        sessionStorage.removeItem("inzTimeOpt");
        applyOTPState();
    }, minutes * 60 * 1000);
}

function clearAt5AMOpt() {
    const now = new Date();
    let target = new Date();
    target.setHours(5, 0, 0, 0);
    if (now >= target) target.setDate(target.getDate() + 1);
    
    setTimeout(() => {
        if (inzOptOpt.value !== ".k.") {
            inzOptOpt.value = "";
            sessionStorage.clear();
            applyOTPState();
        }
        clearAt5AMOpt();
    }, target - now);
}

// ==== 4. Sự kiện Lắng nghe ====

// Khi người dùng nhập liệu
inzOptOpt.addEventListener("input", applyOTPState);

// Khi trang vừa load xong cấu trúc DOM
window.addEventListener("DOMContentLoaded", () => {
    const savedSecretOpt = sessionStorage.getItem("secretOpt");
    const savedOpt = sessionStorage.getItem("inzCodeOpt");
    const savedTimeOpt = sessionStorage.getItem("inzTimeOpt");

    // Khôi phục giá trị từ bộ nhớ trước khi "apply"
    if (savedSecretOpt === ".k.") {
        inzOptOpt.value = ".k.";
    } else if (savedOpt && savedTimeOpt) {
        if (Date.now() - Number(savedTimeOpt) < 15 * 60 * 1000) {
            inzOptOpt.value = savedOpt;
        } else {
            sessionStorage.removeItem("inzCodeOpt");
            sessionStorage.removeItem("inzTimeOpt");
        }
    }

    // 👉 Chạy kiểm tra ngay lập tức để ẩn/hiện otp1/otp2 đúng theo key
    applyOTPState();
    
    // Bắt đầu đếm ngược reset 5h sáng
    clearAt5AMOpt();
});

// Loại bỏ các thao tác ẩn hiện dư thừa ở sự kiện 'load' cũ để tránh xung đột
window.addEventListener("load", () => {
    // Chỉ giữ lại các hiệu ứng delay nhỏ không liên quan đến logic OTP nếu cần
    console.log("Interface stabilized for Princess Kirara.");
});


/*
// ==== Lấy các phần tử ====
const zOptOpt = document.getElementById("z-opt");
const inzOptOpt = document.getElementById("inz-opt");
const feedOpt = document.getElementById("cover-feed");
const pBqOpt = document.querySelector(".p-bq");
const vbBqOpt = document.querySelector(".vb-bq");
const imgElOpt = document.querySelector(".mui-ten-len img");
const ulBqOpt = document.querySelector(".ul-bq");
const autoListOpt = document.getElementById("sugr34_autocompleteList");

// 👉 Lấy danh sách nhiều phần tử
const videosOpt = document.querySelectorAll(".video");
const appHaiOpt = document.querySelectorAll(".apphai");
const otp1Elements = document.querySelectorAll(".otp1"); 
const otp2Elements = document.querySelectorAll(".otp2"); 

let currentCodeOpt = generateCodeOpt();
zOptOpt.textContent = currentCodeOpt;

let clearTimerOpt;

// ==== Xử lý nhập input ====
function handleInputOpt() {
  const valOpt = inzOptOpt.value.trim();

  if (valOpt === currentCodeOpt || valOpt === ".k.") {
    // ---- Đúng mã ----
    if (imgElOpt) imgElOpt.src = "./image/Lucilla_H.png";

    feedOpt.classList.remove("hidden");
    pBqOpt.classList.remove("hidden");
    if (vbBqOpt) vbBqOpt.classList.add("hidden");

    // 👉 Gọi updateBackground ngay khi đúng OTP
    updateBackground();

    // 👉 Bind event resize để nền thay đổi theo màn hình
    window.addEventListener("resize", updateBackground);

    if (ulBqOpt) ulBqOpt.style.backgroundImage = "url('./image/background/Keera-H.jpg')"; //anh-ngan-phu-H-2

    // 👉 Ẩn tất cả video
    videosOpt.forEach(v => v.classList.add("hidden"));
    // 👉 Hiện tất cả apphai
    appHaiOpt.forEach(el => el.style.display = "block");

    // 👉 Hiện autocompleteList
    if (autoListOpt) autoListOpt.classList.remove("hidden");

    // 👉 Hiện tất cả otp1, ẩn otp2
    otp1Elements.forEach(el => el.classList.remove("hidden"));
    otp2Elements.forEach(el => el.classList.add("hidden"));

    // Lưu vào sessionStorage
    if (valOpt === "k") {
      sessionStorage.setItem("secretOpt", "k");
    } else {
      sessionStorage.setItem("inzCodeOpt", valOpt);
      sessionStorage.setItem("inzTimeOpt", Date.now());
      clearTimeout(clearTimerOpt);
      clearTimerOpt = setTimeout(() => {
        inzOptOpt.value = "";
        sessionStorage.removeItem("inzCodeOpt");
        sessionStorage.removeItem("inzTimeOpt");
        console.log("⏰ Input đã xoá sau 15 phút");
      }, 15 * 60 * 1000);
    }

  } else {
    // ---- Sai mã ----
    if (imgElOpt) imgElOpt.src = "./image/Keera.jpg";

    feedOpt.classList.add("hidden");
    pBqOpt.classList.add("hidden");
    if (vbBqOpt) vbBqOpt.classList.remove("hidden");

    // 👉 Giữ nền mặc định
    document.body.style.backgroundImage = "url('./image/background/jbh.png')"; //anh-nen-1
    if (ulBqOpt) ulBqOpt.style.backgroundImage = "url('/Victorique.de.Blois.full.551392.jpg')"; //anh-ngan-phu-1 

    // 👉 Hiện lại tất cả video
    videosOpt.forEach(v => v.classList.remove("hidden"));
    // 👉 Ẩn tất cả apphai
    appHaiOpt.forEach(el => el.style.display = "none");

    // 👉 Ẩn autocompleteList
    if (autoListOpt) autoListOpt.classList.add("hidden");

    // 👉 Ẩn tất cả otp1, hiện otp2
    otp1Elements.forEach(el => el.classList.add("hidden"));
    otp2Elements.forEach(el => el.classList.remove("hidden"));

    // 👉 Gỡ event resize khi sai OTP
    window.removeEventListener("resize", updateBackground);

    // Nếu input bị xoá/ghi đè khác bí mật → xoá khỏi sessionStorage
    if (sessionStorage.getItem("secretOpt") === "k") {
      sessionStorage.removeItem("secretOpt");
    }
  }
}

inzOptOpt.addEventListener("input", handleInputOpt);

// ==== Load lại trang ====
window.addEventListener("DOMContentLoaded", () => {
  const savedSecretOpt = sessionStorage.getItem("secretOpt");
  const savedOpt = sessionStorage.getItem("inzCodeOpt");
  const savedTimeOpt = sessionStorage.getItem("inzTimeOpt");

  if (savedSecretOpt === "k") {
    inzOptOpt.value = savedSecretOpt;
    handleInputOpt();
  } else if (savedOpt) {
    if (savedTimeOpt && Date.now() - Number(savedTimeOpt) < 15 * 60 * 1000) {
      inzOptOpt.value = savedOpt;
      handleInputOpt();
    } else {
      sessionStorage.removeItem("inzCodeOpt");
      sessionStorage.removeItem("inzTimeOpt");
    }
  }
});

// ==== Xoá input lúc 5h sáng hàng ngày ====
function clearAt5AMOpt() {
  const nowOpt = new Date();
  let targetOpt = new Date();
  targetOpt.setHours(5, 0, 0, 0);

  if (nowOpt >= targetOpt) targetOpt.setDate(targetOpt.getDate() + 1);

  const msOpt = targetOpt - nowOpt;

  setTimeout(() => {
    if (inzOptOpt.value !== "k") {
      inzOptOpt.value = "";
      sessionStorage.removeItem("inzCodeOpt");
      sessionStorage.removeItem("inzTimeOpt");
      console.log("🌅 Input đã xoá lúc 5h sáng");
    }
    clearAt5AMOpt(); // lặp lại
  }, msOpt);
}
clearAt5AMOpt();

// ==== Delay 0.5s đổi background mặc định + ẩn autoListOpt ====
window.addEventListener("load", () => {
  setTimeout(() => {
    // Đổi nền cho body (mặc định Bh1)
    
  //  document.body.style.backgroundImage = "url('./image/background/Bh1.png')"; //Thay ma
    
*/

    // Đổi nền cho ulBqOpt (nếu tồn tại)
  /*  if (ulBqOpt) {
      ulBqOpt.style.backgroundImage = "url('/sdcard/Download/Victorique.de.Blois.full.551392.jpg')"; //anh-ngan-phu-1
    } */

    // Ẩn danh sách autocomplete bằng class hidden
/*    if (autoListOpt) {
      autoListOpt.classList.add("hidden");
    }

    // 👉 Ẩn mặc định tất cả otp1 khi mới load
    otp1Elements.forEach(el => el.classList.add("hidden"));
  }, 20 );
});

*/


// ==== Tạo mã ngẫu nhiên 7 ký tự ====
/* function generateCodeOpt(len = 7) {
  const charsOpt = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+√π!@#$%^&*";
  let codeOpt = "";
  for (let i = 0; i < len; i++) {
    codeOpt += charsOpt.charAt(Math.floor(Math.random() * charsOpt.length));
  }
  return codeOpt;
}

// ==== Lấy các phần tử ====
const zOptOpt = document.getElementById("z-opt");
const inzOptOpt = document.getElementById("inz-opt");
const feedOpt = document.getElementById("cover-feed");
const pBqOpt = document.querySelector(".p-bq");
const vbBqOpt = document.querySelector(".vb-bq");
const imgElOpt = document.querySelector(".mui-ten-len img");
const ulBqOpt = document.querySelector(".ul-bq");
const autoListOpt = document.getElementById("sugr34_autocompleteList");

// 👉 Lấy danh sách nhiều phần tử
const videosOpt = document.querySelectorAll(".video");
const appHaiOpt = document.querySelectorAll(".apphai");
const otp1Elements = document.querySelectorAll(".otp1"); // 👉 thêm mới
const otp2Elements = document.querySelectorAll(".otp2"); // 👉 thêm mới

let currentCodeOpt = generateCodeOpt();
zOptOpt.textContent = currentCodeOpt;

let clearTimerOpt;

// ==== Xử lý nhập input ====
function handleInputOpt() {
  const valOpt = inzOptOpt.value.trim();

  if (valOpt === currentCodeOpt || valOpt === "5") {
    // ---- Đúng mã ----
    if (imgElOpt) imgElOpt.src = "./image/Lucilla_H.png";

    feedOpt.classList.remove("hidden");
    pBqOpt.classList.remove("hidden");
    if (vbBqOpt) vbBqOpt.classList.add("hidden");

    document.body.style.backgroundImage = "url('./image/background/Hina-1nH.png')";
    if (ulBqOpt) ulBqOpt.style.backgroundImage = "url('./image/background/Keera-H.jpg')";

    // 👉 Ẩn tất cả video
    videosOpt.forEach(v => v.classList.add("hidden"));
    // 👉 Hiện tất cả apphai
    appHaiOpt.forEach(el => el.style.display = "block");

    // 👉 Hiện autocompleteList
    if (autoListOpt) autoListOpt.classList.remove("hidden");

    // 👉 Hiện tất cả otp1
    otp1Elements.forEach(el => el.classList.remove("hidden"));
otp2Elements.forEach(el => el.classList.add("hidden"));

    // Lưu vào sessionStorage
    if (valOpt === "5") {
      sessionStorage.setItem("secretOpt", "5");
    } else {
      sessionStorage.setItem("inzCodeOpt", valOpt);
      sessionStorage.setItem("inzTimeOpt", Date.now());
      clearTimeout(clearTimerOpt);
      clearTimerOpt = setTimeout(() => {
        inzOptOpt.value = "";
        sessionStorage.removeItem("inzCodeOpt");
        sessionStorage.removeItem("inzTimeOpt");
        console.log("⏰ Input đã xoá sau 15 phút");
      }, 15 * 60 * 1000);
    }

  } else {
    // ---- Sai mã ----
    if (imgElOpt) imgElOpt.src = "./image/Keera.jpg";

    feedOpt.classList.add("hidden");
    pBqOpt.classList.add("hidden");
    if (vbBqOpt) vbBqOpt.classList.remove("hidden");

    document.body.style.backgroundImage = "url('./image/background/Bh1.png')";
    if (ulBqOpt) ulBqOpt.style.backgroundImage = "url('/sdcard/Download/556644022_1132199385784881_8679384712883206658_n.jpg')";

    // 👉 Hiện lại tất cả video
    videosOpt.forEach(v => v.classList.remove("hidden"));
    // 👉 Ẩn tất cả apphai
    appHaiOpt.forEach(el => el.style.display = "none");

    // 👉 Ẩn autocompleteList
    if (autoListOpt) autoListOpt.classList.add("hidden");

    // 👉 Ẩn tất cả otp1
    otp1Elements.forEach(el => el.classList.add("hidden"));
    otp2Elements.forEach(el => el.classList.remove("hidden"));


    // Nếu input bị xoá/ghi đè khác bí mật → xoá khỏi sessionStorage
    if (sessionStorage.getItem("secretOpt") === "5") {
      sessionStorage.removeItem("secretOpt");
    }
  }
}

inzOptOpt.addEventListener("input", handleInputOpt);

// ==== Load lại trang ====
window.addEventListener("DOMContentLoaded", () => {
  const savedSecretOpt = sessionStorage.getItem("secretOpt");
  const savedOpt = sessionStorage.getItem("inzCodeOpt");
  const savedTimeOpt = sessionStorage.getItem("inzTimeOpt");

  if (savedSecretOpt === "5") {
    inzOptOpt.value = savedSecretOpt;
    handleInputOpt();
  } else if (savedOpt) {
    if (savedTimeOpt && Date.now() - Number(savedTimeOpt) < 15 * 60 * 1000) {
      inzOptOpt.value = savedOpt;
      handleInputOpt();
    } else {
      sessionStorage.removeItem("inzCodeOpt");
      sessionStorage.removeItem("inzTimeOpt");
    }
  }
});

// ==== Xoá input lúc 5h sáng hàng ngày ====
function clearAt5AMOpt() {
  const nowOpt = new Date();
  let targetOpt = new Date();
  targetOpt.setHours(5, 0, 0, 0);

  if (nowOpt >= targetOpt) targetOpt.setDate(targetOpt.getDate() + 1);

  const msOpt = targetOpt - nowOpt;

  setTimeout(() => {
    if (inzOptOpt.value !== "5") {
      inzOptOpt.value = "";
      sessionStorage.removeItem("inzCodeOpt");
      sessionStorage.removeItem("inzTimeOpt");
      console.log("🌅 Input đã xoá lúc 5h sáng");
    }
    clearAt5AMOpt(); // lặp lại
  }, msOpt);
}
clearAt5AMOpt();

// ==== Delay 0.5s đổi background mặc định + ẩn autoListOpt ====
window.addEventListener("load", () => {
  setTimeout(() => {
    // Đổi nền cho body
    document.body.style.backgroundImage = "url('./image/background/Bh1.png')";
    
    // Đổi nền cho ulBqOpt (nếu tồn tại)
    if (ulBqOpt) {
      ulBqOpt.style.backgroundImage = "url('/sdcard/Download/556644022_1132199385784881_8679384712883206658_n.jpg')";
    }

    // Ẩn danh sách autocomplete bằng class hidden
    if (autoListOpt) {
      autoListOpt.classList.add("hidden");
    }

    // 👉 Ẩn mặc định tất cả otp1 khi mới load
    otp1Elements.forEach(el => el.classList.add("hidden"));
  }, );
});
*/


//Tu_dong_dien
// Khai báo mảng chứa các class mục tiêu với hậu tố theo ý muốn của nàng
const targetClasses_Tu_dong_dien = ['dtt1', 'dtt2', 'dtt3', 'dtt4', 'dtt5'];

// Hàm khởi tạo sự kiện đồng bộ hóa toàn cục
const initializeSync_Tu_dong_dien = () => {
    targetClasses_Tu_dong_dien.forEach(className => {
        const inputs = document.querySelectorAll(`.${className}`);

        inputs.forEach(input => {
            input.addEventListener('input', (event) => {
                const newValue = event.target.value;
                
                // Đồng bộ hóa giá trị cho tất cả các input cùng class
                inputs.forEach(targetInput => {
                    targetInput.value = newValue;
                });
            });
        });
    });
};

// Kích hoạt quyền năng đồng bộ
initializeSync_Tu_dong_dien();
