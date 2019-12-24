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

## Command references

```
cd $GOPATH/src/github.com/isuhendro/gin-react
docker build . -t specialty
docker run -i -t -p 5000:5000 specialty
```
