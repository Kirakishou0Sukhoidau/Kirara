 //thanh tim kiem   
    function handleSearch(formId) {
  const input = document.getElementById(`input-${formId}`);
  const searchEngine = document.getElementById(`search-engine-${formId}`);
  const submitButton = document.getElementById(`submit-${formId}`);


    submitButton.addEventListener("click", function(event) {
      event.preventDefault();
      const query = input.value.trim();
      if (query === "") {
        return;
      }
      
      const selectedEngine = searchEngine.value;
      let url = "";
      switch (selectedEngine) {
        case "duckduckgo":
          url = "https://duckduckgo.com/?q=" + query;
          break;
        case "google":
          url = "https://www.google.com/search?q=" + query;
          break;
       case "google-img":
          url = "https://www.google.com/search?q=" + query + "&udm=2";
          break;
        case "rule34":
           url = "https://www.rule34.xxx/index.php?page=post&s=list&tags=" + query;
 break;
         case "zerochan":        
         url = "https://www.zerochan.net/search?q=" + query;
          break;
              case "danbooru":        
         url = "https://danbooru.donmai.us/posts?tags=" + query;
          break;
          case "pixiv-r18":
          url = "https://www.pixiv.net/en/tags/" + query + "/artworks?mode=r18";
          break;
           case "font-awesome":
          url = "https://fontawesome.com/search?q=" + query + "&o=r&m=free";
          break;
          case "cardyugioh":
          url = "https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=1&sess=1&rp=10&mode=&sort=1&keyword=" + query + "&stype=1&ctype=&othercon=2&starfr=&starto=&pscalefr=&pscaleto=&linkmarkerfr=&linkmarkerto=&link_m=2&atkfr=&atkto=&deffr=&defto=&releaseDStart=1&releaseMStart=1&releaseYStart=1999&releaseDEnd=&releaseMEnd=&releaseYEnd=";
          break;
          case "pixiv":
          url = "https://www.pixiv.net/en/tags/" + query;
          break;
          case "wikipedia":
          url = "https://vi.m.wikipedia.org/wiki/" + query;
          break;
         case "bing":
          url = "https://www.bing.com/search?q=" + query;
          break;
          case "googlev":
          url = "https://transparencyreport.google.com/safe-browsing/search?url=" + query;
          break;
          case "yandere":
          url = "https://yande.re/post?tags=" + query;
          break;
          case "itemtoram":
          url = "https://coryn.club/item.php?name=" + query;
          break;
           case "quaitoram":
          url = "https://coryn.club/monster.php?name=" + query;
          break;
           case "lvltoram":
          url = "https://coryn.club/leveling.php?lv=" + query + "&gap=7";
          break;
           case "maptoram":
          url = "https://coryn.club/map.php?name=" + query;
          break;
           case "nct":
          url = "https://www.nhaccuatui.com/tim-kiem?q=" + query;
          break;
           case "zing-mp3":
          url = "https://zingmp3.vn/tim-kiem/tat-ca?q=" + query;
          break;
           case "ytb":
          url = "https://youtube.com/results?sp=mAEA&search_query=" + query;
          break;
        case "qtm":
          url = "https://quantrimang.com/s/?q=" + query;
          break;
          case "fd":
          url = "https://" + query + ".fandom.com/";
          break;
          case "apkpure":
          url = "https://apkpure.com/search?q=" + query;
          break;
          case "tdwk":
          url = "https://vi.m.wiktionary.org/wiki/" + query;
          break;
          case "checkscam":
          url = "https://scam.vn/check-website?domain=" + query;
          break;
          case "scamadviser":
          url = "https://www.scamadviser.com/check-website/" + query;
          break;
          case "urlscanio":
          url = "https://urlscan.io/domain/" + query;
          break;
          case "ehhent":
          url = "https://e-hentai.org/?f_cats=450&f_search=" + query;
          break;
          case "ehponn":
          url = "https://e-hentai.org/?f_cats=831&f_search=" + query;
          break;
          case "ehent":
          url = "https://e-hentai.org/?f_search=" + query;
          break;


    

      }
  window.open(url, '_blank');
  //mo-o-mot trang
   /*window.location.href = url;*/
    });}

  handleSearch("search");
handleSearch("quet");


