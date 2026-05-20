/**
 * HỆ THỐNG MEDICORE - MODULE XỬ LÝ DỮ LIỆU ĐỘNG
 */
// Tập dữ liệu mô phỏng sự thay đổi liên tục (Dữ liệu động)
let patientData = [
    { id: "P001", name: "Nguyen Van A", status: "stable", age: 45, heartRate: 80 },
    { id: "P002", name: "Tran Thi B", status: "critical", age: 60, heartRate: 130 },
    { id: "P003", name: "Le Van C", status: "stable", age: 30, heartRate: 75 },
    { id: "P004", name: "Pham Thi D", status: "critical", age: 72, heartRate: 45 }
];

// YÊU CẦU 1: THUẬT TOÁN TÌM KIẾM (Search)
function findPatientById(dataArray, targetId) {
    // TODO: Dùng vòng lặp quét qua mảng. Nếu tìm thấy id trùng khớp, return object đó. Nếu hết mảng không có, return null.
    for(let i = 0; i < dataArray.length; i++){
        if(dataArray[i].id === targetId){
            return dataArray[i];
        }
    }
    
    return null;

}

// YÊU CẦU 2: THUẬT TOÁN LỌC (Filter)
function filterCriticalPatients(dataArray) {
    // TODO: Khởi tạo mảng rỗng. Dùng vòng lặp quét qua mảng. Nếu status === "critical", push vào mảng kết quả. Return mảng kết quả.
    let resultList = [];

    for(let i = 0; i < dataArray.length; i++){
        if(dataArray[i].status === "critical") resultList.push(dataArray[i]);
    }

    return resultList;
}

// YÊU CẦU 3: THUẬT TOÁN THỐNG KÊ (Aggregate)
function calculateHospitalStats(dataArray) {
    // TODO: Dùng vòng lặp để đếm số bệnh nhân critical và tính tổng heartRate. Trả về object chứa các con số thống kê.
    let criticalPatients = {
        totalHeartRate : 0,
        criticalCount : 0
    }

    for(let i = 0; i < dataArray.length; i++){
        if(dataArray[i].status === "critical"){
            if(typeof dataArray[i].heartRate === 'number' && dataArray[i].heartRate !== null) criticalPatients.totalHeartRate += dataArray[i].heartRate;
            criticalPatients.criticalCount++;
        } 
    }

    return criticalPatients;
}

