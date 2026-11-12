window.tasks[1] = function (f) {
  var v = readPositive(f, ['a', 'b', 'c'], ['a', 'b', 'c']);
  if (!v) return;
  if (!triangleExists(v[0], v[1], v[2])) {
    show(f, 'Такого трикутника не існує.', true);
    return;
  }
  show(f, 'Площа: ' + fmt(heron(v[0], v[1], v[2])));
};
