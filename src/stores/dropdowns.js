const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown =>{
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');


select.addEventlistener('click',()=>{
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
});

options.forEach(option=>{
    option.addEventlistener('click', ()=>{
        selected.innerText = option.innerText;
        select.classList.remove('selected-clicked');
        caret.classList.remove('caret-rotate');
        menu.classList.remove('menu-open');
        options.forEach(option =>{
            option.classList.remove('active');
            
    });
    option.classList.add('active');
});
});
});