//bang-feed
let subreddits = ["hentai", "rule34", "rape_hentai", "HentaiForcedOrgasms", "HENTAI_GIF", "HelplessHentai", "hentaibondage", "CumHentai", "AiUncensored", "Hentai__videos", "onepiecehentaiz", "HentaiAnal", "AnalHentai", "WonderWomanNSFW", "FrierenNSFW", "Frieren_NSFW", "FrierenHentaiAI", 
                  "guro", "HardcoreHentaiBondage", "futanari", "quick_hentai", "yurigif", "YuriHentai", "yuri", "OralHentai", "HentaiAnaru", "MasturbationHentai", "MonsterGirl", "AraAra", "HentaiAndRoleplayy", "hentainmanga", "MikuNakanoNSFW", "NSFW_GIF", "AnimeWallpaperNSFW", "Hentai_AnimeNSFW", "nsfwanimegifs", 
                  "GenshinImpactHentai", "GenshinImpactNSFW", "HentaiMini2", "Kurumitokisakihentai", "GuraLewdz", "hentai_sex_videos_hub", "hentaipower", "ElfHentai", "groupsexhentai", "awesomePublicNudity", "punchingslappingbdsm", "bdsm", "HumiliationBDSM", "HentaiTrade_N_Feed", "Short_Hentai", "AnimeTitties", 
                  "yuriMILFs", "Rule_34", "rule34aiart", "Rule34LoL", "yugioh_nsfw", "JerkOffToAnime", "Nekomimi", "NekoHentai", "FairyTail_R34", "AIExpansionHentai", "HentaiReverseRape2", "AnimeH34", "swimsuithentai", "orgasmcontrol", "Orgasms", "OralPleasure", "Hentai__videos", "hentaichannel",
                  "HentaiPetgirls", "saohentai", "HentaiVTuberGirls", "ecchi", "MaidHentai", "DragonMaidNSFW", "hatsunemikuhentaiv3", "ReZeroHentai", "Naruto_Hentai", "pixxx_naruto", "Naruto_AI", "FemboyRape", "FemboyHentai", "XrayHentai", "jerkbudsHentai", "QoS_Hentai_and_RP", "BlackedHentaiandRP", 
                  "BluearchiveNSFW", "animeplot", "recommendhanime", "Touhou_NSFW", "PantiesHentai", "MiSideR34", "OshiNoKo_Hentai", "oshinokonsfw", "DCNSFW", "SpreadingHentai", "Shinobuhentai", "WelcometohentaiIruma", "AnimeSeeThrough", "QuintupletsHentai", "masteruwuoficial", "pantsu", "AlyaNSFW", "Alya_sanNsfw", 
                 "PublicSexPorn", "Bondage", "2Booty", "tentaclesex", "TentacleRoleplay", "Tentai", "Allthewaythrough", "cumflation", "WutheringWavesHentai", "CartoonPorn", "HentaiiGooning", "lesbianhentai3", "HentaiTrade_N_Feed"]; // Thêm nhiều subreddit
    

let aftersReddit = {};
let currentSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
let loading = false;

// Hàm xáo trộn bài viết
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
}

// Lazy Load ảnh
function lazyLoadImagesRedditfeed() {
    const imagesReddit = document.querySelectorAll(".lazy");
    const observerReddit = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove("lazy");
                observerReddit.unobserve(img);
            }
        });
    });

    imagesReddit.forEach(img => observerReddit.observe(img));
}


// Tải bài từ Reddit
async function loadRedditFeed() {
    if (loading) return;
    loading = true;

    let urlReddit = `https://www.reddit.com/r/${currentSubreddit}.json?limit=100`;
    if (aftersReddit[currentSubreddit]) urlReddit += `&after=${aftersReddit[currentSubreddit]}`;

    let res = await fetch(urlReddit);
    let data = await res.json();
    aftersReddit[currentSubreddit] = data.data.after;

    let postsReddit = data.data.children
        .filter(post => post.data.preview)
        .map(post => ({
            title: post.data.title,
            url: `https://www.reddit.com${post.data.permalink}`,
            image: post.data.preview.images[0].source.url,
            subreddit: currentSubreddit
        }));

    shuffleArray(postsReddit); // Hoán đổi vị trí bài

    let html = "";
    postsReddit.forEach(post => {
        html += `
            <div class="post">
                <small>[${post.subreddit}]</small><br>
                <a href="${post.url}" target="_blank" rel="noopener noreferrer">${post.title}</a>
                <img data-src="${post.image}" class="lazy" alt="Image" loading="lazy">
            </div>
        `;
    });

    document.getElementById("feed").innerHTML += html;
    lazyLoadImagesRedditfeed();

    loading = false;
}

