import './SortingVisualizer.css';
import {mergeSortAnim} from '../Algorithm/mergeSort.js';
import React from 'react';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  newArray() {
    const array = [];
    for (let i = 0; i < 159; i++) {
      array.push(randomIntFromInterval(5, 600));
    }
    this.setState({array});
  }

  componentDidMount() {
    this.newArray();
  }

  mergeSort() {
    const anim = mergeSortAnim(this.state.array);

    for (let i = 0; i < anim.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = anim[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? 'blue' : 'darkGray';
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 7);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = anim[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 7);
      }
    }
  }

  render() {
    const {array} = this.state;

    return (
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              height: `${value}px`,
              backgroundColor: 'darkGray',
            }}></div>
        ))}
        <button onClick={() => this.newArray()}>New Array</button>
        <button onClick={() => this.mergeSort()}>Merge Sort</button>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}