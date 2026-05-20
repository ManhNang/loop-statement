/**
 * HỆ THỐNG QUÉT GIAO DỊCH - FASTPAY (LEGACY CODE)
 */

// YÊU CẦU 1: Xử lý giao dịch đang chờ (LỖI INFINITE LOOP NGUY HIỂM)
function processPending(data) {
    let i = 0;
    while (i < data.length) {
        if (data[i].status === "pending") {
            console.log("Đang xử lý giao dịch:", data[i].id);
            // LỖI: Lập trình viên quên không tăng i ở nhánh này
            // Server sẽ kẹt mãi mãi ở giao dịch T2
        i++;
        }
    }
}

// YÊU CẦU 2: Tìm giao dịch trùng lặp (LỖI TỐI ƯU HIỆU NĂNG - O(n^2) quá chậm)
function findDuplicates(data) {
    console.time("DoVongLap");
    let duplicateIds = [];
    let loopCount = 0; // Biến đo số lần lặp
    
    for (let i = 0; i < data.length; i++) {
        for (let j = i + 1; j < data.length; j++) { 
            loopCount++; // Đếm xem máy tính phải tính bao nhiêu lần
            // Lỗi logic: i và j có thể giống nhau, quét lại những phần tử đã xét
            if (i !== j && data[i].userId === data[j].userId && data[i].amount === data[j].amount) {
                if (!duplicateIds.includes(data[i].id)) {
                    duplicateIds.push(data[i].id);
                }
            }
        }
    }
    console.log(`Số vòng lặp đã chạy: ${loopCount}`);
    console.timeEnd("DoVongLap");
    return duplicateIds;
}

// Hàm tạo chuỗi ngẫu nhiên làm ID giao dịch
function generateId(length = 8) {
    return Math.random().toString(36).substring(2, 2 + length).toUpperCase();
}

// 1. Tạo ra 9,990 giao dịch gốc (mỗi giao dịch là một Object)
const totalUnique = 9990;
const baseTransactions = [];

for (let i = 0; i < totalUnique; i++) {
    baseTransactions.push({
        id: `TX-${generateId()}`,
        amount: Math.floor(Math.random() * 10000) * 1000, // Số tiền ngẫu nhiên
        userId: `USER-${Math.floor(Math.random() * 5000)}`,
        timestamp: Date.now() - Math.floor(Math.random() * 10000000)
    });
}

// 2. Chọn ngẫu nhiên 10 giao dịch từ mảng trên để làm bản sao (Tạo ra 10 cặp trùng)
const duplicateCount = 10;
const duplicates = [];

for (let i = 0; i < duplicateCount; i++) {
    // Lấy ngẫu nhiên một vị trí trong mảng gốc
    const randomIndex = Math.floor(Math.random() * baseTransactions.length);
    
    // Copy nguyên văn object đó (Sử dụng cấu trúc spread để sao chép dữ liệu giống hệt)
    const originalTx = baseTransactions[randomIndex];
    duplicates.push({ ...originalTx }); 
}

// 3. Gộp mảng gốc và mảng trùng lặp lại (Tổng cộng 10,000 phần tử)
let transactions = baseTransactions.concat(duplicates);

// 4. Trộn đều (Shuffle) mảng để các phần tử trùng lặp nằm rải rác ngẫu nhiên
transactions = transactions.sort(() => Math.random() - 0.5);

// ---- TEST DỮ LIỆU VỪA TẠO ----
console.log("Tổng số lượng phần tử trong mảng transactions:", transactions.length);
console.log("Ví dụ về 3 phần tử đầu tiên trong mảng:", transactions);

findDuplicates(transactions);