// Xử lý scroll trong #feed
document.getElementById("feed").addEventListener("scroll", function () {
    if (this.scrollTop + this.clientHeight >= this.scrollHeight - 25) {
        loadRedditFeed();
    }
});

// Reset feed - Chọn subreddit mới và xóa bài cũ
document.getElementById("reset-feed").addEventListener("click", function () {
    currentSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
    document.getElementById("feed").innerHTML = "";
    aftersReddit = {}; 
    loadRedditFeed();
});

// Load lần đầu
loadRedditFeed();
      


/* Đo tốc độ mạng với loop tải nhiều lần + đổi đơn vị thời gian */
const SpeedTestServerList = [
  { name: 'Server 1 (GitHub)', url: 'https://raw.githubusercontent.com/Kirakissoul/Kirara/Kirara/video/Kama.mp4' }
];

const SpeedTestContainer = document.getElementById("serversContainer");

SpeedTestServerList.forEach((SpeedTestServer, SpeedTestIndex) => {
  const SpeedTestDiv = document.createElement("div");
  SpeedTestDiv.className = "server-container";
  SpeedTestDiv.innerHTML = `
    <h2>${SpeedTestServer.name}</h2>
    <button id="SpeedTest-btn-start-${SpeedTestIndex}">Bắt đầu</button>
    <button id="SpeedTest-btn-stop-${SpeedTestIndex}">Dừng</button>
    <button id="SpeedTest-btn-download-${SpeedTestIndex}">📥 Tải về</button>
    <div id="SpeedTest-status-${SpeedTestIndex}">Chưa bắt đầu</div>
  `;
  SpeedTestContainer.appendChild(SpeedTestDiv);

  SpeedTestSetup(SpeedTestIndex, SpeedTestServer.url);
});

