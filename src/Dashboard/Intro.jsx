import React from 'react';

function Intro(props) {
  return (
    <div>
      <div>Total Events: {props.data.length}</div>
      <div>Events Done: {props.data.done}</div>
      <div>Events Not Done: {props.data.notdone}</div>
    </div>
  );
}

export default Intro;
