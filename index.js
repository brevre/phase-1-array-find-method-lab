// code your solution here
function superbowlWin(record) {
    const winningYear = record.find(entry => entry.result === "W");
  
    if (winningYear) {
      return winningYear.year;
    } else {
      return undefined;
    }
  }
  
