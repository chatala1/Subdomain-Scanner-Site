
async function scanSubdomains() {
  const domainInput = document.getElementById("domainInput");
  const domain = domainInput.value.trim();
  
  // Input validation
  if (!domain) {
    alert("Please enter a domain name.");
    domainInput.focus();
    return;
  }
  
  // Basic domain validation
  const domainRegex = /^[a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!domainRegex.test(domain)) {
    alert("Please enter a valid domain name (e.g., example.com).");
    domainInput.focus();
    return;
  }
  
  const url = `https://subdomain-scan1.p.rapidapi.com/?domain=${domain}`;
  const listEl = document.getElementById("subdomainList");
  
  // Show loading state
  listEl.innerHTML = "<li>Scanning subdomains...</li>";
  
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY_HERE",
      "X-RapidAPI-Host": "subdomain-scan1.p.rapidapi.com"
    }
  };

  try {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();
    
    // Clear loading state
    listEl.innerHTML = "";
    
    if (result.subdomains && result.subdomains.length > 0) {
      listEl.innerHTML = result.subdomains
        .map(sub => `<li>${sub}</li>`)
        .join("");
    } else {
      listEl.innerHTML = "<li>No subdomains found or invalid response format.</li>";
    }
  } catch (err) {
    console.error("Subdomain scan error:", err);
    listEl.innerHTML = "";
    
    // More specific error messages
    if (err.message.includes("Failed to fetch")) {
      alert("Error: Unable to connect to the subdomain scanning service. Please check your API key and internet connection.");
    } else if (err.message.includes("401")) {
      alert("Error: Invalid API key. Please check your RapidAPI key configuration.");
    } else if (err.message.includes("429")) {
      alert("Error: API rate limit exceeded. Please try again later.");
    } else {
      alert(`Error fetching subdomains: ${err.message}`);
    }
  }
}

// Add Enter key support
document.addEventListener("DOMContentLoaded", function() {
  const domainInput = document.getElementById("domainInput");
  if (domainInput) {
    domainInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        scanSubdomains();
      }
    });
  }
});
