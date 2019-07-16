//Ivar es el cliente que arma la query para cada servicio

//imports
import Ragnar from '../../service/apiService';
import { async } from 'q';
import Amplify from 'aws-amplify';
import config from '../../config';

//instancia service
const ragnar = new Ragnar();

//backend
const urlBack = "http://proyectoback-tesis.us-west-2.elasticbeanstalk.com/poc/service";


//cognito
//todos los parametros para armar la query 
const urlCognito = "";


export function makePOCBack() {

    const res = ragnar.makePOC(urlBack);

}

//async se usa cuando se devuelve una promesa
//podes utilizar async antes de la funcion o .then() en el fetch
//estoy probando ambos metodos
export async function authCognito(data) {
    

    const res = ragnar.makeCognitoPOC(data, urlCognito);
}