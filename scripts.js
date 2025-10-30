const sections = ["about", "research", "publications", "skills", "contact"];
const contentDiv = document.getElementById("content");

sections.forEach(async (section) => {
  const response = await fetch(`${section}.html`);
  const html = await response.text();
  contentDiv.innerHTML += html;
});

