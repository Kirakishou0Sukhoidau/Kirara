//quet-qr
// --- Khai báo biến toàn cục với hậu tố QuetQR ---
const cameraButtonQuetQR = document.getElementById('toggle-camera');
const fileInputQuetQR = document.getElementById('file-input');
const cameraContainerQuetQR = document.getElementById('camera-container');
const videoElementQuetQR = document.getElementById('camera');
const resultContainerQuetQR = document.getElementById('ketqua-giai-ma-qr');
const previewContainerQuetQR = document.getElementById('preview-qr');
const sandboxInputQuetQR = document.getElementById('quetQR_Sandbox'); // Ô checkbox an toàn
let cameraStreamQuetQR = null;

// Hàm xử lý thực thi nội dung mã QR
function handleQRActionQuetQR(contentQuetQR) {
    // Luôn hiển thị nội dung văn bản vào vùng kết quả
    resultContainerQuetQR.textContent = contentQuetQR;
    resultContainerQuetQR.style.display = 'block';

    // Kiểm tra trạng thái Sandbox (Nếu TẮT tích - false thì mới thực thi)
    if (!sandboxInputQuetQR.checked) {
        try {
            // Kiểm tra nếu nội dung là một liên kết hợp lệ
            const urlPatternQuetQR = /^(https?:\/\/[^\s]+)/g;
            if (urlPatternQuetQR.test(contentQuetQR)) {
                window.location.href = contentQuetQR; 
            } else {
                // Nếu không phải link, hiển thị thông báo alert như một app đa năng
                alert("Nội dung quét được: " + contentQuetQR);
            }
        } catch (errorQuetQR) {
            console.error("Lỗi thực thi mã: ", errorQuetQR);
        }
    }
}

// Hàm bật/tắt camera
function toggleCameraQuetQR() {
    if (cameraStreamQuetQR) {
        cameraStreamQuetQR.getTracks().forEach(track => track.stop());
        cameraStreamQuetQR = null;
        cameraContainerQuetQR.style.display = 'none';
        cameraButtonQuetQR.textContent = 'Bật Camera';
    } else {
        navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'environment' }
        })
        .then(streamQuetQR => {
            cameraStreamQuetQR = streamQuetQR;
            videoElementQuetQR.srcObject = streamQuetQR;
            cameraContainerQuetQR.style.display = 'block';
            cameraButtonQuetQR.textContent = 'Tắt Camera';
            scanQRCodeFromCameraQuetQR(); 
        })
        .catch(errQuetQR => {
            resultContainerQuetQR.textContent = "Không thể truy cập camera: " + errQuetQR.message;
        });
    }
}

// Hàm quét mã QR từ camera
function scanQRCodeFromCameraQuetQR() {
    const canvasQuetQR = document.createElement('canvas');
    const contextQuetQR = canvasQuetQR.getContext('2d');
    
    function scanQuetQR() {
        if (cameraStreamQuetQR) {
            if (videoElementQuetQR.readyState === videoElementQuetQR.HAVE_ENOUGH_DATA) {
                canvasQuetQR.height = videoElementQuetQR.videoHeight;
                canvasQuetQR.width = videoElementQuetQR.videoWidth;
                contextQuetQR.drawImage(videoElementQuetQR, 0, 0, canvasQuetQR.width, canvasQuetQR.height);
                
                const imageDataQuetQR = contextQuetQR.getImageData(0, 0, canvasQuetQR.width, canvasQuetQR.height);
                const codeQuetQR = jsQR(imageDataQuetQR.data, imageDataQuetQR.width, imageDataQuetQR.height);
                
                if (codeQuetQR) {
                    // Gọi hàm xử lý thực thi thay vì chỉ gán text
                    handleQRActionQuetQR(codeQuetQR.data);
                    
                    // Dừng camera sau khi quét thành công
                    cameraStreamQuetQR.getTracks().forEach(track => track.stop());
                    cameraStreamQuetQR = null;
                    cameraContainerQuetQR.style.display = 'none';
                    cameraButtonQuetQR.textContent = 'Bật Camera';
                } else {
                    requestAnimationFrame(scanQuetQR);
                }
            } else {
                requestAnimationFrame(scanQuetQR);
            }
        }
    }
    scanQuetQR();
}

