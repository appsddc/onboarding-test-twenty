# Kleaver CMS
### Install
Clone this repo and run
```shell
bundle && yarn
```

### Netlify Build Command
```shell
JEKYLL_ENV=production bundle exec jekyll build
```

### .gitignore
```text
_site/
.sass-cache/
.jekyll-cache/
.jekyll-metadata
node_modules
# Local Netlify folder
.netlify
```