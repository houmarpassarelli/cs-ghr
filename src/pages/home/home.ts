// import { AngularFirestore } from 'angularfire2/firestore';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../providers/usuario/usuario.service';
import { LoginPage } from '../login/login';
import { Observable } from 'rxjs/Observable';
import { InsertPage } from '../insert/insert';
// import { AngularFireAuth } from 'angularfire2/auth';
import { AutenticacaoService } from '../../providers/autenticacao/autenticacao.service';
import { PacotesPage } from '../pacotes/pacotes';
import { MeuscuponsPage } from '../meuscupons/meuscupons';

import * as firebase from 'firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private usuarios : Observable<any>;

  constructor(public navCtrl: NavController, 
              // private db: AngularFireDatabase,
              // private db: AngularFirestore, 
              public usuarioService : UsuarioService, 
              public autenticacao: AutenticacaoService) {}

  ionViewWillEnter(): void{
    console.log('will enter');
  }

  ionViewDidLoad(){
    console.log('loaded');
    console.log(firebase.auth().currentUser);

    // console.log(this.auth.auth.currentUser.uid);
    // console.log(this.auth.auth.currentUser);
    // this.usuarios = this.db.list(`/usuario`).snapshotChanges().map(res => {
    //   return res.map(valores => ({key : valores.payload.key, ... valores.payload.val()}))
    // });
    // this.usuarios = this.db.collection('usuario').snapshotChanges().map(res => {
    //     return res.map(valores => ({key : valores.payload.doc.id, ... valores.payload.doc.data()}))
    //   });
  }
  ionViewDidEnter(): void{
    console.log('enter');
  }

  cadastro(): void{
    this.navCtrl.push(LoginPage);
  }

  exibir(usuario: Usuario): void{
    console.log('Usuario:', usuario);
  }

  insert(): void{
    this.navCtrl.push(InsertPage);
  }

  login(): void{
    this.navCtrl.setRoot(LoginPage);
  }

  meusCupoms(): void{
    this.navCtrl.setRoot(MeuscuponsPage);
  }

  pacotes(): void{
    this.navCtrl.push(PacotesPage);
  }

  logout(): void{
    this.autenticacao.logOut().then(() => {
      this.navCtrl.setRoot(LoginPage);
    }).catch(()=> {
      console.error('erro ao deslogar');
    })
  }
}
