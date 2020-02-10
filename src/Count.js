import React , { Component } from 'react'
import * as moment from 'moment'
import DateTimePicker from 'react-datetime-picker';



class Count extends Component{
    constructor(){
        super()
        this.state = {
            /* Initializing the two dates in the state and the countdown*/
            date1: new Date("2020-1-1"),
            date2: new Date("2010-1-1"),
            countdown: 0
        }
      
    }    
    /* updating the date1 when changing the first date picker */
    updateDate1 = date => {
        this.setState({
            date1: date
        });
      };
     /* updating the date2 when changing the second date picker */
     updateDate2 = date => {
        this.setState({
            date2: date
        });
      };

     /* Calculating the difference between the dates */
    countdown() {
        const date1 = moment(this.state.date1) /* parsing first date using moment */
        const date2 = moment(this.state.date2) /* parsing second date using moment */
        const totalHours = date2.diff(date1,'hours') /* using moment to calculate total hours */
        const remainingMinutes = date2.diff(date1,'minutes') - (totalHours * 60)  /* using moment to calculate remaining minutes */
        this.setState({
            countdown: totalHours  + " Hour/s and " + remainingMinutes + " Minute/s" 
        });
    }   
    render(){
        return(
            <div>
                {/* First datepicker */}
                <div>
                    From:&nbsp;
                    <DateTimePicker
                     onChange={this.updateDate1}
                     value={this.state.date1}
                     />
                </div>
                {/* second datepicker */}
                <div>
                    To:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <DateTimePicker
                     onChange={this.updateDate2}
                     value={this.state.date2}
                     />
                {/* countdown button */}
                </div>
                <button onClick={() => this.countdown()}>Calculate countdown</button>
                <h1>{this.state.countdown}</h1>
            </div>
        )       
    }
}

export default Count