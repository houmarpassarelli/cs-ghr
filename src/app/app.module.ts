import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { csGHR } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { UsuarioService } from '../providers/usuario/usuario.service';
import { AutenticacaoService } from '../providers/autenticacao/autenticacao.service';
import { PacotesPage } from '../pages/pacotes/pacotes';
import { MeuscuponsPage } from './../pages/meuscupons/meuscupons';
import { InsertPage } from '../pages/insert/insert';
import { PacoteProvider } from '../providers/pacote/pacote.service';
import { CupomProvider } from '../providers/cupom/cupom.service';
import { EstabelecimentoProvider } from '../providers/estabelecimento/estabelecimento.service';
import { SegmentoProvider } from '../providers/segmento/segmento.service';
import { CategoriaProvider } from '../providers/categoria/categoria.service';
import { CuponsPage } from './../pages/cupons/cupons';

import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyCMgOdCmk61yaMXEBl9jmhay-Rmg61XzhA",
  authDomain: "cupomstore-ghr.firebaseapp.com",
  databaseURL: "https://cupomstore-ghr.firebaseio.com",
  projectId: "cupomstore-ghr",
  storageBucket: "cupomstore-ghr.appspot.com",
  messagingSenderId: "565924246495"
});

@NgModule({
  declarations: [
    CadastroPage,
    csGHR,
    LoginPage,
    HomePage,
    PacotesPage,
    MeuscuponsPage,
    InsertPage,
    CuponsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(csGHR),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CadastroPage,
    csGHR,
    LoginPage,
    HomePage,
    PacotesPage,
    MeuscuponsPage,
    InsertPage,
    CuponsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioService,
    AutenticacaoService,
    PacoteProvider,
    CupomProvider,
    EstabelecimentoProvider,
    SegmentoProvider,
    CategoriaProvider
  ]
})
export class AppModule {}
