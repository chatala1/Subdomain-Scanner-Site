# Subdomain Scanner

A web-based subdomain scanner that integrates with the RapidAPI Subdomain Scanner service.

## Features

- 🔐 Secure API key management (stored locally in browser)
- 🎯 Clean, modern interface
- 🚀 Real-time subdomain scanning
- 📱 Mobile-responsive design
- 🔄 Demo mode for testing
- ⚡ Error handling and user feedback

## How to Use

1. **Get a RapidAPI Key**: Visit [RapidAPI Subdomain Scanner](https://rapidapi.com/sedrakpc/api/subdomain-scan1/) and sign up for a free API key.

2. **Enter Your API Key**: When you first visit the site, you'll be prompted to enter your RapidAPI key. This is stored securely in your browser's local storage.

3. **Scan Subdomains**: Enter a domain name (e.g., `example.com`) and click "Scan" to discover subdomains.

4. **Demo Mode**: If you encounter CORS issues (common with browser-based API calls), you can use the demo mode to see how the scanner works.

## Technical Details

### CORS Limitations

Due to browser security restrictions (CORS), direct API calls to RapidAPI may not work from a client-side application. This is a common limitation with external APIs. The application includes:

- Clear error messaging about CORS issues
- Demo mode to showcase functionality
- Suggestions for server-side implementation

### Security

- API keys are stored locally in your browser only
- No server-side storage of sensitive information
- Keys can be easily changed or cleared

### Files Structure

- `index.html` - Main application page
- `style.css` - Styling and responsive design
- `assets/js/scanner.js` - Core functionality and API integration
- `index.md` - Jekyll version (for GitHub Pages deployment)

## Deployment

The site can be deployed as:

1. **Static Site**: Serve the `index.html` file directly
2. **GitHub Pages**: Use the Jekyll setup with `index.md`

For GitHub Pages deployment, use the provided `deploy.sh` script.

## Development

To run locally:

```bash
# Simple HTTP server
python3 -m http.server 8000

# Or with Jekyll (requires Ruby/Bundler)
bundle exec jekyll serve
```

## API Integration

The scanner integrates with the [RapidAPI Subdomain Scanner](https://rapidapi.com/sedrakpc/api/subdomain-scan1/) service. For production use, consider implementing a server-side proxy to avoid CORS limitations and better protect API keys.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

See [LICENSE](LICENSE) file for details.