import React from 'react';

function Intro(props) {
  return (
    <div>
      <div>Total Events: {props.data.total}</div>
      <div>Events Open: {props.data.open}</div>
    </div>
  );
}

export default Intro;