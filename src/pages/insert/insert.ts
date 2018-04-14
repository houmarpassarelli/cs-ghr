// import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
// import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from 'angularfire2/firestore';
import { PacoteProvider } from '../../providers/pacote/pacote.service';
import { CupomProvider } from '../../providers/cupom/cupom.service';
import { EstabelecimentoProvider } from './../../providers/estabelecimento/estabelecimento.service';
import { SegmentoProvider } from './../../providers/segmento/segmento.service';
import { CategoriaProvider } from './../../providers/categoria/categoria.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'page-insert',
  templateUrl: 'insert.html'
})
export class InsertPage {

  public pacote: any = {};
  public estabelecimento: any = {};
  public cupom: any = {};
  public segmento: any = {};
  public categoria: any = {};
  public categorias: Observable<any>;
  public segmentos: Observable<any>;
  public pacotes: Observable<any>;
  public estabelecimentos: Observable<any>;
  // public pacoteCol : AngularFirestoreCollection<Pacotes>;
  // public pacotes: Observable<Pacotes[]>;
  // public estabelecimentosCol: AngularFirestoreCollection<Estabelecimentos>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams, 
              /*public db: AngularFireDatabase*/
              // public auth: AngularFireAuth,
              // public db: AngularFirestore,
              private pacoteService: PacoteProvider,
              private cupomService: CupomProvider,
              private estabelecimentoService: EstabelecimentoProvider,
              private segmentoService: SegmentoProvider,
              private categoriaService: CategoriaProvider) {

                this.pacotes = this.pacoteService.retrieveAll();
                this.estabelecimentos = this.estabelecimentoService.retrieveAll();
                this.segmentos = this.segmentoService.retrieveAll();
                this.categorias = this.categoriaService.retrieveAll();

                console.log(this.pacotes);
                // this.pacoteCol = this.db.collection('pacote');
                // this.pacotes = this.pacoteCol.snapshotChanges().map((result) =>{
                  
                //   return result.map(valores =>{
                //     return null;
                //   });
                 
                  
                //   // return null;

                // });
              }
  ionViewDidLoad(): void{
    // console.log(this.auth.auth.currentUser);
  }

  inserirPacote(): void{
    // this.db.list(`pacote`).push(this.pacote);
    // this.db.collection('pacote').add(this.pacote);
  }

  inserirCupom(): void{
    // this.db.collection('cupom').add(this.cupom).then((res) =>{
    //   console.log('Sucesso',res);
    // }).catch((error) => {
    //   console.log('Erro', error);
    // });
    // console.log(this.cupom);
  }

  inserirSegmento(): void{
    console.log(this.segmento);
    // this.db.collection('segmento').add(this.segmento);
  }

  inserirCategoria(): void{
    console.log(this.categoria);
    // this.db.collection('categoria').add(this.categoria);
  }

  inserirEstabelecimento():void{
    // this.db.collection('estabelecimento').add(this.estabelecimento);
    console.log(this.estabelecimento);
  }

  pacoteclick(valor): void{
    console.log(valor);
  }
}
