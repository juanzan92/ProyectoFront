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
      const url = "https://localhost:8080/catalog/categories/get_all";
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
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
          <OffCanvasMenu
            categories={this.state.categories}
            key={"off-canvas-menu"}
          />
          <NavBar key={"nav-bar"} />
          <WrappedComponent
            {...this.props}
            categories={this.state.categories}
          />
          <Footer key={"footer"} />
        </div>
      );
    }
  };
}