function SpeedTestSetup(SpeedTestIndex, SpeedTestFileUrl) {
  const SpeedTestStartBtn = document.getElementById(`SpeedTest-btn-start-${SpeedTestIndex}`);
  const SpeedTestStopBtn = document.getElementById(`SpeedTest-btn-stop-${SpeedTestIndex}`);
  const SpeedTestDownloadBtn = document.getElementById(`SpeedTest-btn-download-${SpeedTestIndex}`);
  const SpeedTestStatusDiv = document.getElementById(`SpeedTest-status-${SpeedTestIndex}`);

  let SpeedTestController = null;
  let SpeedTestInstance = null;
  let SpeedTestStartTime = 0;
  let SpeedTestStableReached = false;
  let SpeedTestLoops = 5; // số lần lặp lại để bù dung lượng file nhỏ
  let SpeedTestCurrentLoop = 0;

  SpeedTestStartBtn.onclick = () => {
    if (SpeedTestController || SpeedTestInstance) {
      alert("Đang chạy, vui lòng dừng trước.");
      return;
    }

    SpeedTestController = new AbortController();
    SpeedTestStatusDiv.textContent = 'Bắt đầu tải file...';
    SpeedTestStartTime = performance.now();
    SpeedTestStableReached = false;
    SpeedTestCurrentLoop = 0;

    runTest();
  };

  function runTest() {
    if (SpeedTestCurrentLoop >= SpeedTestLoops) {
      SpeedTestStop();
      SpeedTestController = null;
      SpeedTestInstance = null;
      SpeedTestStatusDiv.textContent += ' | Hoàn tất tất cả vòng tải!';
      return;
    }

    fetch(SpeedTestFileUrl + '?nocache=' + Date.now(), { cache: "no-store", signal: SpeedTestController.signal })
      .then(response => {
        if (!response.ok) throw new Error("Lỗi tải file");

        const SpeedTestContentLength = +response.headers.get("Content-Length");
        if (!SpeedTestContentLength) throw new Error("Không thể xác định kích thước file");

        const SpeedTestReader = response.body.getReader();
        let SpeedTestReceivedLength = 0;

        function SpeedTestRead() {
          return SpeedTestReader.read().then(({ done, value }) => {
            if (done) {
              SpeedTestCurrentLoop++;
              SpeedTestStatusDiv.textContent += ` | Hoàn tất vòng ${SpeedTestCurrentLoop}`;
              return runTest(); // gọi tiếp vòng sau
            }

            SpeedTestReceivedLength += value.length;
            const SpeedTestElapsed = (performance.now() - SpeedTestStartTime) / 1000;
            const SpeedTestBps = SpeedTestReceivedLength / SpeedTestElapsed;
            const SpeedTestRemaining = SpeedTestContentLength - SpeedTestReceivedLength;
            const SpeedTestEstimate = SpeedTestRemaining / SpeedTestBps;

            if (!SpeedTestStableReached && SpeedTestElapsed >= 3) {
              SpeedTestStableReached = true;
              SpeedTestStatusDiv.textContent += ' | Bắt đầu Speedtest.js...';
            }

            const SpeedTestMBps = SpeedTestBps / (1024 * 1024);

            SpeedTestStatusDiv.innerText =
              `- Dung lượng: ${(SpeedTestReceivedLength / (1024 * 1024)).toFixed(2)} / ${(SpeedTestContentLength / (1024 * 1024)).toFixed(2)} MB\n` +
              `- Tốc độ: ${SpeedTestMBps.toFixed(2)} MB/s\n` +
              `- Thời gian: ${formatTime(SpeedTestElapsed)}\n` +
              `- Ước tính: ${formatTime(SpeedTestEstimate)}`;

            return SpeedTestRead();
          });
        }

        return SpeedTestRead();
      })
      .catch(err => {
        if (err.name === 'AbortError') {
          SpeedTestStatusDiv.textContent = 'Đã dừng tải.';
        } else {
          SpeedTestStatusDiv.textContent = 'Lỗi tải file: ' + err.message;
        }
        SpeedTestStop();
        SpeedTestController = null;
        SpeedTestInstance = null;
      });
  }

  SpeedTestStopBtn.onclick = () => {
    if (SpeedTestController) SpeedTestController.abort();
    if (SpeedTestInstance && typeof SpeedTestInstance.stop === 'function') {
      SpeedTestInstance.stop();
    }
    SpeedTestController = null;
    SpeedTestInstance = null;
    SpeedTestStatusDiv.textContent = 'Đã dừng.';
  };

  SpeedTestDownloadBtn.onclick = () => {
    const SpeedTestAnchor = document.createElement('a');
    SpeedTestAnchor.href = SpeedTestFileUrl;
    SpeedTestAnchor.download = '';
    SpeedTestAnchor.target = '_blank';
    document.body.appendChild(SpeedTestAnchor);
    SpeedTestAnchor.click();
    document.body.removeChild(SpeedTestAnchor);
  };
}

/* Chuyển đổi giây sang hệ đơn vị thời gian */
function formatTime(seconds) {
  const units = [
    { label: "thiên niên kỷ", value: 60 * 60 * 24 * 30 * 12 * 10 * 100 },
    { label: "thế kỷ", value: 60 * 60 * 24 * 30 * 12 * 100 },
    { label: "thập kỷ", value: 60 * 60 * 24 * 30 * 12 * 10 },
    { label: "năm", value: 60 * 60 * 24 * 30 * 12 },
    { label: "tháng", value: 60 * 60 * 24 * 30 },
    { label: "ngày", value: 60 * 60 * 24 },
    { label: "giờ", value: 60 * 60 },
    { label: "phút", value: 60 },
    { label: "giây", value: 1 }
  ];

  for (const unit of units) {
    if (seconds >= unit.value) {
      const val = (seconds / unit.value).toFixed(1);
      return `${val} ${unit.label}`;
    }
  }
  return seconds.toFixed(1) + " giây";
}


