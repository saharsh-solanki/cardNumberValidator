## Prerequisite

1. Install the node js 
    ```
    node --version 
    v18.16.1
    ```
2. docker and docker-compose

## Project setup using docker ( recommended )

* If you are facing some issue while running the project locally you can using the docker compose to test. 

* Use this command to build the container 

```
docker-compose up
```

* Project will start on this url 

```
http://localhost:3000/
```

## Project setup local

1. clone the project

2. Use make command for initial setup

    ```
    make
    ```

## Runing the project
* Run both frontend and backend

    ```
    make run
    ```
* Run frontend 

    ```
     make run-frontend
    ```
* Run backend 
    ```
     make run-backend
    ```

## Development
* Use this command to format and check the linting of the project

    ```
    make format-js
    ```
* This command will format both frontend and backend.

## Errors

* If you are facing any issue you can use this command 
```
sudo apt-get update
sudo apt-get install python3 make g++
```