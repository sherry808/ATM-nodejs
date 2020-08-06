const _ = require("lodash");

function calculateNotes(balance, supportedDenominations) {
    const notes = {};
    for (let i = supportedDenominations.length - 1; i >= 0; i--) {
      const curr = balance % supportedDenominations[i];
  
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
    return _.pickBy(notes);
  }



module.exports = {calculateNotes}