//icon sreach
// JS: sửa hoàn chỉnh
/* document.addEventListener("DOMContentLoaded", function() {
    // Lấy phần tử
    const iSelectIconSreach = document.querySelector(".iSelect");
    const searchEngineSelectIconSreach = document.getElementById("search-engine-search");

    // Nếu thiếu phần tử thì dừng (tránh lỗi)
    if (!iSelectIconSreach || !searchEngineSelectIconSreach) return;

    // Hàm cập nhật src và hiệu ứng
    function updateIcon() {
        const value = searchEngineSelectIconSreach.value;
        // Bật fade-out
        iSelectIconSreach.classList.add("fade-out");

        // Đợi fade-out xong rồi đổi src -> remove class để fade-in
        setTimeout(() => {
            if (value === "google" || value === "google-img" || value === "google-search") {
                iSelectIconSreach.src = "./logo/gg.svg";
            } else if (value === "rule34") {
                iSelectIconSreach.src = "./logo/r34.png";
            } else {
                iSelectIconSreach.src = "";
            }
            // Bật lại (fade-in)
            iSelectIconSreach.classList.remove("fade-out");
        }, 400); // khớp với transition CSS
    }

    // Gọi 1 lần khi load để set icon ban đầu
    updateIcon();

    // Đăng ký sự kiện khi user thay đổi option
    searchEngineSelectIconSreach.addEventListener("change", updateIcon);
}); */ /* <-- quan trọng: đóng callback và addEventListener */


//Gemini
/* Logic xử lý Chat Gemini - Thiết kế bởi Pride dành cho Kirara */

/* * Project: Gemini Multi-Model Control - Markdown & Quota Fixed
 * Author: Pride Royal Ivy (Lucilla) for Princess Kirara
 */

