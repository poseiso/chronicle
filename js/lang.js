(function () {
  var root = document.documentElement;
  var btn  = document.querySelector('.lang-btn');

  function setLang(lang) {
    var isId = lang === 'id';
    root.classList.toggle('lang-id', isId);
    root.lang = isId ? 'id' : 'en';
    if (btn) btn.textContent = isId ? 'ID · EN' : 'EN · ID';
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  setLang('en');

  if (btn) {
    btn.addEventListener('click', function () {
      setLang(root.classList.contains('lang-id') ? 'en' : 'id');
    });
  }
})();
