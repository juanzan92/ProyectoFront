import React from "react";
import BarChart from "../reports/BarChart";
import PieChart from "../reports/PieChart";
import RadarChart from "../reports/RadarChart";

const urlBack = "http://localhost:8080/reports?username=jak";

class ChartsDeck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      barChartFiler: 3
    };
  }

  render() {
    const { barChartFiler } = this.state;

    return (
      <>
        <div class="card-deck">
          <div class="card margin-bottom-1x">
            <BarChart barChartFiler={barChartFiler} />
            <div class="card-body">
              <h4 class="card-title">Ventas Mensuales</h4>
              <p class="card-text">
                Grafico que representa tus ventas mensuales
              </p>
            </div>
          </div>
          <div class="card margin-bottom-1x">
            <PieChart />
            <div class="card-body">
              <h4 class="card-title">Procedencia de Compradores</h4>
              <p class="card-text">
                Representa de donde provienen los compradores de tus
                oportunidades
              </p>
            </div>
          </div>
          <div class="card margin-bottom-1x">
            <RadarChart />
            <div class="card-body">
              <h4 class="card-title">Ventas por Categoria</h4>
              <p class="card-text">
                Aqui puedes observar las categorias mas demandadas dentro de la
                plataforma
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ChartsDeck;
