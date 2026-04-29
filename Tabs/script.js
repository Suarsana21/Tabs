const buttons = document.querySelectorAll(".tab-btn");
const images = document.querySelectorAll(".tab-img");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetClass = button.getAttribute("data-target");

    images.forEach((img) => img.classList.remove("active"));

    document.querySelector("." + targetClass).classList.add("active");
  });
});
