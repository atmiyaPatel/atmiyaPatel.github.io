// var typed = new Typed('#typed', {
//     stringsElement: '#typed-strings'
// });

// var typed = new Typed('#typed', {
//     stringsElement: '#typed-strings',
//     typeSpeed: 0,
//     backSpeed: 0,
//     smartBackspace: true, // this is a default
//     loop: true
// });

// var typed_strings = $('#typed-strings').text();
// var typed = new Typed('#typed-strings', {
//     strings: typed_strings.split(','),
//     typeSpeed: 80,
//     loop: true,
//     backDelay: 1100,
//     backSpeed: 30
// });


var typed_strings = $('.text-slider-items').text();
var typed = new Typed('.text-slider', {
    strings: typed_strings.split(','),
    typeSpeed: 80,
    loop: true,
    backDelay: 1100,
    cursorChar: '_',
    backSpeed: 30
});

// var typed = new Typed('#typed', {
//     stringsElement: '#typed-strings',
//     typeSpeed: 80,
//     loop: true,
//     backDelay: 1100,
//     backSpeed: 30
// });