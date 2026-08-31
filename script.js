// Dữ liệu từ data.js được tải trước (KGVH_DOC_DATA)
const KGVH_DATA = {
    tacPham: window.KGVH_DOC_DATA ? window.KGVH_DOC_DATA.tacPham : [],
    hanhTrinh: window.KGVH_DOC_DATA ? window.KGVH_DOC_DATA.hanhTrinh : [],
    loiDay: window.KGVH_DOC_DATA ? window.KGVH_DOC_DATA.loiDay : [],
    sach: [
        {
            ten: "Đường Kách mệnh (1927)",
            tacGia: "Chủ tịch Hồ Chí Minh",
            tomTat: "Tác phẩm lý luận chính trị quan trọng đặt nền tảng tư tưởng, lý luận và tổ chức cho sự ra đời của Đảng Cộng sản Việt Nam.",
            cover: "assets/sach/covers/ĐƯỜNG CÁCH MỆNH.png",
            pdf: "assets/sach/pdf/ĐƯỜNG CÁCH MỆNH.pdf"
        },
        {
            ten: "Bản án chế độ thực dân Pháp (1925)",
            tacGia: "Chủ tịch Hồ Chí Minh",
            tomTat: "Tác phẩm lý luận tố cáo sắc bén bản chất tàn bạo, áp bức của chủ nghĩa thực dân, thức tỉnh phong trào giải phóng dân tộc.",
            cover: "assets/sach/covers/BẢN ÁN CHẾ ĐỘ THỰC DÂN PHÁP.png",
            pdf: "assets/sach/pdf/BẢN ÁN CHẾ ĐỘ THỰC DÂN PHÁP.pdf"
        },
        {
            ten: "Lịch sử nước ta (1942)",
            tacGia: "Chủ tịch Hồ Chí Minh",
            tomTat: "Tác phẩm diễn ca lịch sử gồm 236 câu thơ lục bát nêu cao truyền thống yêu nước và tinh thần đấu tranh chống ngoại xâm.",
            cover: "assets/sach/covers/LỊCH SỬ NƯỚC TA.png",
            pdf: "assets/sach/pdf/LỊCH SỬ NƯỚC TA.pdf"
        },
        {
            ten: "Nhật ký trong tù (1942 – 1943)",
            tacGia: "Chủ tịch Hồ Chí Minh",
            tomTat: "Tập thơ 133 bài thơ chữ Hán khắc họa tâm hồn cao đẹp, bản lĩnh kiên cường và tinh thần thép của người chiến sĩ cộng sản.",
            cover: "assets/sach/covers/NHẬT KÝ TRONG TÙ.png",
            pdf: "assets/sach/pdf/NHẬT KÝ TRONG TÙ.pdf"
        },
        {
            ten: "Di chúc của Chủ tịch Hồ Chí Minh",
            tacGia: "Chủ tịch Hồ Chí Minh",
            tomTat: "Văn kiện lịch sử thiêng liêng đúc kết tư tưởng, đạo đức và tình thương vô hạn của Bác dành cho toàn Đảng, toàn dân.",
            cover: "assets/sach/covers/DI CHÚC CỦA CHỦ TỊCH HCM.png",
            pdf: "assets/sach/pdf/DI CHÚC CẢU CHỦ TỊCH HỒ CHÍ MINH.pdf"
        },
        {
            ten: "Sửa đổi lối làm việc (10/1947)",
            tacGia: "Chủ tịch Hồ Chí Minh",
            tomTat: "Tác phẩm kinh điển về phong cách làm việc, rèn luyện đạo đức cách mạng và công tác cán bộ của Đảng.",
            cover: "assets/sach/covers/SỦA ĐỔI LỐI LÀM VIỆC.png",
            pdf: "assets/sach/pdf/SỬA ĐỔI LỐI LÀM VIỆC.pdf"
        },
        {
            ten: "Lời Bác dạy Thanh niên",
            tacGia: "Chủ tịch Hồ Chí Minh",
            tomTat: "Tuyển tập những tư tưởng, lời căn dặn ân tình của Bác dành cho thế hệ trẻ – rường cột của nước nhà.",
            cover: "assets/sach/covers/LỜI BÁC DẠY THANH NIÊN.png",
            pdf: "assets/sach/pdf/LỜI BÁC DẠY THANH NIÊN.pdf"
        },
        {
            ten: "Về đạo đức cách mạng",
            tacGia: "Chủ tịch Hồ Chí Minh",
            tomTat: "Tác phẩm lý luận giáo dục phẩm chất Cần - Kiệm - Liêm - Chính - Chí công vô tư cho cán bộ, đảng viên.",
            cover: "assets/sach/covers/VỀ ĐẠO ĐỨC CÁCH MẠNG.png",
            pdf: "assets/sach/pdf/VỀ ĐẠO ĐỨC CÁCH MẠNG.pdf"
        },
        {
            ten: "Bàn về Binh pháp Tôn Tử",
            tacGia: "Chủ tịch Hồ Chí Minh",
            tomTat: "Tác phẩm nghiên cứu, vận dụng nghệ thuật quân sự độc đáo của Bác Hồ phục vụ sự nghiệp giải phóng dân tộc.",
            cover: "assets/sach/covers/BÀN VỀ BINH PHÁP TÔN TỬ.png",
            pdf: "assets/sach/pdf/BÀN VỀ BINH PHÁP TÔN TỬ.pdf"
        },
        {
            ten: "Những lời viết của Bác Hồ trên báo Nhân Dân",
            tacGia: "Chủ tịch Hồ Chí Minh",
            tomTat: "Tập hợp các bài báo chính trị, bài viết ngắn gọn súc tích của Bác hướng dẫn và động viên phong trào thi đua.",
            cover: "assets/sach/covers/NHỮNG LỜI VIẾT CỦA BÁC HỒ TRÊN BÁO NHÂN DÂN.png",
            pdf: "assets/sach/pdf/NHỮNG LỜI VIẾT CỦA BÁC HỒ TRÊN BÁO NHÂN DÂN.pdf"
        },
        {
            ten: "Hồ Chí Minh Toàn tập - Tập 1 (1912 - 1925)",
            tacGia: "Chủ tịch Hồ Chí Minh (NXB Chính trị quốc gia Sự thật)",
            tomTat: "Toàn tập văn kiện, bài viết, tác phẩm của Chủ tịch Hồ Chí Minh giai đoạn 1912 – 1925.",
            cover: "assets/sach/covers/TẬP 1.png",
            pdf: "assets/sach/pdf/HỒ CHÍ MINH TOÀN TẬP-TẬP 1.pdf"
        },
        {
            ten: "Hồ Chí Minh Toàn tập - Tập 2 (1925 - 1930)",
            tacGia: "Chủ tịch Hồ Chí Minh (NXB Chính trị quốc gia Sự thật)",
            tomTat: "Toàn tập văn kiện, bài viết, tác phẩm của Chủ tịch Hồ Chí Minh giai đoạn 1925 – 1930.",
            cover: "assets/sach/covers/TẬP 2.png",
            pdf: "assets/sach/pdf/HỒ CHÍ MINH TOÀN TẬP-TẬP 2.pdf"
        },
        {
            ten: "Hồ Chí Minh Toàn tập - Tập 3 (1930 - 1945)",
            tacGia: "Chủ tịch Hồ Chí Minh (NXB Chính trị quốc gia Sự thật)",
            tomTat: "Toàn tập văn kiện, bài viết, tác phẩm của Chủ tịch Hồ Chí Minh giai đoạn 1930 – 1945.",
            cover: "assets/sach/covers/TẬP 3.png",
            pdf: "assets/sach/pdf/HỒ CHÍ MINH TOÀN TẬP-TẬP 3.pdf"
        },
        {
            ten: "Hồ Chí Minh Toàn tập - Tập 4 (1945 - 1946)",
            tacGia: "Chủ tịch Hồ Chí Minh (NXB Chính trị quốc gia Sự thật)",
            tomTat: "Toàn tập văn kiện, bài viết, tác phẩm của Chủ tịch Hồ Chí Minh giai đoạn 1945 – 1946.",
            cover: "assets/sach/covers/TẬP 4.png",
            pdf: "assets/sach/pdf/HỒ CHÍ MINH TOÀN TẬP-TẬP 4.pdf"
        },
        {
            ten: "Hồ Chí Minh Toàn tập - Tập 5 (1947 - 1948)",
            tacGia: "Chủ tịch Hồ Chí Minh (NXB Chính trị quốc gia Sự thật)",
            tomTat: "Toàn tập văn kiện, bài viết, tác phẩm của Chủ tịch Hồ Chí Minh giai đoạn 1947 – 1948.",
            cover: "assets/sach/covers/TẬP 5.png",
            pdf: "assets/sach/pdf/HỒ CHÍ MINH TOÀN TẬP-TẬP 5.pdf"
        },
        {
            ten: "Hồ Chí Minh Toàn tập - Tập 6 (1949 - 1950)",
            tacGia: "Chủ tịch Hồ Chí Minh (NXB Chính trị quốc gia Sự thật)",
            tomTat: "Toàn tập văn kiện, bài viết, tác phẩm của Chủ tịch Hồ Chí Minh giai đoạn 1949 – 1950.",
            cover: "assets/sach/covers/TẬP 6.png",
            pdf: "assets/sach/pdf/HỒ CHÍ MINH TOÀN TẬP-TẬP 6.pdf"
        },
        {
            ten: "Hồ Chí Minh Toàn tập - Tập 7 (1951 - 1952)",
            tacGia: "Chủ tịch Hồ Chí Minh (NXB Chính trị quốc gia Sự thật)",
            tomTat: "Toàn tập văn kiện, bài viết, tác phẩm của Chủ tịch Hồ Chí Minh giai đoạn 1951 – 1952.",
            cover: "assets/sach/covers/TẬP 7.png",
            pdf: "assets/sach/pdf/HỒ CHÍ MINH TOÀN TẬP-TẬP 7.pdf"
        },
        {
            ten: "Hồ Chí Minh Toàn tập - Tập 8 (1953 - 1954)",
            tacGia: "Chủ tịch Hồ Chí Minh (NXB Chính trị quốc gia Sự thật)",
            tomTat: "Toàn tập văn kiện, bài viết, tác phẩm của Chủ tịch Hồ Chí Minh giai đoạn 1953 – 1954.",
            cover: "assets/sach/covers/TẬP 8.png",
            pdf: "assets/sach/pdf/HỒ CHÍ MINH TOÀN TẬP-TẬP 8.pdf"
        },
        {
            ten: "Hồ Chí Minh Toàn tập - Tập 9 (1954 - 1955)",
            tacGia: "Chủ tịch Hồ Chí Minh (NXB Chính trị quốc gia Sự thật)",
            tomTat: "Toàn tập văn kiện, bài viết, tác phẩm của Chủ tịch Hồ Chí Minh giai đoạn 1954 – 1955.",
            cover: "assets/sach/covers/TẬP 9.png",
            pdf: "assets/sach/pdf/HỒ CHÍ MINH TOÀN TẬP-TẬP 9.pdf"
        },
        {
            ten: "Hồ Chí Minh Toàn tập - Tập 10 (1955 - 1957)",
            tacGia: "Chủ tịch Hồ Chí Minh (NXB Chính trị quốc gia Sự thật)",
            tomTat: "Toàn tập văn kiện, bài viết, tác phẩm của Chủ tịch Hồ Chí Minh giai đoạn 1955 – 1957.",
            cover: "assets/sach/covers/TẬP 10.png",
            pdf: "assets/sach/pdf/HỒ CHÍ MINH TOÀN TẬP-TẬP 10.pdf"
        },
        {
            ten: "Hồ Chí Minh Toàn tập - Tập 11 (1957 - 1958)",
            tacGia: "Chủ tịch Hồ Chí Minh (NXB Chính trị quốc gia Sự thật)",
            tomTat: "Toàn tập văn kiện, bài viết, tác phẩm của Chủ tịch Hồ Chí Minh giai đoạn 1957 – 1958.",
            cover: "assets/sach/covers/TẬP 11.png",
            pdf: "assets/sach/pdf/HỒ CHÍ MINH TOÀN TẬP-TẬP 11.pdf"
        },
        {
            ten: "Hồ Chí Minh Toàn tập - Tập 12 (1959 - 1960)",
            tacGia: "Chủ tịch Hồ Chí Minh (NXB Chính trị quốc gia Sự thật)",
            tomTat: "Toàn tập văn kiện, bài viết, tác phẩm của Chủ tịch Hồ Chí Minh giai đoạn 1959 – 1960.",
            cover: "assets/sach/covers/TẬP 12.png",
            pdf: "assets/sach/pdf/HỒ CHÍ MINH TOÀN TẬP-TẬP 12.pdf"
        },
        {
            ten: "Hồ Chí Minh Toàn tập - Tập 13 (1961 - 1962)",
            tacGia: "Chủ tịch Hồ Chí Minh (NXB Chính trị quốc gia Sự thật)",
            tomTat: "Toàn tập văn kiện, bài viết, tác phẩm của Chủ tịch Hồ Chí Minh giai đoạn 1961 – 1962.",
            cover: "assets/sach/covers/TẬP 13.png",
            pdf: "assets/sach/pdf/HỒ CHÍ MINH TOÀN TẬP-TẬP 13.pdf"
        },
        {
            ten: "Hồ Chí Minh Toàn tập - Tập 14 (1963 - 1965)",
            tacGia: "Chủ tịch Hồ Chí Minh (NXB Chính trị quốc gia Sự thật)",
            tomTat: "Toàn tập văn kiện, bài viết, tác phẩm của Chủ tịch Hồ Chí Minh giai đoạn 1963 – 1965.",
            cover: "assets/sach/covers/TẬP 14.png",
            pdf: "assets/sach/pdf/HỒ CHÍ MINH TOÀN TẬP-TẬP 14.pdf"
        },
        {
            ten: "Hồ Chí Minh Toàn tập - Tập 15 (1966 - 1969)",
            tacGia: "Chủ tịch Hồ Chí Minh (NXB Chính trị quốc gia Sự thật)",
            tomTat: "Toàn tập văn kiện, bài viết, tác phẩm của Chủ tịch Hồ Chí Minh giai đoạn 1966 – 1969.",
            cover: "assets/sach/covers/TẬP 15.png",
            pdf: "assets/sach/pdf/HỒ CHÍ MINH TOÀN TẬP-TẬP 15.pdf"
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

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            closeModal();
        }
    });

    window.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal && modal.style.display === 'block') {
            closeModal();
        }
    });
}

