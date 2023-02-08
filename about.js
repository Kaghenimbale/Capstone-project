const menu = document.getElementById('menu');
const navLinks = document.getElementById('nav-links');
const redtarget = document.querySelectorAll('.text-last');
const cancelBtn = document.getElementById('cancel');
const links = document.querySelectorAll('#link');

redtarget.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    // item.style.top = '-1000px';
    item.style.right = '1000px';
  });

  item.addEventListener('mouseout', () => {
    // item.style.top = 0;
    item.style.right = 0;
  });
});

const renderMobileMenu = () => {
  menu.addEventListener('click', () => {
    navLinks.style.marginLeft = 0;
  });
};

renderMobileMenu(menu);

const renderCloseMenu = () => {
  cancelBtn.addEventListener('click', () => {
    navLinks.style.marginLeft = '-1000px';
  });
};

renderCloseMenu(cancelBtn);

Array.from(links).forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.style.marginLeft = '-1000px';
  });
});
