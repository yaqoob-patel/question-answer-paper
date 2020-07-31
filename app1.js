let count = 0;
// var fieldSetArr = [];
var mainDivCount = document.getElementById("mainDiv").children.length;
console.log(mainDivCount);

// ===============================question Node.1=========================================

function counter1() {
  if (
    document.getElementById("radioBtn1Id").checked == true ||
    document.getElementById("radioBtn2Id").checked == true ||
    document.getElementById("radioBtn3Id").checked == true ||
    document.getElementById("radioBtn4Id").checked == true
  ) {
    var nextLink = document.createElement("a");
    var nextLinkAtt = document.createAttribute("href");
    nextLinkAtt.value = "#fieldSet2";
    // nextLink.setAttributeNode(nextLinkAtt);
    nextLink.setAttributeNode(nextLinkAtt);
    document.getElementById("nextBtn1").appendChild(nextLink);

    nextLink.innerHTML = "NEXT";
    console.log(nextLink);
    document.getElementById("fieldSet1").disabled = true;
    document.getElementById("submitBtnId1").disabled = true;

    document.getElementById("radioBtn5Id").disabled = false;
    document.getElementById("radioBtn6Id").disabled = false;
    document.getElementById("radioBtn7Id").disabled = false;
    document.getElementById("radioBtn8Id").disabled = false;
    document.getElementById("radioBtn9Id").disabled = true;
    document.getElementById("radioBtn10Id").disabled = true;
    document.getElementById("radioBtn11Id").disabled = true;
    document.getElementById("radioBtn12Id").disabled = true;
  } else {
    alert("Please check any one according to your choice\n Thanks");
  }
}

function correctAns1() {
  if (document.getElementById("radioBtn1Id").checked == true) {
    document.getElementById("fieldSet1").style.backgroundColor = "lightgreen";
    document.getElementById("fieldSet1").style.color = "black";
    document.getElementById("radioBtn1Id").disabled = true;
    document.getElementById("radioBtn2Id").disabled = true;
    document.getElementById("radioBtn3Id").disabled = true;
    document.getElementById("radioBtn4Id").disabled = true;
    document.getElementById("radioBtn5Id").disabled = true;
    document.getElementById("radioBtn6Id").disabled = true;
    document.getElementById("radioBtn7Id").disabled = true;
    document.getElementById("radioBtn8Id").disabled = true;
    document.getElementById("radioBtn9Id").disabled = true;
    document.getElementById("radioBtn10Id").disabled = true;
    document.getElementById("radioBtn11Id").disabled = true;
    document.getElementById("radioBtn12Id").disabled = true;
    count += 1;
    console.log(count);
  }
}

function unCorrectAns1() {
  document.getElementById("fieldSet1").style.backgroundColor = "red";
  document.getElementById("fieldSet1").style.color = "white";
  // document.getElementById("fieldSet2").innerHTML = "soory........... its wrong"; //     console.log("yaqoob");
  document.getElementById("radioBtn1Id").disabled = true;
  document.getElementById("radioBtn2Id").disabled = true;
  document.getElementById("radioBtn3Id").disabled = true;
  document.getElementById("radioBtn4Id").disabled = true;
  document.getElementById("radioBtn5Id").disabled = true;
  document.getElementById("radioBtn6Id").disabled = true;
  document.getElementById("radioBtn7Id").disabled = true;
  document.getElementById("radioBtn8Id").disabled = true;
  document.getElementById("radioBtn9Id").disabled = true;
  document.getElementById("radioBtn10Id").disabled = true;
  document.getElementById("radioBtn11Id").disabled = true;
  document.getElementById("radioBtn12Id").disabled = true;
  count -= 1;
  console.log("yaqoob1");
  console.log(count);
}

// =======================question No.2========================================

function correctAns2() {
  if (document.getElementById("radioBtn5Id").checked == true) {
    document.getElementById("fieldSet2").style.backgroundColor = "lightgreen";
    document.getElementById("fieldSet2").style.color = "black";

    document.getElementById("radioBtn1Id").disabled == true;
    document.getElementById("radioBtn2Id").disabled = true;
    document.getElementById("radioBtn3Id").disabled = true;
    document.getElementById("radioBtn4Id").disabled = true;
    document.getElementById("radioBtn5Id").disabled == true;
    document.getElementById("radioBtn6Id").disabled = true;
    document.getElementById("radioBtn7Id").disabled = true;
    document.getElementById("radioBtn8Id").disabled = true;
    document.getElementById("radioBtn9Id").disabled == true;
    document.getElementById("radioBtn10Id").disabled = true;
    document.getElementById("radioBtn11Id").disabled = true;
    document.getElementById("radioBtn12Id").disabled = true;
    count += 1;
    console.log(count);
  }
}
function unCorrectAns2() {
  document.getElementById("fieldSet2").style.backgroundColor = "red";
  document.getElementById("fieldSet2").style.color = "white";
  // document.getElementById("fieldSet2").innerHTML = "soory........... its wrong"; //     console.log("yaqoob");

  document.getElementById("radioBtn5Id").disabled = true;
  document.getElementById("radioBtn6Id").disabled = true;
  document.getElementById("radioBtn7Id").disabled = true;
  document.getElementById("radioBtn8Id").disabled = true;
  count -= 1;
  console.log("yaqoob1");
  console.log(count);
}

