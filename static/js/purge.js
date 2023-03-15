document.addEventListener("DOMContentLoaded", function(event) {
  // your JavaScript code goes here
  const form = document.querySelector('#purge-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const urlsInput = document.querySelector('#urls');
  const urls = urlsInput.value.split('\n').map((url) => url.trim());
  urlsInput.value = '';

  try {
    const response = await fetch('https://staticdelivr-api.onrender.com/purgecache', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ urls }),
    });
    console.log(response);
    alert('Cache purged successfully!');
  } catch (error) {
    console.error(error);
    alert('Error purging cache. Please try again later.');
  }
});

});
