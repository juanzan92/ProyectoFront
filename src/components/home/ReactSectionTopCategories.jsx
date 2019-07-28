import React from "react";
import ReactA from "../utils/ReactA";
import ReactH3 from "../utils/H3";
import ReactDiv from "../utils/Reactdiv";
import ReactCard from "../utils/ReactCard";

class ReactSectionTopCategories extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { sectionClass, categories } = this.props;
    return (
      <>
        <section className={sectionClass}>
          <ReactH3 h3Class={"text-center mb-30"} h3Title={"Top categorias"} />
          <div className="row">
            {categories.map(category => (
              <div className="col-md-4 col-sm-6">
                <ReactCard
                  title={category.category_name}
                  img={category.picture}
                  text={"Mirar Categoria"}
                  bodY={""}
                />
              </div>
            ))}
          </div>
          <div className="text-center">
            <ReactA
              aClass={"btn btn-outline-secondary margin-top-none"}
              aTitle={"Todas las categorias"}
              aHref={"/categories"}
            />
          </div>
        </section>
      </>
    );
  }
}
export default ReactSectionTopCategories;
