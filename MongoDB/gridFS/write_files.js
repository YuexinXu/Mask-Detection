//Load the mongoose driver
var mongooseDrv = require("mongoose");
//Connect to MongoDB and its database
mongooseDrv.connect('mongodb+srv://FaceMaskAdmin:GoGoGo_sparc_Rocket@cluster0.5r2ne.mongodb.net/Rocket_faceMask', 
{ useUnifiedTopology: true }, { useNewUrlParser: true });
//The Connection Object
var connection = mongooseDrv.connection;
if (connection !== "undefined") {
    console.log(connection.readyState.toString());

    var path = require("path");
    var grid = require("gridfs-stream");
    var fs = require("fs");
    //Read the video/image file from path
    var filesrc = path.join(__dirname, "./john_doe.png");
    //Establish connection between Mongo and GridFS
    grid.mongo = mongooseDrv.mongo;
    //Open the connection and write file
    connection.once("open", () => {
        console.log("Connection Open");
        var gridfs = grid(connection.db);
        if (gridfs) {
            //create a stream, this will be used to store file in database
            var streamwrite = gridfs.createWriteStream({
                //the file will be stored with the name and metadata
                filename: "john_doe_1.png",
                metadata: {
                    employeeID: "1",
                    employeeName: "john doe",
                    email:"john.doe@gmail.com"
                }
            });
            // Create a readstream to read the file from the filestored folder and pipe into the database
            fs.createReadStream(filesrc).pipe(streamwrite);
            // Complete the write operation
            streamwrite.on("close", function (file) {
                console.log("Write written successfully in database");
            });
        } else {
            console.log("Sorry No Grid FS Object");
        }
    });
} else {
 
    console.log('Sorry not connected');
}
console.log("done");