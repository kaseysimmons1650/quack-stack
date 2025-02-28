// document.getElementsByClassName("inpRatings")[0].oninput = function () {
//   const val = this.value;

//   if (parseInt(val)) {
//     if (val < 1 || val > 10) {
//       this.value = null;
//     }
//   } else {
//     this.value = null;
//   }
// };

let classDict = {
  "AJ ZIMMERMAN": 1,
  "ANI UNDRAKONDA": 2,
  "ANISH IVATURI": 3,
  "BEN BAIEL": 4,
  "CHRIS PARK": 5,
  "DEV PATEL": 6,
  "FAIQ AHMAD": 7,
  "HENRY DALEY": 8,
  "WILKENSON HILARION": 9,
  "JOEWID SHARZA": 10,
  "JOSHUA ST. LAURENT": 11,
  "KASEY SIMMONS": 12,
  "LAVANYA GOEL": 13,
  "MATT CHENG": 14,
  "MAX GIRASOL": 15,
  "NATE NOTERMANN": 16,
  "ROBIN PANN": 17,
  "STEPHEN THOMAS": 18,
  "TIA NGUYEN": 19,
  "TIMOTHY GERMANO": 20,
  "WEITING HUANG": 21,
  "CHRIS MINNICK": 22,
  "CHRIS PENICK": 23,
};

let raceWinner = Math.floor(Math.random() * 23) + 1;

document.getElementById("submitButton").addEventListener("click", function () {
  var progressBar = document.querySelector(".progress-bar");
  progressBar.style.width = "100%";
  progressBar.setAttribute("aria-valuenow", 100);
  const duck = document.getElementById("duck").value.toUpperCase();
  const betAmount = document.getElementById("betAmount").value;
  const resText = document.getElementById("res-text");
  const winAmount = betAmount * 3;
  if (betAmount != undefined && duck != "") {
    setTimeout(() => {
      resText.classList.remove("hidden");
      if (raceWinner == classDict[duck]) {
        resText.innerText = `Congrats, you have won ${winAmount} dollars!`;
        resText.classList.add("alert-primary");
      } else {
        resText.innerHTML =
          "<p>Sorry, you have lost all your money. Please call <a href='tel:+18005224700'>1-800-GAMBLER</a> for help</p>";
        resText.classList.add("alert-danger");
      }
    }, 5000);
  }

  console.log("Duck: " + duck);
  console.log("Bet Amount: " + betAmount);
  console.log("Race Winner Number:" + raceWinner);
  console.log("Duck Bet Number:" + classDict[duck]);
});

function checkWinner(duckNumber) {
  if (duckNumber === raceWinner) {
    return true;
  } else {
    return false;
  }
}
