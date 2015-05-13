(function(RCBlack){
    
    var util = require("util");
    var http = require("http");
    var request = require("request");
    
    var botKey = "THIS NEEDS TO BE SET";
   
    
    RCBlack.Search = function(searchTerm, req, next){
        
        console.log("Search request for %s from IP: %s", searchTerm, req.connection.remoteAddress);
        
        var options = {
            host: "http://rc.goonfleet.com",
            port: 80,
            path: util.format("/rcbot/cbl/%s/%s", botKey, searchTerm)
        }
        
        var requestString = options.host + options.path
        
        request(requestString, function(error, response, body){
           if(!error && response.statusCode == 200){
               console.log("Response aquired from RC");
               var responseContent = JSON.parse(body);
               next(null, responseContent);
           }else {
               console.log("Response failed from RC. Error: " + error);
               next(error, null);
           }
        });        
    };
    
})(module.exports);