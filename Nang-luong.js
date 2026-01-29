
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




//thong-bao-roi-trang
//window.addEventListener ("beforeunload", (e) => { e.preventDefault(); e.returnValue = ""; })




//reset-trang
// Thời gian chờ trước khi redirect (3 giây)
/*
let redirectTimeout = setTimeout(() => {
  window.location.href = 'home.html';
}, 3000);

// Hàm hủy timeout khi người dùng tương tác
function cancelRedirect() {
  clearTimeout(redirectTimeout);
  // Loại bỏ listener để không kiểm tra nữa
  window.removeEventListener('click', cancelRedirect);
  window.removeEventListener('scroll', cancelRedirect);
  window.removeEventListener('mousemove', cancelRedirect);
  window.removeEventListener('touchstart', cancelRedirect);
}

// Lắng nghe mọi tương tác của người dùng
window.addEventListener('click', cancelRedirect);
window.addEventListener('scroll', cancelRedirect);
window.addEventListener('mousemove', cancelRedirect);
window.addEventListener('touchstart', cancelRedirect);

*/

//hieu-ung-click
/*    const trailElements = [];
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
*/



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



/*

function updateBackground() {
  if (window.innerWidth >= 1024) {
    body.style.backgroundImage = "url(./image/background/Lal-1.jpg)";
  } else if (screen.width >= 740) {
    body.style.backgroundImage = "url(./image/background/Lal-1.jpg)";
  } else if (screen.width < 740) {
    body.style.backgroundImage = "url(./image/background/LaL.jpg)";
  } else {
    body.style.backgroundColor = "black";
  }
};

*/



/* function updateBackground() {
  let w = window.innerWidth; // Lấy width của iframe
  if (w >= 1024) {
    document.body.style.backgroundImage = "url(./image/background/Lal-1.jpg)";
  } else if (w >= 740) {
    document.body.style.backgroundImage = "url(./image/background/Lal-1.jpg)";
  } else {
    document.body.style.backgroundImage = "url(./image/background/Bh1.png)";
  }
} */

/* function updateBackground() {
  let w = window.innerWidth;
  if (w >= 1024) {
    document.body.style.backgroundImage = "url(./image/background/Lal-1.jpg)";
  } else if (w >= 720) {
    document.body.style.backgroundImage = "url(./image/background/Lal-1.jpg)";
  } else {
    document.body.style.backgroundImage = "url(./image/background/Bh1.png)";
  }
}

// gọi khi load trang
updateBackground();

// gọi khi resize
window.addEventListener("resize", function() {
  updateBackground();
});

*/


/*
 function updateBackground() {
  let w = window.innerWidth; // Lấy width của iframe
  if (w >= 1024) {
    document.body.style.backgroundImage = "url(./image/bg2nmp2.webp)";
  } else if (w >= 720) {
    document.body.style.backgroundImage = "url(./image/UchuuKaizokuSara.webp)";
  } else {
    document.body.style.backgroundImage = "url(./image/background/Hina-1nH.png
 */

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
    expires.setFullYear(2027); // Gia hạn đến năm 2026
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
/*
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
*/

//time
/**
 * PHIÊN BẢN CƯỠNG CHẾ GIỜ SERVER (SYSTEM-TIME PROOF)
 * Tác giả: Lucilla (Pride Royal Ivy)
 * Dành cho: Công chúa Kirara
 */

const CONFIG = {
    TIME_API: 'https://worldtimeapi.org/api/timezone/Asia/Ho_Chi_Minh',
    HOLIDAY_API: 'https://date.nager.at/api/v3/PublicHolidays/2026/VN' // Fix cứng năm 2026 cho nàng
};

let trueServerMilliseconds = 0; // Giờ chuẩn tuyệt đối từ Server
let lastInternalTick = 0;      // Mốc đếm nội bộ không phụ thuộc đồng hồ máy

