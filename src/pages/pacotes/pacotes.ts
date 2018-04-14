import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { PacoteProvider } from './../../providers/pacote/pacote.service';
import { CuponsPage } from '../cupons/cupons';
import 'rxjs/operators/map';
import { CupomProvider } from '../../providers/cupom/cupom.service';

@IonicPage()
@Component({
  selector: 'page-pacotes',
  templateUrl: 'pacotes.html'
})
export class PacotesPage {

  loading = this.loadingCtrl.create({
    spinner : 'dots',
    content: 'Aguarde, carregando os pacotes disponíveis...'      
  });

  public pacotes: Observable<any>;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              private pacoteService: PacoteProvider,
              public cupomService: CupomProvider) {
    
              this.loading.present();

              this.cupomService.retrieveAllnStore();

  }

  ionViewDidLoad(){
    this.pacotes = this.pacoteService.retrieveAll().map((dados) => { this.loading.dismiss();return dados;});

    this.cupomService.retrieveAllOffline().then(res => {console.log(res)});

    // console.log(this.cupomService.retrieveAllOffline());
  }


  verPacote(id: string): void{
    this.navCtrl.push(CuponsPage, {id: id});
  }

  goHome(): void{
    this.navCtrl.setRoot(HomePage);
  }
}
