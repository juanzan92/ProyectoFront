import React from "react";
import OffCanvasCategory from "./Off-Canvas-Category";

class OffCanvasMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      currentCategory: null
    };
    this.updateCurrentCategory = this.updateCurrentCategory.bind(this);
  }

  updateCurrentCategory(category) {
    this.setState({
      currentCategory: category
    });
  }

  render() {
    const { categories } = this.props;
    return (
      <>
        <div className="offcanvas-container" id="shop-categories">
          <div className="offcanvas-header">
            <h3 className="offcanvas-title">Categorias</h3>
          </div>
          <nav className="offcanvas-menu">
            <ul className="menu">
              {categories.map(category => (
                <OffCanvasCategory
                  propsCategories={category}
                  currentCategory={this.state.currentCategory}
                  updateCurrent={this.updateCurrentCategory}
                  key={category.categoryId}
                />
              ))}
            </ul>
          </nav>
        </div>
      </>
    );
  }
}
export default OffCanvasMenu;
