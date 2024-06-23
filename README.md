# Personal Portfolio

Welcome to my portfolio React project! This repository contains the source code for my personal portfolio website. Feel free to use it as a template to modify for your own portfolio!

## Features

- Responsive single-page application built with React.
- Dockerized setup for easy deployment and development.
- Continuous Integration (CI) setup with CircleCI for automated builds and deployments.

## Prerequisites

Before you begin, ensure you have the following installed:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Node.js and npm: [Install Node.js](https://nodejs.org/)
- Git: [Install Git](https://git-scm.com/)

## Setup Instructions

### Clone the Repository

```bash
git clone https://github.com/your-username/portfolio-react.git
cd portfolio-react
```

### Build the Docker Image

```bash
docker build -t portfolio-app .
```

### Run the Docker Container
```bash
docker run -d -p 3000:80 --name portfolio-container portfolio-app
```
Open your browser and navigate to http://localhost:3000 to view the application.

## Continuous Integration with CircleCI

This project uses CircleCI for automated testing and deployment. The configuration is stored in `.circleci/config.yml`. CircleCI is set up to:

- Build the Docker image on push to the main branch.
- Deploy the Docker container to a remote server on successful build.

### To set up CircleCI:

1. Sign up for [CircleCI](https://circleci.com/) if you haven't already.
2. Connect your GitHub repository to CircleCI.
3. Add your  SSH key and environment variables: `$USER` and `$DNS` in CircleCI settings.

## License

This project is licensed under the GPL-3.0 license - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to [CircleCI](https://circleci.com/) for the continuous integration platform.
- Built with [React](https://reactjs.org/) and [Docker](https://www.docker.com/).
