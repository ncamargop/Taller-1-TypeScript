import { Serie } from "./Serie.js";

import { series } from "./data.js";




let seriesTbody: HTMLElement = document.getElementById('series')!; // Nodo tbody que tiene el id="series"
renderSeriesInTable(series);
renderPromedioTemps(series);

function renderSeriesInTable(series: Serie[]): void {
  series.forEach((c) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.idSerie}</td>
                           <td>${c.nombreSerie}</td>
                           <td>${c.canal}</td>
                           <td>${c.temps}</td>`;
    seriesTbody.appendChild(trElement);
  });
}


function renderPromedioTemps(series: Serie[]): void{
    let promedio: number = 0;
    series.forEach(serie => {
        promedio = promedio + serie.temps;
    });
    promedio = promedio/series.length;
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>Temporadas promedio: ${promedio}</td>`

    seriesTbody.appendChild(trElement);
}