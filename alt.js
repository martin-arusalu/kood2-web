window.addEventListener("load", function () {
  const [node] = document.querySelectorAll(".headline-subtitle");
  let html = "";
  const text = node.innerText;
  for (let i = 0; i < text.length; i++) {
    if (text[i] == " ") html += text[i];
    else html += "<span>" + text[i] + "</span>";
  }
  node.innerHTML = html;
  let letters = document.querySelectorAll(".headline-subtitle span");
  let counter = 0;
  particlesJS.load('particles-js', 'particles.json');

  const t = setInterval(() => {
    if (counter < letters.length) {
      let searching = true;
      while (searching) {
        const index = Math.floor(Math.random() * letters.length);
        if (letters[index] && !letters[index].classList.contains('show-letter')) {
          letters[index].classList.add('show-letter');
          searching = false;
        }
      }
      counter++;
    } else {
      clearInterval(t);
    }
  }, 30);


  // const parallaxEls = document.querySelectorAll("[data-speed]");
  // window.addEventListener("scroll", scrollHandler);

  // function scrollHandler() {
  //   for (const parallaxEl of parallaxEls) {
  //     const direction = parallaxEl.dataset.direction == "up" ? "-" : "";
  //     const transformY = this.pageYOffset * parallaxEl.dataset.speed;
  //     if (parallaxEl.classList.contains("banner-title")) {
  //       parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0) rotate(-6deg)`;
  //     } else if (parallaxEl.classList.contains("banner-subtitle")) {
  //       parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0) rotate(-3deg)`;
  //     } else {
  //       parallaxEl.style.transform = `translate3d(0,${direction}${transformY}px,0)`;
  //     }
  //   }
  // }
});