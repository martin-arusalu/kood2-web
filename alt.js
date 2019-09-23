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

  let count = 0;
  const offers = [
    'nutikaid äppe',
    'stiilseid veebipoode',
    'personaalseid tarkvaralahendusi',
    'kodulehtede haldust',
    'pilkupüüdvaid veebilehti'
  ]
  const s = setInterval(() => {
    document.getElementById('switchable').innerHTML = offers[count % 5];
    count++
  }, 4000);

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
});