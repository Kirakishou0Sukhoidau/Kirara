//cam-chup-mh:
document.addEventListener('keydown', function(event) {
  // Kiểm tra phím Print Screen (PrtScn)
  if (event.keyCode === 44) {
    // Ngăn chặn hành động mặc định
    event.preventDefault();

    // Hiển thị thông báo cho người dùng
    alert('Chụp màn hình không được phép!');
  }
});

//hieu-ung-click
    const trailElements = [];
    const maxTrail = 60; // số lượng tối đa các phần tử trail

    function createTrail(x, y) {
        const trail = document.createElement('div');
        trail.classList.add('trail');

        // Căn chỉnh vị trí và kích thước của phần tử trail
        trail.style.width = `${50 - (trailElements.length * -0.1)}px`; // Giảm kích thước phần đuôi
        trail.style.height = `${50 - (trailElements.length * -0.1)}px`; // Giảm kích thước phần đuôi
        trail.style.left = `${x - (50 - (trailElements.length * 0.5)) / 2}px`; // Căn giữa theo con trỏ
        trail.style.top = `${y - (50 - (trailElements.length * 0.5)) / 2}px`;

        document.body.appendChild(trail);
        trailElements.push(trail);

        // Xóa phần tử trail sau khi hoạt ảnh kết thúc
        setTimeout(() => {
            trail.remove();
            trailElements.shift(); // loại bỏ phần tử cũ khỏi mảng
        }, 1500);

        // Giới hạn số lượng trail
        if (trailElements.length > maxTrail) {
            trailElements[0].remove();
            trailElements.shift();
        }
    }

    // Xử lý sự kiện cho chuột
    document.addEventListener('mousemove', (event) => {
        createTrail(event.pageX, event.pageY);
    });

    // Xử lý sự kiện cho màn hình cảm ứng
 document.addEventListener('touchmove', (event) => {
    const touch = event.touches[0];
    // Tạo hiệu ứng trail mà không ngăn cuộn
    createTrail(touch.pageX, touch.pageY);
});



//toan-man-hinh
const fullScreenButton1 = document.getElementById('thu-phong');
const fullScreenButton2 = document.getElementById("dongy"); // Thêm nút thứ hai

// Hàm để chuyển đổi giữa chế độ toàn màn hình và chế độ bình thường
const toggleFullScreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
};

// Gán sự kiện click cho cả hai nút
fullScreenButton1.addEventListener('click', toggleFullScreen);
fullScreenButton2.addEventListener('click', toggleFullScreen);



//ngan-quay-lai
/*window.addEventListener('beforeunload', function(event) {
  event.preventDefault();
  event.returnValue = '';
});*/


//thay-anh
const load = document.getElementById("load");
const loadi = document.getElementById("tong-load");
//const recapccc = document.querySelector(".rcapc");
  const lood = document.getElementById("loadi");



const divWrapper = document.getElementById("wrapper");

const AnHien = document.querySelector(".an-hien");
const body = document.querySelector("body");

AnHien.addEventListener("click", function() {
  divWrapper.classList.toggle("hidden");
  if (divWrapper.classList.contains("hidden")) {
    // Khi ẩn
    AnHien.textContent = "Kirakishou";
    divWrapper.style.backgroundColor = "transparent";
      loadi.style.display = "none";
      AnHien.style.color = "black";
  } else {
    // Khi hiện
    AnHien.textContent = "©2024, Kirakishou";
      AnHien.style.color = "white";
    divWrapper.style.backgroundColor = "";
      lood.style.display = "none";
      loadi.style.display = "none";
   //   recapccc.style.display = "none"; 
  }
});


let isHidden = true;

/*window.addEventListener("resize", function() {
  updateBackground();
});*/

