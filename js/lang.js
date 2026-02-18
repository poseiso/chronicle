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

  var saved = 'en';
  try { saved = localStorage.getItem('lang') || 'en'; } catch (e) {}
  setLang(saved);

  if (btn) {
    btn.addEventListener('click', function () {
      setLang(root.classList.contains('lang-id') ? 'en' : 'id');
    });
  }
})();
