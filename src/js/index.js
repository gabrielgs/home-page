(function () {
  const $toggleMenu = document.getElementById('js-toggle-mobile-menu');
  const $toggleDropdown = document.getElementById('js-open-dropdown');
  const $dropdown = document.getElementById('js-dropdown');
  const $mainNav = document.getElementById('js-main-nav');

  $toggleMenu.addEventListener('click', (e) => {
    e.preventDefault();

    $mainNav.classList.toggle('open');
  })

  $toggleDropdown.addEventListener('click', (e) => {
    e.preventDefault();

    $dropdown.classList.toggle('open');
    e.target.classList.toggle('open');
  })

  console.log($dropdown, $mainNav);

})();