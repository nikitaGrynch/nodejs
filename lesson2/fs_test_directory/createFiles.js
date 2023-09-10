import fs from "fs";

const path = "lesson2/fs_test_directory/";

const poem = `Because I could not stop for Death,
He kindly stopped for me;
The carriage held but just ourselves
And Immortality. `;

let words = poem.split(/[ ,;\n]+/);
words = words.filter((str) => str !== "");

for (let i = 0; i < 50; i++) {
    fs.writeFileSync(`${path + i}.txt`, words[Math.floor(Math.random() * 10)])
}
console.log("files created")
