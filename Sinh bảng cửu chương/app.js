const multiTable = document.getElementById('multiplication-table');
let multiplication = 0;

for(let i = 1; i <= 10; i++){
    multiTable.innerHTML += `<tr id = "row-${i}"></tr>`;
    let row = document.getElementById(`row-${i}`);

    for(let j = 1; j <= 10; j++){
        multiplication = j * i;
        row.innerHTML += `<td>${j}x${i}=${multiplication}</td>`;
    }
}