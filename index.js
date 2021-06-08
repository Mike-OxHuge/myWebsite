let spinningImage = document.getElementById("spinningImage");
let n = 5000;
let jump = 500;
let preciseJump = 100;
document.getElementById("slowDown").onclick = () => {
  n += jump;
  spinningImage.style.animationDuration = `${n}ms`;
  console.log(`speed is ${n}, jumper is ${jump}`);
};
document.getElementById("speedUp").onclick = () => {
  if (n > 700) {
    n -= jump;
    spinningImage.style.animationDuration = `${n}ms`;
    console.log(`speed is ${n}, jumper is ${jump}`);
  } else if (n < 700 && n > 100) {
    n -= preciseJump;
    spinningImage.style.animationDuration = `${n}ms`;
    console.log(`speed is ${n}, jumper is ${preciseJump}`);
  } else if (n === 100) {
    alert("this is the fastest speed.");
  } else {
  }
};

document.querySelectorAll("nav span").forEach((span) =>
  span.addEventListener("click", (e) => {
    e.target.classList.toggle("clicked");
    console.log(e.target.classList.value);
  })
);
