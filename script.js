document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar")
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(255, 255, 255, 0.8)"
    } else {
      navbar.style.background = "white"
    }
  })

  const recipeCards = document.querySelectorAll(".recipe-card")
  recipeCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)"
    })
    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.1)"
    })
  })
})