AnHien.addEventListener("click", function() {
  if (isHidden) {
    // Show background image based on screen width
      window.addEventListener("resize", function() {
  updateBackground();
});
    updateBackground();
    // Hide loading elements
    load.style.display = "none";
    loadi.style.display = "none";
    lood.style.display = "none";
    isHidden = false;
  } else {
          body.style.backgroundImage = "none";
    body.style.backgroundColor = "black";
          load.style.display = "block";
      loadi.style.display = "block";
      lood.style.display = "none";
    isHidden = true;
  }
});

function updateBackground() {
  if (window.innerWidth >= 1024) {
    body.style.backgroundImage = "url(../image/bg2nmp2.webp)";
  } else if (screen.width >= 740) {
    body.style.backgroundImage = "url(../image/bg2nmp2.webp)";
  } else if (screen.width < 740) {
    body.style.backgroundImage = "url(../image/img-HinaHdt.webp)";
  } else {
    body.style.backgroundColor = "black";
  }
};



/*let isHidden = true;

AnHien.addEventListener("click", function() {
  if (isHidden) {
    // Hiển thị background image
    body.style.backgroundImage = "url(../image/fairy1.webp)";
      load.style.display = "none";
      loadi.style.display = "none";
      lood.style.display = "none";
    isHidden = false;
  } else {
    // Ẩn background image và đổi màu nền đen
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "black";
          load.style.display = "block";
      loadi.style.display = "block";
      lood.style.display = "none";
    isHidden = true;
  }
});*/



//load

//xoa-chu-input
const resettkButton = document.querySelector(".reset");

resettkButton.addEventListener("click", function(event) {
  event.preventDefault(); // Ngăn hành vi mặc định
  const inputrsElementtk = document.querySelector(".search input");
  inputrsElementtk.value = "";
});


const resettkButton2 = document.querySelector(".reset2");

resettkButton2.addEventListener("click", function(event) {
  event.preventDefault(); // Ngăn hành vi mặc định  const inputrsElementtk2 = document.querySelector("#form-quet #input-quet");
      const inputrsElementtk2 = document.querySelector(".search2 input");
  inputrsElementtk2.value = "";
});



//chu-chay
const spans = document.querySelectorAll(".chu-chay span");

for (let i = 0; i < spans.length; i++) {
  spans[i].style.animationDelay = `${i * 0.5}s`;
}



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




//bang thong bao
//    alert ("Xin chào tiểu thư Kirakishou")
/* var thongbao = document.getElementById("thongbao");
        var backdrop = document.getElementById("backdrop");
        var dongy = document.getElementById("dongy");
        var khongdongy = document.getElementById("khongdongy");
        
        dongy.onclick = function() {
        document.cookie = "dongy=true"; //;expires= Mon, 01 Dec 2025 12:00:00 GMT
            thongbao.style.display = "none"; 
            backdrop.style.display = "none"; 
                    };
        
        khongdongy.onclick = function() {
            
     document.write ("Hỏi chấm?????");

     // window.close();
        };
      // Kiểm tra xem người dùng đã đồng ý hay chưa
        var cookieDongy = document.cookie.split(';').find(function(row) {
            return row.startsWith('dongy=');
        });
        if (cookieDongy) {
            thongbao.style.display = "none"; // Ẩn bảng thông báo
            backdrop.style.display = "none"; // Ẩn lớp nền mờ
            // Cho phép người dùng truy cập trang web
        } else {
            backdrop.style.display = "block"; // Hiển thị lớp nền mờ
        };
*/

var thongbao = document.getElementById("thongbao");
var backdrop = document.getElementById("backdrop");
var dongy = document.getElementById("dongy");
var khongdongy = document.getElementById("khongdongy");

dongy.onclick = function () {
    var expires = new Date();
    expires.setFullYear(2026); // Gia hạn đến năm 2026
    document.cookie = "dongy=true; expires=" + expires.toUTCString() + "; path=/";
    
    thongbao.style.display = "none";
    backdrop.style.display = "none";
    document.body.classList.remove("modal-open"); // Bỏ chặn cuộn
};

khongdongy.onclick = function () {
    document.write("Hỏi chấm?????");
};

