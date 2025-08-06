async function scanSubdomains() {
  const domainInput = document.getElementById("domainInput");
  const domain = domainInput.value.trim();
  const listEl = document.getElementById("subdomainList");
  const button = document.querySelector('button');
  
  // Input validation
  if (!domain) {
    alert("Please enter a domain name");
    return;
  }
  
  // Basic domain validation
  const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]?\.[a-zA-Z]{2,}$/;
  if (!domainRegex.test(domain)) {
    alert("Please enter a valid domain name (e.g., example.com)");
    return;
  }
  
  // Check if config is loaded
  if (typeof CONFIG === 'undefined' || CONFIG.RAPIDAPI_KEY === 'YOUR_RAPIDAPI_KEY_HERE') {
    listEl.innerHTML = '<li style="color: red;">⚠️ API configuration missing. Please copy config.example.js to config.js and add your RapidAPI key.</li>';
    return;
  }
  
  // Show loading state
  button.disabled = true;
  button.textContent = 'Scanning...';
  listEl.innerHTML = '<li>🔍 Scanning subdomains...</li>';
  
  const url = `https://${CONFIG.API_HOST}/?domain=${encodeURIComponent(domain)}`;
  
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": CONFIG.RAPIDAPI_KEY,
      "X-RapidAPI-Host": CONFIG.API_HOST
    }
  };

  try {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const result = await response.json();
    
    if (result.subdomains && Array.isArray(result.subdomains)) {
      if (result.subdomains.length === 0) {
        listEl.innerHTML = '<li>No subdomains found for this domain.</li>';
      } else {
        listEl.innerHTML = result.subdomains
          .map(sub => `<li>${sub}</li>`)
          .join("");
      }
    } else {
      listEl.innerHTML = '<li style="color: orange;">⚠️ Unexpected response format from API.</li>';
    }
  } catch (err) {
    console.error("Subdomain scan error:", err);
    let errorMessage = "Error fetching subdomains. ";
    
    if (err.message.includes('HTTP 401') || err.message.includes('HTTP 403')) {
      errorMessage += "Check your API key permissions.";
    } else if (err.message.includes('HTTP 429')) {
      errorMessage += "Rate limit exceeded. Please try again later.";
    } else if (err.message.includes('Failed to fetch')) {
      errorMessage += "Network error. Check your internet connection.";
    } else {
      errorMessage += "Please try again or check the console for details.";
    }
    
    listEl.innerHTML = `<li style="color: red;">❌ ${errorMessage}</li>`;
  } finally {
    // Reset button state
    button.disabled = false;
    button.textContent = 'Scan';
  }
}

// Add Enter key support
document.addEventListener('DOMContentLoaded', function() {
  const domainInput = document.getElementById("domainInput");
  if (domainInput) {
    domainInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        scanSubdomains();
      }
    });
  }
});
