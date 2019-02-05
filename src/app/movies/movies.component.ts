import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getAllMovies().then(Movies => {
      console.log('Movies', Movies);
    });
  }

}
