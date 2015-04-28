# Circuit Breaker Analytics

Project is under construction and should not be used by anyone.  This is a microservice to show analytics of all of my services using the circuit breaker pattern

### Installation Locally
```sh
$ cd circuit-breaker-analytics && npm install
$ DEBUG=circuit-breaker-analytics:* ./bin/www
```

### Installation With Docker For Development
```sh
$ cd circuit-breaker-analytics && npm install
$ docker build -t <name>/circuit-breaker-analytics .
$ docker run -it -p 3001:3001 -e "PORT=3001" -e "NODE_ENV=development" -e "NODE_MONGODB_URL=change ip/host" -e "NODE_MONGODB_DATABASE_NAME=circuit-breaker-analytics" --rm --name circuit-breaker-analytics <name>/circuit-breaker-analytics
```

### Dependencies
 - Running Mongodb server. Suggest using docker and https://registry.hub.docker.com/u/tutum/mongodb/
 ```sh
 $ docker run -d -e AUTH=no -p 27017:27017 -p 28017:28017 tutum/mongodb
 ```

### Information To Track
 - Successful requests
 - Rejected or short - circuited requests
 - Timeouts
 - Rejections
 - Failures/Exceptions
 - Number of hosts reporting
 - Response time per request
 - Circuit breaker status
 - Error percentage for last 10 seconds
 - Request rate per second
 - Track host and IP to dig down to where error is happening


### License
This code is maintained by Jason Michels and open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)