patientData.push(
    {"id": "P001", "name": "Nguyen Van A", "status": "stable", "age": 45, "heartRate": 80},
    {"id": "P002", "name": "Tran Thi B", "status": "critical", "age": 60, "heartRate": 130},
    {"id": "P003", "name": "Le Van C", "status": "stable", "age": 30, "heartRate": 75},
    {"id": "P004", "name": "Pham Thi D", "status": "critical", "age": 72, "heartRate": 45},
    {"id": "P005", "name": "Hoang Van E", "status": "stable", "age": 50, "heartRate": 72},
    {"id": "P006", "name": "Vu Thi F", "status": "critical", "age": 65, "heartRate": null},
    {"id": "P007", "name": "Phan Van G", "status": "stable", "age": 28, "heartRate": 68},
    {"id": "P008", "name": "Do Thi H", "status": "critical", "age": 80, "heartRate": 140},
    {"id": "P009", "name": "Bui Van I", "status": "stable", "age": 35, "heartRate": null},
    {"id": "P010", "name": "Dang Thi J", "status": "critical", "age": 55, "heartRate": 115},
    {"id": "P011", "name": "Ngo Van K", "status": "stable", "age": 42, "heartRate": 79},
    {"id": "P012", "name": "Duong Thi L", "status": "critical", "age": 68, "heartRate": 125},
    {"id": "P013", "name": "Ly Van M", "status": "stable", "age": 23, "heartRate": 62},
    {"id": "P014", "name": "Dinh Thi N", "status": "critical", "age": 74, "heartRate": null},
    {"id": "P015", "name": "Lam Van O", "status": "stable", "age": 49, "heartRate": 81},
    {"id": "P016", "name": "Phung Thi P", "status": "critical", "age": 61, "heartRate": 135},
    {"id": "P017", "name": "Mai Van Q", "status": "stable", "age": 31, "heartRate": 70},
    {"id": "P018", "name": "Trinh Thi R", "status": "critical", "age": 83, "heartRate": 50},
    {"id": "P019", "name": "Doan Van S", "status": "stable", "age": 39, "heartRate": 76},
    {"id": "P020", "name": "Tang Thi T", "status": "critical", "age": 57, "heartRate": 122},
    {"id": "P021", "name": "Ta Van U", "status": "stable", "age": 46, "heartRate": null},
    {"id": "P022", "name": "Quach Thi V", "status": "critical", "age": 66, "heartRate": 118},
    {"id": "P023", "name": "Luong Van W", "status": "stable", "age": 29, "heartRate": 73},
    {"id": "P024", "name": "Trieu Thi X", "status": "critical", "age": 77, "heartRate": 40},
    {"id": "P025", "name": "Mac Van Y", "status": "stable", "age": 52, "heartRate": 85},
    {"id": "P026", "name": "Kim Thi Z", "status": "critical", "age": 63, "heartRate": null},
    {"id": "P027", "name": "Vi Van AA", "status": "stable", "age": 34, "heartRate": 69},
    {"id": "P028", "name": "Nong Thi BB", "status": "critical", "age": 85, "heartRate": 145},
    {"id": "P029", "name": "Au Van CC", "status": "stable", "age": 37, "heartRate": 71},
    {"id": "P030", "name": "Van Thi DD", "status": "critical", "age": 59, "heartRate": 110},
    {"id": "P031", "name": "Dam Van EE", "status": "stable", "age": 44, "heartRate": 77},
    {"id": "P032", "name": "Kieu Thi FF", "status": "critical", "age": 69, "heartRate": 128},
    {"id": "P033", "name": "Thach Van GG", "status": "stable", "age": 26, "heartRate": 64},
    {"id": "P034", "name": "Kha Thi HH", "status": "critical", "age": 71, "heartRate": null},
    {"id": "P035", "name": "Danh Van II", "status": "stable", "age": 48, "heartRate": 83},
    {"id": "P036", "name": "Hao Thi JJ", "status": "critical", "age": 62, "heartRate": 132},
    {"id": "P037", "name": "Luu Van KK", "status": "stable", "age": 33, "heartRate": 67},
    {"id": "P038", "name": "Chu Thi LL", "status": "critical", "age": 81, "heartRate": 48},
    {"id": "P039", "name": "Kien Van MM", "status": "stable", "age": 41, "heartRate": 74},
    {"id": "P040", "name": "Trang Thi NN", "status": "critical", "age": 56, "heartRate": 119},
    {"id": "P041", "name": "On Van OO", "status": "stable", "age": 47, "heartRate": 82},
    {"id": "P042", "name": "Doc Thi PP", "status": "critical", "age": 67, "heartRate": null},
    {"id": "P043", "name": "Thi Van QQ", "status": "stable", "age": 27, "heartRate": 66},
    {"id": "P044", "name": "Uong Thi RR", "status": "critical", "age": 79, "heartRate": 138},
    {"id": "P045", "name": "Hinh Van SS", "status": "stable", "age": 51, "heartRate": 78},
    {"id": "P046", "name": "Nha Thi TT", "status": "critical", "age": 64, "heartRate": 121},
    {"id": "P047", "name": "Vong Van UU", "status": "stable", "age": 32, "heartRate": 70},
    {"id": "P048", "name": "Co Thi VV", "status": "critical", "age": 82, "heartRate": 42},
    {"id": "P049", "name": "Nhan Van WW", "status": "stable", "age": 40, "heartRate": 75},
    {"id": "P050", "name": "Bao Thi XX", "status": "critical", "age": 58, "heartRate": 116}
);

let patientTarget = findPatientById(patientData, "P035");
console.log(patientTarget);
let criticalList = filterCriticalPatients(patientData);
console.log(criticalList);
let criticalPatients = calculateHospitalStats(patientData);
console.log(criticalPatients);

