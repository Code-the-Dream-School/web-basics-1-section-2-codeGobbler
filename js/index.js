/*===============================================*/

/*animate side menu*/

//variables to select side menu items and button
const sideBar = document.getElementById("sidebar");
const toggleButton = document.getElementById("btn");

//variable to select project grid
const projectGrid = document.getElementsByClassName("project-grid");

/*Side menu button*/
sideBar.addEventListener("click", () => {
  sideBar.classList.toggle("active");
});

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
});

/*===============================================*/

/*draw images on canvas*/

//variables to select canvas elements and declare context

//declare image variables
const image = new Image() 
image.src="images/playlist_Website.png"

const image2 = new Image() 
image2.src="images/breakout_Game.png"

const image3 = new Image() 
image3.src="images/spotify_Clone.png"

const image4 = new Image() 
image4.src="images/battleship_Game.png"

//create image object to store information for later use
const img = [
  image,
  image2,
  image3,
  image4
]

//loop to place images in all canvases
for (let i = 0; i < img.length; i++) {
  console.log(img.length);
  let canvas = document.getElementsByClassName('canvas')[i];
  console.log(canvas);
  let myContext = canvas.getContext('2d');
  console.log(myContext);
  img[i].onload = () => {
    myContext.drawImage(img[i], 0, 0, 1300, 1300, 0, 0, 300, 336);
  }
}

