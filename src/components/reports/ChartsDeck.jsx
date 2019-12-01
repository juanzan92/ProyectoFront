import React from "react";
import BarChart from "../reports/BarChart";
import PieChart from "../reports/PieChart";
import RadarChart from "../reports/RadarChart";
import { Auth } from "aws-amplify";

const meses = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic"
];
const urlBack = "http://localhost:8080/reports?username=jak";

const cardBody = {
  flex: "none !important"
};

class ChartsDeck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      user: null,
      barChart: [],
      barChartFiler: 3
    };

    this.getUsuario();
  }

  getUsuario() {
    Auth.currentAuthenticatedUser({}).then(user1 => {
      this.setState({
        user: user1.attributes
      });
    });
    this.buscarGraphData();
  }

  buscarGraphData() {
    fetch(urlBack)
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        myJson.graph_03.forEach(element => {
          element.month = meses[element.month - 1];
        });
        this.setState({
          data: myJson,
          barChart: myJson.graph_03
        });
      });
  }

  render() {
    const { barChartFiler, barChart } = this.state;

    return (
      <>
        <div class="card-deck">
          <div class="card margin-bottom-1x">
            <div class="card-body">
              <h4 class="card-title">Ventas Mensuales</h4>
              <p class="card-text" style={cardBody}>
                Grafico que representa tus ventas mensuales
              </p>
            </div>
            {barChart.length > 0 && (
              <BarChart barChartFiler={barChartFiler} data={barChart} />
            )}
          </div>
          <div class="card margin-bottom-1x">
            <div class="card-body" style={cardBody}>
              <h4 class="card-title">Procedencia de Compradores</h4>
              <p class="card-text">
                Representa de donde provienen los compradores de tus
                oportunidades
              </p>
            </div>
            <PieChart />
          </div>
          <div class="card margin-bottom-1x">
            <div class="card-body" style={cardBody}>
              <h4 class="card-title">Ventas por Categoria</h4>
              <p class="card-text">
                Aqui puedes observar las categorias mas demandadas dentro de la
                plataforma
              </p>
            </div>
            <RadarChart />
          </div>
        </div>
      </>
    );
  }
}

export default ChartsDeck;
