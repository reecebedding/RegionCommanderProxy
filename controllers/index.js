(function(controllers){
   var blacklistController = require("./blacklistController");
    
    controllers.init = function(app){
        blacklistController.init(app);    
    }
    
})(module.exports);