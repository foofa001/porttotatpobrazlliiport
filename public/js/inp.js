const inputField = document.getElementById('inputField');
const hiddenImage = document.getElementById('hiddenImage');

// Function to hide the image when the input is in focus
function hideImage() {
    hiddenImage.classList.add('hide');
}

// Function to show the image when the input loses focus
function showImage() {
    hiddenImage.classList.remove('hide');
}

// Event listeners to trigger the functions
inputField.addEventListener('focus', hideImage);
inputField.addEventListener('blur', showImage);
