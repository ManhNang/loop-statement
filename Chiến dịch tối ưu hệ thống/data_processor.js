/**
 * HỆ THỐNG PHÂN BỔ ĐƠN HÀNG - FRESHDELIVERY (LEGACY CODE)
 * Nhiệm vụ: Tính tổng doanh thu và phân bổ đơn cho tài xế
 */
let orderList = [
    { id: 101, amount: 150000, status: "pending" },
    { id: 102, amount: 200000, status: "pending" },
    { id: 103, amount: 50000, status: "pending" }
];
let driversAvailable = 2;

// YÊU CẦU 1: Tính tổng doanh thu (Đang dùng while chưa tối ưu và DỄ BỊ INFINITE LOOP)
function calculateTotal(orders) {
    let total = 0;
    for (let i = 0; i < orders.length; i++){
        if(!orders[i] || orders[i].amount <= 0 ||  typeof orders[i] !== 'object' || Array.isArray(orders[i]) || !('amount' in orders[i])) continue;
        total += orders[i].amount;
    }
    return total;
}

// YÊU CẦU 2: Phân bổ đơn hàng (Chưa code)
function orderAllocation(orders){
    let i = 0;
    while(i < orders.length && driversAvailable > 0){
        if(orders[i] || typeof orders[i] === 'object' || Array.isArray(orders[i]) || ('status' in orders[i])){
            orders[i].status = "processing";
            driversAvailable--;
        }
        i++;
    }
}
// YÊU CẦU 3: Thử lại (Retry) khi lấy mảng dữ liệu thất bại (Chưa code)
function retry(orders){
    let countRetry = 0;
    let i = 0;
    do{
        countRetry++;
        if(i >= orders.length || !orders[i] || !orders[i].id){
            console.log(`Đã liệt kê hết đơn hàng hoặc đơn hàng lỗi mời thử lại (Lần ${countRetry})`);
            i++;
            continue;
        }
        console.log(orders[i].id + " " + orderList[i].status);
        countRetry = 0;
        i++;
    }while (countRetry < 3);
}

retry(orderList);