/*

// --- 1. Triệu hồi các phần tử ---
const input_api_Chat_Gemini = document.getElementById('API_Gemini');
const area_prompt_Chat_Gemini = document.getElementById('nhap_prompt_Gemini');
const select_model_Chat_Gemini = document.getElementById('chon_model_Gemini');
const input_msg_Chat_Gemini = document.getElementById('Nhap_text_Gemnin'); // Giữ nguyên ID dù đã đổi sang textarea
const khung_chat_Chat_Gemini = document.getElementById('khung_hien_thi_Chat_GeminiAI');
const btn_gui_Chat_Gemini = document.getElementById('gui_chat_Gemini');
const btn_dung_Chat_Gemini = document.getElementById('dung_chat_Gemini');

// --- 2. Khởi tạo dữ liệu từ bộ nhớ ---
let api_key_Chat_Gemini = localStorage.getItem('api_key_Chat_GeminiAI') || "";
let system_prompt_Chat_Gemini = localStorage.getItem('system_prompt_Chat_GeminiAI') || "";
let model_dang_chon_Chat_Gemini = localStorage.getItem('model_cuoi_cung') || select_model_Chat_Gemini.value;

let controller_Chat_Gemini = null;

// Đổ dữ liệu vào giao diện ban đầu
input_api_Chat_Gemini.value = api_key_Chat_Gemini;
area_prompt_Chat_Gemini.value = system_prompt_Chat_Gemini;
select_model_Chat_Gemini.value = model_dang_chon_Chat_Gemini;

// --- 3. Lắng nghe thay đổi ---
select_model_Chat_Gemini.onchange = () => {
    model_dang_chon_Chat_Gemini = select_model_Chat_Gemini.value;
    localStorage.setItem('model_cuoi_cung', model_dang_chon_Chat_Gemini);
};

input_api_Chat_Gemini.oninput = () => {
    api_key_Chat_Gemini = input_api_Chat_Gemini.value.trim();
    localStorage.setItem('api_key_Chat_GeminiAI', api_key_Chat_Gemini);
};

area_prompt_Chat_Gemini.oninput = () => {
    system_prompt_Chat_Gemini = area_prompt_Chat_Gemini.value.trim();
    localStorage.setItem('system_prompt_Chat_GeminiAI', system_prompt_Chat_Gemini);
};

document.getElementById('bo_API_Gemini').onclick = () => { 
    input_api_Chat_Gemini.value = ""; 
    localStorage.removeItem('api_key_Chat_GeminiAI'); 
    api_key_Chat_Gemini = ""; 
};
document.getElementById('xoa_prompt_Gemini').onclick = () => { 
    area_prompt_Chat_Gemini.value = ""; 
    localStorage.removeItem('system_prompt_Chat_GeminiAI'); 
    system_prompt_Chat_Gemini = ""; 
};

// --- 4. Chức năng Dừng & Xóa sạch ---
btn_dung_Chat_Gemini.onclick = () => { if (controller_Chat_Gemini) controller_Chat_Gemini.abort(); };

btn_dung_Chat_Gemini.ondblclick = () => {
    if (confirm("Công chúa muốn xóa sạch cuộc trò chuyện này sao?")) {
        khung_chat_Chat_Gemini.innerHTML = "";
    }
};

// --- 5. Hàm Hiển Thị Chữ Chạy & Render Markdown ---
async function hien_thi_chu_chay_Chat_Gemini(text, element) {
    let i = 0;
    let typedText = "";
    element.innerHTML = "<b>Lucilla:</b> ";

    return new Promise((resolve) => {
        function type() {
            if (i < text.length) {
                typedText += text.charAt(i);
                element.innerText = "Lucilla: " + typedText;
                i++;
                khung_chat_Chat_Gemini.scrollTop = khung_chat_Chat_Gemini.scrollHeight;
                setTimeout(type, 8);
            } else {
                if (window.marked) {
                    element.innerHTML = `<b>Lucilla:</b><div class="markdown-content">${marked.parse(text)}</div>`;
                } else {
                    element.innerHTML = `<b>Lucilla:</b><br>${text}`;
                }
                khung_chat_Chat_Gemini.scrollTop = khung_chat_Chat_Gemini.scrollHeight;
                resolve();
            }
        }
        type();
    });
}

// --- 6. Hàm Gửi Tin Nhắn ---
async function gui_tin_nhan_Chat_Gemini() {
    const user_text = input_msg_Chat_Gemini.value.trim();
    if (!user_text || !api_key_Chat_Gemini) return;

    controller_Chat_Gemini = new AbortController();

    // Hiển thị tin nhắn người dùng
    khung_chat_Chat_Gemini.innerHTML += `<div style="text-align:right; margin-bottom:15px;"><span style="background:#38006b; padding:10px; border-radius:10px; display:inline-block; border: 1px solid #d199ff;"><b>Kirara:</b> ${user_text.replace(/\n/g, '<br>')}</span></div>`;
    input_msg_Chat_Gemini.value = "";
    input_msg_Chat_Gemini.style.height = 'auto'; // Reset chiều cao textarea nếu có auto-resize

    const ai_box = document.createElement("div");
    ai_box.style.marginBottom = "20px";
    ai_box.style.color = "#d199ff";
    ai_box.innerHTML = "<b>Lucilla:</b> <i>Đang suy ngẫm... ✨</i>";
    khung_chat_Chat_Gemini.appendChild(ai_box);

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model_dang_chon_Chat_Gemini}:generateContent?key=${api_key_Chat_Gemini}`;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ role: "user", parts: [{ text: user_text }] }],
                system_instruction: { role: "system", parts: [{ text: system_prompt_Chat_Gemini }] },
                safetySettings: [
                    { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
                    { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
                    { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
                    { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_ONLY_HIGH" }
                ]
            }),
            signal: controller_Chat_Gemini.signal
        });

        const data = await response.json();
        if (data.error) throw new Error(data.error.message);

        const reply = data.candidates[0].content.parts[0].text;
        await hien_thi_chu_chay_Chat_Gemini(reply, ai_box);

    } catch (e) {
        if (e.name === 'AbortError') {
            ai_box.innerHTML += `<br><i style="color:gray;">[Đã ngắt kết nối]</i>`;
        } else {
            ai_box.style.color = "#ff4d4d";
            ai_box.innerHTML = `<b>Lucilla:</b> [Lỗi: ${e.message}]`;
        }
    } finally {
        controller_Chat_Gemini = null;
        khung_chat_Chat_Gemini.scrollTop = khung_chat_Chat_Gemini.scrollHeight;
    }
}

// --- 7. Gán sự kiện ---
btn_gui_Chat_Gemini.onclick = gui_tin_nhan_Chat_Gemini;

*/


/*
// Xử lý thông minh cho Textarea: Enter để gửi, Shift+Enter để xuống dòng
input_msg_Chat_Gemini.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault(); // Ngăn xuống dòng mặc định
        gui_tin_nhan_Chat_Gemini();
    }
});

*/

//bat-tat-Gemini
// Sử dụng toggle để tối ưu hóa việc thêm/xóa class .hidden
document.getElementById('goi-tro-ly-Gemini').addEventListener('click', function() {
    const chatGemini = document.getElementById('Chat_Gemini');
    chatGemini.classList.toggle('hidden');
});

