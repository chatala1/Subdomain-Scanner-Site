// Configuration file for Subdomain Scanner
// Copy this file to 'config.js' and add your actual API key

const CONFIG = {
  RAPIDAPI_KEY: 'YOUR_RAPIDAPI_KEY_HERE',
  API_HOST: 'subdomain-scan1.p.rapidapi.com'
};

// Make config available globally
if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
}