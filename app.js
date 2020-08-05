const express = require("express");

const app = express();
app.use(express.json());

const port = 6969;

const supportedDenominations = [10, 20, 50, 100, 200, 500, 1000];

app.route("/").post(function (req, res) {
  const withdrawalAmount = req.body.amount;
  const preferredDenomination = req.body.preferredDenomination;
  let dispensedNotes = {}

  if (preferredDenomination == null) {

    dispensedNotes = calculateNotes(withdrawalAmount, supportedDenominations);

  } else {
    const balance = withdrawalAmount % preferredDenomination; 
    if (balance == 0) {
      dispensedNotes[preferredDenomination] = withdrawalAmount / preferredDenomination;
    } else {
      dispensedNotes = calculateNotes(balance, supportedDenominations);
      dispensedNotes[preferredDenomination] = Math.floor(withdrawalAmount / preferredDenomination);
    }
  }

  res.send(dispensedNotes);
});

function calculateNotes(balance, supportedDenominations) {
  notes = {};
  for (var i = supportedDenominationss.length - 1; i >= 0; i--) {
    curr = balance % supportedDenominationss[i];

    if (curr == 0) {
      notes[supportedDenominations[i]] = balance / supportedDenominations[i];
      break;
    } else {
      notes[supportedDenominations[i]] = Math.floor(
        balance / supportedDenominations[i]
      );
      balance = curr;
    }
  }
  return notes;
}

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
