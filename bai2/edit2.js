let N = parseInt(prompt("Nhập số cần tính giai thừa :"));
let tich = 1;
if (N >= 1) {
    for (let count = 1; count <= N; count++) {
        tich = tich * count;
    }
    document.write("Giai thừa của " + N + " là :" + tich);
} else {
    alert("Hãy nhập số lớn hơn 0 !");
}