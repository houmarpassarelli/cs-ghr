import { Injectable } from '@angular/core';
// import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from 'angularfire2/firestore';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SegmentoProvider {

  constructor() {}
  retrieveAll(): any{
    // return this.db.collection('segmento').snapshotChanges().map((res) => {
    //   return res.map((valores) => ({sid: valores.payload.doc.id, ...valores.payload.doc.data()}));
    // });
  }
}
