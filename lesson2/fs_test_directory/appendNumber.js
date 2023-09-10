import fs from "fs/promises";

const path = "lesson2/fs_test_directory/";

fs.readdir(path)
  .then((files) => {
    files.forEach((file) => {
      if (file.split(".").pop() === "txt") {
        fs.appendFile(path + file, Math.floor(Math.random() * 9).toString())
          .catch((err) => console.log(err));
      }
    });
      console.log("append done");
  })
  .catch((err) => console.err);