// Kiểm tra cookie
var cookieDongy = document.cookie.split('; ').find(row => row.startsWith('dongy='));
if (cookieDongy) {
    thongbao.style.display = "none";
    backdrop.style.display = "none";
} else {
    backdrop.style.display = "block";
    document.body.classList.add("modal-open"); // Chặn cuộn khi modal hiển thị
};



//doi-bg:

const doiBgElement = document.getElementById("doi-bg");
const hienBgElement = document.getElementById("hien-bg");
let bgState = "default"; // "default" hoặc "changed"

doiBgElement.addEventListener("click", function() {
  if (bgState === "default") {
    // Ẩn background của div "Đổi bg"
    this.style.backgroundImage = "none";
    
    // Hiển thị div "Hiện bg"
    hienBgElement.style.display = "block";
    
    // Cập nhật trạng thái background
    bgState = "changed";
  } else {
    // Hiển thị lại background ban đầu của div "Đổi bg"
    this.style.backgroundImage = ""; // Thay đổi giá trị này cho phù hợp với background ban đầu
    
    // Ẩn div "Hiện bg"
    hienBgElement.style.display = "none";
    
    // Cập nhật trạng thái background
    bgState = "default";
  }
});


//time
function hienThiNgayThangNam() {
  const now = new Date();
  const thu = now.getDay();
   const ngay = now.getDate().toString().padStart(2, '0');
  const thang = now.getMonth() + 1;
  const nam = now.getFullYear();

  const tenThu = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"][thu];
  const tenThang = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"][thang - 1];

  const ngayThangNam = `${tenThu}, Ngày ${ngay} tháng ${tenThang} năm ${nam}`;
  document.getElementById("ngay").innerHTML = ngayThangNam;
}


function hienThiGioPhutGiay() {
  const now = new Date();
  const gio = now.getHours();
  const phut = now.getMinutes();
  const giay = now.getSeconds();

  const gioPhutGiay = `${gio < 10 ? `0${gio}` : gio}:${phut < 10 ? `0${phut}` : phut}:${giay < 10 ? `0${giay}` : giay}`;
  document.getElementById("gio").innerHTML = gioPhutGiay;
}

setInterval(hienThiNgayThangNam, 1000);
setInterval(hienThiGioPhutGiay, 1000);



//doi-4mat
const switchButton = document.getElementById('switch-pass');
const inputs = document.querySelectorAll('input');
const nganAoDivs = document.querySelectorAll('.ngan-ao'); // Lấy tất cả các thẻ
const iframe = document.querySelector('.vo');

let isPassword = false;
let doubleClickCount = 0;
let doubleClickTimeout = null;
let tripleClickCount = 0;
let tripleClickTimeout = null;

switchButton.addEventListener('click', () => {
  // Chuyển đổi type text thành pass và ngược lại
  if (isPassword) {
    inputs.forEach(input => input.type = 'text');
  } else {
    inputs.forEach(input => input.type = 'password');
  }
  isPassword = !isPassword;

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
        iframe.src = '../hside/hside.html';
      } else {
        iframe.src = 'https://video.twimg.com/ext_tw_video/1793746588835151872/pu/vid/avc1/480x600/A5uk5GX1yeCzXXgA.mp4?tag=12';
      }
    }

    tripleClickCount = 0;
  }, 1000); // 1 giây
});




//copy-box
const copyBox = document.getElementById('copy-box'); // Lấy phần tử p có id "copy-box"
const copyButton = document.getElementById('copy_box'); // Lấy phần tử button có id "copy_box"

copyButton.addEventListener('click', function() {
  // Lấy văn bản trong thẻ p
  const textToCopy = copyBox.textContent;

  // Sử dụng Clipboard API để copy văn bản
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      // Hiển thị thông báo thành công
      alert('Đã copy thành công!');
    })
    .catch(error => {
      // Hiển thị thông báo lỗi
      console.error('Lỗi khi copy văn bản:', error);
    });
});