//Gemini main
// --- 1. Triệu hồi các phần tử ---
const input_api_Chat_Gemini = document.getElementById('API_Gemini');
const area_prompt_Chat_Gemini = document.getElementById('nhap_prompt_Gemini');
const select_model_Chat_Gemini = document.getElementById('chon_model_Gemini');
const input_msg_Chat_Gemini = document.getElementById('Nhap_text_Gemnin');
const khung_chat_Chat_Gemini = document.getElementById('khung_hien_thi_Chat_GeminiAI');
const btn_gui_Chat_Gemini = document.getElementById('gui_chat_Gemini');
const btn_dung_Chat_Gemini = document.getElementById('dung_chat_Gemini');

// --- 2. Khởi tạo dữ liệu từ bộ nhớ ---
let api_key_Chat_Gemini = localStorage.getItem('api_key_Chat_GeminiAI') || "";
let system_prompt_Chat_Gemini = localStorage.getItem('system_prompt_Chat_GeminiAI') || "";
let model_dang_chon_Chat_Gemini = localStorage.getItem('model_cuoi_cung') || select_model_Chat_Gemini.value;
let controller_Chat_Gemini = null;

// Đổ dữ liệu vào giao diện ban đầu
input_api_Chat_Gemini.value = api_key_Chat_Gemini;
area_prompt_Chat_Gemini.value = system_prompt_Chat_Gemini;
select_model_Chat_Gemini.value = model_dang_chon_Chat_Gemini;

// --- 3. Lắng nghe thay đổi ---
select_model_Chat_Gemini.onchange = () => {
    model_dang_chon_Chat_Gemini = select_model_Chat_Gemini.value;
    localStorage.setItem('model_cuoi_cung', model_dang_chon_Chat_Gemini);
};

input_api_Chat_Gemini.oninput = () => {
    api_key_Chat_Gemini = input_api_Chat_Gemini.value.trim();
    localStorage.setItem('api_key_Chat_GeminiAI', api_key_Chat_Gemini);
};

area_prompt_Chat_Gemini.oninput = () => {
    system_prompt_Chat_Gemini = area_prompt_Chat_Gemini.value; // Giữ nguyên để kiểm tra khoảng trắng
    localStorage.setItem('system_prompt_Chat_GeminiAI', system_prompt_Chat_Gemini);
};

document.getElementById('bo_API_Gemini').onclick = () => { 
    input_api_Chat_Gemini.value = ""; 
    localStorage.removeItem('api_key_Chat_GeminiAI'); 
    api_key_Chat_Gemini = ""; 
};
document.getElementById('xoa_prompt_Gemini').onclick = () => { 
    area_prompt_Chat_Gemini.value = ""; 
    localStorage.removeItem('system_prompt_Chat_GeminiAI'); 
    system_prompt_Chat_Gemini = ""; 
};

// --- 4. Hàm bổ trợ: Giải mã Prompt từ file ---
async function lay_prompt_tu_file_Chat_Gemini() {
    try {
        const response = await fetch('./prompt_js.txt');
        if (!response.ok) throw new Error("Không tìm thấy file prompt_js.txt");
        const base64_text = await response.text();
        return decodeURIComponent(escape(atob(base64_text.trim()))); // Giải mã Base64 hỗ trợ UTF-8
    } catch (e) {
        console.error("Lỗi triệu hồi linh hồn:", e);
        return ""; // Trả về rỗng nếu lỗi
    }
}

// --- 5. Chức năng Dừng & Xóa sạch ---
btn_dung_Chat_Gemini.onclick = () => { if (controller_Chat_Gemini) controller_Chat_Gemini.abort(); };
btn_dung_Chat_Gemini.ondblclick = () => {
    if (confirm("Công chúa muốn xóa sạch cuộc trò chuyện này sao?")) {
        khung_chat_Chat_Gemini.innerHTML = "";
    }
};

// --- 6. Hàm Hiển Thị Chữ Chạy & Render Markdown ---
async function hien_thi_chu_chay_Chat_Gemini(text, element) {
    let i = 0;
    let typedText = "";
    element.innerHTML = "<b>Lucilla:</b> ";
    return new Promise((resolve) => {
        function type() {
            if (i < text.length) {
                typedText += text.charAt(i);
                element.innerText = "Lucilla: " + typedText;
                i++;
                khung_chat_Chat_Gemini.scrollTop = khung_chat_Chat_Gemini.scrollHeight;
                setTimeout(type, 8);
            } else {
                if (window.marked) {
                    element.innerHTML = `<b>Lucilla:</b><div class="markdown-content">${marked.parse(text)}</div>`;
                } else {
                    element.innerHTML = `<b>Lucilla:</b><br>${text}`;
                }
                khung_chat_Chat_Gemini.scrollTop = khung_chat_Chat_Gemini.scrollHeight;
                resolve();
            }
        }
        type();
    });
}

