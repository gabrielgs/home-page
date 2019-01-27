import 'intersection-observer';

(function () {

  const $toggleMenu = document.getElementById('js-toggle-mobile-menu');
  const $toggleDropdown = document.getElementById('js-open-dropdown');
  const $dropdown = document.getElementById('js-dropdown');
  const $mainNav = document.getElementById('js-main-nav');
  const progressbars = document.querySelectorAll('.progressbar .fill');

  window.addEventListener('load', () => {

    $toggleMenu.addEventListener('click', (e) => {
      e.preventDefault();

      $mainNav.classList.toggle('open');
    })

    $toggleDropdown.addEventListener('click', (e) => {
      e.preventDefault();

      $dropdown.classList.toggle('open');
      e.target.classList.toggle('open');
    })

    createObserver();
  }, false);


  function createObserver() {
    let observer = new IntersectionObserver(onIntersection);

    progressbars.forEach( bar => {
      observer.observe(bar);
    })
  }

  function onIntersection(entries) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    })
  }
})();