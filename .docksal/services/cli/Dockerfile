# Use a stock Docksal image as the base
FROM docksal/cli:php7.1

# Install additional global npm dependencies
RUN set -e; \
    # Initialize nvm environment
    . $NVM_DIR/nvm.sh; \
    # Install packages
    npm install -g gatsby-cli;
