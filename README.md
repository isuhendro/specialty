# Specialty

Like a chef cooks a specialty, and choose the best ingredients; herewith my pick of choices for the JS framework, server-side, and infrastructure option to build my software.
The imaginative software called `Specialty` should perform like the following

- It must look sleek
- It must run fast
- It should be extensible as a massive software and maintainable in a large team
- It should run in less than 20\$ monthly
- It starts as a website and would have its mobile app version

## Ingredient

- `golang` as the server-side
- `ReactJS` as the front-end framework
- `https://material-ui.com/` as the UI library
- `docker` as the container
- `GKE` with preemptive nodes as the container engine

## Getting Started

### Prerequisite
> Download `Docker Desktop` https://hub.docker.com/?overlay=onboarding , and install in your machine
> Download `GoLang`, and install in your machine https://golang.org/dl/

Clone this repository in your local https://github.com/isuhendro/specialty
```
git clone https://github.com/isuhendro/specialty
```

Build docker image in your local by running below command
```
docker image build -t v1.0.0 .
```

Build client side script
```
cd client
npm install
```

## Command references

```
cd $GOPATH/src/github.com/isuhendro/gin-react
docker build -t specialty:1.0 .
docker tag specialty:1.0 isuhendro/specialty:1.0
docker run -i -t -p 5000:5000 isuhendro/specialty:1.0
```
Docker Cheat Sheet
https://www.docker.com/sites/default/files/d8/2019-09/docker-cheat-sheet.pdf
