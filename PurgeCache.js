const axios = require('axios');

const purgeCache = async (urls) => {
  const id = '5152$51c9a912155ad37e3ecbcfecc8cf19085176e387f0c20e3c5dfee7f589c87e218c33f1ab8c78c6ce4d1391e669afef305f50075b2fc5f43df5a94a298d4611f9'; // replace with your resource ID

  try {
    const response = await axios.post(`https://api.gcore.com/cdn/resources/${id}/purge`, { urls });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

// example usage
purgeCache(['/some-url.jpg', '/img/example.jpg']);
