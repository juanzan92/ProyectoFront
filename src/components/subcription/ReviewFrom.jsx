import React from "react";
import { FormGroup, Slider } from "@material-ui/core";
import SliderReview from "@material-ui/core/Slider";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviewDescription: "",
      rating: 5,
      reviewUser: this.props.user
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSliderChange = (event, rating) => this.setState({ rating });
  handleStopDrag = () => this.props.update(this.state.rating);

  handleSubmit(event) {
    event.preventDefault();
    const data = {};
    data.item_id = this.props.item_id;
    data.username = this.props.username;
    data.description = this.state.reviewDescription;
    data.review_score = this.state.rating;
    const url = `http://localhost:8080/catalog/reviews`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(response => {
      if (response.status == 200) {
        window.location.reload();
      }
    });
  }

  render() {
    const { reviewDescription, rating } = this.state;
    const { item_title } = this.props;
    return (
      <>
        <div
          className="card mb-3"
          style={{ display: "flex", flexDirection: "row", maxWidth: "50%" }}>
          <div style={{ margin: "2% auto", width: "100%", padding: "1.5rem" }}>
            <h3>Danos tu Opini&#243;n sobre el producto:</h3>
            <h6 class="col-form-label" for="textarea-input">
              {item_title}
            </h6>
            <form noValidate autoComplete="off">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "0.7rem",
                  maxWidth: "400px"
                }}>
                <label class="col-form-label" for="textarea-input">
                  Puntaje {rating}
                </label>
                <SliderReview
                  value={rating}
                  style={{ color: "#c1c32d" }}
                  min={0}
                  max={5}
                  onChange={this.handleSliderChange}
                  onDragStop={this.handleStopDrag}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                />{" "}
              </div>

              <div class="form-group row">
                <div class="col-10">
                  <textarea
                    class="form-control"
                    type="text"
                    id="textarea-input"
                    name="reviewDescription"
                    placeholder={"Deja tu comentario"}
                    onChange={this.handleChange}>
                    {reviewDescription}
                  </textarea>
                </div>
              </div>
              <button className="btn btn-info lg" onClick={this.handleSubmit}>
                Enviar Opini&#243;n
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default ReviewForm;
