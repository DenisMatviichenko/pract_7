window.tasks[5] = function (f) {
  var v = readPositive(f, ['a', 'b', 'c', 'r'], ['a', 'b', 'c', 'R']);
  if (!v) return;
  if (!triangleExists(v[0], v[1], v[2])) {
    show(f, 'Такого трикутника не існує.', true);
    return;
  }
  show(f, 'Площа: ' + fmt(v[0] * v[1] * v[2] / (4 * v[3])));
};
