
/*Scroll reveal */
ScrollReveal({
    reset: true,
    distance:'80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top'});



function switchTab(index) {
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');
    buttons.forEach((btn, i) => {
      btn.classList.toggle('active', i === index);
      contents[i].classList.toggle('active', i === index);
    });
}