# Deployment Guide for Subdomain Scanner

This guide covers different deployment options for the Subdomain Scanner site.

## 🚀 Quick Deployment Options

### Option 1: GitHub Pages (Recommended)

1. **Fork this repository**
2. **Enable GitHub Pages** in Settings → Pages → Source: "Deploy from a branch" → Branch: "main"
3. **Create your API configuration**:
   ```bash
   # Clone your fork locally
   git clone https://github.com/YOUR_USERNAME/Subdomain-Scanner-Site.git
   cd Subdomain-Scanner-Site
   
   # Copy and edit config
   cp config.example.js config.js
   # Edit config.js with your RapidAPI key
   ```
4. **Deploy**:
   ```bash
   git add config.js
   git commit -m "Add API configuration"
   git push origin main
   ```

Your site will be available at: `https://YOUR_USERNAME.github.io/Subdomain-Scanner-Site`

### Option 2: Netlify

1. **Connect your GitHub repository** to Netlify
2. **Set build settings**:
   - Build command: `bundle exec jekyll build` (or leave empty for static HTML)
   - Publish directory: `_site` (or leave as root for static HTML)
3. **Add environment variable** for API key in Netlify dashboard
4. **Deploy**

### Option 3: Vercel

1. **Import project** from GitHub to Vercel
2. **Framework preset**: Other (or Jekyll if using Jekyll)
3. **Add environment variable** for API key
4. **Deploy**

### Option 4: Static Hosting (Any Provider)

1. **Upload files** directly to any web hosting service
2. **Copy config.example.js to config.js** on the server
3. **Edit config.js** with your API key
4. **Access your site**

## 🔐 Security Considerations

### For Production Deployment:

1. **API Key Security**:
   - Never commit `config.js` to public repositories
   - Use environment variables when possible
   - Consider server-side proxy for API calls
   - Implement rate limiting

2. **HTTPS**: Always use HTTPS for production sites

3. **Content Security Policy**: Consider adding CSP headers

4. **Rate Limiting**: Implement client-side rate limiting to prevent abuse

## 🛠️ Advanced Configuration

### Environment Variables (Server-side)

If your hosting provider supports environment variables, you can modify the JavaScript to use them:

```javascript
const CONFIG = {
  RAPIDAPI_KEY: process.env.RAPIDAPI_KEY || 'YOUR_RAPIDAPI_KEY_HERE',
  API_HOST: 'subdomain-scan1.p.rapidapi.com'
};
```

### Custom Domain

1. **GitHub Pages**: Add CNAME file with your domain
2. **Netlify/Vercel**: Configure custom domain in dashboard
3. **Update _config.yml** baseurl if needed

## 🧪 Testing Your Deployment

1. **Check API configuration** message appears correctly
2. **Test domain validation** with invalid domains
3. **Verify responsive design** on mobile devices
4. **Test with actual API key** (if available)

## 📊 Monitoring

Consider adding:
- Google Analytics for usage tracking
- Error monitoring (e.g., Sentry)
- Uptime monitoring
- API usage tracking

## ⚠️ Troubleshooting

### Common Issues:

1. **404 on GitHub Pages**: Check repository name matches GitHub Pages URL
2. **CSS not loading**: Verify baseurl in _config.yml
3. **API errors**: Check API key and subscription status
4. **Build failures**: Check Jekyll version compatibility

### Debug Mode:

Add this to your JavaScript for debugging:
```javascript
console.log('CONFIG loaded:', typeof CONFIG !== 'undefined' ? 'Yes' : 'No');
console.log('API Host:', CONFIG?.API_HOST);
```