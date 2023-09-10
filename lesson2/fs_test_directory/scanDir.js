import fs from "fs";

if (process.argv.length >= 2) {
  const path = process.argv[2];
  console.log(path);
  fs.readdir(path, (err, files) => {
    if (err) console.log(err);
    else {
      files.forEach((file) => {
        console.log(file);
      });
    }
  });
} else {
  console.log("path is required");
}
