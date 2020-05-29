//select the nav bars

const first = document.querySelector('#one');
const second = document.querySelector('#two');

// select #main

const main = document.querySelector('#main');

// select exit symbels

const exit = document.querySelector('.close');
const ex = document.querySelector('.exit'); 

//select contents 

const projects = document.querySelector('#projects');
const cont = document.querySelector('#contact');


// select personal img

const img = document.querySelector('.pg > img');

const hidden = document.querySelector('.hidden');

first.addEventListener('click', () => {
    projects.style.display = 'block';
    first.style.display = 'none';
});


exit.addEventListener('click', () => {
    projects.style.display = 'none';
    first.style.display = 'block';
});



second.addEventListener('click', () => {
    cont.style.display = 'block';
    second.style.display = 'none';
    main.style.height = '140vh';
});

ex.addEventListener('click', () => {
    cont.style.display = 'none';
    second.style.display = 'block';
    main.style.height = '100vh';
});


img.addEventListener('click', (e) => {
    e.target.style.display = 'none';
    hidden.style.display = 'block';
});

hidden.addEventListener('click', (e) => {
    e.target.style.display = 'none';
    img.style.display = 'block';
});

