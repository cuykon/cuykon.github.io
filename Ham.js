$(document).ready(function() {
  const dropdownButton = $('#dropdownButton');
  const dropdownContent = $('.dropdown-content');
  const hamburger = $('.hamburger');
  const hamburgerContent = $('.hamburger-content');
  const image = $('.hamburger img');

  hamburger.on('click', function() {
    hamburgerContent.toggle();
  });

  image.on('click', function() {
    $(this).toggleClass('rotation');
  });

  $(window).on('resize', function() {
    if ($(window).width() > 570) {
      hamburger.hide();
      hamburgerContent.hide();
      dropdownButton.show();
    } else {
      hamburger.show();
      dropdownButton.hide();
    }
  });

  // Initial check
  if ($(window).width() > 570) {
    hamburger.hide();
    dropdownButton.show();
  } else {
    hamburger.show();
    dropdownButton.hide();
  }
});

