window.tasks[2] = function (f) {
  var v = readPositive(f, ['a', 'b', 'g'], ['a', 'b', 'кут']);
  if (!v) return;
  if (v[2] >= 180) {
    show(f, 'Кут має бути меншим за 180°.', true);
    return;
  }
  show(f, 'Площа: ' + fmt(0.5 * v[0] * v[1] * Math.sin(v[2] * Math.PI / 180)));
};
