import React, { useState } from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Meses ", "datos1", "datos2"],
  ["Febrero", 200, -200],
  ["Marzo", 300, -200],
  ["Abril", 200, -200],
  ["Mayo", 300, -200],
  ["Junio", 100, -100],
  ["Julio", 100, -100],
  ["Agosto", 100, -100],
  ["Septiembre", 600, -100],
  ["Octubre", 400, -100],
  ["Noviembre", 500, -100],
  ["Diciembre", 1000, -100],
];

const options = {
  legend: { position: "none" },
  isStacked: true,
  bar: { groupWidth: "50%" },
  chartArea: { width: "100%", height: "80%" },
  vAxis: {
    viewWindowMode: "explicit",
    viewWindow: {
      max: 300,
      min: -300,
    },
  },
};

export default function GraficoVenta() {
  return (
      <div  style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}>
      <h1 > Ventas</h1>
    <Chart chartType="ColumnChart" data={data} options={options} />
      </div>
  );
}