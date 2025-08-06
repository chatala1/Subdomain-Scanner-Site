#!/bin/bash

echo "🚀 Deploying Subdomain Scanner to GitHub Pages..."

# Ensure we're on the main branch
git checkout main

# Add and commit any changes
git add .
git status
read -p "Commit these changes? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    git commit -m "Update site for deployment"
fi

# Push to main branch
git push origin main

echo "✅ Main branch updated"
echo "🌐 GitHub Pages will automatically deploy from main branch"
echo "📖 Site will be available at: https://chatala1.github.io/Subdomain-Scanner-Site"
echo ""
echo "⚠️  Don't forget to:"
echo "   1. Copy config.example.js to config.js"
echo "   2. Add your RapidAPI key to config.js"
echo "   3. Enable GitHub Pages in repository settings if not already enabled"
