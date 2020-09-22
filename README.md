# frontend-bootstrap

Bootstrap repo for SPA development.

This repository contains a basic SPA to get easily and quick started. It uses [Next.js](https://nextjs.org) with [TypeScript](https://www.typescriptlang.org) and [react-bootstrap](https://react-bootstrap.github.io). An deployment workflow for [GitHub Pages](https://pages.github.com) is also included.

## Install

Clone repository:

````
git clone https://gitlab.com/chainstep/funding-projects/stereo/prototype/assistant-frontend.git
````


Install dependencies:

````
npm install
````


Create a `.env` file containing the following variables:

| Variable            | Description                                                                                                                                          | Brief                                                                                                                        |
|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| RUN_ENV             | The run environment                                                                                                                                  | `dev` for development, `prod` for production. Deploying the website automatically sets this variable to prod. Defaults to `dev` |                                                                                                         |


Use the `.env-sample` file as template.


## Usage


### Development

run server for development:

````
npm run dev
````

The website is now accessible at `http://localhost:3000`.


### Production

There are two options to deploy the website.


#### Self Hosted

Creating a static website which can be served by any static web server.

Lint project:

````
npm run lint
````


Build project:

````
npm run build
````


Create static website:

````
npm run export
````


The website is now available within the `./out` folder.


#### GitHub Pages

There is an easy way to serve the website with [GitHub Pages](https://pages.github.com). Follow the steps below to set up GitHub Pages to serve the website from within this repository (source repository).

1. Create a separate repository (target repository) and configure GitHub Pages to serve files from the root folder of the master branch of the target repository.
2. Create a `.env-production` file within the source repository and configure your production environment settings.
3. [Authorize SSH access](https://docs.github.com/en/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account) to the target repository from the system containing your source repository.

You can now deploy the website with the following commands:

````
cd scripts
./deploy-frontend.sh -u <github user> -r <repository name> -d <domain>
````

Replace `<github user>` with your GitHub user name and `<repository name>` with the target repository name. Replace `<domain>` if you serve the website under a custom domain. Otherwise do not use this option.


## Contributing
PRs accepted.

If editing the Readme, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License
[MIT](./LICENSE) © Attila Aldemir