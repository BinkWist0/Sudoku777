const fs = require("fs");
const text = fs.readFileSync("./puzzles.txt", "utf-8");
const { EOL } = require("os");

function read() {
  let sudoku = text.trim().split(`${EOL}`);

  return sudoku.map((el) => el.split(""));

  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
}
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции read.
 * Возвращает игровое поле после попытки его решить.
 */
function solve() {
  const sud1 = read();
  let sud = sud1[0];
  let res = [];
let oneNine=
  for (let n = 0; n < sud.length / 9; n++) {
    res.push(sud.slice(n * 9, n * 9 + 9));
  }
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res[i].length; j++) {
      if (res[i][j] === "-") {
        res[i][j] = "0";
      }
    }
    let x = res[i].map(Number);
    let y = x.reduce((acc, el) => acc + el, 0);

    // console.log(y);
  }

  return res;
}
console.table(solve());

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
