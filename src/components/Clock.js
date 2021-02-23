import React from 'react';
import dial from '../images/dial.png';
import secondHand from '../images/second.png';
import minuteHand from '../images/minute.png';
import hourHand from '../images/hour.png';
import './Clock.css';

function Clock() {
  const [millisecond, setMillisecond] = React.useState();
  const [minute, setMinute] = React.useState();
  const [hour, setHour] = React.useState();
  const [second, setSecond] = React.useState();

  window.onload = function(){
    window.setInterval(function(){
      const now = new Date();
      setMillisecond(now.getMilliseconds());
      setSecond(now.getSeconds());
      setMinute(now.getMinutes());
      setHour(now.getHours());
    }, 1);
   };

  return (
    <div className="clock" style={{backgroundImage: `url(${dial})`}}>
      <div className="clock__type_sec" style={{
        backgroundImage: `url(${secondHand})`,
        transform: `rotate(${0.006*(second*1000 + millisecond)}deg)`}}></div>
      <div className="clock__type_min" style={{
        backgroundImage: `url(${minuteHand})`,
        transform: `rotate(${6*(minute + second/60)}deg)`}}></div>
      <div className="clock__type_hour" style={{
        backgroundImage: `url(${hourHand})`,
        transform: `rotate(${30*(hour + minute/60)}deg)`}}></div>
    </div>
  );
}

export default Clock;
