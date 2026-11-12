window.tasks[6] = function (f) {
  var s = val(f, 'n').trim();
  if (!/^-?\d+$/.test(s)) {
    show(f, 'Введіть ціле число.', true);
    return;
  }
  var isPal = s === s.split('').reverse().join('');
  show(f, isPal ? 'Паліндром' : 'Не паліндром', !isPal);
};
