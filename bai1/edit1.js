let N = parseInt(prompt("Nhập số lượng số fibonacci của dãy :"));
let i = 1;
let j = 0;
let k = 0;
for (let count = 1; count <= N; count++ ){
    document.write(i + "<br>");
    k = i;
    i = i + j;
    j = k;
}