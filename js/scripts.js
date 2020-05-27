const first = document.querySelector('#one');
const projects = document.querySelector('#projects');
const exit = document.querySelector('.close');
const ex = document.querySelector('.exit'); 
const cont = document.querySelector('#contact');
const second = document.querySelector('#two');


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

