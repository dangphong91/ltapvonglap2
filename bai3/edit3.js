let i = 1;
for (; i <= 5; i ++) {
    for(let j = 1; j <= i; j ++) {
        document.write("*");
    }
    document.write("<br>");
}
let a = 5;
for (; a > 0; a--) {
    for(let b = a; b > 0; b --) {
        document.write("*");
    }
    document.write("<br>");
}
let x = 5;
for (; x > 0; x--) {
    document.write("<pre>");
    for(let y = x - 1; y > 0; y--) {
        document.write(" ");
    }
    for(let z = 1; z <= 6 - x; z++) {
        document.write("*");
    }
    document.write("</pre>");
}
let m = 5;
for (; m > 0; m--) {
    document.write("<pre>");
    for(let n = 1; n <= 5 - m; n++) {
        document.write(" ");
    }
    for(let o = m; o > 0; o--) {
        document.write("*");
    }
    document.write("</pre>");
}