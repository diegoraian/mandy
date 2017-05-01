import {Injectable} from '@angular/core';
import { Http }  from '@angular/http';
import  {Usuario} from '../models/usuario';


@Injectable()

export class LoginData{

    constructor(public http:Http){
        console.log("Olá login data Provider");

    }

    logar(usuario: Usuario){
        let dados =  JSON.stringify(usuario);
        this.http.post("",dados);
    }


}