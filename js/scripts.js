const first = document.querySelector('#one');
const projects = document.querySelector('#projects');
const exit = document.querySelector('#close');



first.addEventListener('click', () => {
    projects.style.display = 'block';
    first.style.display = 'none';
});


exit.addEventListener('click', () => {
    projects.style.display = 'none';
    first.style.display = 'block';
});