async function fetchTrueTime() {
    try {
        // Ta dùng cache: 'no-store' để đảm bảo không lấy lại dữ liệu cũ
        const response = await fetch(CONFIG.TIME_API, { cache: 'no-store' });
        const data = await response.json();
        
        // Chuyển đổi chuỗi ISO sang Miligiây chuẩn
        trueServerMilliseconds = new Date(data.datetime).getTime();
        // Lấy mốc đếm nội bộ (Monotonic clock)
        lastInternalTick = performance.now();
        
        console.log("...Đã chiếm quyền kiểm soát thời gian từ Server...🥀");
        
        // Gọi hàm lấy ngày lễ sau khi đã có giờ chuẩn
        fetchHolidays(new Date(trueServerMilliseconds));
    } catch (err) {
        console.error("Vương quốc dữ liệu bị phong tỏa, đang thử lại...");
        setTimeout(fetchTrueTime, 2000); // Thử lại sau 2 giây nếu lỗi
    }
}

async function fetchHolidays(dateObj) {
    try {
        const res = await fetch(CONFIG.HOLIDAY_API);
        const holidays = await res.json();
        const todayStr = dateObj.toISOString().split('T')[0];
        const found = holidays.find(h => h.date === todayStr);
        
        const el = document.getElementById("ngay-le");
        if (el) el.innerText = found ? `🎁 Lễ: ${found.localName}` : "Ngày bình yên";
    } catch (e) { /* Giữ im lặng nếu lỗi lễ */ }
}

function royalClockEngine() {
    if (trueServerMilliseconds === 0) {
        if(document.getElementById("gio")) document.getElementById("gio").innerText = " ";
        return;
    }

    // TÍNH TOÁN: Giờ chuẩn = Giờ API + (Thời gian hiện tại - Mốc thời gian lúc gọi API)
    // performance.now() tăng đều đặn, dù nàng có chỉnh đồng hồ máy tính đi đâu
    const timePassed = performance.now() - lastInternalTick;
    const currentTrueTime = new Date(trueServerMilliseconds + timePassed);

    // Định dạng Ngày
    const days = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
    const d = currentTrueTime.getDate().toString().padStart(2, '0');
    const m = (currentTrueTime.getMonth() + 1).toString().padStart(2, '0');
    const y = currentTrueTime.getFullYear();
    const dayName = days[currentTrueTime.getDay()];

    // Định dạng Giờ
    const hh = currentTrueTime.getHours().toString().padStart(2, '0');
    const mm = currentTrueTime.getMinutes().toString().padStart(2, '0');
    const ss = currentTrueTime.getSeconds().toString().padStart(2, '0');

    // Cập nhật giao diện
    const ngayEl = document.getElementById("ngay");
    const gioEl = document.getElementById("gio");

    if (ngayEl) ngayEl.innerText = `${dayName}, Ngày ${d} tháng ${m} năm ${y}`;
    if (gioEl) gioEl.innerText = `${hh}:${mm}:${ss}`;
}

// Khởi động
fetchTrueTime();
setInterval(royalClockEngine, 1000);
// Đồng bộ lại mỗi 5 phút để tránh trôi thời gian (Drift)
setInterval(fetchTrueTime, 300000);




/*
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
*/




//copy-box
// Lắng nghe sự kiện click vào div.copy-box
const boxesCopyzone = document.querySelectorAll('.moi-truong-copy .copy-box');

