window.addEventListener('DOMContentLoaded',()=>{
    const menulist = document.querySelector('header > .menubtn');
    const close = document.querySelector('.hiddenbtn .menubtn');
    menulist.addEventListener('click',()=>{
        document.querySelector('.hiddenbtn').classList.add('down');
    })
    close.addEventListener('click',()=>{
        document.querySelector('.hiddenbtn').classList.remove('down');
    })
})