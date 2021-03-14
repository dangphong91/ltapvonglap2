let i = 1;
for (; i <= 7; i++) {
    document.write("<pre>");
    for (let j = 1; j <= 35;) {
        if (i == 1 || i == 7) {
            document.write("*");
        }
        else if (j == 1 || j == 35) {
            document.write("*");
        }
        else {
            document.write(" ");
        }
        j++;
    }
    document.write("</pre>");
}