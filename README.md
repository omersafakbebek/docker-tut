# docker-tut
`docker build -t docker-tut .`: Build the docker image<br />
`docker run -p 8090:8090 docker-tut`: Start a new docker container<br />
`docker-compose up --build`: Create and start containers defined in docker-compose.yml file<br />   
`docker images`: Show the ready images<br />
`docker container ls`: List the containers<br />
`docker container ps`: Show the running containers<br />
`docker exec -it docker-tut-mongo bash`: Run a command in a container<br />
`docker logs docker-tut`: Show logs of a container<br />
