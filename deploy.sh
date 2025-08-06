#!/bin/bash

# Make sure you're on the root of your repo
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main

# Deploy to GitHub Pages
git checkout --orphan gh-pages
git rm -rf .
cp index.html style.css script.js .
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages

echo "✅ Site deployed at https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
