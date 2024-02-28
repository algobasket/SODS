echo "Switching to branch master"
git checkout main


echo "Building app ..."
npm run build

echo "Deploying files to server ....."
scp -r build/* algobasket@128.199.71.49:/var/www/128.199.71.49/

echo "Done!"