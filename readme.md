# Vite - Vanilla JS Starter Pack - Shihab 

## **Features**
*  localhost served with https - for more realistic feel - using `vite-plugin-mkcert`
*  mustach.js integration for easy templating
*  Netlify cli to deploy
*  added src alias config with intellisense working using `jsconfig` via `vite.config.js` file
*  netlify ci/cd pipeline config with netlify.toml file
*  or you can up the site on surge.sh config for deployment `echo <DOMINE_NAME> > CNAME` or `npm run surge --domain <DOMINE_NAME>` [`url is in the CNAME file of root directory`]
---

# Getting Started

Use this repository as a GitHub template or use degit to clone to your machine with an empty git history:
`npx degit shihab-dot-dev/vite-vanilla-booster.git#master my-app`
## TODO :
*  .env file support
*  consider adding `PWA `
*  consider adding `i18n`
*  consider adding `vite-html-plugin`
*  consider adding `uno css`
*  consider adding `routing using navigo`
*  consider adding check-env pckg
*  consider adding `lerna`
*  add `npm-check-updates` [https://www.npmjs.com/package/npm-check-updates], [https://chrispennington.blog/blog/how-to-update-npm-packages-safely-with-npm-check-updates/]
* Add storybook as entry point, where you list down installation, jsdoc link, demo link and all getting started terms
* Keep it concised to CSR
* PRPL - pattern readiness
* lazy loading of component and scripts when needed
* adding a notification bar(web-component) when the network is slow
* adding notification bar when there the internet goes off and dull the screen so that user wont be able to interact with it
* Try to add SSR - server first render then initiate SPA - [ not in picture as of now]
* if possible add deploy script to heruko or netlify

## **How to Run this project**
**step 1** : Install The node modules needed

`npm install`

**Step 2** : Serve the project to do changes
### To serve localhost with https use
`npm run dev`

** OR **
### To serve localhost without https use
`npm run serve`

---
### To build
`npm run build`

### to preview the build
`npm run preview`

---
# Deployment Options
### to deploy to surge.sh
`npm run surge --domain <DOMINE_NAME>`
or
`npm run surge --domain vite-starter-shihab.surge.sh`

### Deploy to Netlify
`npm run netlify` from master branch
# common todo tasks
* add git flow to the repo
* change netlify or surge .sh configurations files