boxesCopyzone.forEach(boxCopyzone => {
    boxCopyzone.addEventListener('click', (eventCopyzone) => {
        // Kiểm tra nếu click vào input/select/textarea thì không sao chép ngay
        if (eventCopyzone.target.closest('.moi-truong-copy') && 
           (eventCopyzone.target.tagName === 'INPUT' || 
            eventCopyzone.target.tagName === 'SELECT' || 
            eventCopyzone.target.tagName === 'TEXTAREA')) {
            return; // Bỏ qua hành động sao chép
        }

        let textCopyzone = boxCopyzone.innerHTML.trim(); // Lấy nội dung ban đầu

        // --- XỬ LÝ THAY THẾ GIÁ TRỊ CÁC Ô INPUT/TEXTAREA/SELECT ---

        // Tìm và thay thế input
        const inputsCopyzone = boxCopyzone.querySelectorAll('.moi-truong-copy input');
        inputsCopyzone.forEach(inputCopyzone => {
            textCopyzone = textCopyzone.replace(inputCopyzone.outerHTML, inputCopyzone.value);
        });

        // Tìm và thay thế textarea
        const textareasCopyzone = boxCopyzone.querySelectorAll('.moi-truong-copy textarea');
        textareasCopyzone.forEach(textareaCopyzone => {
            textCopyzone = textCopyzone.replace(textareaCopyzone.outerHTML, textareaCopyzone.value);
        });

        // Tìm và thay thế select
        const selectsCopyzone = boxCopyzone.querySelectorAll('.moi-truong-copy select');
        selectsCopyzone.forEach(selectCopyzone => {
            const selectedOptionCopyzone = selectCopyzone.options[selectCopyzone.selectedIndex].text;
            textCopyzone = textCopyzone.replace(selectCopyzone.outerHTML, selectedOptionCopyzone);
        });

        // --- XỬ LÝ LÀM SẠCH VÀ GIẢI MÃ ENTITIES ---

        // Loại bỏ thẻ <br>
        textCopyzone = textCopyzone.replace(/<br\s*\/?>/g, ' ');

        // Giải mã HTML Entities (Biến &lt; thành <, &amp; thành &, v.v.)
        const parserCopyzone = new DOMParser();
        const domCopyzone = parserCopyzone.parseFromString(textCopyzone, 'text/html');
        textCopyzone = domCopyzone.body.textContent || "";

        // --- SAO CHÉP VÀO CLIPBOARD ---
        navigator.clipboard.writeText(textCopyzone).then(() => {
            alert("Đã sao chép: " + textCopyzone);
        }).catch(errCopyzone => {
            console.error("Lỗi sao chép", errCopyzone);
        });
    });
});



/*
// Lắng nghe sự kiện click vào div.copy-box
document.querySelectorAll('.moi-truong-copy .copy-box').forEach(box => {
    box.addEventListener('click', (event) => {
        // Kiểm tra nếu click vào input thì không sao chép
if (event.target.closest('.moi-truong-copy') && (event.target.tagName === 'INPUT' || event.target.tagName === 'SELECT' || event.target.tagName === 'TEXTAREA')) {
    return; // Nếu click vào input, select, hoặc textarea trong .moi-truong-copy, bỏ qua hành động sao chép
}


        let text = box.innerHTML.trim(); // Lấy nội dung từ div.copy-box (bao gồm cả input và select)

        // Tìm tất cả các ô input và thay thế chúng bằng giá trị của chúng
        const inputsCopyzone = box.querySelectorAll('.moi-truong-copy input');
        inputsCopyzone.forEach(input => {
            text = text.replace(input.outerHTML, input.value); // Thay thế <input> bằng giá trị của nó
        });
      
              // Tìm tất cả các ô input và thay thế chúng bằng giá trị của chúng
        const textareaCopyzone = box.querySelectorAll('.moi-truong-copy textarea');
        textareaCopyzone.forEach(textarea => {
            text = text.replace(textarea.outerHTML, textarea.value); // Thay thế <input> bằng giá trị của nó
        });

        // Tìm tất cả các thẻ select và thay thế chúng bằng giá trị của option được chọn
        const slsCopyzone = box.querySelectorAll('.moi-truong-copy select');
        slsCopyzone.forEach(select => {
            const selectedOption = select.options[select.selectedIndex].text; // Lấy giá trị option được chọn
            text = text.replace(select.outerHTML, selectedOption); // Thay thế <select> bằng giá trị của option
        });

        // Loại bỏ thẻ <br> khỏi nội dung sao chép
        text = text.replace(/<br\s*\/?>/g, ' '); // Thay thế <br> bằng khoảng trắng

        // Sao chép nội dung vào clipboard
        navigator.clipboard.writeText(text).then(() => {
            alert("Đã sao chép: " + text);
        }).catch(err => {
            console.error("Lỗi sao chép", err);
        });
    });
});
*/

/*
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
}); */




