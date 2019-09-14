eval "$(ssh-agent -s)"
chmod 600 ./deploy_key
echo -e "Host *\n\tStrictHostKeyChecking no\n" >> ~/.ssh/config
ssh-add ./deploy_key
ssh -i ./deploy_key $DEPLOYER_USER@159.89.28.170 bash -c "$DEPLOY_DIR/deploy.sh"