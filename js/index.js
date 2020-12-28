let sideBar = document.getElementById('sidebar');
let toggleButton = document.getElementById('btn');

sideBar.addEventListener('click', () => {
  sideBar.classList.toggle('active');
})

toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
})