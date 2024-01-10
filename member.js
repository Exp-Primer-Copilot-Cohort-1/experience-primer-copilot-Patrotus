function skillsMember() {
  var skills = document.getElementById("skills");
  var skillsMember = document.getElementById("skillsMember");
  var skillsMemberValue = skillsMember.value;
  var skillsMemberText = skillsMember.options[skillsMember.selectedIndex].text;
  var skillsMemberTextValue = skillsMemberText + " " + skillsMemberValue;
  var skillsMemberTextValueLength = skillsMemberTextValue.length;
  var skillsMemberTextValueLengthMax = 30;
  var skillsMemberTextValueLengthMaxMinus = skillsMemberTextValueLengthMax - skillsMemberTextValueLength;
  if (skillsMemberTextValueLength > skillsMemberTextValueLengthMax) {
    alert("You have exceeded the maximum number of characters!");
    return false;
  } else {
    skills.innerHTML += "<li>" + skillsMemberTextValue + "</li>";
    skillsMember.value = "";
  }
}