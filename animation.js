const btn = document.getElementById("scrollBtn");
const target = document.getElementById("page2");

btn.addEventListener("click", () => {
  target.scrollIntoView({ behavior: "smooth" });
});

const text = "I'M JAVA";
  const typingElement = document.getElementById("typing");
  let index = 0;
  let deleting = false;

  function type() {
    if (!deleting && index <= text.length) {
      typingElement.textContent = text.slice(0, index++);
      setTimeout(type, 150); 
    } else if (deleting && index >= 0) {
      typingElement.textContent = text.slice(0, index--);
      setTimeout(type, 80); 
    } else {
      deleting = !deleting; 
      setTimeout(type, 700); 
    }
  }
  type();