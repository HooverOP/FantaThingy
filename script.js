function changeCan(canType) {
    var canImage = document.getElementById('canImage');
    var originalButton = document.getElementById('originalButton');
    var zeroButton = document.getElementById('zeroButton');

    switch (canType) {
        case 'original':
            canImage.src = 'image/580b57fbd9996e24bc43c10f.png';
            originalButton.style.border = 'none'; // Reset button style
            zeroButton.style.border = 'none'; // Reset button style
            break;
        case 'zero':
            canImage.src = 'image/58710064b8261606d1c863f0.png'; // Replace with the actual path for the zero can image
            originalButton.style.border = 'none'; // Reset button style
            zeroButton.style.border = 'none'; // Reset button style
            break;
        // Add more cases for other can options
    }
}
