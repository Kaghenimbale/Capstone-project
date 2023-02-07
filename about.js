const imgs = document.querySelectorAll('.img');
const redtarget = document.querySelectorAll('.text-last');

redtarget.forEach((item) => {
  item.addEventListener('mouseenter', () => {
    item.style.top = '-1000px';
    item.style.right = '1000px';
  });

  item.addEventListener('mouseout', () => {
    item.style.top = 0;
    item.style.right = 0;
  });
});