function getYouTubeEmbedUrl(url) {
    if (!url) return '';
    const unescaped = url.replace(/&amp;/g, '&');
    const match = unescaped.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? `https://www.youtube-nocookie.com/embed/${match[1]}?rel=0&enablejsapi=1` : '';
}

function getYouTubeWatchUrl(url) {
    if (!url) return '';
    const unescaped = url.replace(/&amp;/g, '&');
    const match = unescaped.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? `https://www.youtube.com/watch?v=${match[1]}` : url;
}

function openModal(title, htmlContent, extraTopHtml = '') {
    if (modal && modalBody) {
        // Loại bỏ các đoạn văn bản trống, thẻ &nbsp; và xuống dòng dư thừa
        let cleanedContent = (htmlContent || '')
            .replace(/<p>\s*(?:&nbsp;|<br\s*\/?>)*\s*<\/p>/gi, '')
            .replace(/(?:<br\s*\/?>\s*){2,}/gi, '<br>')
            .replace(/<table[^>]*>\s*<tr[^>]*>\s*<td[^>]*>\s*(<table[\s\S]*?<\/table>)\s*<\/td>\s*<\/tr>\s*<\/table>/gi, '$1');

        // Nhúng trực tiếp khung phát Video YouTube (Embedded Iframe) + Nút mở trực tiếp trên YouTube
        cleanedContent = cleanedContent.replace(
            /(?:<p>\s*(?:<strong>)?\*?\s*Video minh họa:?(?:<\/strong>)?\s*<\/p>\s*)?<p>\s*(?:<strong>)?<a [^>]*href="([^"]+)"[^>]*>[\s\S]*?<\/a>(?:<\/strong>)?\s*<\/p>/gi,
            (match, url) => {
                const embedUrl = getYouTubeEmbedUrl(url);
                const watchUrl = getYouTubeWatchUrl(url);
                if (embedUrl) {
                    return `<div class="video-embed-block">
                        <h4 class="video-embed-title">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ef4444" viewBox="0 0 16 16">
                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.3.1.3 6.113.3 6.113s0 5.713-.3 6.113a2.01 2.01 0 0 1-1.415 1.42c-1.123.302-5.288.332-6.11.335H8.051c-.822-.003-4.987-.033-6.11-.335A2.01 2.01 0 0 1 .526 14.282C.225 13.159.225 7.446.225 7.446s0-5.713.3-6.113A2.01 2.01 0 0 1 1.94 1.999c1.123-.302 5.288-.332 6.111-.335L8.051 2z"/>
                                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" fill="#fff"/>
                            </svg>
                            Video Minh Họa Lịch Sử
                        </h4>
                        <div class="video-embed-box">
                            <iframe src="${embedUrl}" title="Video minh họa lịch sử" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="video-embed-iframe"></iframe>
                        </div>
                        <div class="video-direct-link-box">
                            <a href="${watchUrl}" target="_blank" rel="noopener noreferrer" class="btn-youtube-direct">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/>
                                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.586-.586a1.002 1.002 0 0 0 .154-.199 2 2 0 0 1-.861-3.337L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"/>
                                </svg>
                                Mở trên ứng dụng / trang web YouTube
                            </a>
                        </div>
                    </div>`;
                }
                return match;
            }
        );

        // Fallback nhúng video cho các liên kết YouTube còn lại
        cleanedContent = cleanedContent.replace(
            /(?:<div class="video-btn-box">)?\s*<a [^>]*href="(https?:\/\/(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)[^"]+)"[^>]*>[\s\S]*?<\/a>\s*(?:<\/div>)?/gi,
            (match, url) => {
                const embedUrl = getYouTubeEmbedUrl(url);
                const watchUrl = getYouTubeWatchUrl(url);
                if (embedUrl) {
                    return `<div class="video-embed-block">
                        <div class="video-embed-box">
                            <iframe src="${embedUrl}" title="Video minh họa lịch sử" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="video-embed-iframe"></iframe>
                        </div>
                        <div class="video-direct-link-box">
                            <a href="${watchUrl}" target="_blank" rel="noopener noreferrer" class="btn-youtube-direct">
                                Mở trên ứng dụng / trang web YouTube
                            </a>
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

        let hasHeading = /^<h[1-6]|<div class="doc-category/i.test(cleanedContent.trim());
        let bodyHtml = (hasHeading ? '' : `<h2>${title}</h2>`) + (extraTopHtml || '') + cleanedContent;
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

        openModal(title, item.html);
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
        mobileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            mobileBtn.classList.toggle('active');
        });

        allLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileBtn.classList.remove('active');
            });
        });

        document.addEventListener('click', (e) => {
            if (navbar && !navbar.contains(e.target)) {
                navLinks.classList.remove('active');
                mobileBtn.classList.remove('active');
            }
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
    raw = raw.replace(/-\s*Sao\s*chép/i, '');
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
            ${s.cover ? `<div class="book-cover-box"><img src="${encodeURI(s.cover)}" alt="${s.ten}" class="book-cover-img"/></div>` : ''}
            <div class="book-content-box">
                <h4 class="card-title">${s.ten}</h4>
                <p class="book-author">Tác giả: ${s.tacGia}</p>
                <p class="book-summary">${s.tomTat || ''}</p>
                ${s.pdf ? `
                <div class="book-action-box">
                    <a href="${encodeURI(s.pdf)}" target="_blank" rel="noopener noreferrer" class="btn-read-pdf">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 1.5v3A1.5 1.5 0 0 0 11 6h3s0 0 0 0v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                            <path d="M4.603 12.087a.81.81 0 0 1-.438-.42c-.195-.388-.13-.776.08-1.102.198-.307.526-.568.997-.757.51-.205 1.115-.345 1.762-.425.647-.08 1.333-.111 2.008-.094.675.018 1.34.086 1.95.203.61.116 1.144.283 1.564.5.42.217.697.495.811.818.113.324.043.687-.2.99-.244.303-.64.542-1.148.694-.508.152-1.129.222-1.81.206-.682-.016-1.41-.108-2.11-.274a17.065 17.065 0 0 1-2.073-.655 12.593 12.593 0 0 1-1.433-.687z"/>
                        </svg>
                        Đọc / Tải PDF toàn văn
                    </a>
                </div>
                ` : ''}
            </div>
        </div>
    `).join('');
}

