// Loader Animation
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  setTimeout(() => loader.classList.add('hidden'), 2500);
});

// Name Animation
const nameElement = document.getElementById('animated-name');
const nameText = "Kamil Hussen"; // স্পেস সহ নাম লিখুন
nameElement.innerHTML = nameText.split('').map(char => 
  char === ' ' 
    ? '<span style="display: inline-block; width: 15px;"></span>' 
    : `<span style="display: inline-block;">${char}</span>`
).join('');

// Skill Box 3D Effect
document.querySelectorAll('.skill-box').forEach(box => {
  box.addEventListener('mousemove', (e) => {
    const x = e.clientX - box.getBoundingClientRect().left;
    const y = e.clientY - box.getBoundingClientRect().top;
    box.style.transform = `perspective(500px) rotateX(${y/10}deg) rotateY(${x/10}deg)`;
  });

  box.addEventListener('mouseleave', () => {
    box.style.transform = 'rotateX(0) rotateY(0)';
  });
});