// Hàm giải mã mã QR từ file tải lên
function decodeQRCodeFromImageQuetQR(imgElementQuetQR) {
    resultContainerQuetQR.style.display = 'none';
    previewContainerQuetQR.style.display = 'none';

    const canvasQuetQR = document.createElement('canvas');
    const contextQuetQR = canvasQuetQR.getContext('2d');

    canvasQuetQR.width = imgElementQuetQR.width;
    canvasQuetQR.height = imgElementQuetQR.height;
    contextQuetQR.drawImage(imgElementQuetQR, 0, 0, canvasQuetQR.width, canvasQuetQR.height);

    const previewImgQuetQR = new Image();
    previewImgQuetQR.src = canvasQuetQR.toDataURL();
    previewContainerQuetQR.innerHTML = '';
    previewContainerQuetQR.appendChild(previewImgQuetQR);
    previewContainerQuetQR.style.display = 'block';

    const imageDataQuetQR = contextQuetQR.getImageData(0, 0, canvasQuetQR.width, canvasQuetQR.height);
    const codeQuetQR = jsQR(imageDataQuetQR.data, canvasQuetQR.width, canvasQuetQR.height);

    if (codeQuetQR) {
        // Gọi hàm xử lý thực thi
        handleQRActionQuetQR(codeQuetQR.data);
    } else {
        resultContainerQuetQR.textContent = "Không thể giải mã!";
        resultContainerQuetQR.style.display = 'block';
    }
}

// Lắng nghe sự kiện file input
fileInputQuetQR.addEventListener('change', function (eventQuetQR) {
    const fileQuetQR = eventQuetQR.target.files[0];
    if (fileQuetQR) {
        const readerQuetQR = new FileReader();
        readerQuetQR.onload = function (eQuetQR) {
            const imgQuetQR = new Image();
            imgQuetQR.onload = function () {
                decodeQRCodeFromImageQuetQR(imgQuetQR);
            };
            imgQuetQR.src = eQuetQR.target.result;
        };
        readerQuetQR.readAsDataURL(fileQuetQR);
    }
});

// Lắng nghe sự kiện nút camera
cameraButtonQuetQR.addEventListener('click', toggleCameraQuetQR);





