var s = '';

for (var i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        for (var j = 1; j < 10; j++) {
            if (j % 2 == 0) {
                s += ' #';
            }
        }
        s += '\n';
    } else {
        for (var j = 1; j < 10; j++) {
            if (j % 2 == 0) {
                s += '# ';
            }
        }
        s += '\n';
    }
}
console.log(s);