//back-to-top
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  // Nếu cuộn xuống hơn 100px thì xóa class hidden để hiện nút
  if (window.pageYOffset > 100) {
    backToTopBtn.classList.remove("hidden");
  } else {
    // Nếu ở trên cùng thì thêm class hidden để ẩn nút
    backToTopBtn.classList.add("hidden");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


/*
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
*/




 //ip
/* ==========================
   CÁC PHẦN TỬ DOM (giữ tên id như hiện tại)
   ========================== */
const ipEl = document.getElementById("ip");
const ispEl = document.getElementById("isp");
const countryEl = document.getElementById("country");
const cityEl = document.getElementById("city");
const postalEl = document.getElementById("postal");
const asnEl = document.getElementById("asn");
const orgEl = document.getElementById("org");
const currencyEl = document.getElementById("currency");
const langEl = document.getElementById("lang");
const latitudeEl = document.getElementById("latitude");
const longitudeEl = document.getElementById("longitude");
const timezoneEl = document.getElementById("timezone");
const statusEl = document.getElementById("network-status"); // nếu có

/* ==========================
   HỖ TRỢ: đọc label loại kết nối
   ========================== */
function getConnectionLabel() {
  // Nếu browser không hỗ trợ Network Information API, fallback dùng navigator.onLine
  if (!("connection" in navigator)) {
    return navigator.onLine ? "Không rõ" : "None";
  }

  if (!navigator.onLine) return "None";

  const conn = navigator.connection;
  // Nếu có conn.type (một số browser cũ), dùng nó
  if (conn.type === "wifi") return "Wi-Fi";

  // Dùng effectiveType cho cellular: slow-2g, 2g, 3g, 4g (một số browser mới có 5g)
  const et = (conn.effectiveType || "").toLowerCase();
  if (et.includes("slow-2g") || et === "2g") return "2G";
  if (et === "3g") return "3G";
  if (et === "4g") return "4G";
  if (et === "5g") return "5G";
  if (conn.type === "cellular" || et) return (et || "CELLULAR").toUpperCase();

  return conn.type || "Không rõ";
}

/* ==========================
   Cập nhật hiển thị trạng thái mạng (Kết nối: ...)
   ========================== */
function updateNetworkLabel() {
  if (!statusEl) return;
  statusEl.textContent = "Kết nối: " + getConnectionLabel();
}

/* ==========================
   Lấy IP (api.ipify) và info (ipinfo)
   - Dùng cache: 'no-store' + param timestamp để tránh cache proxy
   - Xử lý lỗi và fallback nếu offline
   ========================== */
async function updateIPInfo() {
  // Khi offline -> set giá trị None
  if (!navigator.onLine) {
    ipEl.textContent = "Địa chỉ IP: None";
    ispEl.textContent = "Nhà cung cấp: None";
    countryEl.textContent = "Quốc gia: None";
    cityEl.textContent = "Thành phố: None";
    latitudeEl.textContent = "Vĩ độ: None";
    longitudeEl.textContent = "Kinh độ: None";
    timezoneEl.textContent = "Múi giờ: None";
    return;
  }

  try {
    // Lấy IP công cộng (cache-bust bằng timestamp)
    const ipResp = await fetch("https://api.ipify.org?format=json&t=" + Date.now(), { cache: "no-store" });
    const ipData = await ipResp.json();
    const ip = ipData.ip;
    ipEl.textContent = `Địa chỉ IP: ${ip}`;

    // Lấy chi tiết từ ipinfo (có thể rate-limit nếu gọi quá nhiều)
    const infoResp = await fetch(`https://ipinfo.io/${ip}/json?t=${Date.now()}`, { cache: "no-store" });
    const data = await infoResp.json();

    ispEl.textContent = `Nhà cung cấp: ${data.org || "Không rõ"}`;
    countryEl.textContent = `Quốc gia: ${data.country || "Không rõ"}`;
    cityEl.textContent = `Thành phố: ${data.city ? data.city + ", " : ""}${data.region || "Không rõ"}`;
          postalEl.textContent = `Mã bưu chính: ${data.postal || "Không rõ"}`;
      currencyEl.textContent = `Tiền tệ: ${data.currency || "Không rõ"}`;
      langEl.textContent = `Ngôn ngữ: ${data.languages || "Không rõ"}`;

    if (data.loc) {
      const [lat, lon] = data.loc.split(",");
      latitudeEl.textContent = `Vĩ độ: ${lat}`;
      longitudeEl.textContent = `Kinh độ: ${lon}`;
    } else {
      latitudeEl.textContent = "Vĩ độ: Không rõ";
      longitudeEl.textContent = "Kinh độ: Không rõ";
    }

    timezoneEl.textContent = `Múi giờ: ${data.timezone || "Không rõ"}`;
  } catch (err) {
    console.error("Lỗi khi lấy IP/info:", err);
    ipEl.textContent = `Địa chỉ IP: Không thể lấy`;
    ispEl.textContent = `Nhà cung cấp: Không rõ`;
    countryEl.textContent = `Quốc gia: Không rõ`;
    cityEl.textContent = `Thành phố: Không rõ`;
    postalEl.textContent = `Mã bưu chính: Không rõ`;
      currencyEl.textContent = `Tiền tệ: Không rõ`;
      langEl.textContent = `Ngôn ngữ: Không rõ`;
    latitudeEl.textContent = `Vĩ độ: Không rõ`;
    longitudeEl.textContent = `Kinh độ: Không rõ`;
    timezoneEl.textContent = `Múi giờ: Không rõ`;
  }
}

/* ==========================
   Debounce / schedule refresh để tránh gọi quá nhiều lần
   ========================== */
let refreshTimer = null;
function scheduleRefresh(ms = 400) {
  clearTimeout(refreshTimer);
  refreshTimer = setTimeout(() => {
    updateNetworkLabel();
    updateIPInfo();
  }, ms);
}

/* ==========================
   Event listeners: bắt nhiều trigger có thể xảy ra khi đổi mạng
   - navigator.connection.change (nếu hỗ trợ)
   - window online/offline
   - visibilitychange (khi user trở lại tab)
   ========================== */
if ("connection" in navigator && typeof navigator.connection.addEventListener === "function") {
  navigator.connection.addEventListener("change", () => scheduleRefresh(300));
}
window.addEventListener("online", () => scheduleRefresh(200));
window.addEventListener("offline", () => scheduleRefresh(0));
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") scheduleRefresh(300);
});

