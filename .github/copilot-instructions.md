# Subdomain Scanner Site

Subdomain Scanner is a Jekyll-based static website that provides a web interface for scanning subdomains using RapidAPI. It can be deployed to GitHub Pages and served as a static website.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Environment Setup and Dependencies
- Install Bundler for user: `gem install bundler --user-install`
- Add gem bin to PATH: `export PATH="$PATH:/home/runner/.local/share/gem/ruby/3.2.0/bin"`
- Install dependencies: `bundle install --path vendor/bundle` -- takes 37-77 seconds to complete (varies by cache). NEVER CANCEL. Set timeout to 120+ seconds.
- Add webrick for development server: `bundle add webrick` -- takes 10 seconds.

### Building the Site
- **IMPORTANT**: The configured theme `minimal-mistakes-jekyll` is NOT available in GitHub Pages and will cause build failures locally.
- **For local development, you MUST apply the workaround first**:
  1. Temporarily modify `_config.yml` to remove the theme line:
     ```bash
     # Remove or comment out: theme: minimal-mistakes-jekyll
     sed -i 's/theme: minimal-mistakes-jekyll/# theme: minimal-mistakes-jekyll/' _config.yml
     ```
  2. Simplify `_layouts/default.html` to remove theme-specific includes:
     ```bash
     # Replace with basic HTML structure (see Troubleshooting section for details)
     ```
- Build the site: `bundle exec jekyll build` -- takes 2 seconds to complete.
- The built site is generated in the `_site/` directory.
- **Remember to revert changes before committing if preserving original theme config is desired**

### Running the Development Server
- **ALWAYS run environment setup steps first.**
- Development server: `bundle exec jekyll serve --host 0.0.0.0 --port 4000`
- Alternative static serving: `cd _site && python3 -m http.server 8000`
- Access the site at: `http://localhost:4000` (Jekyll) or `http://localhost:8000` (static)

### GitHub Pages Deployment
- The site deploys automatically to GitHub Pages from the repository
- GitHub Pages will build the site using its own Jekyll environment
- The `deploy.sh` script is available but is primarily for manual deployment setup

## Validation

### Manual Testing Requirements
- ALWAYS manually validate any changes by loading the site in a browser
- Test the core functionality:
  1. Load the homepage and verify "Subdomain Scanner" heading displays
  2. Enter a test domain (e.g., "example.com") in the input field
  3. Click the "Scan" button
  4. Verify an error alert appears (expected since API key is placeholder)
- Visual verification: Ensure the styling renders correctly with white background and centered form
- ALWAYS test both Jekyll development server and static file serving

### Build and Test Validation
- Always run `bundle exec jekyll build` after making changes
- Check that the `_site/` directory is populated with generated files
- Verify key files exist: `_site/index.html`, `_site/style.css`, `_site/script.js`
- **IMPORTANT**: Built site must be tested with actual file serving, not just build success
- Run manual validation scenario (see below) to ensure functionality works

## Common Tasks

### Repository Structure
```
.
├── _config.yml          # Jekyll configuration
├── _layouts/            # Jekyll layout templates
│   └── default.html
├── assets/              # Additional assets
│   └── js/
│       └── scanner.js   # Main JavaScript functionality
├── Gemfile              # Ruby dependencies
├── index.html           # Static homepage
├── index.md             # Jekyll markdown homepage
├── script.js            # JavaScript (copied to _site)
├── style.css            # Main stylesheet
└── deploy.sh            # Deployment script
```

### Key Configuration Files

#### _config.yml
```yaml
title: Subdomain Scanner
description: Scan subdomains using RapidAPI
theme: minimal-mistakes-jekyll  # NOTE: Not available in GitHub Pages
plugins:
  - jekyll-include-cache
```

#### Gemfile Dependencies
- `github-pages ~> 228` (includes Jekyll 3.9.3)
- `jekyll-include-cache`
- `webrick` (required for local development server)

### JavaScript Functionality
- Main function: `scanSubdomains()` in `script.js` and `assets/js/scanner.js`
- Uses RapidAPI subdomain-scan1 service
- Requires API key configuration (placeholder: "YOUR_RAPIDAPI_KEY_HERE")
- Error handling displays alert for fetch failures

### Troubleshooting
- **Theme not found error**: The `minimal-mistakes-jekyll` theme is not available in GitHub Pages. For local development:
  1. Temporarily comment out theme in `_config.yml`:
     ```yaml
     # theme: minimal-mistakes-jekyll
     ```
  2. Replace `_layouts/default.html` with simplified version:
     ```html
     <!DOCTYPE html>
     <html lang="en">
       <head>
         <meta charset="utf-8">
         <meta name="viewport" content="width=device-width, initial-scale=1">
         <title>{{ page.title | default: site.title }}</title>
         <meta name="description" content="{{ page.description | default: site.description }}">
         <link rel="stylesheet" href="/style.css">
       </head>
       <body>
         <main>{{ content }}</main>
       </body>
     </html>
     ```
  3. After testing, revert changes before committing
- **Webrick missing**: Run `bundle add webrick` if Jekyll serve fails
- **Duplicate gem warnings**: The Gemfile contains duplicate `github-pages` entries - this is a warning only
- **Build failures**: Ensure all Jekyll includes exist or temporarily simplify the layout

### Common Commands Output
```bash
# Bundle install output (abbreviated)
$ time bundle install --path vendor/bundle
Bundle complete! 10 Gemfile dependencies, 96 gems now installed.
real    1m17.069s

# Jekyll build output
$ time bundle exec jekyll build
Configuration file: _config.yml
Source: /path/to/repo
Destination: /path/to/repo/_site
Generating... done in 1.171 seconds.
real    0m2.247s
```

## Critical Timing and Timeout Requirements

- **Bundle install**: Takes 37-77 seconds (varies based on cache). NEVER CANCEL. Set timeout to 120+ seconds.
- **Jekyll build**: Takes 2 seconds. Set timeout to 30+ seconds for safety.
- **Jekyll serve startup**: Takes 3-5 seconds to start serving.
- **Manual testing**: Allow 30+ seconds for browser testing scenarios.

Always wait for commands to complete fully - builds and installs may appear to hang but are processing normally.