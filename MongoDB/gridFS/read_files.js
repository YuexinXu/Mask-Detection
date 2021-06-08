var mongooseDrv = require("mongoose");
var schema = mongooseDrv.Schema;
mongooseDrv.connect('mongodb+srv://FaceMaskAdmin:GoGoGo_sparc_Rocket@cluster0.5r2ne.mongodb.net/Rocket_faceMask');
var connection = mongooseDrv.connection;
 
if (connection !== "undefined") {
    console.log(connection.readyState.toString());
    var path = require("path");
    var grid = require("gridfs-stream");
    var fs = require("fs");
    grid.mongo = mongooseDrv.mongo;
    connection.once("open", () => {
        console.log("Connection Open");
        var gridfs = grid(connection.db);
        if (gridfs) {
            var fsstreamwrite = fs.createWriteStream(
                path.join(__dirname, "./filestowrite/john_doe_write.png")
            );
 
            var readstream = gridfs.createReadStream({
                filename: "john_doe_1.png",
            });
            readstream.pipe(fsstreamwrite);
            readstream.on("close", function () {
                console.log("File Read successfully from database");
            });
        } else {
            console.log("Sorry No Grid FS Object");
        }
    });
} else {
 
    console.log('Sorry not connected');
}
console.log("done");