//back-to-top
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});




 //ip
   const ipEl = document.getElementById("ip");
const ispEl = document.getElementById("isp");
const countryEl = document.getElementById("country");
const cityEl = document.getElementById("city");
const latitudeEl = document.getElementById("latitude");
const longitudeEl = document.getElementById("longitude");
const timezoneEl = document.getElementById("timezone");

// Lấy thông tin IP
fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
        ipEl.textContent = `Địa chỉ IP: ${data.ip}`;
        return fetch(`https://ipinfo.io/${data.ip}/json`);
    })
    .then((response) => response.json())
    .then((data) => {
        ispEl.textContent = `Nhà cung cấp: ${data.isp}`;
        countryEl.textContent = `Quốc gia: ${data.country}`;
        cityEl.textContent = `Thành phố: ${data.city}`;
        latitudeEl.textContent = `Vĩ độ: ${data.latitude}`;
        longitudeEl.textContent = `Kinh độ: ${data.longitude}`;
        timezoneEl.textContent = `Múi giờ: ${data.timezone}`;
    });


  const checkip = document.querySelector('#ipc');
const muiTenXuong = document.querySelector('.mui-ten-xuong');

muiTenXuong.addEventListener('click', () => {
  checkip.classList.toggle('hidden');
});


//tool
const toggleButtons = document.querySelectorAll("[id^=toggle-tools]");
const toolsContainers = document.querySelectorAll("[id^=tools]");
const toggleDeltaButton = document.getElementById("toggle-delta");

let isMultiSelectionEnabled = false; // Flag to track multi-selection state

toggleDeltaButton.addEventListener("click", () => {
  isMultiSelectionEnabled = !isMultiSelectionEnabled;
  toggleDeltaButton.textContent = isMultiSelectionEnabled ? "╳" : "∆";
});

toggleButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const currentTools = toolsContainers[index];

        if (button.textContent === "✕") {
      currentTools.style.display = "none";
      button.textContent = "☰";
      return; // Exit this click handler to prevent further actions
    }

    if (isMultiSelectionEnabled) {
            currentTools.style.display = currentTools.style.display === "none" ? "block" : "none";
      button.textContent = currentTools.style.display === "block" ? "✕" : "☰";
    } else {
      // Multi-selection disabled, close all others, open clicked one
      toolsContainers.forEach((container) => {
        container.style.display = "none";
      });
      currentTools.style.display = currentTools.style.display === "none" ? "block" : "none";
      toggleButtons.forEach((otherButton) => {
        otherButton.textContent = "☰";
      });
      button.textContent = currentTools.style.display === "block" ? "✕" : "☰";
    }
  });
});

// Hiển thị/ẩn mục phụ khi click vào h4
const headings = document.querySelectorAll("h4");

