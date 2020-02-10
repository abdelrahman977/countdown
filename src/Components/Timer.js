import React , { Component } from 'react'

class Timer extends Component {
    constructor(props){
        super(props)
        this.state = {
            remainingTime: this.props.time, /* Calling prop passed from parent View */
            remainingTimeText: "0:0:0",  /* Initialize Timer Text */
        }
        this.startTimer = false /* is the timer already started counting down */
        this.currentInterval = Object /* Initialize intervel for decrementing the counter */
    }

    /* Parsing and updating timer */
    updateTime = (time) => {
        var remainingHours =  (time / (60 * 60) >> 0)
        var remainingMinutes =  (time / 60 >> 0) - (remainingHours * 60)
        var remainingSeconds =  time - (remainingMinutes * 60 + (remainingHours * 60 * 60))
        this.setState({ 
            remainingTimeText: remainingHours + ':' + remainingMinutes + ':' + remainingSeconds 
        });
    }

    /* Function that will decrement the timer every one second */
    startCountdown = () => {
        if(this.startTimer === false){
            this.startTimer = true
            this.currentInterval = setInterval(() => { 
                if(this.state.remainingTime <= 0)
                {
                    clearInterval(this.currentInterval);
                }
                this.updateTime(this.state.remainingTime)  
                this.setState({ 
                    remainingTime: this.state.remainingTime - 1
                  });
                },1000)
        }
    }
    render() {
      return (
        <div>
           <h1>{this.state.remainingTimeText}</h1>
           <button onClick={() => this.startCountdown()}>Start Countdown</button>
        </div>
      );
    }
    
    /* updating timer states if the "From" or "To" dates change */
    componentWillReceiveProps(nextProps) {
        if (nextProps.time !== this.state.remainingTime) {
          this.startTimer = false
          this.setState({ 
              remainingTime: nextProps.time
            });
            this.updateTime(nextProps.time)
            clearInterval(this.currentInterval);
        }
      }
  }
  
  export default Timer;
