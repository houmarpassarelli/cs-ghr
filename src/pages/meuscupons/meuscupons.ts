// import { AngularFirestore } from 'angularfire2/firestore';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
// import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';


import { HomePage } from './../home/home';
import { CupomProvider } from './../../providers/cupom/cupom.service';

import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-meuscupons',
  templateUrl: 'meuscupons.html',
})
export class MeuscuponsPage {

  public cupons:any;

  loading = this.loadingCtrl.create({
    spinner : 'dots',
    content: 'Aguarde, carregando as ofertas do pacote...'      
  });

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public cupomService: CupomProvider,
              // private auth: AngularFireAuth,
              public loadingCtrl: LoadingController,
              /*public db : AngularFirestore*/) {
                this.loading.present();
              }

  ionViewDidLoad() {
    this.cupomService.retrievePerUser(firebase.auth().currentUser.uid).then((response) => {
      this.cupons = response;
      this.loading.dismiss();
    });
  }

  voltarHome(): void{
    this.navCtrl.setRoot(HomePage);
  }

  clickitem(dados: any): void{
    console.log(dados);
  }

}
