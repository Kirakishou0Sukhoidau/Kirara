//ngan-btn-reload-trang-trong-form
document.querySelectorAll("form button").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault(); // Ngăn mặc định
  });
});


//them-loop-va-control-cho-video-va-audio
// Lấy tất cả thẻ <audio> và <video>
const mediaElements = document.querySelectorAll('audio, video');

mediaElements.forEach(el => {
  // Nếu chưa có thuộc tính loop, thêm vào
  if (!el.hasAttribute('loop')) {
    el.setAttribute('loop', '');
  }
  
  // Nếu chưa có controls, thêm vào
  if (!el.hasAttribute('controls')) {
    el.setAttribute('controls', '');
  }
}); 


//thêm target vào thẻ a
// Chọn tất cả các thẻ <a> và thêm thuộc tính target="_blank"
document.querySelectorAll('a').forEach(link => {
    // Thiết lập thuộc tính target là _blank để mở trong tab mới
    link.setAttribute('target', '_blank');
    
    // Đảm bảo bảo mật và hiệu suất khi mở tab mới
    link.setAttribute('rel', 'noopener noreferrer nofollow');
});


//Đổi
/* function toggleTheme() {
  const currentTheme = localStorage.getItem("theme") || "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";

  // Lưu theme mới
  localStorage.setItem("theme", newTheme);

  // Reload toàn bộ trang để áp dụng thay đổi
  window.location.reload();
}

// Khi trang load lại → áp dụng theme đã lưu
window.onload = () => {
  const savedTheme = localStorage.getItem("theme") || "light";

  const cssFiles = {
    light: ["Trang-tri_l.css", "Ngan-phu_l.css"],
    dark: ["Trang-tri.css", "Ngan-phu.css"]
  };

  const jsFiles = {
    light: ["Ngan-phu-2_l.js", "Nang-luong_l.js", "Nang-luong-2_l.js"],
    dark: ["Ngan-phu-2.js", "Nang-luong.js", "Nang-luong-2.js"]
  };

  // Gán CSS
  document.getElementById("css1").setAttribute("href", cssFiles[savedTheme][0]);
  document.getElementById("css2").setAttribute("href", cssFiles[savedTheme][1]);

  // Gán JS
  document.getElementById("js1").setAttribute("src", jsFiles[savedTheme][0]);
  document.getElementById("js2").setAttribute("src", jsFiles[savedTheme][1]);
  document.getElementById("js3").setAttribute("src", jsFiles[savedTheme][2]);
};
*/

