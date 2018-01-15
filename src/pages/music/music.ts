import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {ITunes} from '../../providers/itunes/itunes';

import {Type} from '../../models/type';

// Import User's Details Page
import {MusicDetailsPage} from '../music-details/music-details';

/*
  Generated class for the MusicPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: './music.html'
})
export class MusicPage {

  albums: Type[];

  constructor(public nav: NavController, private iTunes: ITunes) {
    this.albums = [];
  }

  // Navigate to album details page with the id as a parameter
  goToDetails(event, id) {
    this.nav.push(MusicDetailsPage, {
      id: id
    });
  }

  // Search for albums
  // Handle input event from search bar
  search(searchTerm) {
    let term = searchTerm.target.value;
    console.log(`term: ${term}`);

    // We will only perform the search if we have 3 or more characters
    if (term === undefined || term.trim() == '' || term.trim().length < 3) {
      this.albums = [];
    } else {

      let albumsSuccess = albums => {
        console.log(albums);
        this.albums = albums.results;
      };

      this.iTunes
        .getAlbums(term)
        .then(albumsSuccess);
    }
  }

}
