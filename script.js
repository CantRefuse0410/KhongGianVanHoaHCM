// Dữ liệu từ data.js được tải trước (KGVH_DOC_DATA)
const KGVH_DATA = {
    tacPham: window.KGVH_DOC_DATA ? window.KGVH_DOC_DATA.tacPham : [],
    hanhTrinh: window.KGVH_DOC_DATA ? window.KGVH_DOC_DATA.hanhTrinh : [],
    loiDay: window.KGVH_DOC_DATA ? window.KGVH_DOC_DATA.loiDay : [],
    sach: [
        {
            ten: "Búp sen xanh",
            tacGia: "Sơn Tùng",
            tomTat: "Tiểu thuyết lịch sử tái hiện lại sinh động quãng đời thơ ấu và thanh xuân của Bác Hồ.",
            baiHoc: [
                "Lòng yêu nước, thương dân",
                "Ý chí tự học và rèn luyện"
            ],
            link: "#"
        }
    ],
    gocSuyNgam: "Thế hệ thanh niên ngày nay cần không ngừng học tập, trau dồi đạo đức, noi gương Chủ tịch Hồ Chí Minh vĩ đại.",
    baiHat: [
        { ten: "Ai yêu Bác Hồ Chí Minh hơn các em nhi đồng", nhacSi: "Phong Nhã", file: "assets/ca-khuc/Ai yêu Bác Hồ Chí Minh hơn các em nhi đồng - Nhạc sĩ Phong Nhã.mp4" },
        { ten: "Bác Hồ - Người cho em tất cả", nhacSi: "Hoàng Long, Hoàng Lân", file: "assets/ca-khuc/Bác Hồ - Người cho em tất cả - Nhạc sĩ Hoàng Long, Hoàng Lân.mp4" },
        { ten: "Bác Hồ một tình yêu bao la", nhacSi: "Thuận Yến", file: "assets/ca-khuc/Bác Hồ một tình yêu bao la - Nhạc sĩ Thuận Yến.mp4" },
        { ten: "Bác Hồ sống mãi với Tây Nguyên", nhacSi: "Lê Lôi", file: "assets/ca-khuc/Bác Hồ sống mãi với Tây Nguyên - Nhạc sĩ Lê Lôi.mp4" },
        { ten: "Bác đang cùng chúng cháu hành quân", nhacSi: "Huy Thục", file: "assets/ca-khuc/Bác đang cùng chúng cháu hành quân - Nhạc sĩ Huy Thục.mp4" },
        { ten: "Ca ngợi Hồ Chủ tịch", nhacSi: "Văn Cao", file: "assets/ca-khuc/Ca ngợi Hồ Chủ tịch - Nhạc sĩ Văn Cao.mp4" },
        { ten: "Dấu chân phía trước", nhacSi: "Nhạc: Phạm Minh Tuấn, Thơ: Hồ Thi Ca", file: "assets/ca-khuc/Dấu chân phía trước - Nhạc Phạm Minh Tuấn, Thơ Hồ Thi Ca.mp4" },
        { ten: "Hồ Chí Minh đẹp nhất tên Người", nhacSi: "Trần Kiết Tường", file: "assets/ca-khuc/Hồ Chí Minh đẹp nhất tên Người - Nhạc sĩ Trần Kiết Tường.mp4" },
        { ten: "Lời Bác dặn trước lúc đi xa", nhacSi: "Trần Hoàn", file: "assets/ca-khuc/Lời Bác dặn trước lúc đi xa - Nhạc sĩ Trần Hoàn.mp4" },
        { ten: "Miền Nam nhớ mãi ơn Người", nhacSi: "Nhạc: Lưu Cầu, Thơ: Trần Nhật Lam", file: "assets/ca-khuc/Miền Nam nhớ mãi ơn Người - Nhạc sĩ Lưu Cầu, Thơ Trần Nhật Lam.mp4" },
        { ten: "Người là niềm tin tất thắng", nhacSi: "Chu Minh", file: "assets/ca-khuc/Người là niềm tin tất thắng - Nhạc sĩ Chu Minh.mp4" },
        { ten: "Như có Bác Hồ trong ngày vui Đại thắng", nhacSi: "Phạm Tuyên", file: "assets/ca-khuc/Như có Bác Hồ trong ngày vui Đại thắng - Nhạc sĩ Phạm Tuyên.mp4" },
        { ten: "Tiếng hát từ thành phố mang tên Người", nhacSi: "Cao Việt Bách, Đăng Trung", file: "assets/ca-khuc/Tiếng hát từ thành phố mang tên Người - Nhạc sĩ Cao Việt Bách, Đăng Trung.mp4" },
        { ten: "Trông cây lại nhớ đến Người", nhacSi: "Đỗ Nhuận", file: "assets/ca-khuc/Trông cây lại nhớ đến Người - Nhạc sĩ Đỗ Nhuận.mp4" },
        { ten: "Từ làng Sen", nhacSi: "Phạm Tuyên", file: "assets/ca-khuc/Từ làng Sen - Nhạc sĩ Phạm Tuyên.mp4" },
        { ten: "Đêm nghe hát đò đưa nhớ Bác", nhacSi: "An Thuyên", file: "assets/ca-khuc/Đêm nghe hát đò đưa nhớ Bác - Nhạc sĩ An Thuyên.mp4" },
        { ten: "Đêm qua em mơ gặp Bác Hồ", nhacSi: "Xuân Giao", file: "assets/ca-khuc/Đêm qua em mơ gặp Bác Hồ - Nhạc sĩ Xuân Giao.mp4" }
    ]
};

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initModal();
    renderTacPhamIntro();
    renderTacPham();
    renderSach();
    renderHanhTrinh();
    renderLoiDay();
    renderBaiHat();
});