function updateTimelineSvg() {
    const container = document.getElementById('timeline-container');
    if (!container) return;

    if (window.innerWidth <= 768) {
        const existingSvg = container.querySelector('.timeline-svg-line');
        if (existingSvg) existingSvg.remove();
        return;
    }

    let svg = container.querySelector('.timeline-svg-line');
    if (!svg) {
        svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'timeline-svg-line');
        container.prepend(svg);
    }

    const items = container.querySelectorAll('.timeline-item');
    if (items.length < 2) return;

    svg.innerHTML = `
        <defs>
            <linearGradient id="zigzagGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#db2777" />
                <stop offset="50%" stop-color="#b91c1c" />
                <stop offset="100%" stop-color="#f59e0b" />
            </linearGradient>
            <filter id="zigzagGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur"/>
                <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>
    `;

    const containerRect = container.getBoundingClientRect();
    const points = [];

    items.forEach((item) => {
        const dot = item.querySelector('.timeline-dot') || item;
        const dotRect = dot.getBoundingClientRect();
        const x = dotRect.left + dotRect.width / 2 - containerRect.left;
        const y = dotRect.top + dotRect.height / 2 - containerRect.top;
        points.push({ x, y });
    });

    if (points.length > 1) {
        let d = `M ${points[0].x} ${points[0].y}`;
        for (let i = 1; i < points.length; i++) {
            d += ` L ${points[i].x} ${points[i].y}`;
        }

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', d);
        path.setAttribute('stroke', 'url(#zigzagGrad)');
        path.setAttribute('stroke-width', '4');
        path.setAttribute('fill', 'none');
        path.setAttribute('stroke-linecap', 'round');
        path.setAttribute('stroke-linejoin', 'round');
        path.setAttribute('filter', 'url(#zigzagGlow)');
        svg.appendChild(path);
    }
}

window.addEventListener('resize', updateTimelineSvg);

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
                <div class="timeline-dot"></div>
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

    setTimeout(updateTimelineSvg, 50);
    setTimeout(updateTimelineSvg, 250);
    setTimeout(updateTimelineSvg, 600);
}

window.addEventListener('load', updateTimelineSvg);

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
                <video controls preload="metadata" playsinline class="song-media-player">
                    <source src="${encodeURI(bh.file)}" type="video/mp4">
                    Trình duyệt của bạn không hỗ trợ phát media.
                </video>
            </div>
            ` : ''}
        </div>
    `).join('');
}
