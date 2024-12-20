(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear() + 1; // Año siguiente

    let dayMonth = "03/01",
        fecha = dayMonth + "/" + yyyy; // Fecha de fin con el año siguiente

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