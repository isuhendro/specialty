FROM golang:1.13.0-stretch
RUN mkdir /app
ADD . /app
WORKDIR /app
RUN go build -o main
CMD ["/app/main"]
EXPOSE 5000