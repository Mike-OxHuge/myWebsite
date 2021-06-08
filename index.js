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
    if (e.target.classList.contains("clicked")) {
      e.target.classList.remove("clicked");
      setTimeout(() => {
        e.target.classList.add("clicked");
      }, 50);
    } else {
      e.target.classList.add("clicked");
    }
  })
);

const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const handleClick = function (button, content) {
  document
    .querySelectorAll("nav span")
    .forEach((span) => span.classList.remove("active-link"));
  button.classList.add("active-link");
  document.getElementById("main").innerHTML = content;
};
home.onclick = () => {
  handleClick(home, homeContent);
};
about.onclick = () => {
  handleClick(about, aboutContent);
};
contact.onclick = () => {
  handleClick(contact, contactContent);
};

const homeContent = `
<div class="fadeIn">
  <h1>The home page</h1>
    <div>
        <img
          src="https://picsum.photos/800/600?random=1"
          alt="random image 1"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          beatae ducimus molestiae fuga aliquid a! Unde laborum voluptate
          deserunt quasi, hic facere, debitis optio error sapiente nam
          obcaecati impedit illo doloremque laudantium id omnis quam, vitae
          placeat incidunt. Autem consequuntur veniam corporis quas vel enim
          amet repellat quidem mollitia nesciunt?
        </p>
        <div style="border-top: 1px solid #808080c2; margin: 0.5rem"></div>
        <img
          src="https://picsum.photos/800/600?random=2"
          alt="random image 2"
        />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          autem culpa fuga recusandae est a ex eligendi eaque maxime pariatur
          consequatur esse deserunt dolore sed quod praesentium quia
          repudiandae laborum, illo dignissimos. Dolore deserunt consectetur
          eveniet beatae molestias mollitia iusto est facere neque voluptatem,
          sequi placeat dicta sunt debitis assumenda?
        </p>
    </div>
</div>
`;

const aboutContent = `
<div class="fadeIn">
  <h1>The about page</h1>
    <div style="display: flex; justify-content: center">
      <h1>ITSA ME! MIKE!</h1>
    </div>
  <p>
    Something has to go in here, but I don't thin anything could describe me 
    better than our beloved 
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Exercitationem porro sint illo adipisci temporibus iure, quas cum
    dolor. Esse, beatae.
  </p>
</div>
`;

const contactContent = `
<div class="fadeIn">
      <h1>Contact me:</h1>
      <div class="contacts">
        <div class="contacts-section">
          <a href="mailto:mikelitoris34@icloud.com">
            <div class="flying">
              <h5>Email me</h5>
              <img src="./images/email.png" />
            </div>
          </a>

          <a href="https://t.me/MikeTNF">
            <div class="bounce">
              <h5>Write me</h5>
              <img src="./images/telegram.png" />
            </div>
          </a>
        </div>

        <div
          style="border-top: 1px solid #808080c2; margin: 0.5rem; height: 1px"
        ></div>

        <div class="contacts-section">
          <a href="https://www.linkedin.com/in/mike-litoris/">
            <div class="flip">
              <h5>Hire me</h5>
              <img src="./images/linkedin.png" />
            </div>
          </a>

          <a href="https://github.com/Mike-OxHuge">
            <div class="rotate">
              <h5>Browse my code</h5>
              <img src="./images/github.png" />
            </div>
          </a>
        </div>
      </div>
    </div>
`;
