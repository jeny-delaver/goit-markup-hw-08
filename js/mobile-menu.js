(() => {
    const menu          = document.querySelector(".menu-container");
    const menuBtn       = document.querySelector("[data-menu-button]");

    const menuIconClose = menuBtn.querySelector(".icon-close");
    const menuIconOpen  = menuBtn.querySelector(".icon-menu");
    
    menuBtn.addEventListener('click', () => {
      menu.classList.toggle('is-open');
      
      menuIconClose.classList.toggle('is-hidden');
      menuIconOpen.classList.toggle('is-hidden');
    });

 })();

