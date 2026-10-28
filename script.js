
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(
    ".service-card, .team-card, .work-card"
  );

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    cards.forEach((card) => {
      card.classList.add("reveal");
      observer.observe(card);
    });
  }
});
