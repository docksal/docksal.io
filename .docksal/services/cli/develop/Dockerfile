# Use a stock Docksal image as the base
FROM docksal/cli:2.1-php7.1

# Install gatsby cli
RUN export NVM_DIR="/home/docker/.nvm" && . "$NVM_DIR/nvm.sh" && \
  npm install --global gatsby-cli && \
  ln -s $(which gatsby) /opt/gatsby

