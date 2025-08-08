let userApiKey = localStorage.getItem('rapidapi_key');

function showApiKeyInput() {
  const keyInput = document.getElementById("apiKeyInput");
  const keySection = document.getElementById("apiKeySection");
  if (!userApiKey) {
    keySection.style.display = "block";
  }
}

function saveApiKey() {
  const keyInput = document.getElementById("apiKeyInput");
  const key = keyInput.value.trim();
  if (key) {
    userApiKey = key;
    localStorage.setItem('rapidapi_key', key);
    document.getElementById("apiKeySection").style.display = "none";
    document.getElementById("apiKeyStatus").innerHTML = "✓ API key saved";
    document.getElementById("clearKeyBtn").style.display = "inline";
  }
}

function clearApiKey() {
  userApiKey = null;
  localStorage.removeItem('rapidapi_key');
  document.getElementById("apiKeySection").style.display = "block";
  document.getElementById("apiKeyStatus").innerHTML = "";
  document.getElementById("apiKeyInput").value = "";
  document.getElementById("clearKeyBtn").style.display = "none";
}

function runDemoScan(domain) {
  const listEl = document.getElementById("subdomainList");
  const statusEl = document.getElementById("scanStatus");
  
  // Simulate scanning process
  statusEl.innerHTML = "Running demo scan...";
  listEl.innerHTML = "<li>Loading...</li>";
  
  setTimeout(() => {
    const demoSubdomains = [
      `www.${domain}`,
      `mail.${domain}`,
      `ftp.${domain}`,
      `admin.${domain}`,
      `api.${domain}`,
      `blog.${domain}`,
      `shop.${domain}`,
      `support.${domain}`
    ];
    
    listEl.innerHTML = demoSubdomains
      .map(sub => `<li>${sub} <span class="demo-tag">(demo)</span></li>`)
      .join("");
    statusEl.innerHTML = `Demo completed - ${demoSubdomains.length} example subdomains shown`;
  }, 2000);
}

async function scanSubdomains() {
  const domainInput = document.getElementById("domainInput");
  const domain = domainInput.value.trim();
  const listEl = document.getElementById("subdomainList");
  const statusEl = document.getElementById("scanStatus");
  
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

  if (!userApiKey) {
    showApiKeyInput();
    alert("Please enter your RapidAPI key first");
    return;
  }

  // Show loading state
  statusEl.innerHTML = "Scanning subdomains...";
  listEl.innerHTML = "<li>Loading...</li>";
  
  const url = `https://subdomain-scan1.p.rapidapi.com/?domain=${domain}`;
  
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": userApiKey,
      "X-RapidAPI-Host": "subdomain-scan1.p.rapidapi.com"
    }
  };

  try {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();
    
    if (result.subdomains && Array.isArray(result.subdomains)) {
      if (result.subdomains.length === 0) {
        listEl.innerHTML = "<li>No subdomains found</li>";
        statusEl.innerHTML = "Scan completed - no subdomains found";
      } else {
        listEl.innerHTML = result.subdomains
          .map(sub => `<li>${sub}</li>`)
          .join("");
        statusEl.innerHTML = `Scan completed - ${result.subdomains.length} subdomains found`;
      }
    } else {
      // Handle different response format
      listEl.innerHTML = "<li>Unexpected response format</li>";
      statusEl.innerHTML = "Scan completed with unexpected response";
      console.log("API Response:", result);
    }
  } catch (err) {
    console.error("Scan error:", err);
    
    if (err.message.includes('401') || err.message.includes('403')) {
      listEl.innerHTML = "<li style='color: red;'>Error: Invalid API key</li>";
      statusEl.innerHTML = "Error: Invalid API key. Please check your RapidAPI key.";
      showApiKeyInput();
    } else if (err.message.includes('Failed to fetch')) {
      // CORS issue - offer demo mode
      listEl.innerHTML = `
        <li style='color: orange;'>CORS Error: Direct browser calls not supported</li>
        <li style='color: #666;'>This API requires server-side implementation</li>
        <li style='color: #007bff; cursor: pointer;' onclick='runDemoScan("${domain}")'>Click here to see demo results</li>
      `;
      statusEl.innerHTML = "Error: CORS restriction. Try demo mode or implement server-side proxy.";
    } else if (err.message.includes("429")) {
      listEl.innerHTML = "<li style='color: red;'>Error: API rate limit exceeded</li>";
      statusEl.innerHTML = "Error: API rate limit exceeded. Please try again later.";
    } else {
      listEl.innerHTML = "<li style='color: red;'>Error occurred during scan</li>";
      statusEl.innerHTML = `Error: ${err.message}`;
    }
  }
}

// Check if API key exists on page load and add Enter key support
window.addEventListener('DOMContentLoaded', function() {
  if (userApiKey) {
    document.getElementById("apiKeyStatus").innerHTML = "✓ API key saved";
    document.getElementById("clearKeyBtn").style.display = "inline";
  } else {
    showApiKeyInput();
  }
  
  // Add Enter key support for domain input
  const domainInput = document.getElementById("domainInput");
  if (domainInput) {
    domainInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        scanSubdomains();
      }
    });
  }
});
