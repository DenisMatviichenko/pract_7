window.tasks[8] = function (f) {
  var n = readBigInt(f, 'n');
  if (n === null) return;
  if (n < 1n || n > 20000n) {
    show(f, 'Введіть номер від 1 до 20000.', true);
    return;
  }
  var a = 1n, b = 1n;
  for (var i = 3n; i <= n; i++) {
    var t = a + b;
    a = b;
    b = t;
  }
  show(f, 'F(' + n + ') = ' + b);
};
