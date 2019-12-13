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
        active: "",
        isLoading: true
      };

      this.handleOpenOffCanvasMenu = this.handleOpenOffCanvasMenu.bind(this);
    }

    componentDidMount() {
      this.fetchCategories();
    }

    fetchCategories() {
      const url = "http://localhost:8080/catalog/categories/get_all";
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
          this.setState({
            categories: myJson,
            isLoading: false
          });
        })
        .catch(e => console.log(e));
    }

    handleOpenOffCanvasMenu() {
      if (this.state.active == "active") {
        this.setState({ active: "" });
      } else {
        this.setState({ active: "active" });
      }
    }

    render() {
      return (
        <div>
          <TopBar />
          <OffCanvasMenu
            categories={this.state.categories}
            active={this.state.active}
            key={"off-canvas-menu"}
          />
          <NavBar
            key={"nav-bar"}
            handleOpenOffCanvasMenu={this.handleOpenOffCanvasMenu}
          />
          <WrappedComponent
            {...this.props}
            categories={this.state.categories}
            handleOpenOffCanvasMenu={this.handleOpenOffCanvasMenu}
          />
          <div
            className="site-backdrop"
            onClick={this.handleOpenOffCanvasMenu}
          />
          <Footer key={"footer"} />
        </div>
      );
    }
  };
}
