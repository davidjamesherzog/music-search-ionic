import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Jsonp} from '@angular/http';
import 'rxjs/add/operator/map';

import {Type} from '../../models/type'


/*
  Generated class for the Itunes provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ITunes {

  albums: any = null;
  album: any = null;

  constructor(public http: Http, public jsonp: Jsonp) {}

  getAlbums(search: string) {

    // don't have the users yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the users,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the users and resolve the promise with the new data.
      this.jsonp.get(`https://itunes.apple.com/search?term=${search}&entity=album&callback=JSONP_CALLBACK`)
        .map(res => <Array<Type>>(res.json()))
        .subscribe(albums => {
          this.albums = albums;
          resolve(this.albums);
        });
    });
  }

  getAlbum(id: number) {

    // don't have the users yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the users,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the users and resolve the promise with the new data.
      this.jsonp.get(`https://itunes.apple.com/lookup?id=${id}&entity=song&callback=JSONP_CALLBACK`)
        .map(res => <Array<Type>>(res.json()))
        .subscribe(album => {
          this.album = album;
          resolve(this.album);
        });
    });
  }

}

