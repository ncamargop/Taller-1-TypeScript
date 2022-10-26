import { series } from "./data.js";
var seriesTbody = document.getElementById('series'); // Nodo tbody que tiene el id="series"
renderSeriesInTable(series);
renderPromedioTemps(series);
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.idSerie, "</td>\n                           <td>").concat(c.nombreSerie, "</td>\n                           <td>").concat(c.canal, "</td>\n                           <td>").concat(c.temps, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function renderPromedioTemps(series) {
    var promedio = 0;
    series.forEach(function (serie) {
        promedio = promedio + serie.temps;
    });
    promedio = promedio / series.length;
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td>Temporadas promedio: ".concat(promedio, "</td>");
    seriesTbody.appendChild(trElement);
}
