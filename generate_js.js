const fs = require('fs');
const path = require('path');

const base = __dirname;
const mapping = JSON.parse(fs.readFileSync(path.join(base, 'mapping.json'), 'utf8'));

// Format tacPham
const tacPham = mapping.t1.map(t => {
    let ten = t.orig.replace('.docx', '');
    return {
        ten: ten,
        nam: '',
        tomTat: 'Nhấn vào link bên dưới để xem chi tiết tác phẩm.',
        baiHoc: '',
        link: t.safe
    };
});

// Format hanhTrinh (we use h1 for timeline)
// Match doc and img for each period
const h1Docs = mapping.h1.filter(f => f.type === 'doc').sort((a,b) => a.orig.localeCompare(b.orig));
const hanhTrinh = h1Docs.map(doc => {
    // try to find matching image
    // doc.orig e.g. "1.Hành trình 1911 1920..."
    let prefixMatch = doc.orig.match(/^([I0-9]+)\./);
    let img = '';
    if (prefixMatch) {
        let prefix = prefixMatch[1] + '.';
        let imgObj = mapping.h1.find(f => f.type === 'img' && f.orig.startsWith(prefix));
        if (imgObj) img = imgObj.safe;
    }
    
    let year = '';
    let yearMatch = doc.orig.match(/([0-9]{4})\s*([0-9]{4})/);
    if (yearMatch) {
        year = `Từ năm ${yearMatch[1]} đến năm ${yearMatch[2]}`;
    } else {
        year = doc.orig.replace('.docx', '').substring(0, 20) + '...';
    }

    return {
        year: year,
        content: doc.orig.replace('.docx', '').replace(/^([I0-9]+)\./, ''),
        img: img,
        link: doc.safe
    };
});

// Format loiDay
const l1Docs = mapping.l1.filter(f => f.type === 'doc').sort((a,b) => a.orig.localeCompare(b.orig));
const loiDay = l1Docs.map(doc => {
    let baseName = doc.orig.replace('.docx', '');
    let imgObj = mapping.l1.find(f => f.type === 'img' && f.orig.startsWith(baseName));
    return {
        content: `Nhấn vào link để đọc tài liệu: ${baseName}`,
        source: '',
        img: imgObj ? imgObj.safe : '',
        link: doc.safe
    };
});

const scriptContent = `// DATA GENERATED AUTOMATICALLY
const KGVH_DATA = {
    tacPham: ${JSON.stringify(tacPham, null, 4)},
    hanhTrinh: ${JSON.stringify(hanhTrinh, null, 4)},
    loiDay: ${JSON.stringify(loiDay, null, 4)},
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
        { ten: "Hồ Chí Minh đẹp nhất tên Người", nhacSi: "Trần Kiết Tường" },
        { ten: "Bác Hồ một tình yêu bao la", nhacSi: "Thuận Yến" },
        { ten: "Ca ngợi Hồ Chủ tịch", nhacSi: "Văn Cao" }
    ]
};

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    renderTacPham();
    renderSach();
    renderHanhTrinh();
    renderLoiDay();
    renderGocSuyNgam();
    renderBaiHat();
});

// FUNCTIONS
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function renderTacPham() {
    const container = document.getElementById('tac-pham-container');
    container.innerHTML = KGVH_DATA.tacPham.map(tp => \`
        <div class="card">
            <div class="card-year">\${tp.nam}</div>
            <h4 class="card-title">\${tp.ten}</h4>
            <p class="card-content">\${tp.tomTat}</p>
            <a href="\${tp.link}" target="_blank" class="book-link" style="margin-top:10px; display:inline-block;">Xem tài liệu &rarr;</a>
        </div>
    \`).join('');
}

function renderSach() {
    const container = document.getElementById('sach-container');
    container.innerHTML = KGVH_DATA.sach.map(s => \`
        <div class="card book-card">
            <h4 class="card-title">\${s.ten}</h4>
            <p class="book-author">Tác giả: \${s.tacGia}</p>
            <p class="card-content">\${s.tomTat}</p>
            <div class="book-lessons">
                <p><strong>Bài học hành động:</strong></p>
                <ul>
                    \${s.baiHoc.map(bh => \`<li>\${bh}</li>\`).join('')}
                </ul>
            </div>
            <a href="\${s.link}" class="book-link" target="_blank" rel="noopener noreferrer">Đọc thử / Xem nguồn &rarr;</a>
        </div>
    \`).join('');
}

function renderHanhTrinh() {
    const container = document.getElementById('timeline-container');
    container.innerHTML = KGVH_DATA.hanhTrinh.map((ht, index) => {
        const sideClass = index % 2 === 0 ? 'left' : 'right';
        const imgHtml = ht.img ? \`<img src="\${ht.img}" alt="\${ht.year}" style="width:100%; border-radius:8px; margin-top:10px;"/>\` : '';
        return \`
            <div class="timeline-item \${sideClass}">
                <div class="timeline-content">
                    <h3 class="timeline-year">\${ht.year}</h3>
                    <p class="timeline-text">\${ht.content}</p>
                    \${imgHtml}
                    <a href="\${ht.link}" target="_blank" class="btn btn-primary" style="margin-top:10px; font-size:0.9rem; padding:8px 16px;">Chi tiết</a>
                </div>
            </div>
        \`;
    }).join('');
}

function renderLoiDay() {
    const container = document.getElementById('quotes-container');
    container.innerHTML = KGVH_DATA.loiDay.map(ld => {
        const imgHtml = ld.img ? \`<img src="\${ld.img}" alt="Lời dạy" style="width:100%; border-radius:8px; margin-bottom:10px;"/>\` : '';
        return \`
        <div class="quote-card">
            \${imgHtml}
            <a href="\${ld.link}" target="_blank" class="book-link" style="display:block; text-align:center; margin-top:10px;">Xem tài liệu (.docx)</a>
        </div>
        \`;
    }).join('');
}

function renderGocSuyNgam() {
    const container = document.getElementById('forum-content');
    container.innerHTML = \`<p>\${KGVH_DATA.gocSuyNgam}</p>\`;
}

function renderBaiHat() {
    const container = document.getElementById('songs-container');
    const musicIcon = \`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2"/><path fill-rule="evenodd" d="M9 3v10H8V3z"/><path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5z"/></svg>\`;
    
    container.innerHTML = KGVH_DATA.baiHat.map(bh => \`
        <div class="song-item">
            <div class="song-icon">\${musicIcon}</div>
            <div class="song-info">
                <h4>\${bh.ten}</h4>
                <p>Nhạc sĩ: \${bh.nhacSi}</p>
            </div>
        </div>
    \`).join('');
}
`;

fs.writeFileSync(path.join(base, 'script.js'), scriptContent);
console.log('script.js updated!');
