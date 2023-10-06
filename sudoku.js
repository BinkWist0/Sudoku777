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

function solve() {
  const sud1 = read();
  let sud = sud1[];
  let res = [];
  for (let i = 0; i < sud.length / 9; i++) {
    res.push(sud.slice(i * 9, i * 9 + 9));
  }

  return res;
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
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
