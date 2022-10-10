function darkMode() {
  document.body.classList.toggle("dark-mode");
  let texts = document.querySelectorAll("h1,h2,h3,h4,h5,h6,p");
  for (let i = 0; i < texts.length; i++) {
    let testi = texts[i];
    testi.classList.toggle("dark-mode-texts");
  }
}
