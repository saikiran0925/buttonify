const jsonWidget = document.getElementById("json-widget");
const jsonWidgetBox = document.createElement("div");
jsonWidgetBox.id = "json-widget-box";

jsonWidget.addEventListener("click", () => {
  if (jsonWidgetBox.style.display === "block") {
    jsonWidgetBox.style.opacity = "0";
    setTimeout(() => {
      jsonWidgetBox.style.display = "none";
      jsonWidgetBox.style.width = "200px";
      jsonWidgetBox.style.height = "200px";
      jsonTextField.style.display = "none";
      jsonFormatButton.style.display = "none";
      jsonWidgetBox.style.opacity = "1";
    }, 300);
  } else {
    jsonWidgetBox.style.display = "block";
    jsonWidgetBox.style.opacity = "0";
    setTimeout(() => {
      jsonWidgetBox.style.width = "400px";
      jsonWidgetBox.style.height = "400px";
      jsonTextField.style.display = "block";
      jsonFormatButton.style.display = "block";
      jsonWidgetBox.style.opacity = "1";
    }, 100);
  }
});

const jsonTextField = document.createElement("textarea");
jsonTextField.placeholder = "Paste your JSON here...";
jsonTextField.style.width = "85%";
jsonTextField.style.height = "20%";
jsonTextField.style.marginTop = "20px";
jsonTextField.style.marginLeft = "20px";
jsonTextField.style.padding = "10px";
jsonTextField.style.borderRadius = "5px";
jsonTextField.style.resize = "none";
jsonTextField.style.border = "1px solid #ccc";
jsonTextField.style.fontSize = "16px";
jsonTextField.style.fontFamily = "Arial, sans-serif";
jsonTextField.style.display = "none";
jsonWidgetBox.appendChild(jsonTextField);

const jsonInputField1 = document.createElement("input");
jsonInputField1.placeholder = "action";
jsonInputField1.style.width = "80%";
jsonInputField1.style.height = "10%";
jsonInputField1.style.marginTop = "8px";
jsonInputField1.style.marginLeft = "30px";
jsonInputField1.style.padding = "10px";
jsonInputField1.style.borderRadius = "5px";
jsonInputField1.style.resize = "none";
jsonInputField1.style.border = "1px solid #ccc";
jsonInputField1.style.fontSize = "16px";
jsonInputField1.style.fontFamily = "Arial, sans-serif";
jsonInputField1.style.display = "block";
jsonWidgetBox.appendChild(jsonInputField1);

const jsonInputField2 = document.createElement("input");
jsonInputField2.placeholder = "buttons";
jsonInputField2.style.width = "80%";
jsonInputField2.style.height = "10%";
jsonInputField2.style.marginTop = "8px";
jsonInputField2.style.marginLeft = "30px";
jsonInputField2.style.padding = "10px";
jsonInputField2.style.borderRadius = "5px";
jsonInputField2.style.resize = "none";
jsonInputField2.style.border = "1px solid #ccc";
jsonInputField2.style.fontSize = "16px";
jsonInputField1.style.fontFamily = "Arial, sans-serif";
jsonInputField2.style.display = "block";
jsonWidgetBox.appendChild(jsonInputField2);

const jsonInputField3 = document.createElement("input");
jsonInputField3.placeholder = "reply";
jsonInputField3.style.width = "80%";
jsonInputField3.style.height = "10%";
jsonInputField3.style.marginTop = "8px";
jsonInputField3.style.marginLeft = "30px";
jsonInputField3.style.padding = "10px";
jsonInputField3.style.borderRadius = "5px";
jsonInputField3.style.resize = "none";
jsonInputField3.style.border = "1px solid #ccc";
jsonInputField3.style.fontSize = "16px";
jsonInputField3.style.fontFamily = "Arial, sans-serif";
jsonInputField3.style.display = "block";
jsonWidgetBox.appendChild(jsonInputField3);

const jsonInputField4 = document.createElement("input");
jsonInputField4.placeholder = "id";
jsonInputField4.style.width = "80%";
jsonInputField4.style.height = "10%";
jsonInputField4.style.marginTop = "8px";
jsonInputField4.style.marginLeft = "30px";
jsonInputField4.style.padding = "10px";
jsonInputField4.style.borderRadius = "5px";
jsonInputField4.style.resize = "none";
jsonInputField4.style.border = "1px solid #ccc";
jsonInputField4.style.fontSize = "16px";
jsonInputField4.style.fontFamily = "Arial, sans-serif";
jsonInputField4.style.display = "block";
jsonWidgetBox.appendChild(jsonInputField4);

const jsonInputField5 = document.createElement("input");
jsonInputField5.placeholder = "title";
jsonInputField5.style.width = "80%";
jsonInputField5.style.height = "10%";
jsonInputField5.style.marginTop = "8px";
jsonInputField5.style.marginLeft = "30px";
jsonInputField5.style.padding = "10px";
jsonInputField5.style.borderRadius = "5px";
jsonInputField5.style.resize = "none";
jsonInputField5.style.border = "1px solid #ccc";
jsonInputField5.style.fontSize = "16px";
jsonInputField5.style.fontFamily = "Arial, sans-serif";
jsonInputField5.style.display = "block";
jsonWidgetBox.appendChild(jsonInputField5);



const jsonFormatButton = document.createElement("button");
jsonFormatButton.innerHTML = "JSONify";
jsonFormatButton.style.margin = "10px 20px";
jsonFormatButton.style.padding = "10px 20px";
jsonFormatButton.style.marginLeft = "140px";
jsonFormatButton.style.borderRadius = "5px";
jsonFormatButton.style.fontSize = "16px";
jsonFormatButton.style.fontFamily = "Arial, sans-serif";
jsonFormatButton.style.display = "none";
jsonWidgetBox.appendChild(jsonFormatButton);



jsonFormatButton.addEventListener("click", () => {
    addButtonFromJson(jsonTextField.value);
});

jsonWidgetBox.style.position = "fixed";
jsonWidgetBox.style.bottom = "100px";
jsonWidgetBox.style.left = "20px";
jsonWidgetBox.style.borderRadius = "5px";
jsonWidgetBox.style.backgroundColor = "#fff";
jsonWidgetBox.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
jsonWidgetBox.style.opacity = "0";
jsonWidgetBox.style.transition = "all 0.3s ease-in-out";

document.body.appendChild(jsonWidgetBox);

