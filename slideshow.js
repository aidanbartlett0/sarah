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

const mem3 = `<div class="image-card2">
      <div class="image-wrapper2">
          <img src="images2/brat1.jpeg" alt="Image 1">
          <img src="images2/brat2.jpeg" alt="Image 2">
      </div>
      <p class="image-description">I like that we always have a good time together. You always are able to help me enjoy the moment.</p>
    </div>
    <div class="description-box">
      <p>I remember...</p>
      <p>We went to brat with Lucas and Lilly (rip our homies). I know that album was awesome for everyone's summer, but it was totally OUR summer. We'd drive all over the place between Seattle and your house and my house and I'd always love doing the apple dance in the car. Just so cute! Thank you for always being my aux in the car, I like hearing your music, and love seeing how you get so excited to go to concerts. Its just so adorable. I've never been a huge concert goer so I like sharing that with you and doing that fun stuff together. </p>
    </div>`;

const mem4 = `<div class="image-container">
    <img src="images2/newyears.jpeg" alt="Description of image">
    <p class="image-description">It's pretty fun getting to see us over the years and how we improve and grow. Lets do it for many, many more.</p>
  </div>
  <div class="description-box">
    <p>I remember...</p>
    <p>We made some tasty tasty charcuterie for new year's eve and as a suprise bonus we watched the space needle drone show and fireworks from the window! That was so cool. We got to show papaya fireworks for the first time (even though he didn't really notice them) and be there for his first new year! I remember when we watched the drones through your window and since the TV was a bit behind, we would try and guess what they were making even though they were angled weird and away from us. That was a fun time. </p>
  </div>`

const mem5 = `<div class="image-container">
    <img src="images2/dubhacks.jpeg" alt="Description of image">
    <p class="image-description">Seeing you even just for a little bit brightens my day and makes me feel so good about us</p>
  </div>
  <div class="description-box">
    <p>I remember...</p>
    <p>When I was doing DubHacks, I was at the hub for so long and like all night. I was so hopped up on caffine it was making me tweak like that time you took the test after we went to solstice cafe. I stocked up my whole backpack with swag for me and a bunch of energy drinks for you. I liked that you came over and sat with me on the bench in red square and I brought you a pizza slice and we had a little dinner together. I like that even just for a little bit we could hang out and chat. I think its very nice how you always want to talk to me. Like when you call me whenever you have free time walking somewhere. Sometimes I don't want to call, but I always pick up for you, and end up being happy I did. I like getting to yap at you and hearing you yap at me since you are so good at it you yappy yapper.</p>
  </div>`

const mem6 = `<div class="image-card2">
      <div class="image-wrapper2">
          <img src="images2/dead1.jpeg" alt="Image 1">
          <img src="images2/dead2.jpeg" alt="Image 2">
      </div>
      <p class="image-description">I like having responsibility together like taking care of papaya.</p>
    </div>
    <div class="description-box">
      <p>I remember...</p>
      <p>When he first learned how to hop up on the counter, I couldn't even prepare for his greed. He was trying to snatch food left and right. I think he's gotten much better at not jumping up while I'm cooking, but once I'm done, oh oh oh, that counter is all his. He learned all about the comfort of the drying cloth and even though he's dead to me, it is just the cutest thing. It is gross I stand by that, but I woudln't trade it for anything. I love his grubby little mitts. That was funny though: having to learn to protect the drying cloth from his greedy little loaf. </p>
    </div>`

const mem7 = `<div class="image-container">
    <img src="images2/adventure.jpeg" alt="Description of image">
    <p class="image-description">I like how we just make up words and things together so we can speak our own language. This flick is tough af (sound it out) </p>
  </div>
  <div class="description-box">
    <p>I remember...</p>
    <p>We went to the Chicago Art Institute twice in one day and to the contemporary art museum. I love going to art museums SO much. I think they're so much fun. The way I've always done museums with my family has been like a "lets meet up in 2 hrs when we leave, meet at the entrance" type of thing. And I really like to just look and wander alone, so I was admittedly a little concerned that I wouldn't like it as much since I knew you would want to do all of it together - but it was great and super fun! I liked talking about the art with you and complaining about the jesus area and talking about all the little (remade) penars. It was pretty fun getting to walk all over that huge place and get to look at and chat about and take pictures of the art together. Thanks for doing that with me, it meant so much and it was something I really wanted to do.</p>
  </div>`

