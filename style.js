// Select all FAQ items
const faqItems = document.querySelectorAll(".faq-item");

// Add click event to each question
faqItems.forEach((item) => {

  const question =
    item.querySelector(".faq-question");

  question.addEventListener("click", () => {

    // Close other open items
    faqItems.forEach((faq) => {

      if (faq !== item) {
        faq.classList.remove("active");
      }

    });

    // Toggle current item
    item.classList.toggle("active");

  });

});
