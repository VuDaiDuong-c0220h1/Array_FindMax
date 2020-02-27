let x = [-3, 5, 1, 3, 2, 10];
x.sort(function (a, b) {
    return a - b;
});
document.write(x[x.length-1]);