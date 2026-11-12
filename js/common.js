window.tasks = {};

function parseNum(str) {
  var s = String(str).trim().replace(',', '.');
  if (!/^[+-]?(\d+\.?\d*|\.\d+)$/.test(s)) return NaN;
  return Number(s);
}

function fmt(x) {
  return Number(x.toPrecision(12)).toString().replace('.', ',');
}

function show(form, text, bad) {
  var box = form.parentElement.querySelector('.result');
  box.className = 'result' + (bad ? ' bad' : '');
  box.textContent = text;
}

function val(form, name) {
  return form.elements[name].value;
}

function readPositive(form, names, labels) {
  var out = [];
  for (var i = 0; i < names.length; i++) {
    var v = parseNum(val(form, names[i]));
    if (isNaN(v) || v <= 0) {
      show(form, 'Введіть додатне число: ' + labels[i], true);
      return null;
    }
    out.push(v);
  }
  return out;
}

function triangleExists(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

function heron(a, b, c) {
  var p = (a + b + c) / 2;
  return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}

function readBigInt(form, name) {
  var s = val(form, name).trim();
  if (!/^\d+$/.test(s)) {
    show(form, 'Введіть натуральне число (лише цифри).', true);
    return null;
  }
  return BigInt(s);
}
