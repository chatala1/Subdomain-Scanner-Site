#!/bin/bash

# Initialize repo
git init
git add .
git commit -m "Initial commit with Minimal Mistakes theme"
git branch -M main
git remote add origin https://github.com/chatala1/Subdomain-Scanner-Site.git
git push -u origin main

# Deploy to GitHub Pages
git checkout --orphan gh-pages
git rm -rf .
cp index.md _config.yml style.css assets/ _layouts/ .
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages

echo "🚀 Deployed at https://chatala1.github.io/Subdomain-Scanner-Site"