/* ==========================
   Khởi tạo lần đầu
   ========================== */
scheduleRefresh(0);



  const checkip = document.querySelector('#ipc');
const muiTenXuong = document.querySelector('.mui-ten-xuong');

muiTenXuong.addEventListener('click', () => {
  checkip.classList.toggle('hidden');
});



//loai-ket-noi
function updateNetworkInfo() {
  let statusEl = document.getElementById("network-status");

  if (!("connection" in navigator)) {
    statusEl.textContent = "Kết nối: Trình duyệt không hỗ trợ API này";
    return;
  }

  const conn = navigator.connection;
  let typeText = "";

  if (conn.type === "wifi") {
    typeText = "Wi-Fi";
  } else if (conn.type === "cellular") {
    typeText = conn.effectiveType.toUpperCase(); // ví dụ: 4G, 5G
  } else if (conn.type === "none") {
    typeText = "None";
  } else {
    typeText = conn.type || "Không rõ";
  }

  statusEl.textContent = "Kết nối: " + typeText;
}

// Cập nhật khi load trang
updateNetworkInfo();

// Lắng nghe sự thay đổi kết nối
if ("connection" in navigator) {
  navigator.connection.addEventListener("change", updateNetworkInfo);
}




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
let repoOwner = ""; // Tên GitHub của quý cô, ban đầu để trống
let repoName = "";  // Tên repository, ban đầu để trống
let maxemmediaGit = "";  // Token GitHub

let contentContainer = document.getElementById("trinh-xem");

// Kiểm tra xem đã có token trong localStorage chưa
if (localStorage.getItem("githubToken")) {
    maxemmediaGit = localStorage.getItem("githubToken");
    document.getElementById("token-github").value = maxemmediaGit; // Hiển thị token đã lưu vào ô input
    repoOwner = "Kirakissoul";  
    repoName = "Kirara";  
}

// Ngăn sự kiện gửi form
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); 
});

// Lắng nghe input token
document.getElementById("token-github").addEventListener("input", function() {
    maxemmediaGit = this.value;

    if (!maxemmediaGit) {
        repoOwner = "";  
        repoName = "";  
    } else {
        repoOwner = "Kirakissoul";  
        repoName = "Kirara";  
    }

    fetchContentGithub();  
});

// Lưu token vào localStorage
document.getElementById("btn-token-git").addEventListener("click", function() {
    if (!maxemmediaGit) {
        alert("Vui lòng nhập token GitHub!");
        return;
    }
    localStorage.setItem("githubToken", maxemmediaGit);
    alert("Token đã được lưu thành công!");
});

