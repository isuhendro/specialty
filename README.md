# Specialty

Like a chef cooks a specialty and choose the best ingredients to cook; herewith my pick of choices for `specialty`.
`Specialty` is a bootstrap of application stack from the infrastructure (using `Docker` + run in `Google Cloud Run`), server-side (use `Golang` as preferred language and `Gin` as its HTTP server), and client-side (use `ReactJS`)

Below are things in mind while choosing my `specialty`

- [x] It looks sleek (imagination is your limit), but still modular. Answers: `ReactJS`
- [x] It must run fast. Answer: `GoLang`, `Gin`
- [x] It should be extensible as a massive software and maintainable in a large team. Answer: `Docker`, `Google Cloud Run`
- [x] It operates in thin budget i.e. less than `2$ monthly`. Answer: `Google Cloud Run`
- [x] It starts as a website and would have its mobile app version without additional learning curve. Answer: `React`, `React Native`

## Ingredients

- `golang` as the server-side
- `ReactJS` as the front-end framework
- `https://material-ui.com/` as the UI library
- `docker` as the container
- `GKE` with preemptive nodes as the container engine

## The Results

### Running in Docker Container
<p align="center">
  <img width="500" src="https://user-images.githubusercontent.com/241914/73497581-144fa080-43f6-11ea-8803-2690f6440326.gif">
</p>

### ReactJS as the front-end
<p align="center">
  <img width="500" src="https://user-images.githubusercontent.com/241914/73496412-81156b80-43f3-11ea-83bf-725079489ded.png">
</p>

### Fast Web API. Thanks to GoLang & Gin!
Note that at server side, individual HTTP request are responded in less than `1 milisecond`.
<p align="center">
  <img width="500" src="https://user-images.githubusercontent.com/241914/73164569-2814b180-412d-11ea-9148-08b7f109c58e.gif">
</p>

### Less Than 2\$ monthly
<p align="center">
  <img width="500" src="https://user-images.githubusercontent.com/241914/73497930-e585fa00-43f6-11ea-80b3-bc8febaa88e0.png">
</p>
https://cloud.google.com/products/calculator/#id=54e301ef-f311-433c-8175-736c234e9909

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
