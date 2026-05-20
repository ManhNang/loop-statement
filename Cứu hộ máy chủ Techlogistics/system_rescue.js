/**
 * HỆ THỐNG KHO VẬN - TECHLOGISTICS (LEGACY CODE)
 */

// NHIỆM VỤ 1: ĐỒNG BỘ DỮ LIỆU (Đang gây sập Server vì Infinite Loop)
function syncOrders() {
    let attempts = 0;
    const maxAttempts = 5;

    console.log("Bắt đầu đồng bộ...");
    while (attempts < maxAttempts) {
        let networkError = true; // Giả lập luôn bị lỗi mạng
        
        if (networkError) {
            console.log(`Lỗi mạng lần ${attempts + 1}, thử lại...`);
            attempts++;
            continue; // LỖI HIỂM HÓC NẰM Ở ĐÂY!
        }
        
        console.log("Đồng bộ thành công!");
        break;
        
    }
}
// Cảnh báo: Nếu chạy hàm trên, trình duyệt/IDE của bạn sẽ bị treo!

// NHIỆM VỤ 2: QUÉT ĐƠN HÀNG TRÙNG LẶP (Đang cực kỳ chậm)
function findDuplicateOrders(orders) {
    let duplicates = [];
    let iterations = 0;

    // Lỗi tối ưu: Quét lại toàn bộ mảng ở vòng lặp trong (j chạy từ 0 đến length)
    for (let i = 0; i < orders.length; i++) {
        for (let j = i + 1; j < orders.length; j++) {
            iterations++;
            // Phải tốn thêm điều kiện i !== j để không tự so sánh với chính nó
            if (orders[i] === orders[j]) {
                if (!duplicates.includes(orders[i])) {
                    duplicates.push(orders[i]);
                }
            }
        }
    }
    console.log(`Tổng số bước lặp (Cũ): ${iterations}`);
    return duplicates;
}

const dummyOrders = ["VN123", "VN456", "VN789", "VN123", "VN999", "VN456"];
console.time("Test");
console.log(findDuplicateOrders(dummyOrders));
console.timeEnd("Test");