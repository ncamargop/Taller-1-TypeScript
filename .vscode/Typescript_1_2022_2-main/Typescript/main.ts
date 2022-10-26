import { Serie } from "./Serie.js";

import { dataSeries } from "./data.js";

let seriesTbody: HTMLElement = document.getElementById("series")!;

renderSeriesInTable(dataSeries);
renderAverageSeasons(getAverageSeasons(dataSeries));

function renderSeriesInTable(dataSeries:Serie[]): void{
    console.log("Desplegando series");
    dataSeries.forEach(serie => {
        let trElement = document.createElement("tr");
        trElement.innerHTML =  `<td>${serie.id}</td>
                                <td>${serie.nombre}</td>
                                <td>${serie.canal}</td>
                                <td>${serie.temporadas}</td>`;
        seriesTbody.appendChild(trElement);
    });
}

function getAverageSeasons(dataSeries: Serie[]): number{
    let averageSeasons: number = 0;
    dataSeries.forEach(serie => {
        averageSeasons = averageSeasons + serie.temporadas;
    });
    averageSeasons = averageSeasons/dataSeries.length;
    return averageSeasons;
}

function renderAverageSeasons(seasons:number): void{
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>Temporadas promedio: ${seasons}</td>`

    seriesTbody.appendChild(trElement);
}
