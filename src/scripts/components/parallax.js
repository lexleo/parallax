import Parallax from 'parallax-js';

document.addEventListener("DOMContentLoaded", (e) => {
    let parallax = document.getElementById('parallax');
    console.log(parallax);
    var parallaxInstance = new Parallax(parallax, {
        relativeInput: true,
        clipRelativeInput: true,
        // frictionX: 0.1,
        // frictionY: 0.1,

        // scalarX: 40,
        // scalarY: 10,

        // originY: 0.8,
        // originX: 0
        limitX: 500,
        limitY: 0
    });
});

if (window.DeviceOrientationEvent) {
    window.addEventListener('orientationchange', function() { 
        location.reload();
    }, false);
}


