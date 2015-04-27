# Circuit Breaker Analytics

Project is under construction and should not be used by anyone.  This is a microservice to show analytics of all of my services using the circuit breaker pattern

### Installation Locally
```sh
$ cd circuit-breaker-analytics && npm install
$ DEBUG=circuit-breaker-analytics:* ./bin/www
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