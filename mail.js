document.querySelector('.send-btn').addEventListener('click', () => {
  const name = document.querySelector('.user-name').value;
  const email = document.querySelector('.user-email').value;
  const message = document.querySelector('.user-message').value;

  if (!name || !email || !message) {
    alert('Please fill all fields');
    return;
  }

  const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
  const body = encodeURIComponent(`${message}\n\nFrom: ${email}`);
  const mailtoLink = `mailto:kmharish292@gmail.com?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;

  const btn = document.getElementById('sendbtn');
  btn.innerText = 'Sent ✓';
  btn.style.background = '#22c55e';

  setTimeout(() => {
    btn.innerText = 'Send Message';
    btn.style.background = '';
  }, 3000);
});