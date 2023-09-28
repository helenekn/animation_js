"use strict";

const btnPhone = document.querySelector("#iphone"),
  btnMacbook = document.querySelector("#macbook"),
  images = document.querySelectorAll("img");

let phoneAnimation;
let macbookAnimation;
btnPhone.addEventListener("click", () => {
  if (!phoneAnimation) {
    phoneAnimation = images[0].animate(
      [
        {
          transform: "translateY(0) rotate(0deg)",
          filter: "opacity(80%)",
        },
        {
          transform: "translateY(100px)  rotate(180deg)",
          filter: "opacity(50%)",
        },
        {
          transform: "translateY(-100px) rotate(270deg)",
          filter: "opacity(20%)",
        },
        {
          transform: "translateY(0) rotate(360deg)",
          filter: "opacity(70%)",
        },
      ],
      {
        duration: 3000,
        iterations: Infinity,
      }
    );
  } else if (phoneAnimation.playState === "paused") {
    phoneAnimation.play();
  } else phoneAnimation.pause();
});

btnMacbook.addEventListener("click", () => {
  if (!macbookAnimation) {
    macbookAnimation = images[1].animate(
      [
        { transform: "translateX(0) translateY(0)" },
        { transform: "translateX(400px) rotate(0)" },
        { transform: "translateX(-100px) rotate(50deg)" },
        { transform: "translateX(0) translateY(0)" },
      ],
      {
        duration: 3000,
        iteration: Infinity,
      }
    );
  } else if (macbookAnimation.playState === "paused") {
    macbookAnimation.play();
  } else macbookAnimation.pause();
});
