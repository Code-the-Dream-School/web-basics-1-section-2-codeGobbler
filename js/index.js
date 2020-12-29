const sideBar = document.getElementById('sidebar');
const toggleButton = document.getElementById('btn');
const projectGrid = document.getElementsByClassName('project-grid');
console.log(projectGrid)


sideBar.addEventListener('click', () => {
  sideBar.classList.toggle('active');
});
  
toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
});


const grow = () => {
  projectGrid.addEventListener('mouseover', (event) => {
    if (event.target.classList == 'project-block') {
      event.target.style.display = 'none';
    }
  });
}