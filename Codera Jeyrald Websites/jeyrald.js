document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector("h1");

  if (heading) {
    heading.addEventListener("click", () => {
      const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      heading.style.color = randomColor;

     
      heading.style.transition = "transform 0.3s ease";
      heading.style.transform = "scale(1.2)";
      setTimeout(() => {
        heading.style.transform = "scale(1)";
      }, 300);
    });
  }
});
document.getElementById('hamburger').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('active');
});
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function() {
      document.querySelectorAll('.navbar a').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
  });
});
