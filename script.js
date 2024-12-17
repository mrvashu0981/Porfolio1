document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({
          behavior: 'smooth'
      });
  });
});





function toggleAccordion(element) {
    const item = element.parentElement;
    const content = item.querySelector('.accordion-content');
    const symbol = item.querySelector('.plus-symbol');
  
    if (content.style.display === 'block') {
      content.style.display = 'none';
      symbol.textContent = '+';
    } else {
      document.querySelectorAll('.accordion-content').forEach(content => content.style.display = 'none');
      document.querySelectorAll('.plus-symbol').forEach(symbol => symbol.textContent = '+');
      
      content.style.display = 'block';
      symbol.textContent = '-';
    }
  }
  function toggleAccordion(element) {
    const item = element.parentElement;
    const content = item.querySelector('.accordion-content');
    const symbol = item.querySelector('.plus-symbol');
  
    if (content.style.display === 'block') {
      content.style.display = 'none';
      symbol.textContent = '+';
    } else {
      document.querySelectorAll('.accordion-content').forEach(content => content.style.display = 'none');
      document.querySelectorAll('.plus-symbol').forEach(symbol => symbol.textContent = '+');
      
      content.style.display = 'block';
      symbol.textContent = '-';
    }
  }
  function clearForm(event) {
    event.preventDefault(); // Prevent default form submission temporarily
    const form = document.getElementById("contactForm");
    const feedback = document.getElementById("formFeedback");

    // Send form data using Fetch API
    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          feedback.textContent = "Your message has been sent successfully!";
          feedback.style.color = "green";
          form.reset(); // Clear all form fields
        } else {
          feedback.textContent = "Something went wrong. Please try again!";
          feedback.style.color = "red";
        }
      })
      .catch((error) => {
        feedback.textContent = "An error occurred. Please try again!";
        feedback.style.color = "red";
      });
  }
  
  const textElement = document.getElementById('text');
  const textArray = [
      "Digital Marketer.",
      "Graphic Designer.",
      "Website Development"
  ]; // Array of strings to display
  const typingSpeed = 250; // Speed of typing each character in milliseconds
  const wordPause = 200;   // Pause between typing each word in milliseconds
  const linePause = 500;  // Pause between different lines in milliseconds

  let currentLine = 0; // Index of the current line being typed
  let wordIndex = 0;   // Index of the current word in the line
  let charIndex = 0;   // Index of the current character in the word

  function typeLine() {
      const words = textArray[currentLine].split(" "); // Split the current line into words
      if (wordIndex < words.length) {
          const currentWord = words[wordIndex];

          // Type each character of the current word
          if (charIndex < currentWord.length) {
              textElement.textContent += currentWord.charAt(charIndex);
              charIndex++;
              setTimeout(typeLine, typingSpeed);
          } else {
              // After typing the word, add a space and move to the next word
              textElement.textContent += " ";
              charIndex = 0;
              wordIndex++;
              setTimeout(typeLine, wordPause); // Pause before starting the next word
          }
      } else {
          // Move to the next line after completing the current line
          setTimeout(() => {
              textElement.textContent = ""; // Clear the text
              wordIndex = 0;               // Reset word index
              charIndex = 0;               // Reset character index
              currentLine = (currentLine + 1) % textArray.length; // Move to the next line (loop back if needed)
              setTimeout(typeLine, linePause); // Pause before starting the next line
          }, linePause);
      }
  }

  document.addEventListener('DOMContentLoaded', () => {
      typeLine();
  });


 