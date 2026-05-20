// --- ĐIỀU HƯỚNG CHUYỂN ĐỔI GIAO DIỆN ---
function openExercise(id) {
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById(id).style.display = 'block';
}

function backToMenu() {
    const sections = document.querySelectorAll('.exercise-section');
    sections.forEach(sec => sec.style.display = 'none');
    document.getElementById('main-menu').style.display = 'block';
}

// --- XỬ LÝ LOGIC CÁC BÀI TẬP ---

// Bài 1: Fibonacci
function runFibonacci() {
    const n = parseInt(document.getElementById('fib-input').value);
    if (isNaN(n) || n <= 0) {
        document.getElementById('fib-output').innerText = "Vui lòng nhập một số nguyên lớn hơn 0.";
        return;
    }
    
    let seq = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        seq.push(a);
        let next = a + b;
        a = b;
        b = next;
    }
    document.getElementById('fib-output').innerText = seq.join(', ');
}

// Bài 2: Giai thừa
function runFactorial() {
    const n = parseInt(document.getElementById('fact-input').value);
    if (isNaN(n) || n < 0) {
        document.getElementById('fact-output').innerText = "Vui lòng nhập số nguyên không âm.";
        return;
    }

    let result = 1n;
    for (let i = 1; i <= n; i++) {
        result *= BigInt(i);
    }
    document.getElementById('fact-output').innerText = `${n}! = ${result.toString()}`;
}

// Bài 3: Tam giác vuông
function runTriangle() {
    const h = parseInt(document.getElementById('tri-size').value);
    const type = document.getElementById('tri-type').value;
    if (isNaN(h) || h <= 0) {
        document.getElementById('tri-output').innerText = "Vui lòng nhập chiều cao hợp lệ.";
        return;
    }

    let result = "";
    
    switch(type){
        case "bl":
            for (let i = 1; i <= h; i++) {
                result += "* ".repeat(i) + "\n";
            }
            break;
        case "tl":
            for (let i = h; i >= 1; i--) {
                result += "* ".repeat(i) + "\n";
            }
            break;
        case "br":
            for (let i = 1; i <= h; i++) {
                result += "  ".repeat(h - i) + "* ".repeat(i) + "\n";
            }
            break;
        case "tr":
            for (let i = h; i >= 1; i--) {
                result += "  ".repeat(h - i) + "* ".repeat(i) + "\n";
            }
    }
    
    document.getElementById('tri-output').innerText = result;
}

// Bài 4: Hình chữ nhật
function runRectangle() {
    const w = parseInt(document.getElementById('rect-width').value);
    const h = parseInt(document.getElementById('rect-height').value);
    const style = document.getElementById('rect-style').value;
    
    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
        document.getElementById('rect-output').innerText = "Kích thước hình chữ nhật không hợp lệ.";
        return;
    }

    let result = "";
    for (let i = 1; i <= h; i++) {
        if (style === "solid" || i === 1 || i === h) {
            result += "* ".repeat(w) + "\n";
        } else {
            if (w > 1) {
                result += "* " + "  ".repeat(w - 2) + "*\n";
            } else {
                result += "*\n";
            }
        }
    }
    document.getElementById('rect-output').innerText = result;
}

// Bài 5: Tính lãi ngân hàng (Lãi kép)
function runInterest() {
    const p = parseFloat(document.getElementById('bank-principal').value);
    const m = parseInt(document.getElementById('bank-months').value);
    const r = parseFloat(document.getElementById('bank-rate').value) / 100;

    if (isNaN(p) || isNaN(m) || isNaN(r) || p < 0 || m <= 0 || r < 0) {
        document.getElementById('bank-output').innerText = "Vui lòng nhập các giá trị hợp lệ.";
        return;
    }

    const total = p * Math.pow((1 + r), m);
    const interest = total - p;

    let result = `Số tiền gốc ban đầu: ${p}\n`;
    result += `Thời gian vay/gửi: ${m} tháng\n`;
    result += `Lãi suất hàng tháng: ${(r * 100).toFixed(2)}%\n`;
    result += `------------------------------------\n`;
    result += `Tiền lãi tích lũy: ${interest.toFixed(4)}\n`;
    result += `Tổng số tiền cuối kỳ (Gốc + Lãi): ${total.toFixed(4)}`;

    document.getElementById('bank-output').innerText = result;
}

// Bài 6: In hình trái tim
function runHeart() {
    let result = "";
    for (let y = 1.3; y >= -1.1; y -= 0.1) {
        for (let x = -1.2; x <= 1.2; x += 0.04) {
            if (Math.pow(x * x + y * y - 1, 3) - x * x * y * y * y <= 0.0) {
                result += "*";
            } else {
                result += " ";
            }
        }
        result += "\n";
    }
    document.getElementById('heart-output').innerText = result;
}