/*
// Tìm các phần tử cần thiết từ DOM
const cameraButtonQuetQR = document.getElementById('toggle-camera');
const fileInputQuetQR = document.getElementById('file-input');
const cameraContainerQuetQR = document.getElementById('camera-container');
const videoElementQuetQR = document.getElementById('camera');
const resultContainerQuetQR = document.getElementById('ketqua-giai-ma-qr');
const previewContainerQuetQR = document.getElementById('preview-qr');
let cameraStreamQuetQR = null;

// Hàm bật/tắt camera
function toggleCameraQuetQR() {
    if (cameraStreamQuetQR) {
        // Dừng camera nếu đã bật
        cameraStreamQuetQR.getTracks().forEach(track => track.stop());
        cameraStreamQuetQR = null;
        cameraContainerQuetQR.style.display = 'none';
        cameraButtonQuetQR.textContent = 'Bật Camera';
    } else {
        // Bắt đầu camera với camera sau
        navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'environment' }
        })
        .then(stream => {
            cameraStreamQuetQR = stream;
            videoElementQuetQR.srcObject = stream;
            cameraContainerQuetQR.style.display = 'block';
            cameraButtonQuetQR.textContent = 'Tắt Camera';
            scanQRCodeFromCameraQuetQR();  // Bắt đầu quét mã QR từ camera
        })
        .catch(err => {
            resultContainerQuetQR.textContent = "Không thể truy cập camera: " + err.message;
        });
    }
}

// Hàm quét mã QR từ camera
function scanQRCodeFromCameraQuetQR() {
    const contextQuetQR = document.createElement('canvas').getContext('2d');
    function scanQuetQR() {
        if (cameraStreamQuetQR) {
            contextQuetQR.drawImage(videoElementQuetQR, 0, 0, contextQuetQR.canvas.width, contextQuetQR.canvas.height);
            const imageDataQuetQR = contextQuetQR.getImageData(0, 0, contextQuetQR.canvas.width, contextQuetQR.canvas.height);
            const codeQuetQR = jsQR(imageDataQuetQR.data, contextQuetQR.canvas.width, contextQuetQR.canvas.height);
            if (codeQuetQR) {
                resultContainerQuetQR.textContent = codeQuetQR.data;
                cameraStreamQuetQR.getTracks().forEach(track => track.stop());
                cameraStreamQuetQR = null;
                cameraContainerQuetQR.style.display = 'none';
                cameraButtonQuetQR.textContent = 'Bật Camera';
            } else {
                requestAnimationFrame(scanQuetQR);
            }
        }
    }
    scanQuetQR();
}

// Hàm giải mã mã QR từ file tải lên
function decodeQRCodeFromImageQuetQR(imageDataQuetQR) {
    resultContainerQuetQR.style.display = 'none';
    previewContainerQuetQR.style.display = 'none';

    const canvasQuetQR = document.createElement('canvas');
    const contextQuetQR = canvasQuetQR.getContext('2d');

    canvasQuetQR.width = imageDataQuetQR.width;
    canvasQuetQR.height = imageDataQuetQR.height;
    contextQuetQR.drawImage(imageDataQuetQR, 0, 0, canvasQuetQR.width, canvasQuetQR.height);

    const imgQuetQR = new Image();
    imgQuetQR.src = canvasQuetQR.toDataURL();
    previewContainerQuetQR.innerHTML = '';
    previewContainerQuetQR.appendChild(imgQuetQR);
    previewContainerQuetQR.style.display = 'block';

    const canvasImageDataQuetQR = contextQuetQR.getImageData(0, 0, canvasQuetQR.width, canvasQuetQR.height);
    const codeQuetQR = jsQR(canvasImageDataQuetQR.data, canvasQuetQR.width, canvasQuetQR.height);

    if (codeQuetQR) {
        resultContainerQuetQR.textContent = codeQuetQR.data;
        resultContainerQuetQR.style.display = 'block';
    } else {
        resultContainerQuetQR.textContent = "Không thể giải mã!";
        resultContainerQuetQR.style.display = 'block';
    }
}

// Lắng nghe sự kiện khi tải ảnh từ file input
fileInputQuetQR.addEventListener('change', function (event) {
    const fileQuetQR = event.target.files[0];
    if (fileQuetQR) {
        const readerQuetQR = new FileReader();
        readerQuetQR.onload = function (e) {
            const imgQuetQR = new Image();
            imgQuetQR.onload = function () {
                decodeQRCodeFromImageQuetQR(imgQuetQR);
            };
            imgQuetQR.src = e.target.result;
        };

        readerQuetQR.readAsDataURL(fileQuetQR);
    }
});

// Lắng nghe sự kiện bật/tắt camera
cameraButtonQuetQR.addEventListener('click', toggleCameraQuetQR);
*/



//tao-qr
// Biến toàn cục để giữ thực thể QR
let qrCodeInstance = null;

// Cấu hình mặc định của ta
const qrConfig = {
  width: 2000,
  height: 2000,
  type: "png",
  margin: 105,
  dotsOptions: { color: "#000000", type: "square" },
  backgroundOptions: { color: "#ffffff" },
  cornersSquareOptions: { color: "#000000", type: "square" },
  cornersDotOptions: { color: "#000000", type: "square" }
};

/**
 * Hàm tạo mới thực thể QR để đảm bảo dữ liệu luôn sạch
 */
function createNewQRInstance(content) {
  return new QRCodeStyling({
    ...qrConfig,
    data: content
  });
}

