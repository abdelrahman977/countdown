import React , { Component } from 'react'
import * as moment from 'moment'
import DateTimePicker from 'react-datetime-picker';
import Timer from './Timer'


class Count extends Component{
    constructor(){
        super()
        this.state = {
            /* Initializing the two dates in the state and the countdown*/
            date1: new Date("2020-1-1"),
            date2: new Date("2020-1-1"),
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
    calculateTime = () => {
        const date1 = moment(this.state.date1) /* parsing first date using moment */
        const date2 = moment(this.state.date2) /* parsing second date using moment */
        const totalSeconds = date2.diff(date1,'seconds') /* using moment to calculate total Seconds */
        if(totalSeconds < 0)
           return  /* return zeros if the "From" date was later than "To" date */
        return totalSeconds
        
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
                </div>
                 {/* Passing calculated time to Timer props*/}
                <Timer time={this.calculateTime()} /> 
            </div>
        )       
    }
}

export default Count