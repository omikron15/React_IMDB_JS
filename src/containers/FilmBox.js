import React, {Component} from "react";
import FilmList from "../components/FilmList.js"


class FilmBox extends Component{

  constructor(props){
  super(props);
  this.state = {
    data: [
      {id: 1, film: "Film 1"},
      {id: 2, film: "Film 2"},
      {id: 3, film: "Film 3"},
      {id: 4, film: "Film 4"},
      {id: 5, film: "Film 5"}
    ]
  }
}

  render() {
  return (
    <div className="film-box">
      <h2>UK Openings This Week</h2>
          <FilmList data={this.state.data} />
      <a href="">See more openings this week</a>
      <button>Get Showtimes</button>
    </div>
  )
}

}

export default FilmBox;
