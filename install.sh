rm -rf build
rm -rf dist
rm -rf node_modules
rm package-lock.json
npm install
npm run build
npm run build-electron
npm run package
