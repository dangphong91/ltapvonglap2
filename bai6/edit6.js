let size = 20;
let b;
for (let a = size/2; a <= size; a = a+2) {
    document.write("<pre>")
    for (b = 1; b < size-a; b = b+2) {
        document.write(" ");
    }
    for (b = 1; b <= a; b++) {
        document.write("*");
    }
    for (b = 1; b <= size-a; b++) {
        document.write(" ");
    }
    for (b = 1; b <= a-1; b++) {
        document.write("*");
    }
    document.write("</pre>");
}
for (a = size; a >= 0; a--) {
    document.write("<pre>");
    for (b = a; b < size; b++) {
        document.write(" ");
    }
    for (b = 1; b <= ((a * 2) - 1); b++) {
        document.write("*");
    }
    document.write("</pre>");
}