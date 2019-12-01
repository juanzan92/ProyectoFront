import React from "react";

class OffCanvasCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: this.props.propsCategories
    };
  }

  componentDidMount() {}

  render() {
    const subCategory = ["Sub-Cat 1", "Sub-Cat 2", "Sub-Cat 3"];
    var response;
    var aux = 1;
    const category = this.state.category;
    const { currentCategory } = this.props;

    if (currentCategory === category) {
      response = (
        <li>
          <ul className="offcanvas-submenu">
            <li className="back-btn">
              <a onClick={() => this.props.updateCurrent(null)}>Volver</a>
            </li>
            {subCategory.map(subcategory => (
              <li>
                <a href={"/category/" + subcategory + aux}>{subcategory}</a>
              </li>
            ))}
          </ul>
        </li>
      );
    } else if (currentCategory === null) {
      response = (
        <li className="has-children">
          <span>
            <a href={"/category/" + category.category_name}>
              {category.category_name}
            </a>
            <span
              className="sub-menu-toggle"
              onClick={() => this.props.updateCurrent(category)}
            />
          </span>
        </li>
      );
    }

    return <>{response}</>;
  }
}
export default OffCanvasCategory;
