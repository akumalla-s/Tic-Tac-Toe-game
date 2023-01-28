const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());

const port = 5000;

var cells = [];
var winner;
var historyArr = [];

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});

app.get("/welcome", function (req, res) {
  res.send('{"message":"Server Online"}');
});

app.post("/checkForWinner", bodyParser.json(), function (req, res) {
  res.setHeader("Content-Type", "application/json");
  var json_data = req.body;
  cells = [
    json_data.cell0,
    json_data.cell1,
    json_data.cell2,
    json_data.cell3,
    json_data.cell4,
    json_data.cell5,
    json_data.cell6,
    json_data.cell7,
    json_data.cell8,
  ];

  checkForWinner();
  if (winner === "X") {
    res.send('{"status":"X"}');
    historyArr.push("X");
  } else if (winner === "O") {
    res.send('{"status":"O"}');
    historyArr.push("O");
  } else if (winner === "Tie") {
    res.send('{"status":"Tie"}');
    historyArr.push("Tie");
  } else {
    res.send('{"status":"Decision pending"}');
  }
  winner = "";
});

app.get("/storage", function (req, res) {
  res.send(historyArr);
});

function checkForWinner() {
  var winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (var i = 0; i < winningCombinations.length; i++) {
    var combination = winningCombinations[i];
    if (
      cells[combination[0]] === "X" &&
      cells[combination[1]] === "X" &&
      cells[combination[2]] === "X"
    ) {
      winner = "X";
    } else if (
      cells[combination[0]] === "O" &&
      cells[combination[1]] === "O" &&
      cells[combination[2]] === "O"
    ) {
      winner = "O";
    } else {
      var filledCells = 0;
      for (var j = 0; j < cells.length; j++) {
        if (cells[j] !== "") {
          filledCells++;
        }
      }
      if (filledCells === 9) {
        winner = "Tie";
      }
    }
  }
}
