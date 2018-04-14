import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CupomProvider } from '../../providers/cupom/cupom.service';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-cupons',
  templateUrl: 'cupons.html',
})
export class CuponsPage {

  loading = this.loadingCtrl.create({
    spinner : 'dots',
    content: 'Aguarde, carregando as ofertas do pacote...'      
  });

  public cupons: Observable<any>;
  private idPacote: string;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              private navParams: NavParams,
              private cupomService: CupomProvider) {
                this.loading.present();
              }

  ionViewDidLoad() {
    console.log(this.navParams.get('id'));
    
    this.cupons = this.cupomService.retrievePerPack(this.navParams.get('id')).map((dados) => {this.loading.dismiss();return dados});
  }

  obterPacote(){
    
  }
}
