function convertUrl() {
  const inputUrl = document.getElementById('github-url').value.trim();
  const cdnUrl = document.getElementById('cdn-url');
  const errorMessage = document.getElementById('error-message');

  // Regular expression to match GitHub and Raw GitHub URLs
  const githubRegex = /^https?:\/\/(?:www\.)?github\.com\/([^/]+)\/([^/]+)\/(?:blob|raw)\/([^/]+)\/(.+)$/;
  const rawGithubRegex = /^https?:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/([^/]+)\/(.+)$/;

  // Test if the input URL matches the GitHub or Raw GitHub regex
  const githubMatch = inputUrl.match(githubRegex);
  const rawGithubMatch = inputUrl.match(rawGithubRegex);

  if (!githubMatch && !rawGithubMatch) {
    errorMessage.textContent = 'Please enter a valid GitHub or Raw GitHub URL.';
    cdnUrl.value = '';
    return;
  }

  const match = githubMatch || rawGithubMatch;
  const [, user, repo, branch, file] = match;
  const cdn = 'https://cdn.staticdelivr.com';
  const staticDelivrUrl = `${cdn}/gh/${user}/${repo}/${branch}/${file}`;

  cdnUrl.value = staticDelivrUrl;
  errorMessage.textContent = '';
}
