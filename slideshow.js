const meow = document.getElementById('papayameow')

meow.addEventListener("click", function () {
    const audio = new Audio("sounds/freejazz.wav");
    audio.play();
// lets get different papaya tones and pictures and on click it gives a new pic and soundbyte. 
// ranking based on enjoyment
});
const mem1 = `<div class="image-container">
      <img src="images2/tiny.jpg" alt="Description of image">
      <p class="image-description">Thank you for helping make this relationship feel so healthy and valuable.</p>
    </div>
    <div class="description-box">
      <p>I remember...</p>
      <p>Last year, when we went to the tiny house, I loved the idea of living with together, with no opps. This whole year, I've been so glad to live that dream at nora, and it makes me so, so, so excited for next year when I actually get to be your roomate. I was so sick last year and you took such nice care of me, it was so sweet. We made those bomb-ass burgers, then covered up that big scary window. Then we hit Applebee's for the 50 cent wings and you got your little tacos. Classic us :) </p>
    </div>`;

const mem2 = `<div class="image-card2">
      <div class="image-wrapper2">
          <img src="images2/pike1.jpg" alt="Image 1">
          <img src="images2/pike2.jpg" alt="Image 2">
      </div>
      <p class="image-description">I appreciate your silliness and your ability to make me laugh. I love that we share the same humor.</p>
    </div>
    <div class="description-box">
      <p>I remember...</p>
      <p>We went to pike haha. I actually think this was the most recent frat event we went to together. It was fun seeing Leland and people I knew in Pike, but what made it really nice for me was that you were there with me and you were having a good time. I always appreciate when you do your best to be social in scary settings! It feels really validating and makes me feel appreciated and cared about. More recently, I loved when you came to DKE and hung out at the freaky party with Merida. I just like when you are willing to be social and independent, it is such an attractive color on you and you do such a good job trying hard for me. Even though I know you would rather stay at home with me and watch tv and be so fat with the cat <3 </p>
    </div>`;

const memories = [mem1, mem2];

const initialButton = `<a class="btn btn-light" id ="navYearTwo" role="button">I love you!</a>`
const buttons = [
    `<a class="btn btn-light" id ="navYearTwo" role="button">Click me again :)</a>`,
    `<a class="btn btn-light" id ="navYearTwo" role="button">More memories!</a>`,
    `<a class="btn btn-light" id ="navYearTwo" role="button">clickity click</a>`,
    `<a class="btn btn-light" id ="navYearTwo" role="button">More! More!</a>`,
];

function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}
function updateMemoryAndButton() {
    const randomMem = getRandomIndex(memories);
    const randomButton = getRandomIndex(buttons);

    document.getElementById("memory").innerHTML = memories[randomMem];
    document.getElementById("nextMem").innerHTML = buttons[randomButton];

    // Reattach event listener to new button
    document.querySelector("#navYearTwo").addEventListener("click", updateMemoryAndButton);
}

// Initialize page with a random memory and fixed button
window.onload = function () {
    const randomMem = getRandomIndex(memories);
    document.getElementById("memory").innerHTML = memories[randomMem];
    document.getElementById("nextMem").innerHTML = initialButton;

    // Attach event listener to initial button
    document.querySelector("#navYearTwo").addEventListener("click", updateMemoryAndButton);
};
