document.addEventListener("DOMContentLoaded", function () {
    var box = document.getElementById('animatedBox');
    var position = 0;
    var direction = 1;

    function animate() {
        if (position >= 300 || position <= 0) direction *= -1; // Change direction
        position += direction; // Move the box
        box.style.left = position + 'px';
        requestAnimationFrame(animate); // Repeat animation
    }

    animate(); // Start animation
});

