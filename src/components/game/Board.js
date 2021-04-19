import React, { Component } from 'react';

import Square from './Square'

export default class Board extends Component {
  renderSquare(props, i) {
    return (
      <Square
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(this.props, 0)}
          {this.renderSquare(this.props, 1)}
          {this.renderSquare(this.props, 2)}
        </div>
        <div className="board-row">
          {this.renderSquare(this.props, 3)}
          {this.renderSquare(this.props, 4)}
          {this.renderSquare(this.props, 5)}
        </div>
        <div className="board-row">
          {this.renderSquare(this.props, 6)}
          {this.renderSquare(this.props, 7)}
          {this.renderSquare(this.props, 8)}
        </div>
      </div>
    );
  }
}