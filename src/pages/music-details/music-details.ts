import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {ITunes} from '../../providers/itunes/itunes';

import {Type} from '../../models/type';

/*
  Generated class for the MusicDetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'music-details.html',
})
export class MusicDetailsPage {

  info: Type;
  songs: Type[];

  constructor(private navCtrl: NavController, navParams: NavParams, iTunes: ITunes) {

    this.info = new Type();

    let albumSuccess = album => {
      this.info = album.results[0];
      this.songs = album.results;
      this.songs.shift();
    };

    iTunes
      .getAlbum(navParams.get('id'))
      .then(albumSuccess);
  }

}
