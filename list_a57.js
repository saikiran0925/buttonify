var numButtons = 1;

function removeButtonFunction(buttonNum) {
  var buttonToRemove = document.getElementById("button_" + buttonNum);
  buttonToRemove.remove();
}

function addButton() {
  var id = document.getElementById("idInput").value;
  var title = document.getElementById("titleInput").value;
  var description = document.getElementById("descInput").value;
  if (id && title) {
    if (numButtons > 9) {
      alert("We can't create more than 10 list options");
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
    idInput.value = id;

    var titleLabel = document.createElement("label");
    titleLabel.htmlFor = "text_" + numButtons;
    titleLabel.innerHTML = "Title:";

    var titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "title_" + numButtons;
    titleInput.name = "title_" + numButtons;
    titleInput.value = title;

    var validateTitle = document.createElement("div");
    validateTitle.id = "title_error_" + numButtons;
    validateTitle.className = "text-danger";

    var descLabel = document.createElement("label");
    descLabel.htmlFor = "description_" + numButtons;
    descLabel.innerHTML = "Description:";

    var descInput = document.createElement("input");
    descInput.type = "text";
    descInput.id = "description_" + numButtons;
    descInput.name = "description_" + numButtons;
    descInput.value = description;

    var validateDesc = document.createElement("div");
    validateDesc.id = "desc_error_" + numButtons;
    validateDesc.className = "text-danger";

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
    newDiv.appendChild(titleLabel);
    newDiv.appendChild(titleInput);
    newDiv.appendChild(validateTitle);
    newDiv.appendChild(descLabel);
    newDiv.appendChild(descInput);
    newDiv.appendChild(validateDesc);
    buttonContainerDiv.appendChild(removeButton);
    newDiv.appendChild(buttonContainerDiv);

    buttonsDiv.appendChild(newDiv);

    numButtons++;
  }
}

function generateJSON() {
  var textValue = document.getElementById("text").value;
  var listTitleValue = document.getElementById("listTitle").value;
  var buttonValue = document.getElementById("button").value;
  var rows = [];
  var sections = [];

  var buttonsDiv = document.getElementById("buttons");
  var buttonInputs = buttonsDiv.getElementsByTagName("input");
  for (var i = 0; i < buttonInputs.length; i += 3) {
    var idValue = buttonInputs[i].value;
    var titleValue = buttonInputs[i + 1].value;
    var descValue = buttonInputs[i + 2].value;
    var buttonObject = {
      id: idValue,
      title: titleValue,
    };
    if (descValue) {
      buttonObject["description"] = descValue;
    }
    rows.push(buttonObject);
  }

  var sectionObject = {
    title: listTitleValue,
    rows: rows,
  };

  sections.push(sectionObject);

  var jsonObject = {
    type: "list",
    body: {
      type: "text",
      text: textValue,
    },
    action: {
      button: buttonValue,
      sections: sections,
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
