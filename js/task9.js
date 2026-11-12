window.tasks[9] = function (f) {
  var n = readBigInt(f, 'n');
  if (n === null) return;
  var a = 1n, b = 1n;
  while (b < n) {
    var t = a + b;
    a = b;
    b = t;
  }
  var ok = (b === n);
  show(f, ok ? 'Належить' : 'Не належить', !ok);
};
