---
layout: default
title: Subdomain Scanner
description: Discover subdomains for any domain using RapidAPI
---

<style>
{% include_relative style.css %}
</style>

<div class="container">
  <h1>Subdomain Scanner</h1>
  <p>Discover subdomains for any domain using RapidAPI</p>
  <div class="input-group">
    <input type="text" id="domainInput" placeholder="Enter a domain (e.g., example.com)" />
    <button onclick="scanSubdomains()">Scan</button>
  </div>
  <ul id="subdomainList"></ul>
</div>

<script>
// Load configuration if available, fallback to example config
if (typeof CONFIG === 'undefined') {
  window.CONFIG = {
    RAPIDAPI_KEY: 'YOUR_RAPIDAPI_KEY_HERE',
    API_HOST: 'subdomain-scan1.p.rapidapi.com'
  };
}
</script>
<script src="{{ '/assets/js/scanner.js' | relative_url }}"></script>
