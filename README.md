## Prepare env
### update nodejs using Ubuntu
- `curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -`
- `sudo apt-get install -y nodejs`

### update nodejs Debian, as root
- `curl -sL https://deb.nodesource.com/setup_5.x | bash -`
- `apt-get install -y nodejs`

## Installation
- `npm install`

## Protractor installation
- `npm install -g protractor`

## WebDriver update
- `webdriver-manager update`

## Run tests
- `npm test` `protractor dev.conf.js`
- run specific suite on specific env: `protractor dev.conf.js --suite=sign_in`