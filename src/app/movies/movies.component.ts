import {Component, OnInit} from '@angular/core';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  moviesList: Array<Object>;

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit() {
    this.moviesService.getAllMovies().then(res => {
      this.moviesList = res['data'];
    });
  }

}
