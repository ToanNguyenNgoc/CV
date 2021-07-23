window.addEventListener('scroll',function(){
      let headerScroll= this.document.querySelector('.header');
      let windowPosition = window.scrollY > 0;
      headerScroll.classList.toggle('header-color', windowPosition)
})