headings.forEach(heading => {
  heading.addEventListener("click", function() {
    const content = this.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});



const buttonsbtt = document.querySelectorAll('#toolg button');

setInterval(() => {
  buttonsbtt.forEach(button => {
    const buttonText = button.textContent;
    if (buttonText === '✕') {
      button.classList.add('bo-tron-toolg');
    } else {
      button.classList.remove('bo-tron-toolg');
    }
  });
}, ); // Thay đổi giá trị trong bằng thời gian kiểm tra mong muốn (tính bằng mili giây)


//Ngan-phu
const ulBq = document.querySelector('.ul-bq');
const muiTenLen = document.querySelector('.mui-ten-len');
const modalBg = document.querySelector('.modal-bg');

muiTenLen.addEventListener('click', () => {
    ulBq.classList.toggle('hidden');

    if (!ulBq.classList.contains('hidden')) {
        modalBg.style.display = 'block'; // Hiện modal background
        document.body.classList.add('no-scroll'); // Chặn cuộn trang chính
    } else {
        modalBg.style.display = 'none'; // Ẩn modal background
        document.body.classList.remove('no-scroll'); // Cho phép cuộn lại
    }
});

// Ẩn menu khi bấm vào modal background
modalBg.addEventListener('click', () => {
    ulBq.classList.add('hidden');
    modalBg.style.display = 'none';
    document.body.classList.remove('no-scroll');
});



//log-web
//media

// 📂 mediaGithub
let repoOwner = "Kirakishou0sukhoidau"; // Tên GitHub của quý cô
let repoName = "Kirara";  // Tên repository

let contentContainer = document.getElementById("trinh-xem");

// Hàm lấy nội dung từ GitHub API
async function fetchContentGithub() {
    contentContainer.innerHTML = ""; // Xóa nội dung cũ trước khi cập nhật
    let selectedType = document.querySelector('input[name="type"]:checked').value + "Github"; // Thêm hậu tố Github

    let apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/git/trees/main?recursive=1`;

    try {
        let response = await fetch(apiUrl);
        let data = await response.json();

        data.tree.forEach(file => {
            let fileTypeGithub = "";
            if (file.path.match(/\.(jpg|png|gif|jpeg|webp)$/)) fileTypeGithub = "imageGithub";
            if (file.path.match(/\.(mp4|webm|ogg)$/)) fileTypeGithub = "videoGithub";
            if (file.path.match(/\.(mp3|wav|ogg)$/)) fileTypeGithub = "audioGithub"; // Bổ sung kiểm tra audio

            // So sánh chính xác với hậu tố Github
            if (selectedType === "allGithub" || selectedType === fileTypeGithub) {
                let fileUrl = `https://raw.githubusercontent.com/${repoOwner}/${repoName}/main/${file.path}`;

                // Tạo link để mở tab mới
                let linkGithub = document.createElement("a");
                linkGithub.href = fileUrl;
                linkGithub.target = "_blank";
                linkGithub.title = file.path;

                if (fileTypeGithub === "imageGithub") {
                    let imgGithub = document.createElement("img");
                    imgGithub.src = fileUrl;
                    imgGithub.title = file.path;
                    linkGithub.appendChild(imgGithub);
                } else if (fileTypeGithub === "videoGithub") {
                    let videoGithub = document.createElement("video");
                    videoGithub.src = fileUrl;
                    videoGithub.controls = true;
                    videoGithub.title = file.path;
                    linkGithub.appendChild(videoGithub);
                } else if (fileTypeGithub === "audioGithub") {
                    let audioGithub = document.createElement("audio");
                    audioGithub.src = fileUrl;
                    audioGithub.controls = true;
                    audioGithub.title = file.path;
                    linkGithub.appendChild(audioGithub);
                }

                contentContainer.appendChild(linkGithub);
            }
        });
    } catch (error) {
        console.error("⚠️ Lỗi tải dữ liệu từ repository:", error);
    }
}

// Tải nội dung ban đầu
fetchContentGithub();

// Lắng nghe sự kiện thay đổi radio
document.querySelectorAll('input[name="type"]').forEach(radio => {
    radio.addEventListener("change", fetchContentGithub);
});



//ban-va

// 📂 logGithub
let allCommitsGithub = [];
let currentPageGithub = 1;
const commitsPerPageGithub = 10;