// MODAL LOGIC
let modal, modalBody, spanClose;

function initModal() {
    modal = document.getElementById("doc-modal");
    modalBody = document.getElementById("modal-body");
    spanClose = document.getElementsByClassName("modal-close")[0];

    function closeModal() {
        if (modal) modal.style.display = "none";
        if (modalBody) modalBody.innerHTML = "";
        document.body.style.overflow = "";
    }

    if (spanClose) {
        spanClose.onclick = closeModal;
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }
}

function getYouTubeEmbedUrl(url) {
    if (!url) return '';
    const unescaped = url.replace(/&amp;/g, '&');
    const match = unescaped.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=0&rel=0` : '';
}

function openModal(title, htmlContent, extraTopHtml = '') {
    if (modal && modalBody) {
        // Loại bỏ các đoạn văn bản trống, thẻ &nbsp; và xuống dòng dư thừa
        let cleanedContent = (htmlContent || '')
            .replace(/<p>\s*(?:&nbsp;|<br\s*\/?>)*\s*<\/p>/gi, '')
            .replace(/(?:<br\s*\/?>\s*){2,}/gi, '<br>');

        // Nhúng trực tiếp khung phát Video YouTube (Embedded Iframe) vào trang/modal - Loại bỏ hoàn toàn nút bấm
        cleanedContent = cleanedContent.replace(
            /(?:<p>\s*(?:<strong>)?\*?\s*Video minh họa:?(?:<\/strong>)?\s*<\/p>\s*)?<p>\s*(?:<strong>)?<a href="([^"]+)"[^>]*>[\s\S]*?<\/a>(?:<\/strong>)?\s*<\/p>/gi,
            (match, url) => {
                const embedUrl = getYouTubeEmbedUrl(url);
                if (embedUrl) {
                    return `<div class="video-embed-block">
                        <h4 class="video-embed-title">🎬 Video Minh Họa Lịch Sử:</h4>
                        <div class="video-embed-box">
                            <iframe src="${embedUrl}" title="Video minh họa lịch sử" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="video-embed-iframe"></iframe>
                        </div>
                    </div>`;
                }
                return match;
            }
        );

        // Fallback nhúng video cho các liên kết YouTube hoặc nút video còn lại
        cleanedContent = cleanedContent.replace(
            /(?:<div class="video-btn-box">)?\s*<a [^>]*href="(https?:\/\/(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)[^"]+)"[^>]*>[\s\S]*?<\/a>\s*(?:<\/div>)?/gi,
            (match, url) => {
                const embedUrl = getYouTubeEmbedUrl(url);
                if (embedUrl) {
                    return `<div class="video-embed-block">
                        <div class="video-embed-box">
                            <iframe src="${embedUrl}" title="Video minh họa lịch sử" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="video-embed-iframe"></iframe>
                        </div>
                    </div>`;
                }
                return match;
            }
        );

        const upperTitle = (title || '').toUpperCase();
        const upperHtml = (htmlContent || '').toUpperCase();
        let isCentered = upperTitle.includes('LỜI KÊU GỌI ĐỒNG BÀO') ||
                         upperTitle.includes('LỜI KÊU GỌI TỔ QUỐC') ||
                         upperTitle.includes('NHẬT KÝ TRONG TÙ') ||
                         upperHtml.includes('LỜI KÊU GỌI ĐỒNG BÀO') ||
                         upperHtml.includes('LỜI KÊU GỌI TỔ QUỐC') ||
                         upperHtml.includes('NHẬT KÝ TRONG TÙ');

        let bodyHtml = `<h2>${title}</h2>` + (extraTopHtml || '') + cleanedContent;
        if (isCentered) {
            bodyHtml = `<div class="doc-text-center">${bodyHtml}</div>`;
        }

        modalBody.innerHTML = bodyHtml;
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    }
}

window.openDocModal = function(category, index) {
    const item = KGVH_DATA[category][index];
    if (item && item.html) {
        let title = item.ten || item.year || item.title || "Chi tiết tài liệu";
        if (category === 'loiDay') {
            title = "Lời dạy của Chủ tịch Hồ Chí Minh";
        }

        let downloadHtml = '';
        let fileUrl = item.fileUrl;
        if (!fileUrl && item.rawName) {
            if (category === 'tacPham') fileUrl = 'assets/docs/tac-pham/' + item.rawName + '.docx';
            else if (category === 'hanhTrinh') fileUrl = 'assets/docs/hanh-trinh/' + item.rawName + '.docx';
            else if (category === 'loiDay') fileUrl = 'assets/docs/loi-day/' + item.rawName + '.docx';
        }
        
        if (fileUrl) {
            downloadHtml = `<div class="modal-download-bar">
                <a href="${fileUrl}" download class="btn-download">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                    </svg>
                    Tải về tài liệu văn bản gốc (.docx)
                </a>
            </div>`;
        }

        openModal(title, item.html, downloadHtml);
    }
}

// FUNCTIONS
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const allLinks = document.querySelectorAll('.nav-links a');

    // Tự động nhận diện trang hiện tại để highlight menu
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    
    allLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
        } else if (!href.startsWith('#') && href !== currentPath) {
            link.classList.remove('active');
        }
    });

    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileBtn.classList.toggle('active');
        });
    }
}

function getPlainText(html, maxLen) {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    
    // Loại bỏ bảng biểu khi trích xuất đoạn tóm tắt ngoài thẻ
    const tables = tmp.querySelectorAll('table');
    tables.forEach(t => t.remove());

    const text = (tmp.textContent || tmp.innerText || '').replace(/\s+/g, ' ').trim();
    if (!maxLen || text.length <= maxLen) return text;
    return text.substring(0, maxLen).trimEnd() + '…';
}

function getTimelineTitle(ht) {
    if (!ht) return '';
    let raw = ht.content || ht.year || '';
    raw = raw.replace(/^Giai\s*đoạn\s*(?:từ\s*năm\s*)?\d{4}\s*[-–—_]?\s*(?:đến\s*năm\s*)?\d{4}\s*/i, '');
    raw = raw.replace(/^Hành\s*trình\s*\d{4}\s*[-–—_]?\s*\d{4}\s*/i, '');
    raw = raw.replace(/-\s*Sao\s*chép/i, '');
    raw = raw.replace(/^I\.\s*/i, '');
    return raw.trim();
}

// Render nội dung giới thiệu từ file "Tác phẩm tiêu biểu(giới thiệu)" lên phần mô tả section
function renderTacPhamIntro() {
    const introEntry = KGVH_DATA.tacPham.find(tp =>
        tp.ten && tp.ten.toLowerCase().includes('giới thiệu')
    );
    const container = document.getElementById('tac-pham-intro');
    if (!container) return;
    if (introEntry && introEntry.html) {
        // Lấy text thuần, hiển thị tối đa 600 ký tự
        const introText = getPlainText(introEntry.html, 600);
        container.innerHTML = `<p class="section-intro-text">${introText}</p>`;
    } else {
        container.innerHTML = '';
    }
}

function renderTacPham() {
    const container = document.getElementById('tac-pham-container');
    if (!container) return;
    // Lọc bỏ entry giới thiệu khỏi lưới card
    const works = KGVH_DATA.tacPham.filter(tp =>
        !tp.ten || !tp.ten.toLowerCase().includes('giới thiệu')
    );
    // Xây lại index mapping để openDocModal vẫn hoạt động đúng
    container.innerHTML = works.map((tp) => {
        const realIndex = KGVH_DATA.tacPham.indexOf(tp);
        return `
        <div class="card clickable-card" onclick="openDocModal('tacPham', ${realIndex})">
            <div class="card-year">${tp.nam || ''}</div>
            <h4 class="card-title">${tp.ten}</h4>
        </div>
    `;
    }).join('');
}

function renderSach() {
    const container = document.getElementById('sach-container');
    if (!container) return;
    container.innerHTML = KGVH_DATA.sach.map(s => `
        <div class="card book-card">
            <h4 class="card-title">${s.ten}</h4>
            <p class="book-author">Tác giả: ${s.tacGia}</p>
            <p class="card-content">${s.tomTat}</p>
            <div class="book-lessons">
                <p><strong>Bài học hành động:</strong></p>
                <ul>
                    ${s.baiHoc.map(bh => `<li>${bh}</li>`).join('')}
                </ul>
            </div>
            <a href="${s.link}" class="book-link" target="_blank" rel="noopener noreferrer">Đọc thử / Xem nguồn &rarr;</a>
        </div>
    `).join('');
}

function renderHanhTrinh() {
    const container = document.getElementById('timeline-container');
    if (!container) return;

    container.innerHTML = KGVH_DATA.hanhTrinh.map((ht, i) => {
        const sideClass = i % 2 === 0 ? 'left' : 'right';
        const imgHtml = ht.img ? `<img src="${ht.img}" alt="${ht.year}" class="timeline-img"/>` : '';
        
        let displayYear = ht.year || '';
        if (displayYear.includes('Giới thiệu')) {
            displayYear = 'Tổng quan';
        } else if (/^\s*(\d{4})\s*[-–—]\s*(\d{4})\s*$/.test(displayYear.trim())) {
            displayYear = displayYear.trim().replace(/^(\d{4})\s*[-–—]\s*(\d{4})$/, 'Từ năm $1 đến năm $2');
        }

        const stageTitle = getTimelineTitle(ht);
        // Trích xuất tóm tắt ngắn gọn 160 ký tự từ nội dung HTML chi tiết
        const summary = ht.html ? getPlainText(ht.html, 160) : (ht.content || '');

        return `
            <div class="timeline-item ${sideClass}">
                <div class="timeline-content clickable-card" onclick="openDocModal('hanhTrinh', ${i})">
                    <div class="timeline-year">${displayYear}</div>
                    ${stageTitle ? `<h4 class="timeline-stage-title">${stageTitle}</h4>` : ''}
                    <p class="timeline-text">${summary}</p>
                    ${imgHtml}
                    <div class="timeline-more-btn">
                        <span>Xem chi tiết lịch sử</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                        </svg>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function parseLoiDay(ld) {
    if (!ld) return { quote: '', source: '' };
    if (!ld.html) return { quote: ld.title || '', source: '' };
    
    const tmp = document.createElement('div');
    tmp.innerHTML = ld.html;
    
    const pElements = tmp.querySelectorAll('p');
    let quote = '';
    let source = '';
    
    if (pElements.length >= 1) {
        quote = (pElements[0].textContent || pElements[0].innerText || '').trim();
    }
    if (pElements.length >= 2) {
        source = (pElements[1].textContent || pElements[1].innerText || '').trim();
    } else if (!quote) {
        quote = (tmp.textContent || tmp.innerText || '').trim();
    }
    
    return { quote, source };
}

function renderLoiDay() {
    const container = document.getElementById('quotes-container');
    if (!container) return;

    container.innerHTML = KGVH_DATA.loiDay.map((ld, i) => {
        const { quote, source } = parseLoiDay(ld);
        const imgHtml = ld.img ? `<img src="${ld.img}" alt="${ld.title || 'Lời dạy'}" class="quote-card-img"/>` : '';

        return `
            <div class="quote-card clickable-card" onclick="openDocModal('loiDay', ${i})">
                ${imgHtml}
                ${quote ? `<div class="quote-card-text">${quote}</div>` : ''}
                ${source ? `<div class="quote-card-source">${source}</div>` : ''}
            </div>
        `;
    }).join('');
}

function renderGocSuyNgam() {
    const container = document.getElementById('forum-content');
    if (container) {
        container.innerHTML = `<p>${KGVH_DATA.gocSuyNgam}</p>`;
    }
}

function renderBaiHat() {
    const container = document.getElementById('songs-container');
    if (!container) return;
    const musicIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"><path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13s1.12-2 2.5-2 2.5.895 2.5 2"/><path fill-rule="evenodd" d="M6 3v10H5V3z"/><path d="M5 2.82a1 1 0 0 1 .804-.98l6-1.2A1 1 0 0 1 13 1.62V4.5L5 6.1z"/></svg>`;
    
    container.innerHTML = KGVH_DATA.baiHat.map(bh => `
        <div class="song-item">
            <div class="song-header-line">
                <div class="song-icon">${musicIcon}</div>
                <div class="song-info">
                    <h4>${bh.ten}</h4>
                    <p class="song-artist">Nhạc sĩ: ${bh.nhacSi}</p>
                </div>
            </div>
            ${bh.file ? `
            <div class="song-player-box">
                <video controls preload="metadata" class="song-media-player">
                    <source src="${encodeURI(bh.file)}" type="video/mp4">
                    Trình duyệt của bạn không hỗ trợ phát media.
                </video>
            </div>
            ` : ''}
        </div>
    `).join('');
}
