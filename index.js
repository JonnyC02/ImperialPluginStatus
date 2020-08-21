var request = require('request');

//Thanks for using this module created by DeSys

function checkStatus(isRepeating, timeBetween) {

    request('https://imperialplugins.com', function (error, response, body) {
        if(!error && response.statusCode == 200){
            console.log("ImperialPlugins.com is online √");
        } else {
            console.log("ImperialPlugins.com is offline x");
        }
    });
    request('https://id.imperialplugins.com', function(error, response, body) {
        if(!error && response.statusCode == 200){
            console.log("Id.ImperialPlugins.com is online √");
        } else {
            console.log("Id.ImperialPlugins.com is offline x");
        }
    });
    request('http://api.imperialplugins.com/v2/Products/', function(error, response, body) {
        if(!error && response.statusCode == 200){
            console.log("api.ImperialPlugins.com is online √");
        } else {
            console.log("api.ImperialPlugins.com is offline x");
        }
    });
    request('https://licensing.imperialplugins.com/health', function(error, response, body) {
        if(!error && response.statusCode == 200){
            console.log("licensing.ImperialPlugins.com is online √");
        } else {
            console.log("licensing.ImperialPlugins.com is offline x");
        }
    });
    request('https://steamlogin.imperialplugins.com/health', function(error, response, body) {
        if(!error && response.statusCode == 200){
            console.log("steamlogin.ImperialPlugins.com is online √");
        } else {
            console.log("steamlogin.ImperialPlugins.com is offline x");
        }
    });
    console.log("");
    console.log(`Rerunning every ${timeBetween} seconds`);
    console.log("");

    if(isRepeating == true){
        setTimeout( () =>{
            checkStatus(isRepeating, timeBetween);
        }, timeBetween * 1000);
    }
}

module.exports.checkStatus = checkStatus;