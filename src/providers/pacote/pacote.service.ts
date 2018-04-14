import { Injectable } from '@angular/core';
// import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from 'angularfire2/firestore';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PacoteProvider {

  constructor() {}

 retrieveAll(): any{
    // return this.db.collection('pacote').snapshotChanges().map((res) => {
    //   return res.map((valores) => ({pid: valores.payload.doc.id, ...valores.payload.doc.data()}));
    // });

  }
}

