# Specialty
Like a chef cooks a specialty and choose the best ingredients to cook; herewith my pick of choices for `specialty`.
`Specialty` is a bootstrap application stack from the infrastructure (using Docker + run in Cloud Service), server-side (use Golang and Gin module), and client-side (use ReactJS)

Below are things in mind while choosing my `specialty`
- [x]  It must look sleek
- [x]  It must run fast
- [x]  It should be extensible as a massive software and maintainable in a large team
- [x]  It should run in less than 20\$ monthly
- [x]  It starts as a website and would have its mobile app version

## Ingredients
- `golang` as the server-side
- `ReactJS` as the front-end framework
- `https://material-ui.com/` as the UI library
- `docker` as the container
- `GKE` with preemptive nodes as the container engine

## Results
### Web Application using ReactJS
![ReactGin](https://user-images.githubusercontent.com/241914/73169007-11bf2380-4136-11ea-85e4-24b4379a9495.gif)

### Web API that responds in less than 20ms
![API response time](https://user-images.githubusercontent.com/241914/73164569-2814b180-412d-11ea-9148-08b7f109c58e.gif)

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
npm run-script build
```

## Command references

```
cd $GOPATH/src/github.com/isuhendro/gin-react
docker build -t isuhendro/specialty:1.0 .
docker tag specialty:1.0 isuhendro/specialty:1.0
docker run -i -t -p 5000:5000 isuhendro/specialty:1.0
```
Docker Cheat Sheet
https://www.docker.com/sites/default/files/d8/2019-09/docker-cheat-sheet.pdf
