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

const cardBody = {
  flex: "none !important",
  maxHeight: "150px"
};

class ChartsDeck extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      user: null,
      barChart: [],
      barChartFiler: 3,
      waitingForData: false
    };

    this.getUsuario();
  }

  getUsuario() {
    Auth.currentAuthenticatedUser({}).then(user1 => {
      this.setState({
        user: user1.attributes
      });
    });
  }
  componentDidUpdate() {
    const { data, user, barChart, waitingForData } = this.state;
    if (user && data == null && barChart.length === 0 && !waitingForData) {
      this.buscarGraphData();
    }
  }

  buscarGraphData() {
    const urlBack = `http://localhost:8080/reports?username=${this.state.user.nickname}`;

    this.setState({ waitingForData: true });
    fetch(urlBack)
      .then(response => {
        if (response.status == 200) {
          return response.json();
        }
      })
      .then(myJson => {
        let auxArray = [];
        if (myJson) {
          myJson.graph_03.forEach(element => {
            let report = {};
            report.mes = meses[element.month - 1];
            report.ventas = element.quantity;
            report.ganancia = element.income;
            auxArray.push(report);
          });
          this.setState({
            data: myJson,
            barChart: auxArray
          });
        }
      });
  }

  render() {
    const { barChartFiler, barChart } = this.state;

    if (barChart.length > 0) {
      return (
        <>
          <div class="card-deck">
            <div class="card margin-bottom-1x">
              <div class="card-body">
                <h4 class="card-title">Ventas Mensuales</h4>
                <p class="card-text" style={cardBody}>
                  Grafico que representa tus ventas mensuales expresadas en
                  miles de pesos
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
                  Aqui puedes observar las categorias mas demandadas dentro de
                  la plataforma
                </p>
              </div>
              <RadarChart />
            </div>
          </div>
        </>
      );
    } else {
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
            </div>
            <div class="card margin-bottom-1x">
              <div class="card-body" style={cardBody}>
                <h4 class="card-title">Procedencia de Compradores</h4>
                <p class="card-text">
                  Representa de donde provienen los compradores de tus
                  oportunidades
                </p>
              </div>
            </div>
            <div class="card margin-bottom-1x">
              <div class="card-body" style={cardBody}>
                <h4 class="card-title">Ventas por Categoria</h4>
                <p class="card-text">
                  Aqui puedes observar las categorias mas demandadas dentro de
                  la plataforma
                </p>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default ChartsDeck;
