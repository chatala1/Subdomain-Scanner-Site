async function scanSubdomains() {
  const domain = document.getElementById("domainInput").value;
  const url = `https://subdomain-scan1.p.rapidapi.com/?domain=${domain}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY_HERE",
      "X-RapidAPI-Host": "subdomain-scan1.p.rapidapi.com"
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const listEl = document.getElementById("subdomainList");
    listEl.innerHTML = result.subdomains
      .map(sub => `<li>${sub}</li>`)
      .join("");
  } catch (err) {
    console.error(err);
    alert("Error fetching subdomains. Check your API key and domain.");
  }
}