/**
 * Hàm hiển thị QR
 */
function generateQRTaoQR() {
  const text = document.getElementById("qrText").value.trim() || "Kirara so cute!";
  const container = document.getElementById("qr-container");
  
  container.innerHTML = ""; // Xóa sạch dấu vết cũ
  qrCodeInstance = createNewQRInstance(text); // Tạo mới hoàn toàn
  qrCodeInstance.append(container);
}

/**
 * Hàm tải PNG: Tạo một thực thể tạm thời chỉ để tải xuống
 */
function downloadPNGTaoQR() {
  const text = document.getElementById("qrText").value.trim() || "Kirara so cute!";
  // Tạo một thực thể độc lập ngay tại thời điểm nhấn nút để không bị dính cache
  const tempQR = createNewQRInstance(text);
  
  tempQR.download({
    name: `qr-kirara-${Math.floor(Date.now() / 1000)}`,
    extension: "png"
  });
}

/**
 * Hàm tải SVG
 */
function downloadSVGTaoQR() {
  const text = document.getElementById("qrText").value.trim() || "Kirara so cute!";
  const tempQR = createNewQRInstance(text);
  
  tempQR.download({
    name: `qr-kirara-${Math.floor(Date.now() / 1000)}`,
    extension: "svg"
  });
}

// Khởi tạo lần đầu
document.addEventListener("DOMContentLoaded", generateQRTaoQR);




// Khởi tạo QR Code với màu sắc phối hợp sang trọng & đáng yêu
/*const qrCodeTaoQR = new QRCodeStyling({
  width: 2000,
  height: 2000,
  type: "svg", // Có thể đổi sang "png" nếu muốn
  data: "Kirara so cute!",
  image: "", // Có thể chèn logo Kirara nếu có
  dotsOptions: {
    color: "#e0b0ff", // Lavender dịu dàng
    type: "rounded"   // Hình tròn tạo nét mềm mại
  },
  backgroundOptions: {
    color: "#0f0f2d" // Nền tím than bí ẩn
  },
  cornersSquareOptions: {
    color: "#ff8fab", // Hồng pastel làm điểm nhấn
    type: "dot"       // Chấm tròn cho viền vuông góc
  },
  cornersDotOptions: {
    color: "#e0b0ff", // Đồng bộ với màu chính
    type: "dot"
  }
});
*/



// Khởi tạo QR Code trắng đen cổ điển
/* const qrCodeTaoQR = new QRCodeStyling({
  width: 2000,
  height: 2000,
  type: "png", // PNG phổ biến, dễ dùng
  data: "Kirara so cute!",
    margin: 105,
  image: "", // Có thể chèn logo nhỏ nếu muốn
  dotsOptions: {
    color: "#000000", // Màu đen chuẩn
    type: "square"    // Ô vuông truyền thống
  },
  backgroundOptions: {
    color: "#ffffff" // Nền trắng tinh khiết
  },
  cornersSquareOptions: {
    color: "#000000", // Vuông đen, dễ nhận diện
    type: "square"
  },
  cornersDotOptions: {
    color: "#000000", // Chấm vuông đen cổ điển
    type: "square"
  }
});




// Hàm sinh mã QR từ nội dung nhập vào
function generateQRTaoQR() {
  const textTaoQR = document.getElementById("qrText").value || "Kirara so cute!";
  qrCodeTaoQR.update({
    data: textTaoQR
  });

  // Gắn mã QR vào khung hiển thị
  const container = document.getElementById("qr-container");
  container.innerHTML = ""; // Xóa mã cũ nếu có
  qrCodeTaoQR.append(container);
}

// Hàm tải về ảnh PNG
function downloadPNGTaoQR() {
  qrCodeTaoQR.download({
    name: "qr-kirara",
    extension: "png"
  });
}

// Hàm tải về SVG
function downloadSVGTaoQR() {
  qrCodeTaoQR.download({
    name: "qr-kirara",
    extension: "svg"
  });
}

*/