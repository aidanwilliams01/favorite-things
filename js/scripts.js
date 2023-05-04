function onPageLoad() {
  let form = document.querySelector("form");
  function onFormSubmit(event) {
    event.preventDefault();
    const a1 = document.querySelector("input#ft1").value;
    const a2 = document.querySelector("input#ft2").value;
    const a3 = document.querySelector("input#ft3").value;
    const a4 = document.querySelector("input#ft4").value;
    const a5 = document.querySelector("input#ft5").value;
    const bodyElement = document.querySelector("body");
    let array1 = [a1];
    let array2 = [];
    let ulElement = document.createElement("ul");
    let liOne = document.createElement("li");
    let liTwo = document.createElement("li");
    let liThree = document.createElement("li");
    array1 = array1.concat(a2, a3, a4, a5);
    secondElement = array1[1];
    firstElement = array1[0];
    thirdElement = array1[2];
    array2.push(secondElement, firstElement, thirdElement);
    liOne.append(array2[0]);
    liTwo.append(array2[1]);
    liThree.append(array2[2]);
    ulElement.append(liOne, liTwo, liThree);
    bodyElement.append(ulElement);
  }
  form.addEventListener("submit", onFormSubmit);
}

window.addEventListener("load", onPageLoad);