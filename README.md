# Main purpose
Show how to run [`puppeteer`](https://github.com/GoogleChrome/puppeteer) using [AVA](https://github.com/avajs/ava) as test runner and [Selenoid](https://github.com/aerokube/selenoid) as a tool for running tests in isolated environment in a Docker container.

## How to run

Firstly, install all dependencies `npm i
`
### puppeteer + AVA
Just run `npm run test`

### puppeteer + AVA + Selenoid
1. Download `cm` (Configuration Manager) tool `npm run cm:install`
2. Run test `npm run stest` (in background it will download and setup Selenoid as it needed)
