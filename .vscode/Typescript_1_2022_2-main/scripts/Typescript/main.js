import { dataSeries } from "./data.js";
var seriesTbody = document.getElementById("series");
renderSeriesInTable(dataSeries);
renderAverageSeasons(getAverageSeasons(dataSeries));
function renderSeriesInTable(dataSeries) {
    console.log("Desplegando series");
    dataSeries.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                                <td>").concat(serie.nombre, "</td>\n                                <td>").concat(serie.canal, "</td>\n                                <td>").concat(serie.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(dataSeries) {
    var averageSeasons = 0;
    dataSeries.forEach(function (serie) {
        averageSeasons = averageSeasons + serie.temporadas;
    });
    averageSeasons = averageSeasons / dataSeries.length;
    return averageSeasons;
}
function renderAverageSeasons(seasons) {
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td>Temporadas promedio: ".concat(seasons, "</td>");
    seriesTbody.appendChild(trElement);
}
