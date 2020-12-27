const fs = require("fs");

const readStream = fs.createReadStream("./doc/ReadMeFirst.txt", {
  encoding: "utf8",
});

const writeStream = fs.createWriteStream("./doc/ReadMe.txt");

// readStream.on("data", (chuck) => {
//   console.log("----New Chuck---");
//   console.log(chuck);
//   writeStream.write(chuck);
// });

readStream.pipe(writeStream);
