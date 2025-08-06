# Subdomain Scanner

A simple web application to discover subdomains for any domain using RapidAPI's Subdomain Scanner service.

## 🌟 Features

- **Simple Interface**: Clean, responsive design that works on all devices
- **Real-time Scanning**: Discover subdomains instantly
- **Input Validation**: Validates domain format before scanning
- **Error Handling**: Comprehensive error messages for different scenarios
- **Secure Configuration**: API keys are kept in separate configuration files
- **Dual Deployment**: Supports both simple HTML hosting and Jekyll/GitHub Pages

## 🚀 Live Demo

Visit the live site: [https://chatala1.github.io/Subdomain-Scanner-Site](https://chatala1.github.io/Subdomain-Scanner-Site)

## 📋 Prerequisites

- A RapidAPI account and subscription to the [Subdomain Scanner API](https://rapidapi.com/SubdomainScan/api/subdomain-scan1/)
- Web hosting (GitHub Pages, Netlify, etc.) or local web server

## 🛠️ Setup Instructions

### Option 1: Simple HTML Deployment

1. **Clone or download** this repository
2. **Copy the configuration file:**
   ```bash
   cp config.example.js config.js
   ```
3. **Edit `config.js`** and replace `YOUR_RAPIDAPI_KEY_HERE` with your actual RapidAPI key:
   ```javascript
   const CONFIG = {
     RAPIDAPI_KEY: 'your-actual-rapidapi-key-here',
     API_HOST: 'subdomain-scan1.p.rapidapi.com'
   };
   ```
4. **Deploy** the files to any web hosting service
5. **Access** your site and start scanning subdomains!

### Option 2: Jekyll/GitHub Pages Deployment

1. **Fork** this repository to your GitHub account
2. **Enable GitHub Pages** in repository settings (Source: Deploy from a branch, Branch: main)
3. **Create your config file** locally:
   ```bash
   cp config.example.js config.js
   # Edit config.js with your API key
   ```
4. **Deploy using the provided script:**
   ```bash
   chmod +x deploy.sh
   ./deploy.sh
   ```

### Local Development

To run locally with Jekyll:

```bash
# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# Visit http://localhost:4000
```

To run locally with simple HTTP server:

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (with http-server package)
npx http-server

# Visit http://localhost:8000
```

## 🔐 Security Notes

- **Never commit API keys** to version control
- The `config.js` file is gitignored to prevent accidental commits
- Always use the `config.example.js` template for sharing
- Consider implementing rate limiting for production use

## 📁 File Structure

```
├── index.html              # Main HTML file (simple deployment)
├── index.md                # Jekyll markdown file (GitHub Pages)
├── style.css               # Styling for the application
├── script.js               # JavaScript for HTML version
├── assets/
│   └── js/
│       └── scanner.js      # JavaScript for Jekyll version
├── config.example.js       # Configuration template
├── _config.yml             # Jekyll configuration
├── Gemfile                 # Ruby dependencies
├── deploy.sh               # Deployment script
└── README.md               # This file
```

## 🎨 Customization

### Styling
Edit `style.css` to customize the appearance:
- Colors and gradients
- Font families and sizes
- Layout and spacing
- Mobile responsiveness

### API Configuration
You can modify the API endpoint or add additional headers by editing the configuration object in `config.js`.

## 🐛 Troubleshooting

### Common Issues

1. **"API configuration missing" error**
   - Ensure you've copied `config.example.js` to `config.js`
   - Verify your API key is correctly set in `config.js`

2. **"Check your API key permissions" error**
   - Verify your RapidAPI subscription is active
   - Check that your API key has access to the Subdomain Scanner API

3. **"Rate limit exceeded" error**
   - You've hit the API rate limit
   - Wait before making another request or upgrade your API plan

4. **Network errors**
   - Check your internet connection
   - Verify the API endpoint is accessible

### Development Issues

1. **Jekyll build errors**
   - Run `bundle install` to ensure dependencies are installed
   - Check Ruby version compatibility

2. **CSS/JS not loading**
   - Verify file paths are correct
   - Check browser console for errors

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [RapidAPI](https://rapidapi.com/) for providing the Subdomain Scanner API
- [Jekyll](https://jekyllrb.com/) for the static site generator
- [GitHub Pages](https://pages.github.com/) for free hosting

## 📞 Support

If you encounter any issues or have questions:

1. Check the [troubleshooting section](#-troubleshooting)
2. Open an issue on GitHub
3. Check the RapidAPI documentation for the Subdomain Scanner API

---

**⚠️ Important**: Remember to keep your API keys secure and never commit them to public repositories!