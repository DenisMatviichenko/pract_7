window.tasks[4] = function (f) {
  var v = readPositive(f, ['a', 'h'], ['a', 'h']);
  if (!v) return;
  show(f, 'Площа: ' + fmt(0.5 * v[0] * v[1]));
};
