//select the nav bars

const first = document.querySelector('#one');
const second = document.querySelector('#two');

// select exit symbels

const exit = document.querySelector('.close');
const ex = document.querySelector('.exit'); 

//select contents 

const projects = document.querySelector('#projects');
const cont = document.querySelector('#contact');


// select personal img

const img = document.querySelector('.pg > img');



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
});

ex.addEventListener('click', () => {
    cont.style.display = 'none';
    second.style.display = 'block';
});

