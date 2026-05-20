/**
 * HỆ THỐNG XỬ LÝ GIAO DỊCH - TECHBANK
 * Dữ liệu đầu vào: Mảng các giao dịch trong ngày (Đơn vị: USD)
 * Giao dịch âm: Tiền rút ra/Chuyển đi. Giao dịch dương: Tiền nhận vào.
 * Giao dịch lớn hơn 10000 là giao dịch đáng ngờ cần cờ báo động.
 */

const transactions = [150, -50, 200, -10, 500, 15000, -200, 300];

// NHIỆM VỤ 1: Tính tổng tiền nhận vào (chỉ tính số dương).
// CODE CŨ (Đang tính tay thủ công, nếu mảng có 1000 phần tử sẽ bất khả thi)
let totalIncome = 0;

for(let i = 0; i < transactions.length; i++){
    if(transactions[i] > 0){
        totalIncome += transactions[i];
    }
}

console.log("Tổng tiền: " + totalIncome);
// -> YÊU CẦU: Dùng vòng lặp FOR để tính toán lại totalIncome.

// NHIỆM VỤ 2: Tìm giao dịch đáng ngờ đầu tiên (Giá trị > 10000) và DỪNG LẠI ngay lập tức.
// CODE CŨ (Đang duyệt hết mảng gây lãng phí tài nguyên)
let hasFraud = false;
let i = 0;

while(!hasFraud){
    if(transactions[i] > 10000){
        hasFraud = true;
        console.log("Giao dịch đáng ngờ ở vị trí: " + i);
    }
    i++;
}
// -> YÊU CẦU: Dùng vòng lặp WHILE để duyệt, tìm thấy số > 10000 thì đổi hasFraud = true và ngắt vòng lặp.

// NHIỆM VỤ 3: Gửi báo cáo lên Server. Nếu lỗi, thử lại tối đa 3 lần.
let attempts = 0;
let isSuccess = false;

do{
    attempts++;
    console.log("Lần thử thứ " + attempts);
    isSuccess = Math.random() > 0.8;
    if(isSuccess) console.log("Gửi báo cáo lên Server thành công!");
} while(!isSuccess || attempts < 3);
// -> YÊU CẦU: Dùng vòng lặp DO-WHILE. Trong vòng lặp, tăng attempts lên 1. 
// Giả lập isSuccess = (Math.random() > 0.8) (Tỉ lệ thành công 20%). 
// Lặp lại nếu chưa thành công VÀ số lần thử < 3.