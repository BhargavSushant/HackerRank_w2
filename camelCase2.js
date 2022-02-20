function processData(input) {
  //Enter your code here
  // console.log("INPUT=",input.split("\n"));
  let input1 = input.split("\n");
  input1.forEach((ip) => {
    printOP(ip.replace("\n"));
  });
  //   printOP(ip);
}

function printOP(input) {
  let temp = input.trim();

  const operation = temp.split(";")[0] + temp.split(";")[1];
  let identifier = temp.split(";")[2];

  switch (operation.toUpperCase()) {
    case "SM":
      identifier = identifier.replace("()", "");
      identifier = putSpacesBeforeCapital(identifier).toLowerCase();
      break;

    case "SC":
      identifier = putSpacesBeforeCapital(identifier).toLowerCase();
      break;

    case "SV":
      identifier = putSpacesBeforeCapital(identifier).toLowerCase();
      break;

    case "CM":
      {
        let tempArr = identifier.split(" ");
        let _identifier = "";

        for (let i = 1; i < tempArr.length; i++) {
          _identifier += capitalizeFirstLetter(tempArr[i]);
        }
        identifier = tempArr[0] + _identifier + "()";
      }

      break;

    case "CC":
      {
        let tempArr = identifier.split(" ");
        let _identifier = "";

        for (let i = 0; i < tempArr.length; i++) {
          _identifier += capitalizeFirstLetter(tempArr[i]);
        }
        identifier = _identifier;
      }

      break;

    case "CV":
      {
        let tempArr = identifier.split(" ");
        let _identifier = "";

        for (let i = 1; i < tempArr.length; i++) {
          _identifier += capitalizeFirstLetter(tempArr[i]);
        }
        identifier = tempArr[0] + _identifier;
      }
      break;

    default:
      break;
  }
  console.log(identifier);
  //   return identifier;
}

function putSpacesBeforeCapital(str) {
    let opStr = "";
    for (let i in str) {
      if (isUpperCase(str[i])) {
        opStr += " " + str[i];
      } else {
        opStr += str[i];
      }
    }
    return opStr.trim();
  }
  
  function capitalizeFirstLetter(string) {
    return string[0].toUpperCase() + string.slice(1);
  }
  
  const isUpperCase = (string) => /^[A-Z]*$/.test(string);
  
  // processData("S;M;plasticCup()");
  // processData("C;V;mobile phone");
  // processData("C;C;coffee machine");
  // processData("S;C;LargeSoftwareBook");
  // processData("C;M;white sheet of paper");
  // processData("S;V;pictureFrame");
  
  processData("S;V;iPad");
  processData("C;M;mouse pad");
  processData("C;C;code swarm");
  processData("S;C;OrangeHighlighter");
  