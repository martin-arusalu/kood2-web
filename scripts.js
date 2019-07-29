window.addEventListener("load", function(){
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
  Particles.init({ selector: '.background', color: '#15e2e0', connectParticles: true, speed: 0.2, maxParticles: 30, minDistance: 300 });

  const t = setInterval(() => {
    if (counter < letters.length) {
      let searching = true;
      while(searching) {
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
  }, 30)
});