// --- 7. Hàm Gửi Tin Nhắn (Đã nâng cấp logic Tam Giác Quyền Lực) ---
async function gui_tin_nhan_Chat_Gemini() {
    const user_text_Chat_Gemini = input_msg_Chat_Gemini.value.trim();
    if (!user_text_Chat_Gemini || !api_key_Chat_Gemini) return;

    let final_system_prompt_Chat_Gemini = "";
    const raw_prompt_Chat_Gemini = area_prompt_Chat_Gemini.value;

    // --- LOGIC TAM GIÁC QUYỀN LỰC ---
    if (raw_prompt_Chat_Gemini === " ") {
        // Trường hợp 1: Khoảng trắng -> AI Nguyên bản
        final_system_prompt_Chat_Gemini = "";
    } else if (raw_prompt_Chat_Gemini.trim() !== "") {
        // Trường hợp 2: Có nội dung tùy chỉnh -> Dùng trực tiếp
        final_system_prompt_Chat_Gemini = raw_prompt_Chat_Gemini;
    } else {
        // Trường hợp 3: Trống -> Đọc từ file prompt_js.txt
        final_system_prompt_Chat_Gemini = await lay_prompt_tu_file_Chat_Gemini();
    }

    controller_Chat_Gemini = new AbortController();

    khung_chat_Chat_Gemini.innerHTML += `<div style="text-align:right; margin-bottom:15px;"><span style="background:#38006b; padding:10px; border-radius:10px; display:inline-block; border: 1px solid #d199ff;"><b>Kirara:</b> ${user_text_Chat_Gemini.replace(/\n/g, '<br>')}</span></div>`;
    input_msg_Chat_Gemini.value = "";

    const ai_box_Chat_Gemini = document.createElement("div");
    ai_box_Chat_Gemini.style.marginBottom = "20px";
    ai_box_Chat_Gemini.style.color = "#d199ff";
    ai_box_Chat_Gemini.innerHTML = "<b>Lucilla:</b> <i>Đang suy ngẫm... ✨</i>";
    khung_chat_Chat_Gemini.appendChild(ai_box_Chat_Gemini);

    const url_Chat_Gemini = `https://generativelanguage.googleapis.com/v1beta/models/${model_dang_chon_Chat_Gemini}:generateContent?key=${api_key_Chat_Gemini}`;

    try {
        const response_Chat_Gemini = await fetch(url_Chat_Gemini, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ role: "user", parts: [{ text: user_text_Chat_Gemini }] }],
                system_instruction: { role: "system", parts: [{ text: final_system_prompt_Chat_Gemini }] },
                safetySettings: [
                    { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_NONE" },
                    { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_NONE" },
                    { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_NONE" },
                    { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_ONLY_HIGH" }
                ]
            }),
            signal: controller_Chat_Gemini.signal
        });

        const data_Chat_Gemini = await response_Chat_Gemini.json();
        if (data_Chat_Gemini.error) throw new Error(data_Chat_Gemini.error.message);

        const reply_Chat_Gemini = data_Chat_Gemini.candidates[0].content.parts[0].text;
        await hien_thi_chu_chay_Chat_Gemini(reply_Chat_Gemini, ai_box_Chat_Gemini);

    } catch (e) {
        if (e.name === 'AbortError') {
            ai_box_Chat_Gemini.innerHTML += `<br><i style="color:gray;">[Đã ngắt kết nối]</i>`;
        } else {
            ai_box_Chat_Gemini.style.color = "#ff4d4d";
            ai_box_Chat_Gemini.innerHTML = `<b>Lucilla:</b> [Lỗi: ${e.message}]`;
        }
    } finally {
        controller_Chat_Gemini = null;
        khung_chat_Chat_Gemini.scrollTop = khung_chat_Chat_Gemini.scrollHeight;
    }
}

// --- 8. Gán sự kiện ---
btn_gui_Chat_Gemini.onclick = gui_tin_nhan_Chat_Gemini;



