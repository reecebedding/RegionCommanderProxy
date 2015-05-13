(function(blacklist){
    
    var blHelper = require("../utils/RCBlackListHelper.js");
    
    blacklist.init = function(app){
        
        app.get("/blacklist/:searchTerm", function(req, res){
           
            var searchTerm = req.params.searchTerm;
                                    
            blHelper.Search(searchTerm, req, function(err, results){                
                if(err){
                    res.status(500).send({ error: err });
                }else{
                    res.status(200).send(results);
                }
            });
        });
                
        console.log("Blacklist Module Initialised");
    };
    
})(module.exports);