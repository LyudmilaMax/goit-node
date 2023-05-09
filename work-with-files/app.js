// const fs = require("fs");

// fs.readFile("./files/file.txt", (error, data) => {
//   console.log(error);
//   console.log(data);
// });

// const fs = require("fs/promises");
const fs = require("fs").promises;

// fs.readFile("./files/file.txt")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

const func = async () => {
  // const buffer = await fs.readFile("./files/file.txt");
  // const text = buffer.toString();

  // const text = await fs.readFile("./files/file.txt", "utf-8");

  // await fs.appendFile("./files/file.txt", "\nУкраїна понад усе!");

  // const result = await fs.writeFile(
  //   "./files/file2.txt",
  //   "Сьогодні гарний день"
  // );
  // console.log(result);

  await fs.unlink("./files/file2.txt");
};

func();
