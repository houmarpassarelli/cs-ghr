import { Injectable } from '@angular/core';
// import { AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';

@Injectable()
export class UsuarioService {  

  constructor(){}

  create(uid: string, dados: Object): any{
      
      // return this.db.collection('usuario').doc(uid).set(dados);
  }

}
