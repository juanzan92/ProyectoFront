import React from "react";
import PieChart from "../backOfficce/PieChart";
import BarChart from "../reports/BarChart";
const cardBody = {
  flex: "none !important"
};

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

class BackOfficceGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transacciones: [],
      itemsActive: [],
      itemsCancel: [],
      itemsFinished: [],
      itemsDelivering: [],
      barGraph: [],
      pieChart: [],
      totalIncome: null
    };

    this.buscarTransacciones();
  }

  sortItems(items, transacciones, totalIncome, data) {
    let itemsActive = items.filter(item => item.item_status === "ACTIVE");
    let itemsCancel = items.filter(item => item.item_status === "CANCELLED");
    let itemsFinished = items.filter(item => item.item_status === "FINISHED");
    let itemsDelivering = items.filter(
      item => item.item_status === "DELIVERING"
    );

    this.setState({
      barGraph: data,
      totalIncome: totalIncome,
      transacciones: transacciones,
      itemsActive: itemsActive,
      itemsCancel: itemsCancel,
      itemsFinished: itemsFinished,
      itemsDelivering: itemsDelivering,
      pieChart: [
        itemsActive.length,
        itemsCancel.length,
        itemsFinished.length,
        itemsDelivering.length
      ]
    });
  }

  buscarItems(subscriptions) {
    let transacciones = subscriptions.length;
    const url = `http://proyectoback-tesis.us-west-2.elasticbeanstalk.com/catalog/items/get_all`;
    let totalIncome = 0;
    let incomesPerMonth = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let quantityPerMont = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    subscriptions.forEach(element => {
      let date = new Date(element.date_created);
      incomesPerMonth[date.getMonth()] += element.total_amount;
      quantityPerMont[date.getMonth()] = quantityPerMont[date.getMonth()] + 1;
      totalIncome += element.total_amount;
    });

    let barChartData = [
      {
        mes: "Ene",
        ventas: quantityPerMont[0],
        ganancia: incomesPerMonth[0] / 1000
      },
      {
        mes: "Feb",
        ventas: quantityPerMont[1],
        ganancia: incomesPerMonth[1] / 1000
      },
      {
        mes: "Mar",
        ventas: quantityPerMont[2],
        ganancia: incomesPerMonth[2] / 1000
      },
      {
        mes: "Abr",
        ventas: quantityPerMont[3],
        ganancia: incomesPerMonth[3] / 1000
      },
      {
        mes: "May",
        ventas: quantityPerMont[4],
        ganancia: incomesPerMonth[4] / 1000
      },
      {
        mes: "Jun",
        ventas: quantityPerMont[5],
        ganancia: incomesPerMonth[5] / 1000
      },
      {
        mes: "Jul",
        ventas: quantityPerMont[6],
        ganancia: incomesPerMonth[6] / 1000
      },
      {
        mes: "Ago",
        ventas: quantityPerMont[7],
        ganancia: incomesPerMonth[7] / 1000
      },
      {
        mes: "Sept",
        ventas: quantityPerMont[8],
        ganancia: incomesPerMonth[8] / 1000
      },
      {
        mes: "Oct",
        ventas: quantityPerMont[9],
        ganancia: incomesPerMonth[9] / 1000
      },
      {
        mes: "Nov",
        ventas: quantityPerMont[10],
        ganancia: incomesPerMonth[10] / 1000
      },
      {
        mes: "Dic",
        ventas: quantityPerMont[11],
        ganancia: incomesPerMonth[11] / 1000
      }
    ];

    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.sortItems(myJson, transacciones, totalIncome, barChartData);
      });
  }

  buscarTransacciones() {
    const url = `http://localhost:8080/subscriptions/get_all`;
    fetch(url, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.buscarItems(myJson);
      });
  }

  render() {
    const { pieChart, totalIncome, transacciones, barGraph } = this.state;

    if (totalIncome != null) {
      let montoFinal = totalIncome * 0.13;
      return (
        <>
          {" "}
          <div class="card margin-bottom-1x">
            <div class="card-body" style={cardBody}>
              <h4 class="card-title">Items </h4>
              <p class="card-text">Cantidad de Items en la plataforma</p>
            </div>
            <PieChart data={pieChart} />
          </div>
          <div class="card margin-bottom-1x">
            <div class="card-body" style={cardBody}>
              <h4 class="card-title">Transacciones</h4>
              <p class="card-text">{transacciones}</p>
              <h4 class="card-title">Ganancia Total</h4>
              <p class="card-text" style={{ colr: "green" }}>
                {"$ " + montoFinal.toFixed(2)}
              </p>
            </div>
          </div>
          <div class="card margin-bottom-1x">
            <div class="card-body">
              <h4 class="card-title">Ventas Mensuales</h4>
              <p class="card-text" style={cardBody}>
                Grafico que representa tus ventas mensuales expresadas en miles
                de pesos
              </p>
            </div>
            <BarChart data={barGraph} />
          </div>
        </>
      );
    } else {
      return (
        <div className="spinner-border text-info m-2 center" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    }
  }
}

export default BackOfficceGraph;
