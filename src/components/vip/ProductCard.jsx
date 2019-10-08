import React from "react";
import ProductCardCarousel from "./ProductCardCarousel";

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { pictures } = this.props;
    const tutorialSteps = { img: [] };

    pictures.forEach(picture => {
      let pictureAux = {
        label: picture.id,
        imgPath: `/${picture.src}`
      };
      tutorialSteps.img.push(pictureAux);
    });

    //const salida = ProductCardCarousel(tutorialSteps);
    return (
      <>
        <div
          className="product-gallery"
          style={{ padding: "0", marginTop: "5%" }}>
          <ProductCardCarousel {...tutorialSteps} />
        </div>
      </>
    );
  }
}

export default ProductCard;
