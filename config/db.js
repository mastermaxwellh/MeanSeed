//var rawURL = 'mongodb://<mastermaxwellh>:<blackbear>@ds111478.mlab.com:11478/meanseed';
var fixedURL = "mongodb://<mastermaxwellh>:<blackbear>" + encodeURIComponent("@") + "ds111478.mlab.com:11478/meanseed";
console.log(fixedURL)
module.exports = {
    url : "mongodb://mastermaxwellh:blackbear@ds111478.mlab.com:11478/meanseed"
}