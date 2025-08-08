# Subdomain Scanner

A simple web-based subdomain scanner that uses RapidAPI's subdomain-scan1 service to discover subdomains for a given domain.

## Features

- Clean, responsive web interface
- Real-time subdomain scanning
- Error handling and user feedback
- Jekyll-based static site generation
- GitHub Pages deployment ready

## Demo

The site is deployed at: [https://chatala1.github.io/Subdomain-Scanner-Site](https://chatala1.github.io/Subdomain-Scanner-Site)

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

### API Configuration

To use the subdomain scanning functionality:

1. Sign up for a RapidAPI account at [https://rapidapi.com](https://rapidapi.com)
2. Subscribe to the subdomain-scan1 API
3. Replace `YOUR_RAPIDAPI_KEY_HERE` in both `script.js` and `assets/js/scanner.js` with your actual API key

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
├── script.js            # JavaScript (for static version)
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

## Usage

1. Open the website
2. Enter a domain name (e.g., "example.com") in the input field
3. Click "Scan" to discover subdomains
4. Results will be displayed in a list below the form

## Troubleshooting

### Theme Issues

If you encounter build errors related to the `minimal-mistakes-jekyll` theme:

1. Temporarily comment out the theme in `_config.yml`:
   ```yaml
   # theme: minimal-mistakes-jekyll
   ```

2. Simplify `_layouts/default.html` to remove theme-specific includes

### Common Errors

- **API Key Error**: Make sure you've replaced the placeholder API key with your actual RapidAPI key
- **CORS Errors**: These are expected when testing locally without a valid API key
- **Build Failures**: Ensure all Jekyll dependencies are installed with `bundle install`

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## API Credits

This project uses the subdomain-scan1 API from RapidAPI for subdomain discovery.
