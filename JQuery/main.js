// document.querySelector("h1");
// console.log(alert());
// console.log($("h1").css("color", "Green"));
// document.querySelectorAll();
// // $("button");
// ($("h1").css("color", "Green"));//its not great to add css in javaScript. 

// const button = document.querySelector('.my-button');

// button.addEventListener('mouseover', function () {
//     const randomColor = getRandomColor();
//     button.style.backgroundColor = randomColor;
// });

// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
// }

    $('.my-button').mouseover(function () {
        var randomColor = getRandomColor();
        $(this).css('background-color', randomColor);
    });

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


