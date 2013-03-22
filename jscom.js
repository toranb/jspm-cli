define(['http-amd/json'], function(http) {
  var baseUrl = 'http://api.jspm.co';

  login: function(username, password) {
    http.post(baseUrl + '/login', {
      username: username,
      password: password
    }, function(res) {
      console.log(res);
    }, function(err) {
      console.log(err);
    });
  },
  register: function(username, password, email) {
    http.post(baseUrl + '/register', {
      username: username,
      password: password,
      email: email
    }, function(res) {
      console.log(res);
    }, function(err) {
      console.log(err);
    });
  },
  publish: function(name, endpoint, version) {
    http.post(baseUrl + '/publish', {
      name: name,
      endpoint: endpoint,
      version: version
    }, function(res) {
      console.log(res);
    }, function(err) {
      console.log(err);
    });
  },
  publishAll: function(name, endpoint) {
    http.post(baseUrl + '/publish_all', {
      name: name,
      endpoint
    }, function(res) {
      console.log(res);
    }, function(err) {
      console.log(err);
    });
  }
});