function counter2() {
  if (
    document.getElementById("radioBtn5Id").checked == true ||
    document.getElementById("radioBtn6Id").checked == true ||
    document.getElementById("radioBtn7Id").checked == true ||
    document.getElementById("radioBtn8Id").checked == true
  ) {
    var nextLink = document.createElement("a");
    var nextLinkAtt = document.createAttribute("href");
    nextLinkAtt.value = "#fieldSet3";
    // nextLink.setAttributeNode(nextLinkAtt);
    nextLink.setAttributeNode(nextLinkAtt);
    document.getElementById("nextBtn2").appendChild(nextLink);

    nextLink.innerHTML = "NEXT";
    console.log(nextLink);
    document.getElementById("fieldSet2").disabled = true;
    document.getElementById("submitBtnId2").disabled = true;

    document.getElementById("radioBtn1Id").disabled = true;
    document.getElementById("radioBtn2Id").disabled = true;
    document.getElementById("radioBtn3Id").disabled = true;
    document.getElementById("radioBtn4Id").disabled = true;
    document.getElementById("radioBtn9Id").disabled = false;
    document.getElementById("radioBtn10Id").disabled = false;
    document.getElementById("radioBtn11Id").disabled = false;
    document.getElementById("radioBtn12Id").disabled = false;
  } else {
    alert("Please check any one according to your choice\n Thanks");
  }
}

// =======================question No.3========================================

function correctAns3() {
  if (document.getElementById("radioBtn11Id").checked == true) {
    document.getElementById("fieldSet3").style.backgroundColor = "lightgreen";
    document.getElementById("fieldSet3").style.color = "black";

    document.getElementById("radioBtn11Id").disabled = true;
    document.getElementById("radioBtn9Id").disabled = true;
    document.getElementById("radioBtn10Id").disabled = true;
    document.getElementById("radioBtn12Id").disabled = true;
    count += 1;
    console.log(count);
  }
}
function unCorrectAns3() {
  document.getElementById("fieldSet3").style.backgroundColor = "red";
  document.getElementById("fieldSet3").style.color = "white";
  // document.getElementById("fieldSet2").innerHTML = "soory........... its wrong"; //     console.log("yaqoob");

  document.getElementById("radioBtn9Id").disabled = true;
  document.getElementById("radioBtn10Id").disabled = true;
  document.getElementById("radioBtn11Id").disabled = true;
  document.getElementById("radioBtn12Id").disabled = true;
  count -= 1;
  console.log("yaqoob1");
  console.log(count);
}

function counter3() {
  if (
    document.getElementById("radioBtn9Id").checked == true ||
    document.getElementById("radioBtn10Id").checked == true ||
    document.getElementById("radioBtn11Id").checked == true ||
    document.getElementById("radioBtn12Id").checked == true
  ) {
    var nextLink = document.createElement("a");
    var nextLinkAtt = document.createAttribute("href");
    nextLinkAtt.value = "thanks.html";

    // nextLink.setAttributeNode(nextLinkAtt);
    nextLink.setAttributeNode(nextLinkAtt);
    document.getElementById("nextBtn3").appendChild(nextLink);

    nextLink.innerHTML = "END";
    console.log(nextLink);
    document.getElementById("fieldSet3").disabled = true;
    document.getElementById("submitBtnId3").disabled = true;
  } else {
    alert("Please check any one according to your choice\n Thanks");
  }

  console.log(count);
  var result = score(count);

  var resultDiv = document.createElement("div");
  var resultPara = document.createElement("p");
  resultDiv.appendChild(resultPara);
  var resultAtt = document.createAttribute("id");
  resultAtt.value = "resultAtt";
  resultPara.setAttributeNode(resultAtt);

  resultDiv.style.fontSize = "3rem";
  resultDiv.style.border = "4px solid black";
  resultDiv.style.borderRadius = "4px ";
  resultDiv.style.marginTop = "20px ";
  resultDiv.style.backgroundColor = "rgb(3, 147, 184) ";
  resultDiv.style.paddingLeft = "300px ";

  resultDiv.innerHTML = "You Got " + result + " Numbers";

  document.body.appendChild(resultDiv);
  console.log(resultDiv);

  // document.write("<h2>Your Result Is : " + result + "</h2>");
  // alert("Your Result Is : " + resu/lt);
}
function score(c) {
  var result = c * 15;
  console.log(result);
  return result;
}
