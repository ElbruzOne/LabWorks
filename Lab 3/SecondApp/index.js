console.log("My Second Project");

import { readFile, writeFile } from "fs";

let fileName = "file.txt";

readFile(fileName, function(err, contents) {
     if (err)
     {
        return console.log(err);
     }
    console.log(contents.toString());
});

writeFile("web.txt", "JavaScript", function(err) {
    if (err) {
        return console.log(err);
    }
    console.log("It is done.")
});