const slide1 = 
`<div class="container text-center pt-2" id="divToReplace">
<div class="row align-items-start">
  <div class="col">
    <img src="images/IMG_3175.jpg" class="img-fluid">
  </div>
  <div class="col">
    <img src="images/IMG_3358.jpg" class="img-fluid">
  </div>
  <div class="col">
    <img src="images/IMG_2889.jpg" class="img-fluid">
  </div>
  <div class="col">
    <img src="images/IMG_3103.jpg" class="img-fluid">
  </div>
  <div class="col">
    <img src="images/IMG_2262.jpg" class="img-fluid">
  </div>
  <div class="col">
    <img src="images/IMG_2544.jpeg" class="img-fluid">
  </div>
</div>
<h5 class="mt-3">
  I've loved spending so much time together and learning how to live together to practice for the future! I cooking food with you and for you and being cooked for and you make a mean egg gf! I will one day make that egg for you
</h5>
</div>`;
const slide2 = 
`<div class="container text-center pt-2" id="divToReplace">
<div class="row align-items-start">
  <div class="col">
    <img src="images/bach.jpg" class="img-fluid">
  </div>
  <div class="col">
    <img src="images/b99.jpg" class="img-fluid">
  </div>
  <div class="col">
    <img src="images/office.jpg" class="img-fluid">
  </div>
  <div class="col">
    <img src="images/shutter.jpg" class="img-fluid">
  </div>
  <div class="col">
    <img src="images/thth.jpg" class="img-fluid">
  </div>
  <div class="col">
    <img src="images/loveblind.jpg" class="img-fluid">
  </div>
</div>
<h5 class="mt-3">
I really like watching our TV and movies together it's so fun to make fun of all the terrible people out there and watch the good stuff like the office and silence of the lambs. I still think its a terrible shame you sleep through Inception
</h5>
</div>`;

const slide3 = 
`<div class="container text-center pt-2" id="divToReplace">
<div class="row align-items-start">
  <div class="col">
    <img src="images/IMG_1897.jpg" class="img-fluid">
  </div>
  <div class="col">
    <img src="images/IMG_2571.jpg" class="img-fluid">
  </div>
  <div class="col">
    <img src="images/IMG_3112.jpg" class="img-fluid">
  </div>
  <div class="col">
    <img src="images/IMG_2994.jpg" class="img-fluid">
  </div>
  <div class="col">
    <img src="images/IMG_2051.jpg" class="img-fluid">
  </div>
  <div class="col">
    <img src="images/IMG_2973.jpg" class="img-fluid">
  </div>
</div>
<h5 class="mt-3">
  These are just some pictures I like. I take such lovely flicks of you all the time you gotta admit. 
</h5>
</div>
`;

const slide4 = 
`<div class="container text-center pt-2" id="divToReplace">
<div class="row align-items-start">
  <div class="col">
    <img src="images/IMG_3050.jpg" class="img-fluid">
  </div>
  <div class="col">
    <img src="images/IMG_3206.jpg" class="img-fluid">
  </div>
  <div class="col">
    <img src="images/beer.jpg" class="img-fluid">
  </div>
  <div class="col">
    <img src="images/IMG_3218.jpg" class="img-fluid">
  </div>
  <div class="col">
    <img src="images/jessie.jpg" class="img-fluid">
  </div>
  <div class="col">
    <img src="images/IMG_1812.jpg" class="img-fluid">
  </div>
</div>
<h5 class="mt-3">
  I like hitting the town with you and doing whatever we please! You are my bestfriend let's keep hangin
</h5>
</div>
`;
const slide5 = 
`<div class="container text-center pt-2" id="divToReplace">
<div class="row align-items-start">
  <div class="col">
    <img src="images/IMG_6912.jpg" class="img-fluid">
  </div>
  <div class="col">
    <img src="images/IMG_1980.jpg" class="img-fluid">
  </div>
  <div class="col">
    <img src="images/72964993286__27F83A03-A557-4ADD-A544-18C8DDBD0F95.jpeg" class="img-fluid">
  </div>
  <div class="col">
    <img src="images/IMG_2716.jpg" class="img-fluid">
  </div>
</div>
<h5 class="mt-3">
I'm just going to keep getting better at making bouquets since I think it is my hidden talent. And you are gonna have to be getting lots of flowers so I can practice I guess. I really like getting you flowers and I love how happy you look when I suprise you with some :)
</h5>
</div>
`;

const b1 = `<div class="mx-auto pt-3" id="nextImages">
<button class="btn btn-primary col-6 " type="button">HEY! Click me! I'm a fun button. Press me. Please, Please, Please, pretty please</button>              
</div>`;
const b2 = `<div class="mx-auto pt-3" id="nextImages"> <button id="nextImages" class="btn btn-success col-3 " type="button">YAYYYYYYYYYYYYYY!!!! Do it again</button> </div>`;
const b3 = `<div class="mx-auto pt-3" id="nextImages"> <button id="nextImages" class="btn btn-danger col-6" type="button">Land of the free home of the brave raahhhhhhhhhh click me again rahhhhhhhhhh</button></div>`;
const b4 = `<div class="mx-auto pt-3" id="nextImages"> <button id="nextImages" class="btn btn-warning col-4" type="button">clicky clicky clicky press my buttons mmmm</button></div>`;
const b5 = `<div class="mx-auto pt-3" id="nextImages"> <button id="nextImages" class="btn btn-info col-3" type="button">Woop woop! Keep on clicking!!</button></div>`;


const carousels = [slide1, slide2, slide3, slide4, slide5];
const buttons = [b1, b2, b3, b4, b5];

let currentSlide = 1;
document.getElementById("nextImages").addEventListener("click", function() {
    var newContent = carousels[currentSlide];
    var newButton = buttons[currentSlide];
    // Replace content of div with id "divToReplace" with new content
    document.getElementById("divToReplace").innerHTML = newContent;
    document.getElementById("nextImages").innerHTML = newButton;
    if(currentSlide == 4){
        currentSlide = 0;
    }
    else{
        currentSlide ++;
    }
  });
  