function changeToFirstImage() {
  document.getElementById("first-image").style.display = "inline";
  document.getElementById("second-image").style.display = "none";
  document.getElementById("circle1").style.backgroundColor = "black";
  document.getElementById("circle2").style.backgroundColor ="rgb(129, 140, 147)";
}

function changeToSecondImage() {
  document.getElementById("first-image").style.display = "none";
  document.getElementById("second-image").style.display = "inline";
  document.getElementById("circle1").style.backgroundColor ="rgb(129, 140, 147)";
  document.getElementById("circle2").style.backgroundColor = "black";
}

function goToNewUserForm() {
  document.getElementById("new-user").style.backgroundColor ="rgb(4, 179, 152)";
  document.getElementById("existing-user").style.backgroundColor ="rgb(129, 140, 147)";
  document.getElementById("new-user").style.fontWeight = "bold";
  document.getElementById("existing-user").style.fontWeight = "normal";

  var forms1 = document.getElementsByClassName("form1");
  for (var i = 0; i < forms1.length; i++) {
    forms1[i].style.display = "none";
  }

  var forms2 = document.getElementsByClassName("form2");
  for (var j = 0; j < forms2.length; j++) {
    forms2[j].style.display = "block";
  }

  document.getElementById('flex_choices').style.display = 'flex';
}

function goToExistingUserForm() {
  document.getElementById("existing-user").style.backgroundColor ="rgb(4, 179, 152)";
  document.getElementById("new-user").style.backgroundColor ="rgb(129, 140, 147)";
  document.getElementById("existing-user").style.fontWeight = "bold";
  document.getElementById("new-user").style.fontWeight = "normal";

  var forms2 = document.getElementsByClassName("form2");
  for (var i = 0; i < forms2.length; i++) {
    forms2[i].style.display = "none";
  }

  var forms1 = document.getElementsByClassName("form1");
  for (var j = 0; j < forms1.length; j++) {
    forms1[j].style.display = "";
  }
}
