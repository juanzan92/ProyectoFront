import React from "react";
//Components
import NavBar from "./NavBar";
import Footer from "./Footer";
import TopBar from "./TopBar";
import OffCanvasMenu from "./OffCanvas/Off-Canvas-Menu";

export default function wrapper(WrappedComponent) {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        categories: [],
        isLoading: true
      };
    }

    componentDidMount() {
      this.fetchCategories();
    }

    fetchCategories() {
      const url =
        "https://cors-anywhere.herokuapp.com/" +
        "https://kusmq1it9k.execute-api.us-east-1.amazonaws.com/prod/categories/";
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          console.log(response);
          return response.json();
        })
        .then(myJson => {
          console.log(myJson);
          this.setState({
            categories: myJson,
            isLoading: false
          });
        })
        .catch(e => console.log(e));
    }

    render() {
      return (
        <div>
          <TopBar />
          <OffCanvasMenu categories={this.state.categories} />
          <NavBar />
          <WrappedComponent {...this.props} />
          <Footer />
        </div>
      );
    }
  };
}
