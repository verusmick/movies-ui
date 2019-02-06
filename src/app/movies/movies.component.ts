import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  moviesList: Array<Object>;
  searchStr: string;
  genreFilter: '';
  ratingFilter: '';
  constructor(private moviesService: MoviesService) {
  }

  ngOnInit() {
    this.moviesService.getAllMovies().then(res => {
      this.moviesList = res['data'];
    });
  }

  clearSearchText() {
    this.searchStr = '';
  }

  // filterForGenre(event){
  //   console.log(event)
  //
  // }
}
