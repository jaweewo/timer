(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear() + 1; // Año siguiente

    // Fecha de fin: 1 de enero del año siguiente a las 9:00 AM GMT 0
    let fecha = `January 1, ${yyyy} 09:00:00 GMT+0000`;

    const countDown = new Date(fecha).getTime(),
        x = setInterval(function() {
            const now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / day);
            document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
            document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
            document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

            // Función post fecha
            if (distance < 0) {
                document.getElementById("headline1").innerText = "Ahí va Javipatitos con 300 abrazos!";
                document.getElementById("headline2").innerText = " ";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
            }
        }, 1000);
}());