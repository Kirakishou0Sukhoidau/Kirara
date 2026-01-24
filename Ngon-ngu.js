//chinh-do-rong-cua-select
function adjustWidth(selectElement) {
    let tempSpan = document.createElement("span");
    tempSpan.style.visibility = "hidden";
    tempSpan.style.whiteSpace = "nowrap";
    tempSpan.style.position = "absolute";
    tempSpan.style.font = window.getComputedStyle(selectElement).font;
    tempSpan.innerText = selectElement.options[selectElement.selectedIndex].text;
    
    document.body.appendChild(tempSpan);

    // Lấy font-size của selectElement để chuyển đổi px -> em
    let fontSize = parseFloat(window.getComputedStyle(selectElement).fontSize);
    
    // Giới hạn chiều rộng tối đa (tính bằng em)
    let maxWidth = (window.innerWidth * 0.5) / fontSize; // Đổi từ px sang em
    
    // Lấy chiều rộng của nội dung và chuyển đổi sang em
    let selectWidth = tempSpan.offsetWidth / fontSize + 1.6875; // Cộng thêm padding, tùy chỉnh nếu cần

    // Giới hạn chiều rộng tối đa
    selectElement.style.width = (selectWidth > maxWidth ? maxWidth : selectWidth) + "em";

    // Áp dụng kiểu overflow
    selectElement.style.textOverflow = "ellipsis";
    selectElement.style.overflow = "hidden";
    selectElement.style.whiteSpace = "nowrap";

    document.body.removeChild(tempSpan);
}

document.addEventListener("DOMContentLoaded", function() {
    adjustWidth(document.getElementById("search-engine-search"));

    // Đảm bảo rằng hàm được gọi lại sau khi render hoàn tất
    setTimeout(function() {
        adjustWidth(document.getElementById("search-engine-search"));
    }, 100); // Tùy chỉnh thời gian delay nếu cần
});



//sap-xep-az
document.addEventListener("DOMContentLoaded", function () {
    sortElements(); // Sắp xếp khi trang tải

    // Quan sát nếu có phần tử mới được thêm class "A-z"
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === "attributes" && mutation.attributeName === "class") {
                if (mutation.target.classList.contains("A-z")) {
                    sortElements(); // Sắp xếp lại khi có thay đổi
                }
            }
        });
    });

    document.querySelectorAll(".A-z").forEach((el) => {
        observer.observe(el, { attributes: true });
    });

    function sortElements() {
        document.querySelectorAll(".A-z").forEach((parent) => {
            let items = Array.from(parent.children);
            items.sort((a, b) => a.textContent.trim().localeCompare(b.textContent.trim()));

            items.forEach((item) => parent.appendChild(item)); // Sắp xếp lại thứ tự trong DOM
        });
    }
});




/**
 * Hệ thống xử lý tìm kiếm đa nền tảng - Phiên bản Hậu tố Si (Global)
 * Dọn dẹp: Đã loại bỏ hoàn toàn phương thức .trim()
 * Dành riêng cho Công chúa Kirara
 */

// Định nghĩa các biến Global với hậu tố Si
const searchInputSi = document.getElementById("input-search");
const engineSelectSi = document.getElementById("search-engine-search");
const submitBtnSi = document.querySelector(".search #submit-search");

// Map chứa các quy tắc xử lý chuỗi (Global Strategy)
const engineStrategiesSi = {
    "danbooru": (text) => text.replace(/\s+/g, "_"),
    "zerochan": (text) => text.replace(/\s+/g, "_"),
    "pixiv": (text) => text.replace(/\s+/g, "_"),
    "fd": (text) => text.replace(/\s+/g, ""),
    "9xbuddy": (text) => encodeURIComponent(text),
    "google": (text) => encodeURIComponent(text),
    "bing": (text) => encodeURIComponent(text),
    "rule34": (text) => text.replace(/\s+/g, "_"),
    "yandere": (text) => text.replace(/\s+/g, "_"),
    "pixiv-r18": (text) => text.replace(/\s+/g, "_"),
    "duckduckgo": (text) => encodeURIComponent(text)
};

/**
 * Hàm xử lý biến đổi văn bản dựa trên Engine đã chọn (Global Function)
 */
function getProcessedTextSi() {
    const engineSi = engineSelectSi.value;
    // Đã loại bỏ .trim() theo ý của Công chúa
    const rawTextSi = searchInputSi.value;
    
    if (!rawTextSi) return "";

    const transformSi = engineStrategiesSi[engineSi];
    return transformSi ? transformSi(rawTextSi) : rawTextSi;
}

/**
 * Logic thực thi tìm kiếm (Global Execution)
 */
function executeSearchSi() {
    const processedTextSi = getProcessedTextSi();
    if (!processedTextSi) return;

    // Gán lại giá trị đã xử lý vào ô input
    searchInputSi.value = processedTextSi;

    // Hiển thị kết quả xử lý trong bảng điều khiển của hệ thống
    console.log(`[Hệ thống Si] Engine: ${engineSelectSi.value} | Kết quả: ${processedTextSi}`);
    
    // Nàng có thể kích hoạt lệnh submit thực tế tại đây nếu cần
}

// Thiết lập sự kiện sau khi toàn bộ tài liệu đã sẵn sàng
document.addEventListener("DOMContentLoaded", () => {
    
    // Lắng nghe sự kiện Click trên nút tìm kiếm
    submitBtnSi.addEventListener("click", (e) => {
        e.preventDefault(); 
        executeSearchSi();
    });

    // Lắng nghe sự kiện phím Enter trên ô nhập liệu
    searchInputSi.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            // Thực hiện xử lý chuỗi trước khi hành động tìm kiếm mặc định diễn ra
            executeSearchSi();
        }
    });
});




/*
// Mã1 - Xử lý input trước khi tìm kiếm (phiên bản với hậu tố Si)
document.querySelector(".search #submit-search").addEventListener("click", function (e) {
    const inputSi = document.getElementById("input-search");
    const selectSi = document.getElementById("search-engine-search");
    const valueSi = selectSi.value;
    let textSi = inputSi.value;

    // Kiểm tra giá trị select và xử lý chuỗi
    if (valueSi === "danbooru" || valueSi === "zerochan") {
        textSi = textSi.replace(/\s+/g, "_"); // thay space bằng _
    } else if (valueSi === "fd") {
        textSi = textSi.replace(/\s+/g, ""); // loại bỏ space
    } else if (valueSi === "9xbuddy" || valueSi === "google" || valueSi === "duckduckgo") {
        textSi = encodeURIComponent(textSi); // mã hóa URI
    } else {
        textSi = textSi; // giữ nguyên
    }

    // Gán lại vào input để code tìm kiếm khác xử lý
    inputSi.value = textSi;
});

*/