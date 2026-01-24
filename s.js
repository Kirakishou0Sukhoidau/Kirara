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