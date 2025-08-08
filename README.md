# Subdomain Scanner

A web-based subdomain scanner that integrates with the RapidAPI Subdomain Scanner service. This project provides both a modern single-page application interface and Jekyll-based static site generation for GitHub Pages deployment.

## Features

- 🔐 **Secure API key management** - Keys stored locally in browser only
- 🎯 **Clean, modern interface** - Responsive design that works on all devices
- 🚀 **Real-time subdomain scanning** - Live results with loading states
- 📱 **Mobile-responsive design** - Optimized for desktop and mobile
- 🔄 **Demo mode for testing** - Works when CORS restrictions prevent API calls
- ⚡ **Error handling and user feedback** - Comprehensive error messages
- 🏗️ **Jekyll-based static site generation** - GitHub Pages deployment ready

## Demo

The site is deployed at: [https://chatala1.github.io/Subdomain-Scanner-Site](https://chatala1.github.io/Subdomain-Scanner-Site)

## How to Use

1. **Get a RapidAPI Key**: Visit [RapidAPI Subdomain Scanner](https://rapidapi.com/sedrakpc/api/subdomain-scan1/) and sign up for a free API key.

2. **Enter Your API Key**: When you first visit the site, you'll be prompted to enter your RapidAPI key. This is stored securely in your browser's local storage.

3. **Scan Subdomains**: Enter a domain name (e.g., `example.com`) and click "Scan" to discover subdomains.

4. **Demo Mode**: If you encounter CORS issues (common with browser-based API calls), you can use the demo mode to see how the scanner works.

## Setup

### Local Development

1. **Install Ruby and Bundler**:
   ```bash
   gem install bundler --user-install
   export PATH="$PATH:$HOME/.local/share/gem/ruby/3.2.0/bin"
   ```

2. **Install dependencies**:
   ```bash
   bundle install --path vendor/bundle
   ```

3. **Build the site**:
   ```bash
   bundle exec jekyll build
   ```

4. **Run development server**:
   ```bash
   bundle exec jekyll serve --host 0.0.0.0 --port 4000
   ```

   The site will be available at `http://localhost:4000`

### Simple HTTP Server Alternative

For quick testing without Jekyll:

```bash
# Simple HTTP server
python3 -m http.server 8000
```

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

## File Structure

```
├── _config.yml          # Jekyll configuration
├── _layouts/            # Jekyll layout templates
│   └── default.html
├── assets/              # Additional assets
│   └── js/
│       └── scanner.js   # Main JavaScript functionality
├── index.html           # Static homepage
├── index.md             # Jekyll markdown homepage
├── style.css            # Main stylesheet
├── deploy.sh            # Deployment script
└── README.md            # This file
```

## Deployment

### GitHub Pages

The site automatically deploys to GitHub Pages when changes are pushed to the main branch.

**Note**: The configured theme `minimal-mistakes-jekyll` is not available in GitHub Pages. For local development, you may need to temporarily disable the theme or use a supported theme.

### Manual Deployment

Use the provided deployment script:

```bash
./deploy.sh
```

## Troubleshooting

### Theme Issues

If you encounter build errors related to the `minimal-mistakes-jekyll` theme:

1. Temporarily comment out the theme in `_config.yml`:
   ```yaml
   # theme: minimal-mistakes-jekyll
   ```

2. Simplify `_layouts/default.html` to remove theme-specific includes

### Common Errors

- **API Key Error**: Make sure you've entered your RapidAPI key in the web interface
- **CORS Errors**: These are expected when testing locally; use demo mode or implement server-side proxy
- **Build Failures**: Ensure all Jekyll dependencies are installed with `bundle install`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## API Credits

This project uses the subdomain-scan1 API from RapidAPI for subdomain discovery.
