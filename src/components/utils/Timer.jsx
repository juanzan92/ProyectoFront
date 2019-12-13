import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: "00",
      minutes: "",
      hours: "",
      days: ""
    };

    this.secondsRemaining = (Date.parse(props.endDate) - Date.now()) / 1000;
    this.handleChange = this.handleChange.bind(this);
    // method that triggers the countdown functionality
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    // this.setState({
    //   endDate: new Date(this.props.endDate)
    // });
    if (this.secondsRemaining > 0) {
      this.startCountDown();
    } else {
      this.secondsRemaining = 0;
    }
  }

  handleChange(event) {
    this.setState({
      minutes: event.target.value
    });
  }

  tick() {
    var min = Math.floor(this.secondsRemaining / 60);
    var sec = Math.floor(this.secondsRemaining - min * 60);
    var hours = Math.floor(min / 60);
    var days = Math.floor(hours / 24);
    min = min - hours * 60;
    hours = hours - days * 24;

    this.setState({
      minutes: min,
      seconds: sec,
      hours: hours,
      days: days
    });
    if (sec < 10) {
      this.setState({
        seconds: `0${sec}`
      });
    }
    if (min < 10) {
      this.setState({
        minutes: `0${min}`
      });
    }
    if (hours < 10) {
      this.setState({
        hours: `0${hours}`
      });
    }
    if (days < 10) {
      this.setState({
        days: `0${days}`
      });
    }

    if ((min === 0) & (sec === 0)) {
      clearInterval(this.intervalHandle);
    }
    this.secondsRemaining--;
  }
  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
  }

  render() {
    const { hours, minutes, seconds, days } = this.state;

    return (
      <>
        <div className="countdown mb-3" data-date-time={this.secondsRemaining}>
          <div className="item">
            <div className="days">{days}</div>
            <span className="days_ref">Dias</span>
          </div>
          <div className="item">
            <div className="hours">{hours}</div>
            <span className="hours_ref">Horas</span>
          </div>
          <div className="item">
            <div className="minutes">{minutes}</div>
            <span className="minutes_ref">Min</span>
          </div>
          <div className="item">
            <div className="seconds">{seconds}</div>
            <span className="seconds_ref">Seg</span>
          </div>
        </div>
      </>
    );
  }
}
export default Timer;
