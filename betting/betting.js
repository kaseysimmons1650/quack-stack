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
  "CHRIS PENICK": 23
};

let raceWinner = Math.floor(Math.random() * 23) + 1;

document.getElementById("submitButton").addEventListener("click", function () {
  const duck = document.getElementById("duck").value.toUpperCase();
  const betAmount = document.getElementById("betAmount").value;

  console.log("Duck: " + duck);
  console.log("Bet Amount: " + betAmount);
  console.log("Race Winner Number:"+raceWinner);
  console.log("Duck Bet Number:"+classDict[duck]);

});


function checkWinner(duckNumber){
    if(duckNumber === raceWinner){
        return true;
    }
    else{
        return false;
    }
}