async function fetchAllCommitsGithub(owner, repo) {
    let pageGithub = 1;
    let commitsGithub = [];
    let hasMoreCommitsGithub = true;

    while (hasMoreCommitsGithub) {
        const url = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=100&page=${pageGithub}`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.length > 0) {
                commitsGithub = commitsGithub.concat(data);
                pageGithub++;
            } else {
                hasMoreCommitsGithub = false;
            }
        } catch (error) {
            console.error("⚠️ Lỗi tải commit:", error);
            hasMoreCommitsGithub = false;
        }
    }
    return commitsGithub;
}

async function loadGitHubCommitsLog() {
    const owner = "Kirakishou0sukhoidau"; // GitHub username
    const repo = "Kirara"; // Tên repository
    const logList = document.getElementById("log-list");
    const authorFilter = document.getElementById("authorFilter");

    allCommitsGithub = await fetchAllCommitsGithub(owner, repo);

    const authorsGithub = new Set();
    allCommitsGithub.forEach(commit => authorsGithub.add(commit.commit.author.name));

    authorsGithub.forEach(author => {
        const optionGithub = document.createElement("option");
        optionGithub.value = author;
        optionGithub.textContent = author;
        authorFilter.appendChild(optionGithub);
    });

    filterCommitsGithub();
}

function filterCommitsGithub() {
    const searchKeyword = document.getElementById("searchInput").value.toLowerCase();
    const selectedAuthor = document.getElementById("authorFilter").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const sortOrder = document.getElementById("sortOrder").value;
    const logList = document.getElementById("log-list");

    let filteredCommitsGithub = allCommitsGithub.filter(commit => {
        const author = commit.commit.author.name;
        const message = commit.commit.message.toLowerCase();
        const date = commit.commit.author.date;

        return (
            (searchKeyword === "" || message.includes(searchKeyword)) &&
            (selectedAuthor === "" || author === selectedAuthor) &&
            (startDate === "" || new Date(date) >= new Date(startDate)) &&
            (endDate === "" || new Date(date) <= new Date(endDate))
        );
    });

    if (sortOrder === "oldest") {
        filteredCommitsGithub.reverse();
    }

    allFilteredCommitsGithub = filteredCommitsGithub;
    currentPageGithub = 1;
    renderCommitsGithub();
}

function renderCommitsGithub() {
    const logList = document.getElementById("log-list");
    logList.innerHTML = "";

    const startGithub = (currentPageGithub - 1) * commitsPerPageGithub;
    const endGithub = startGithub + commitsPerPageGithub;

    allFilteredCommitsGithub.slice(startGithub, endGithub).forEach(commit => {
        const liGithub = document.createElement("li");
        liGithub.classList.add("commit-item");
        liGithub.innerHTML = `<strong>${commit.commit.author.name}</strong> (${commit.commit.author.date}): 
        ${commit.commit.message.replace(/(fix|bug|update|error)/gi, '<span class="highlight">$1</span>')}`;
        liGithub.onclick = () => window.open(commit.html_url, "_blank");
        logList.appendChild(liGithub);
    });

    updatePaginationButtonsGithub();
}

function updatePaginationButtonsGithub() {
    document.getElementById("prevPage").disabled = currentPageGithub === 1;
    document.getElementById("nextPage").disabled = currentPageGithub * commitsPerPageGithub >= allFilteredCommitsGithub.length;
    document.getElementById("pageInfo").textContent = `${currentPageGithub}/${Math.ceil(allFilteredCommitsGithub.length / commitsPerPageGithub)}`;
}

function changePageGithub(offset) {
    currentPageGithub += offset;
    renderCommitsGithub();
}

// Khởi chạy
loadGitHubCommitsLog();




//tool-va-feeds
document.addEventListener("DOMContentLoaded", function () {
    let tools2 = document.getElementById("tools2");
    let tools3 = document.getElementById("tools3");
    let appAndroid = document.getElementById("app-android");

    function toggleHiddenClass() {
        let isTools2Visible = tools2 && window.getComputedStyle(tools2).display === "block";
        let isTools3Visible = tools3 && window.getComputedStyle(tools3).display === "block";

        if (isTools2Visible || isTools3Visible) {
            appAndroid.classList.add("hidden");
        } else {
            appAndroid.classList.remove("hidden");
        }
    }

    // Gọi hàm ngay khi tải trang
    toggleHiddenClass();

    // Dùng MutationObserver để phát hiện thay đổi `display`
    const observer = new MutationObserver(toggleHiddenClass);
    observer.observe(tools2, { attributes: true, attributeFilter: ["style"] });
    observer.observe(tools3, { attributes: true, attributeFilter: ["style"] });

    // Nếu cần vẫn có thể dùng resize, nhưng tránh lạm dụng
    window.addEventListener("resize", toggleHiddenClass);
});




/*
const ulBq = document.querySelector('.ul-bq');
const muiTenLen = document.querySelector('.mui-ten-len');

muiTenLen.addEventListener('click', () => {
  ulBq.classList.toggle('hidden');
});


const thembordermtl = document.querySelector('.mui-ten-len');
let hasBorder = false;

thembordermtl.addEventListener('click', function() {
  if (hasBorder) {
    thembordermtl.style.border = 'none';
    hasBorder = false;
  } else {
    thembordermtl.style.border = '0.4375em solid black';
    hasBorder = true;
  }
});
*/




//url
const inputURL = document.getElementById('input-link');
const searchEngineLinkSelect = document.getElementById('search-engine-link');
const submitButton = document.getElementById('button-link');

// Lắng nghe sự kiện thay đổi trên thẻ select
searchEngineLinkSelect.addEventListener('change', function(event) {
  const selectedOptionValue = event.target.value;
  const currentURL = inputURL.value;
const newURL = selectedOptionValue + currentURL.replace(/^[a-z]+:\/[^\/]*\/?/, '');
inputURL.value = newURL;
});

// Lắng nghe sự kiện click trên nút "Go!"
submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // Phá vỡ hành vi mặc định của nút submit

  const urlss = inputURL.value;
  if (urlss) {
    // Sử dụng window.location.href để mở URL trong tab/cửa sổ mới
    window.location.href = urlss;
  } else {
    alert('Vui lòng nhập đường dẫn!');
  }
});

/*
const hienBgt = document.getElementById('hien-chu');

hienBgt.addEventListener('click', function() {
  const textDiv = this.closest('.ul-bq'); // Tìm div #text gần nhất
  textDiv.querySelector('p').style.display = 'none'; // Ẩn thẻ p trong #text
});*/



//suggest-input
       const searchInputsugGg = document.getElementById("input-search");
        const suggestionsGgBox = document.getElementById("suggestions-gg");

        searchInputsugGg.addEventListener("input", async () => {
            const queryinputsug = searchInputsugGg.value.trim();
            if (queryinputsug.length === 0) {
                suggestionsGgBox.innerHTML = "";
                return;
            }

            const responsesuggg = await fetch(`https://suggestqueries.google.com/complete/search?client=chrome&q=${queryinputsug}`);
            const datasuggg = await responsesuggg.json();
            const suggestionsGg = datasuggg[1];

            suggestionsGgBox.innerHTML = suggestionsGg.map(s => 
                `<div class="suggestion-gg-item">${s}</div>`
            ).join("");

            document.querySelectorAll(".suggestion-gg-item").forEach(item => {
                item.addEventListener("click", () => {
                    searchInputsugGg.value = item.textContent;
                    suggestionsGgBox.innerHTML = "";
                });
            });
        });

        document.addEventListener("click", (e) => {
            if (!searchInputsugGg.contains(e.target)) {
                suggestionsGgBox.innerHTML = "";
            }
        });




//video
const viideo = document.querySelector('.video');
const muiTenCheo = document.querySelector('.mui-ten-cheo');
const anvi = document.querySelector('.ul-bq .p-bq');


viideo.addEventListener('change', () => {
  if (viideo.classList.contains('hidden') || viideo.style.display === 'none') {
    const videoItems = document.querySelectorAll('.vo');
    videoItems.forEach(videoItem => videoItem.pause());
  }
});





muiTenCheo.addEventListener('click', () => {
  viideo.classList.toggle('hidden');
    anvi.classList.toggle('hidden');
});



//dung-video-khi-hidden




//phat-don-le-1-video
const videosssi = document.querySelectorAll('video');


for (const video of videosssi) {
  video.addEventListener('play', () => {
    for (const otherVideo of videosssi) {
      if (otherVideo !== video) {
        otherVideo.pause();
      }
    }
  });
}
