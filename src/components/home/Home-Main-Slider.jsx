import React from "react";
import ItemMainSlider from "./Item-Main-Slider";

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

  render() {
    const { mainSlider } = this.props;

    return (
      <div
        className="owl-carousel large-controls dots-inside"
        data-owl-carousel='{ "nav": true, "dots": true, "loop": true, "autoplay": true, "autoplayTimeout": 7000 }'>
        {mainSlider.map(item => {
          return <ItemMainSlider key={item.item_id} item={item} />;
        })}
      </div>
    );
  }
}
export default MainSlider;