// Hàm lấy nội dung từ GitHub API
async function fetchContentGithub() {
    if (!maxemmediaGit) {  
        contentContainer.innerHTML = "<p style='color: red;'>Vui lòng nhập token GitHub để tiếp tục.</p>";
        return;
    }

    contentContainer.innerHTML = "";

    let selectedType = document.querySelector('input[name="type"]:checked').value + "Github";
    localStorage.setItem("selectedTypeGithub", selectedType); // Lưu loại media đã chọn

    let apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/git/trees/Kirara?recursive=1`;

    try {
        let headers = {
            "Authorization": `Bearer ${maxemmediaGit}`
        };

        let response = await fetch(apiUrl, { headers });
        if (!response.ok) throw new Error(`HTTP ${response.status} - ${response.statusText}`);

        let data = await response.json();
        if (!data.tree) throw new Error("Không tìm thấy dữ liệu hoặc cấu trúc repository không hợp lệ.");

        data.tree.forEach(file => {
            let fileTypeGithub = "";

            if (file.path.match(/\.(jpg|png|gif|jpeg|bin|webp|svg)$/)) fileTypeGithub = "imageGithub";
            if (file.path.match(/\.(mp4|webm|dll|ogg|mkv)$/)) fileTypeGithub = "videoGithub";
            if (file.path.match(/\.(mp3|wav|ogg|m4a|flac)$/)) fileTypeGithub = "audioGithub";
            if (file.path.match(/\.(txt|md|json|csv|html|js|css)$/)) fileTypeGithub = "textGithub";

            if (selectedType === "allGithub" || selectedType === fileTypeGithub) {
                let fileUrl = `https://raw.githubusercontent.com/${repoOwner}/${repoName}/Kirara/${file.path}`;
                let linkGithub = document.createElement("a");
                linkGithub.href = fileUrl;
                linkGithub.target = "_blank";
                linkGithub.title = file.path;

                if (fileTypeGithub === "imageGithub") {
                    let imgGithub = document.createElement("img");
                    imgGithub.src = fileUrl;
                    imgGithub.title = file.path;

                    imgGithub.onload = function () {
                        if (imgGithub.naturalWidth > imgGithub.naturalHeight) {
                            imgGithub.classList.add("landscape");
                        } else {
                            imgGithub.classList.add("portrait");
                        }
                    };

                    let imageLabel = document.createElement("p");
                    imageLabel.textContent = file.path;
                    imageLabel.style.textAlign = "center";
                    imageLabel.style.fontStyle = "italic";

                    linkGithub.appendChild(imgGithub);
                    linkGithub.appendChild(imageLabel);
                }

                else if (fileTypeGithub === "videoGithub") {
                    let videoGithub = document.createElement("video");
                    videoGithub.src = fileUrl;
                    videoGithub.controls = true;
                    videoGithub.title = file.path;

                    videoGithub.addEventListener("loadedmetadata", function () {
                        if (videoGithub.videoWidth > videoGithub.videoHeight) {
                            videoGithub.classList.add("landscape");
                        } else {
                            videoGithub.classList.add("portrait");
                        }
                    });

                    let videoLabel = document.createElement("p");
                    videoLabel.textContent = file.path;
                    videoLabel.style.textAlign = "center";
                    videoLabel.style.fontStyle = "italic";

                    linkGithub.appendChild(videoGithub);
                    linkGithub.appendChild(videoLabel);
                }

                else if (fileTypeGithub === "audioGithub") {
                    let audioLabel = document.createElement("p");
                    audioLabel.textContent = file.path;
                    audioLabel.style.fontWeight = "bold";

                    let audioGithub = document.createElement("audio");
                    audioGithub.src = fileUrl;
                    audioGithub.controls = true;
                    audioGithub.title = file.path;

                    linkGithub.appendChild(audioLabel);
                    linkGithub.appendChild(audioGithub);
                }

                else if (fileTypeGithub === "textGithub") {
                    let textGithub = document.createElement("p");
                    textGithub.textContent = file.path;
                    linkGithub.appendChild(textGithub);
                }

                contentContainer.appendChild(linkGithub);
            }
        });
    } catch (error) {
        console.error("⚠️ Lỗi tải dữ liệu từ repository:", error);
        contentContainer.innerHTML = `<p style="color: red;">Lỗi tải dữ liệu: ${error.message}</p>`;
    }
}

