import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Object;

  constructor(
    private moviesService: MoviesService,
    private router: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this.moviesService.getMovieById(id).then(response => {
        this.movie = response['data'][0];
      });
    });
  }
}
