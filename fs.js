const { isUtf8 } = require("buffer");
const fs = require("fs");

// const first = fs.readFileSync("./data/first.txt", "utf-8");
// const second = fs.readFileSync("./data/second.txt");
// console.log(first);
// console.log(second.toString());

// const title = "Este es un archivo nuevo";
// fs.writeFileSync("./data/third.txt", title, {
//   flag: "a",
// });

fs.readFile("./data/first.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data);

  fs.readFile("./data/second.txt", "utf8", (error, data) => {
    if (error) {
      console.log(error);
    }
    console.log(data);

    fs.writeFileSync("./data/newFile.txt", "archivo creado desde fs"),
      (error, data) => {
        if (error) {
          console.log(error);
        }
        console.log(data);

        fs.writeFileSync("./data/newFile2.txt", "archivo creado desde fs"),
          (error, data) => {
            if (error) {
              console.log(error);
            }
            console.log(data);

            fs.writeFileSync("./data/newFile3.txt", "archivo creado desde fs"),
              (error, data) => {
                if (error) {
                  console.log(error);
                }
                console.log(data);
              };
          };
      };
  });
});
