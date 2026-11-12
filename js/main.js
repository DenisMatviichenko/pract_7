var forms = document.querySelectorAll('form[data-task]');
for (var i = 0; i < forms.length; i++) {
  forms[i].addEventListener('submit', function (e) {
    e.preventDefault();
    window.tasks[this.getAttribute('data-task')](this);
  });
}
