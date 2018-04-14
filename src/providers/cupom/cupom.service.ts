import { DocumentData } from '@firebase/firestore-types';
import { Injectable, AnimationKeyframe } from '@angular/core';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Storage } from '@ionic/storage';

// import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { combineLatest } from 'rxjs/observable/combineLatest';

import * as firebase from 'firebase';
import 'firebase/firestore';
import { Events } from 'ionic-angular';

// import * as fbadmin from "firebase-admin";

@Injectable()
export class CupomProvider {

  // public sqlQuery : SQLiteObject;
  private db = firebase.firestore();

  constructor(private ionStorage: Storage, private evt : Events) {
    // this.sqlite.create({
    //   name: 'csghr.db',
    //   location: 'default'
    // }).then(() => {
    //   this.sqlQuery.executeSql('CREATE TABLE IF NOT EXISTS cupons(id INTEGER PRIMARY KEY, cid TEXT, titulo TEXT, pacote_id TEXT, categoria TEXT, estabelecimento TEXT, segmento TEXT)', {})
    // });
  }

  retrieveAllnStore(): void{



    // return this.db.collection('cupom').snapshotChanges().map((res) => {
    //   return res.map((valores) => ({cid: valores.payload.doc.id, ...valores.payload.doc.data()}));
    // });
    // let sqlQuery: SQLiteObject;
    // let cupons: Array<any> = [];

    // this.sqlite.create()


    // this.db.collection('cupom').snapshotChanges().map((res) => {
    //   res.map((valores) => {
    //     this.sqlQuery.executeSql('INSERT INTO cupons VALUES(?,?,?,?,?,?)',
    //     [
    //       valores.payload.doc.id,
    //       valores.payload.doc.data().titulo,
    //       valores.payload.doc.data().pacote,
    //       valores.payload.doc.data().categoria,
    //       valores.payload.doc.data().estabelecimento,
    //       valores.payload.doc.data().segmento
    //     ]);
    //   });
    // });

  }

  retrievePerPack(pid: string): any{


    // return this.db.collection('cupom', ref => ref.where('pacote','==', pid).orderBy('titulo')).snapshotChanges().map((res) => {
    //   return res.map((valores => ({cid: valores.payload.doc.id, ...valores.payload.doc.data()})));
    // });
  }

  retrievePerUser(uid: string): Promise<any>{


    // let cupons: Array<any> = [];
    // let usercupons: Array<any> = [];
    let combine: Array<any> = [];
 

    // this.ionStorage.clear();
  // this.evt.subscribe("aguardar", (data)=> {
 //aqui adiciona
  // })

  let usercuponsid = this.db.collection('usuario').doc(uid).collection('cupom').get().then((response) =>{
    return response.docs.map((dados) => ({id: dados.id, ...dados.data()}));
  });

  let cuponsid = this.db.collection('cupom').get().then((response) => {
    return response.docs.map((dados) => ({id: dados.id, ...dados.data()}));
  });

  Promise.all([usercuponsid, cuponsid]).then((response) => {
    
    // res.forEach(item=>{      
    //   item.forEach(cp => {
    //     combine.push(Object.keys(cp).map(a => ({[a]:cp[a]})));
    //   });
    // });

    // response[0].forEach(user =>{      
    //   usercupons.push(Object.keys(user).map(key => ({[key]: user[key]})))
    // });

    // response[1].forEach(generic => {
    //   cupons.push(Object.keys(generic).map(key => ({[key]: generic[key]})));
    // });

    response[0].forEach(user => {
      response[1].forEach(cupom => {
        if(user.id == cupom.id){
          combine.push({...user, ...cupom});
        }
      })
    });

    

    // this.ionStorage.set('meuscupons', JSON.stringify(res[0]));

    // console.log(combine);
  });

  return Promise.resolve(combine);
}

retrieveAllOffline(): any{
  }



  setToStorage() : any {

  }

  readFromStorage(uid: string): Promise<any>{
  return  this.ionStorage.get('meuscupons');
  }

  readAllFromStorage(): any{
    this.ionStorage.forEach((value: string, key: string, interatorNumber: Number) => {
      console.log(key);
    })
  }
}

export class Cupons {
  categoria: string;
  estabelecimento: string;
  pacote: string;
  segmento: string;
  titulo: string;
}

export class UserCupons{
  cid: string;
  QRhash: string;
  QRPath: string;
  data: Cupons;
}
