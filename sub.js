window.addEventListener("load", function(){
  function changeBackground() {
    let hue = 179;
    let s = Math.floor(Math.random() * (40 - 10)) + 10;
    let l = Math.floor(Math.random() * (40 - 10)) + 10;
    document.body.parentNode.style.backgroundColor = 'hsl('+hue+', '+s+'%, '+l+'%)';
  }
  changeBackground();
  setInterval(changeBackground, 7000);

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