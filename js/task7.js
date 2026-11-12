function sortedLetters(word) {
  return word.trim().toLowerCase().replace(/\s+/g, '').split('').sort().join('');
}

window.tasks[7] = function (f) {
  var w1 = val(f, 'w1'), w2 = val(f, 'w2');
  if (!w1.trim() || !w2.trim()) {
    show(f, 'Введіть обидва слова.', true);
    return;
  }
  var ok = sortedLetters(w1) === sortedLetters(w2);
  show(f, ok ? 'анаграма' : 'не анаграма', !ok);
};
