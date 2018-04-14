import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioService } from '../../providers/usuario/usuario.service';
import { AutenticacaoService } from '../../providers/autenticacao/autenticacao.service';
// import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { PacotesPage } from './../pacotes/pacotes';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
  providers : [UsuarioService]
})
export class CadastroPage {

  private register : FormGroup;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private formBuilder : FormBuilder,
              public loadingCtrl: LoadingController,
              public alertaCtrl: AlertController,
              private usuarioService : UsuarioService,
              private authService: AutenticacaoService) {

    let emailRegex = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    this.register = this.formBuilder.group({
      nome : ['', Validators.required],
      sobrenome : [''],
      email : ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])],      
      senha : ['', [Validators.required, Validators.minLength(6)]],      
      repeat : ['', [Validators.required, Validators.minLength(6)]]      
    });
  }

  private registerForm(){


    let loading = this.loadingCtrl.create({
      spinner : 'dots',
      content: 'Aguarde, estamos concluindo seu cadastro...'
    });

    let formData = this.register.value;   
    
    if(this.register.valid){
      
      if(formData.senha === formData.repeat){       
        
         loading.present();

        this.authService.createCommonUser({email:formData.email, senha:formData.senha}).then((authres) => {

          delete formData.senha;
          delete formData.repeat;
          
          this.usuarioService.create(authres.uid, formData).then(response => {
            loading.dismiss();
            this.navCtrl.setRoot(PacotesPage);
          }, reject => {
            loading.dismiss();
            this.alerta('Não Realizado','Não foi possível realizar seu cadastro. Por favor contate o suporte.','Voltar','login');
          }).catch(error => {
            loading.dismiss();
            this.alerta('Não Realizado','Não foi possível realizar seu cadastro. Por favor contate o suporte.','Voltar','login');
          });

        }).catch((error) => {
          loading.dismiss();
          switch(error.code){
            case 'auth/email-already-in-use':this.alerta('Email indisponível','Esse email já esta sendo utilizado. Por favor digite outro.','Voltar','fechar');break;
            case 'auth/invalid-email':this.alerta('Email inválido','O email inserido é inválido! Verifique o email e tente novamente.','Voltar','fechar');break;
            case 'auth/operation-not-allowed':this.alerta('Método desabilitado','Novos usuários via email e senha desabilitados. Por favor tente outro método.','Voltar','login');break;
            case 'auth/weak-password':this.alerta('Senha inválida','A senhas inserida é muito fraca. Por favor digite uma senha mais forte.','Voltar','fechar');
          }
        });
        
      }
      else{
        this.alerta('Senha inválida','As senha inseridas são diferentes! Confime sua senha.','Voltar','fechar');
      }
    }
    else{
        this.alerta('Campos inválidos','Um ou mais campos não estão corretos. Por favor verifique os campos.','Voltar','fechar');
    }
  }

  alerta(titulo: string, subtitulo: string, btnTitle: string, retorno: string) : any{

    let alert = this.alertaCtrl.create({
      title: titulo,
      subTitle : subtitulo,
      buttons:[{
        text: btnTitle,
        handler : () =>{
          if(retorno === 'login') this.navCtrl.setRoot(LoginPage);
          else if(retorno === 'fechar') return true;
        }
      }]
    });
    alert.present();
  }

}
