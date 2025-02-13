document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar")
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.style.background = "#b71c1c"
    } else {
      navbar.style.background = "#d32f2f"
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
