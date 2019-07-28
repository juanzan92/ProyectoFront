import React from "react";
import ItemMainSlider from "./Item-Main-Slider";

class MainSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: "",
      isLoading: true
    };
  }

  componentDidMount() {}

  render() {
    const { mainSlider } = this.props;
    if (mainSlider) {
      return (
        <section
          className="hero-slider"
          style={{ backgroundImage: "url(/img/hero-slider/main-bg.jpg)" }}
        >
          <div
            className="owl-carousel large-controls dots-inside"
            data-owl-carousel='{ "nav": true, "dots": true, "loop": true, "autoplay": true, "autoplayTimeout": 7000 }'
          >
          {mainSlider.map(item => (
              <ItemMainSlider key={item.id} item={item} />
            ))}
          </div>
        </section>
      );
    } else {
      return (
        <div class="spinner-border text-info m-2" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      );
    }
  }
}
export default MainSlider;