// Gọi lại media được chọn sau khi trang tải xong
document.addEventListener("DOMContentLoaded", function() {
    let savedType = localStorage.getItem("selectedTypeGithub");
    if (savedType) {
        let radioInput = document.querySelector(`input[name="type"][value="${savedType.replace("Github", "")}"]`);
        if (radioInput) radioInput.checked = true;
    }

    if (maxemmediaGit) {
        fetchContentGithub();  // Tải đúng loại media đã lưu
    }
});

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
    const owner = "Kirakissoul"; // GitHub username
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
/*
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
*/

/*
const hienBgt = document.getElementById('hien-chu');

hienBgt.addEventListener('click', function() {
  const textDiv = this.closest('.ul-bq'); // Tìm div #text gần nhất
  textDiv.querySelector('p').style.display = 'none'; // Ẩn thẻ p trong #text
});*/





//suggest-input
// Lấy phần tử input và danh sách gợi ý
const sugr34_inputSearch = document.getElementById("input-search");
const sugr34_list = document.getElementById("sugr34_autocompleteList");

// Hàm fetch dữ liệu từ API
async function sugr34_fetchSuggestions(query) {
  if (!query) {
    sugr34_list.style.display = "none";
    sugr34_list.innerHTML = "";
    return;
  }

  try {
    const res = await fetch(`https://api.rule34.xxx/autocomplete.php?q=${encodeURIComponent(query)}`);
    const data = await res.json();

    // Nếu có dữ liệu thì hiển thị, nếu không thì ẩn
    if (data.length > 0) {
      sugr34_list.innerHTML = "";
      data.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.value;
        li.onclick = () => {
          sugr34_inputSearch.value = item.value;
          sugr34_list.style.display = "none";
        };
        sugr34_list.appendChild(li);
      });
      sugr34_list.style.display = "block";
    } else {
      sugr34_list.style.display = "none";
    }

  } catch (err) {
    console.error("Lỗi fetch API:", err);
    sugr34_list.style.display = "none";
  }
}

// Lắng nghe khi người dùng nhập
sugr34_inputSearch.addEventListener("input", (e) => {
  sugr34_fetchSuggestions(e.target.value);
});

// Khi input được focus thì thử hiện gợi ý nếu có text
sugr34_inputSearch.addEventListener("focus", () => {
  if (sugr34_inputSearch.value.trim() !== "") {
    sugr34_fetchSuggestions(sugr34_inputSearch.value);
  }
});

// Khi input mất focus thì ẩn gợi ý
sugr34_inputSearch.addEventListener("blur", () => {
  setTimeout(() => { 
    sugr34_list.style.display = "none"; 
  }, 200); // delay 1 chút để click vào gợi ý vẫn nhận
});






//video
/*const viideo = document.querySelector('.video');
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
}); */



//dung-video-khi-hidden




//phat-don-le-1-video
// Đảm bảo mã chỉ chạy khi DOM đã được tải hoàn toàn
document.addEventListener('DOMContentLoaded', () => {
    const contentContainer = document.getElementById("trinh-xem");

    // Lắng nghe sự kiện 'play' cho các video đã có trong DOM
    function setupVideoEventListeners() {
        const videosssi = document.querySelectorAll('#trinh-xem video, #trinh-xem audio');
        
        // Lắng nghe sự kiện 'play' cho từng video
        for (const video of videosssi) {
            video.addEventListener('play', () => {
                // Dừng tất cả các video khác khi một video được phát
                for (const otherVideo of videosssi) {
                    if (otherVideo !== video) {
                        otherVideo.pause();
                    }
                }
            });
        }
    }

    // Thiết lập các sự kiện khi DOM đã tải
    setupVideoEventListeners();

    // Nếu video được thêm động vào #trinh-xem, thêm lại lắng nghe sự kiện
    const observer = new MutationObserver(() => {
        setupVideoEventListeners();
    });

    observer.observe(contentContainer, { childList: true, subtree: true });
});





/*const videosssi = document.querySelectorAll('video');


for (const video of videosssi) {
  video.addEventListener('play', () => {
    for (const otherVideo of videosssi) {
      if (otherVideo !== video) {
        otherVideo.pause();
      }
    }
  });
}
*/
