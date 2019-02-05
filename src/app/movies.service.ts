import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


const API_URL = 'http://localhost:1337/api/';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) {
  }

  getAllMovies() {
    return new Promise((resolve, reject) => {
      this.http.get(API_URL + 'movies')
        .subscribe(response => {
          resolve(response);
        }, err => {
          reject(err);
        });
    });
  }

  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return error;
  }
}
