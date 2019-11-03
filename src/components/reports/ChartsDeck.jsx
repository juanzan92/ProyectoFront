import React from "react";
import BarChart from "../reports/BarChart";
import PieChart from "../reports/PieChart";
import RadarChart from "../reports/RadarChart";

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
        <h6 class="text-muted text-normal text-uppercase padding-top-2x">
          Reportes Vendedor:{" "}
        </h6>
        <hr class="margin-bottom-1x"></hr>
        <div class="card-deck">
          <div class="card margin-bottom-1x">
            <BarChart barChartFiler={barChartFiler} />
            <div class="card-body">
              <h4 class="card-title">Ventas Mensuales</h4>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div class="card margin-bottom-1x">
            <PieChart />
            <div class="card-body">
              <h4 class="card-title">Procedencia de Compradores</h4>
              <p class="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
            </div>
          </div>
          <div class="card margin-bottom-1x">
            <RadarChart />
            <div class="card-body">
              <h4 class="card-title">Ventas por Categoria</h4>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ChartsDeck;
