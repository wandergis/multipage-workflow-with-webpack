/**
 * Created by WangMing on 16/1/11.
 */
var main = require('../main');
main.factory('doAjax', doAjax);

function doAjax($http, $q) {
  return {
    query: function(mobileno) {
      var deferred = $q.defer();
      $http.jsonp("openapi/getUserFriends", {
          method: "GET",
          params: {
            callback: "JSON_CALLBACK",
            mobileno: mobileno
          }
        })
        .success(function(data, status, headers, config) {
          deferred.resolve(data);
        })
        .error(function(data, status, headers, config) {
          deferred.reject(data);
        });
      return deferred.promise;
    }
  }
}