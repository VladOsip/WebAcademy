import "./homeworkjs.scss";

var DrawCats = function(howManyTimes) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + " " + "=^.^=");
  }
};

DrawCats(15);

"всем привет ЛИбо так".toUpperCase();

var sillyString = "Ну ЛиБо Так ПИсать БуквЫ ОггоО";
var lowerString = sillyString.toLowerCase();
var firstString = lowerString[0];
var normalString = firstString.toUpperCase();
var lowerString = lowerString.slice(1);
var allString = normalString + lowerString;
console.log(allString);
