var t = document.getElementById("prestemp").innerHTML;
var s = document.getElementById("wspeed").innerHTML;


if (t < 50 && s > 3) {
    var f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (.4275 * t * Math.pow(s, 0.16));

    var c = Math.round(f);
    document.getElementById("wchill").textContent = c + "°";

} else {
    document.getElementById("wchill").textContent = "Nice day, go outside!";
}