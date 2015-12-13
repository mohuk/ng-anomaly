# ng-anomaly
Exception handler decorator to post exceptions on the server. Depends on a minimal [Ajax](https://github.com/fdaciuk/ajax) library for making XHR requests to the server.

## Installation

### NPM
```bash
$ npm i ng-anomaly
```

## Usage
### Adding module in dependencies
```javascript
  angular.module('app', [
    'ng-anomaly'
  ]);
```

### Configuring logger via `anomalyProvider`
```javascript
  angular.module(app)
    .config(configuration);
  function configuration(anomalyProvider){
    anomalyProvider.setExceptionLogUrl('/logs');
  }
```

Configuring the above would `HTTP POST` all exceptions to `/logs`, make sure you have it setup in your API project.

### Provider functions
1. `setExceptionLogUrl`: url to POST exceptions to

## TODO
- [ ] Release on bower package manager
- [ ] Add headers support
- [ ] Write tests
