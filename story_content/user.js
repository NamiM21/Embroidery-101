function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5sf9LhMN3rE":
        Script1();
        break;
      case "6ENnRYsnPWW":
        Script2();
        break;
  }
}

function Script1()
{
  if (document.getElementsByClassName("lightBoxSlide").length > 0) {
  document.getElementsByClassName("lightBoxSlide")[0].style.backgroundColor = "black";
}

if (document.getElementById("light-box-wrapper")) {
  document.getElementById("light-box-wrapper").style.backgroundColor = "black";
}

// mark was here
if (document.getElementsByClassName("visible-overlay")) {
	document.getElementsByClassName("visible-overlay").style.backgroundColor = "rgba(0, 0, 0, 0.75)"
}


}

function Script2()
{
  if (document.getElementsByClassName("lightBoxSlide").length > 0) {
  document.getElementsByClassName("lightBoxSlide")[0].style.backgroundColor = "black";
}

if (document.getElementById("light-box-wrapper")) {
  document.getElementById("light-box-wrapper").style.backgroundColor = "black";
}

// mark was here
if (document.getElementsByClassName("visible-overlay")) {
	document.getElementsByClassName("visible-overlay").style.backgroundColor = "rgba(0, 0, 0, 0.75)"
}


}

