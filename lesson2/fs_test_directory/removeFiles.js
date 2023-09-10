import fs from "fs";

const path = "lesson2/fs_test_directory/";

fs.readdir(path, (err, files) => {
  if (err) {
    if (files.length === 0) {
      console.log("directory already clear");
    }
  } else {
    files.forEach((file) => {
      if (!["html", "jpg", "js"].includes(file.split(".").pop())) {
        fs.unlink(path + file, (err) => {
          if (err) console.log(`${file} - deletion error`);
        });
      }
    });
    console.log("remove done");
  }
});
