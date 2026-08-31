const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

const base = __dirname;
const assetsDocs = path.join(base, 'assets', 'docs');
const assetsImgs = path.join(base, 'assets', 'images');

async function extractDocx(fullPath) {
    try {
        const result = await mammoth.convertToHtml({path: fullPath});
        return result.value; // The generated HTML
    } catch (e) {
        console.error('Lỗi khi đọc', fullPath, e);
        return '<p>Không thể tải nội dung tài liệu.</p>';
    }
}

function getSafeImg(dirName, baseName) {
    const imgDir = path.join(assetsImgs, dirName);
    if (!fs.existsSync(imgDir)) return '';
    const imgs = fs.readdirSync(imgDir);
    const matched = imgs.find(f => f.startsWith(baseName));
    if (matched) {
        return `assets/images/${dirName}/${matched}`;
    }
    return '';
}

async function run() {
    console.log('Đang trích xuất nội dung từ các file .docx...');
    
    // Tác phẩm
    const tacPhamDir = path.join(assetsDocs, 'tac-pham');
    let tacPham = [];
    if (fs.existsSync(tacPhamDir)) {
        const files = fs.readdirSync(tacPhamDir).filter(f => f.endsWith('.docx'));
        tacPham = await Promise.all(files.map(async f => {
            const rawName = f.replace('.docx', '');
            const ten = rawName.replace(/_/g, ' ');
            const htmlContent = await extractDocx(path.join(tacPhamDir, f));
            
            let plainText = htmlContent.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
            let tomTat = plainText.substring(0, 250);
            if (plainText.length > 250) tomTat += '...';

            return {
                rawName: rawName,
                ten: ten,
                nam: '',
                tomTat: tomTat,
                html: htmlContent
            };
        }));

        // Sắp xếp Tác phẩm theo thứ tự mong muốn: Giới thiệu -> Các tác phẩm lớn
        tacPham.sort((a, b) => {
            if (a.rawName.includes('giới_thiệu') || a.rawName.includes('gioi_thieu')) return -1;
            if (b.rawName.includes('giới_thiệu') || b.rawName.includes('gioi_thieu')) return 1;
            return a.ten.localeCompare(b.ten, 'vi');
        });
    }

    // Hành trình
    const hanhTrinhDir = path.join(assetsDocs, 'hanh-trinh');
    let hanhTrinh = [];
    if (fs.existsSync(hanhTrinhDir)) {
        // Chỉ lấy các file chính (bắt đầu bằng I. hoặc số 1. đến 5.), loại bỏ các file phụ HT1..HT9
        let files = fs.readdirSync(hanhTrinhDir).filter(f => f.endsWith('.docx') && !f.startsWith('HT'));
        
        // Phân loại và sắp xếp file Hành trình:
        // Ưu tiên I., sau đó đến 1., 2., 3., 4., 5.
        files.sort((a, b) => {
            const getOrder = (filename) => {
                if (filename.startsWith('I.')) return 1;
                const mNum = filename.match(/^(\d+)\./);
                if (mNum) return 10 + parseInt(mNum[1]);
                return 999;
            };
            const orderA = getOrder(a);
            const orderB = getOrder(b);
            if (orderA !== orderB) return orderA - orderB;
            return a.localeCompare(b, 'vi');
        });

        hanhTrinh = await Promise.all(files.map(async f => {
            const rawBaseName = f.replace('.docx', '');
            let displayTitle = rawBaseName.replace(/_/g, ' ');
            
            // Tìm ảnh minh họa phù hợp
            let prefixMatch = rawBaseName.match(/^([I0-9]+)\./);
            let img = '';
            if (prefixMatch) {
                img = getSafeImg('hanh-trinh', prefixMatch[1] + '.');
            } else {
                let htMatch = rawBaseName.match(/^(HT\d+)/i);
                if (htMatch) {
                    img = getSafeImg('hanh-trinh', htMatch[1]);
                }
            }
            if (!img) {
                img = getSafeImg('hanh-trinh', rawBaseName);
            }
            
            let year = '';
            let yearMatch = displayTitle.match(/([0-9]{4})\s*([0-9]{4})/);
            if (yearMatch) {
                year = `${yearMatch[1]} - ${yearMatch[2]}`;
            } else {
                year = displayTitle;
            }

            const htmlContent = await extractDocx(path.join(hanhTrinhDir, f));
            return {
                rawName: rawBaseName,
                year: year,
                content: displayTitle.replace(/^([I0-9]+)\.\s*/, '').replace(/^(HT\d+)\s*/i, ''),
                img: img,
                html: htmlContent
            };
        }));
    }

    // Lời dạy
    const loiDayDir = path.join(assetsDocs, 'loi-day');
    let loiDay = [];
    if (fs.existsSync(loiDayDir)) {
        const files = fs.readdirSync(loiDayDir).filter(f => f.endsWith('.docx'));
        
        // Sắp xếp Lời dạy 1 đến 9 theo thứ tự số
        files.sort((a, b) => {
            const numA = (a.match(/\d+/) || [0])[0];
            const numB = (b.match(/\d+/) || [0])[0];
            return parseInt(numA) - parseInt(numB);
        });

        loiDay = await Promise.all(files.map(async f => {
            const rawBaseName = f.replace('.docx', '');
            const baseName = rawBaseName.replace(/_/g, ' ');
            const img = getSafeImg('loi-day', rawBaseName);
            const htmlContent = await extractDocx(path.join(loiDayDir, f));
            return {
                rawName: rawBaseName,
                title: baseName,
                content: `Khám phá lời dạy: ${baseName}`,
                source: '',
                img: img,
                html: htmlContent
            };
        }));
    }

    const dataJsContent = `// Tự động sinh ra bởi script
const KGVH_DOC_DATA = {
    tacPham: ${JSON.stringify(tacPham, null, 2)},
    hanhTrinh: ${JSON.stringify(hanhTrinh, null, 2)},
    loiDay: ${JSON.stringify(loiDay, null, 2)}
};
window.KGVH_DOC_DATA = KGVH_DOC_DATA;
`;
    
    fs.writeFileSync(path.join(base, 'data.js'), dataJsContent);
    console.log('Tạo data.js thành công!');
}

run();
