const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    // First we need to remove all active classes
    cards.forEach((card) => {
      card.classList.remove("active");
    });

    //For Adding Active Class
    card.classList.add("active");
  });
});