const mem8 = `
  <div class="image-container">
    <img src="images2/chick.jpeg" alt="Description of image">
    <p class="image-description">Thank you for doing stuff with me whenever we can. I really like being active and collecting memories and you are an amazing person to do things with:)</p>
  </div>
  <div class="description-box">
    <p>I remember...</p>
    <p>This was a pretty funny game, idk who it was against but we won of course. i think it was the game when we got all those chick fil-a gift cards and you even saved me and cameron and brycen a spot to get mcdonalds fries! That was so nice of you! Then we got these hella swag ponchos and beared the rain to watch the game. It's pretty impressive how into football you are. I've never been a big football guy, but you've turned me into an enjoyer. Remember when you would have to literally teach me the rules when we first started going to games? So cute I like seeing you competitive and having fun. Even though I always get so tired and want to leave, I admire your dedication to stay the whole time, and will always sit and watch with you, even in the rain. Maybe you're the reason why we're undefeated at home.</p>
  </div>`

const mem9 = `
  <div class="image-container">
    <img src="images2/sweater.jpeg" alt="Description of image">
    <p class="image-description">You're so pretty awoooooga and the short hair eeeeeeeeeeeeeek </p>
  </div>
  <div class="description-box">
    <p>I remember...</p>
    <p>Papaya finally started to outgrow his festive holiday sweater when he started getting too big and fat :( Then it became a straightjacket and would paralyze him so much haha. I think its funny how we have to put his timeout sweater on him when he starts acting evil. Such a little rascal</p>
  </div>`

const mem10 = `<div class="image-card2">
      <div class="image-wrapper2">
          <img src="images2/val1.jpeg" alt="Image 1">
          <img src="images2/val2.jpeg" alt="Image 2">
      </div>
      <p class="image-description">I hope you know how much I care about you and how I always try to go out of my way to make you happy and feel valued. </p>
    </div>
    <div class="description-box">
      <p>I remember...</p>
      <p>When it was valentines day and we both asked each other with cookies and then then we had so many cookies and were so fat all week hahaha. It was pretty cute walking into the apartment with you with my flowers and cookies, then you brought be over and gave me my cookies that was so silly we are so alike and loving, that is a fun memory. And I loved my baloons very much, and how over the next few weeks letters slowly disappeared off of your wall as I took them home. Thank you for a great Valentine's day, you're the best.</p>
    </div>`

const mem11 = `
  <div class="image-container">
    <img src="images2/dkecat.jpeg" alt="Description of image">
    <p class="image-description">I like how you treat Paya and want to make sure he's safe. You can be little crazy about it, but I appreciate your vigilance.</p>
  </div>
  <div class="description-box">
    <p>I remember...</p>
    <p>When stupid Nora had to do room inspections and Paya was still illegal, we had to carry him and all of his stuff over to dke. He got to hang with me for the day, I skipped my class, and we napped together. It was pretty cute and he loved to explore my room. He was very confuseed about the bathroom floor since it was warm, so he would lay on the chistmas bathmat we bought together and put his head on the floor. Eventually he warmed up to it and just lounged all the way on the warm tile. So ute! </p>
  </div>`

const mem12 = `<div class="image-card2">
      <div class="image-wrapper2">
          <img src="images2/lights1.jpeg" alt="Image 1">
          <img src="images2/lights2.jpeg" alt="Image 2">
      </div>
      <p class="image-description">I really like how we have so much support and love from each other's families.</p>
    </div>
    <div class="description-box">
      <p>I remember...</p>
      <p>When we went to the zoo lights with my family during christmas break. That was super fun and oh so cute. I liked walking around and looking at the lights with you and making fun of the silly looking animals. I even liked holding the umbrella for you. Isn't it so fun that you are just like a part of the gang now? You're such a veteran girlfriend and its a good look on you and makes me feel really secure. I really like being with my family and with you, it just feels so natural to have you there with me, and my family really likes you. I really appreciate how you want to hang out with them, it is a really nice quality you have and I love you lots and so do they. </p>
    </div>`

const memories = [mem1, mem2, mem3, mem4, mem5, mem6, mem7, mem8, mem9, mem10, mem11, mem12];

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
