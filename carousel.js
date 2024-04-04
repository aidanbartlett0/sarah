// const [currentSlide, setCurrentSlide] = useState(0);

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
I really like watching our TV and movies with you it's so fun to make fun of all the terrible people out there and watch the good stuff like the office and silence of the lambs. I still think its a terrible shame you sleep through Inception
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
    <img src="images/IMG_2288.jpg" class="img-fluid">
  </div>
  <div class="col">
    <img src="images/IMG_2716.jpg" class="img-fluid">
  </div>
</div>
<h5 class="mt-3">
  These are just some pictures I like. I take such lovely flicks of you all the time you gotta admit. 
</h5>
</div>`;

const carousels = [slide1, slide2, slide3];
let currentSlide = 0;
document.getElementById("nextImages").addEventListener("click", function() {
    var newContent = carousels[currentSlide];
  
    // Replace content of div with id "divToReplace" with new content
    document.getElementById("divToReplace").innerHTML = newContent;
    if(currentSlide == 2){
        currentSlide = 0;
    }
    else{
        currentSlide ++;
    }
  });
  