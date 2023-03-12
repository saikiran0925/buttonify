// Get the widget and widget box elements
const widget = document.getElementById('widget');
const widgetBox = document.createElement('div');
widgetBox.id = 'widget-box';

// Toggle the widget box when the widget logo is clicked
widget.addEventListener('click', () => {
  if (widgetBox.style.display === 'block') {
    widgetBox.style.opacity = '0';
    setTimeout(() => {
      widgetBox.style.display = 'none';
      widgetBox.style.width = '200px';
      widgetBox.style.height = '200px';
      textField.style.display = 'none';
      widgetBox.style.opacity = '1';
    }, 300);
  } else {
    widgetBox.style.display = 'block';
    widgetBox.style.opacity = '0';
    setTimeout(() => {
      widgetBox.style.width = '400px';
      widgetBox.style.height = '400px';
      textField.style.display = 'block';
      widgetBox.style.opacity = '1';
    }, 100);
  }
});

// Create a text field in the widget box
const textField = document.createElement('textarea');
textField.placeholder = 'Paste your stuff here...';
textField.style.width = '90%';
textField.style.height = '90%';
textField.style.marginTop = '20px';
textField.style.marginLeft = '20px';
textField.style.padding = '10px';
textField.style.borderRadius = '5px';
textField.style.resize = 'none';
textField.style.border = '1px solid #ccc';
textField.style.fontSize = '16px';
textField.style.fontFamily = 'Arial, sans-serif';
textField.style.display = 'none';
widgetBox.appendChild(textField);

// Add CSS to style the widget box
widgetBox.style.position = 'fixed';
widgetBox.style.bottom = '100px';
widgetBox.style.right = '20px';
widgetBox.style.borderRadius = '5px';
widgetBox.style.backgroundColor = '#fff';
widgetBox.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
widgetBox.style.opacity = '0';
widgetBox.style.transition = 'all 0.3s ease-in-out';

// Add the widget box to the page
document.body.appendChild(widgetBox);
