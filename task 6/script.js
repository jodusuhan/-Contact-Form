document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  let isValid = true;
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';
  document.getElementById('result').textContent = '';

  if (!name) {
    document.getElementById('nameError').textContent = 'Please enter your name.';
    isValid = false;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    document.getElementById('emailError').textContent = 'Please enter your email.';
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email.';
    isValid = false;
  }
  if (!message) {
    document.getElementById('messageError').textContent = 'Please enter a message.';
    isValid = false;
  }

  if (isValid) {
    document.getElementById('result').textContent = 'Thank you! Your message has been received.';
    this.reset();
  }
});
