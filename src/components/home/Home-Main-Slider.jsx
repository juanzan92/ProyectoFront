import React from "react";
import ItemMainSlider from "./Item-Main-Slider";
import Slider from "react-slick";

class MainSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: "",
      isLoading: true,
      mainSlider: NaN
    };
  }

  componentDidMount() {
    setTimeout(this.setState({ isLoading: false }), 1000);
  }

  buildView(mainSlider) {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    if (mainSlider) {
      return (
        <Slider {...settings}>
          {mainSlider.map(item => {
            return <ItemMainSlider key={item.item_id} item={item} />;
          })}
        </Slider>
      );
    }
  }

  render() {
    const { mainSlider } = this.props;
    const vista = this.buildView(mainSlider);
    return vista;
  }
}
export default MainSlider;
