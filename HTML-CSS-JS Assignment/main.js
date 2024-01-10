// Alert message when the button is clicked
const btn = document.getElementById('btn');
btn.addEventListener('click', function () {
    alert('Button clicked!');
});

// Change the background color of the header when a link is clicked
const links = document.querySelectorAll('.thenav a');
links.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        document.querySelector('.thenav').style.backgroundColor = 'lightblue';
    });
});

// Toggle the visibility of the information divs
const infoDivs = document.querySelectorAll('.info');
infoDivs.forEach(function (infoDiv) {
    infoDiv.addEventListener('click', function () {
        this.classList.toggle('hidden');
    });
});

// Generate a random color and change the button's background color
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', function () {
    const randomColor = getRandomColor();
    this.style.backgroundColor = randomColor;
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

// Validate the subscription form before submitting
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Validate form fields
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementsByName('userEmailId')[0].value;
    const country = document.getElementById('country').value;

    if (fname === '' || lname === '' || email === '' || country === 'Please select') {
        alert('Please fill in all fields');
    } else {
        // Submit the form
        alert('Form submitted!');
        this.reset();
        // Reset form fields
    }
});
