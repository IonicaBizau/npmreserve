// Dependencies
var NpmReserve = require("../lib");

console.log("Reserving...");
NpmReserve("aaaaa", function (err) {
    console.log(err || "Reserved.");
});
