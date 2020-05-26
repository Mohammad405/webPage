const first = document.querySelector('#one');
const projects = document.querySelector('#projects');




first.addEventListener('click', () => {
    projects.style.display = 'block';
    first.style.display = 'none';
});