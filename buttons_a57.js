var numButtons = 1;

function removeButtonFunction(buttonNum) {
  var buttonToRemove = document.getElementById("button_" + buttonNum);
  buttonToRemove.remove();
}

function addButton() {
  var id = document.getElementById("idInput").value;
  var title = document.getElementById("titleInput").value;

  if (id && title) {
    if (numButtons > 2) {
      alert("We can't create more than 3 buttons");
      return;
    }

    var buttonsDiv = document.getElementById("buttons");

    var newDiv = document.createElement("div");
    newDiv.id = "button_" + numButtons;
    newDiv.className = "text-container";

    var idLabel = document.createElement("label");
    idLabel.htmlFor = "id_" + numButtons;
    idLabel.innerHTML = "ID:";

    var idInput = document.createElement("input");
    idInput.type = "text";
    idInput.id = "id_" + numButtons;
    idInput.name = "id_" + numButtons;
    idInput.setAttribute("oninput", "validateId()");
    idInput.value = id;

    var validateId = document.createElement("div");
    validateId.id = "id_error_" + numButtons;
    validateId.className = "text-danger";

    var titleLabel = document.createElement("label");
    titleLabel.htmlFor = "text_" + numButtons;
    titleLabel.innerHTML = "Title:";

    var titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "title_" + numButtons;
    titleInput.name = "title_" + numButtons;
    titleInput.setAttribute("oninput", "validateTitle()");
    titleInput.value = title;

    var validateTitle = document.createElement("div");
    validateTitle.id = "title_error_" + numButtons;
    validateTitle.className = "text-danger";

    var buttonContainerDiv = document.createElement("div");
    buttonContainerDiv.className = "button-container text-center";

    var removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "btn btn-danger remove-button";
    removeButton.setAttribute(
      "onclick",
      "removeButtonFunction(" + numButtons + ")"
    );
    removeButton.innerHTML = "Remove";

    newDiv.appendChild(idLabel);
    newDiv.appendChild(idInput);
    newDiv.appendChild(validateId);
    newDiv.appendChild(titleLabel);
    newDiv.appendChild(titleInput);
    newDiv.appendChild(validateTitle);
    buttonContainerDiv.appendChild(removeButton);
    newDiv.append(buttonContainerDiv);

    buttonsDiv.appendChild(newDiv);

    numButtons++;
  }
}

function generateJSON() {
  var textValue = document.getElementById("text").value;

  var buttons = [];

  var buttonsDiv = document.getElementById("buttons");
  var buttonInputs = buttonsDiv.getElementsByTagName("input");
  for (var i = 0; i < buttonInputs.length; i += 2) {
    var idValue = buttonInputs[i].value;
    var titleValue = buttonInputs[i + 1].value;

    var buttonObject = {
      type: "reply",
      reply: {
        id: idValue,
        title: titleValue,
      },
    };
    buttons.push(buttonObject);
  }
  var jsonObject = {
    type: "button",
    body: {
      text: textValue,
    },
    action: {
      buttons: buttons,
    },
  };
  var jsonString = JSON.stringify(jsonObject);

  var previousModal = document.getElementById("jsonModal");
  if (previousModal) {
    previousModal.remove();
  }

  var modal =
    '<div class="modal fade" id="jsonModal" tabindex="-1" aria-labelledby="jsonModalLabel" aria-hidden="true">';
  modal += '<div class="modal-dialog modal-dialog-centered">';
  modal += '<div class="modal-content">';
  modal += '<div class="modal-header">';
  modal += '<h5 class="modal-title" id="jsonModalLabel">Generated JSON</h5>';
  modal +=
    '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>';
  modal += "</div>";
  modal += '<div class="modal-body">';
  modal +=
    '<textarea id="jsonTextarea" class="form-control" readonly style="height: 200px;">' +
    jsonString +
    "</textarea>";
  modal += "</div>";
  modal += '<div class="modal-footer">';
  modal +=
    '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>';
  modal +=
    '<button type="button" class="btn btn-primary" data-clipboard-target="#jsonTextarea">Copy to Clipboard</button>';
  modal += "</div>";
  modal += "</div>";
  modal += "</div>";
  modal += "</div>";

  document.body.insertAdjacentHTML("beforeend", modal);

  var jsonModal = new bootstrap.Modal(document.getElementById("jsonModal"));
  jsonModal.show();

  var clipboard = new ClipboardJS(".btn-primary");
  clipboard.on("success", function (e) {
    console.log("Copied to clipboard");
    jsonModal.hide();
  });
}


function generateButtonsFromJSON(jsonString, action, buttons, replyProp, idProp, titleProp) {
  try {
    var jsonObject = JSON.parse(jsonString);
    var text = jsonObject.body.text;
    var buttons = jsonObject[action][buttons];

    var textDiv = document.getElementById("text");
    textDiv.value = text;

    var buttonsDiv = document.getElementById("buttons");
    buttonsDiv.innerHTML = "";

    for (var i = 0; i < buttons.length; i++) {
      var idValue = buttons[i][replyProp][idProp];
      var titleValue = buttons[i][replyProp][titleProp];

      var newDiv = document.createElement("div");
      newDiv.id = "button_" + (i + 1);
      newDiv.className = "text-container";

      var idLabel = document.createElement("label");
      idLabel.htmlFor = "id_" + (i + 1);
      idLabel.innerHTML = "ID:";

      var idInput = document.createElement("input");
      idInput.type = "text";
      idInput.id = "id_" + (i + 1);
      idInput.name = "id_" + (i + 1);
      idInput.value = idValue;

      var titleLabel = document.createElement("label");
      titleLabel.htmlFor = "text_" + (i + 1);
      titleLabel.innerHTML = "Title:";

      var titleInput = document.createElement("input");
      titleInput.type = "text";
      titleInput.id = "title_" + (i + 1);
      titleInput.name = "title_" + (i + 1);
      titleInput.value = titleValue;

      var buttonContainerDiv = document.createElement("div");
      buttonContainerDiv.className = "button-container text-center";

      var removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.className = "btn btn-danger remove-button";
      removeButton.setAttribute(
        "onclick",
        "removeButtonFunction(" + (i + 1) + ")"
      );
      removeButton.innerHTML = "Remove";

      newDiv.appendChild(idLabel);
      newDiv.appendChild(idInput);
      newDiv.appendChild(titleLabel);
      newDiv.appendChild(titleInput);
      buttonContainerDiv.appendChild(removeButton);
      newDiv.appendChild(buttonContainerDiv);

      buttonsDiv.appendChild(newDiv);
    }
  } catch (e) {
    console.error("Error parsing JSON: ", e);
  }
}
