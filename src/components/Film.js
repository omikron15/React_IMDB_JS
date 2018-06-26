import React, {Component} from "react";


class Film extends Component{

  render() {
  return (
    <div className = "film">
      <p className = "film-name">{this.props.film}</p>
      <a href="">showtimes</a>
    </div>
  )
}

}

export default Film;
