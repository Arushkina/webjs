$(document).ready(function() {
    // Set the date we're counting down to
    var countDownDate = new Date("December 1, 2023 00:00:00").getTime();

    // Update the countdown every 1 second
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the corresponding span elements
        $('#days').text(days);
        $('#hours').text(hours);
        $('#minutes').text(minutes);
        $('#seconds').text(seconds);

        // If the countdown is finished, display a message
        if (distance < 0) {
            clearInterval(x);
            $('#countdown').html("<h2>Countdown finished!</h2>");
        }
    }, 1000);
});
