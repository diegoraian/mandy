import { Component ,NgModule } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Usuario } from '../../models/usuario';
import  {LoginData} from '../../providers/loginData'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {
  usuario  = Usuario;
  testRadioResult;
  constructor(public navCtrl: NavController,public alerCtrl: AlertController,public loginService : LoginData ) {

  }

  logar(){
     //this.loginService.logar(this.usuario);
    
    // let alert =  this.alerCtrl.create();

    // alert.setTitle("Alerta Login");

    // alert.addInput({
    //   type: 'radio',
    //   label: 'red',
    //   value: 'red',
    //   checked: true
    // });

    // alert.addInput({
    //   type: 'radio',
    //   label: 'green',
    //   value: 'green',
    
    // });

    // alert.addInput({
    //   type: 'radio',
    //   label: 'blue',
    //   value: 'blue',
  
    // });

    // alert.addButton('Cancelar');

    // alert.addButton({
    //     text:'Ok',
    //     handler: data => {
    //       this.testRadioResult = data;
    //     }
    // });
    // alert.present();
    let link = "";
  //   let dados =  JSON.stringify(this.usuario);
  //  // this.http.post("",dados);
  }


  
}
