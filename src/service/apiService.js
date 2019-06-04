//url constantes para pegarles
const urlBack = "http://proyectoback-tesis.us-west-2.elasticbeanstalk.com/poc/service";
const urlCognito = "";


//headers
const token = "";
const idCognitoServer = "";


class Ragnar {

    makePOC(){
        console.log("hola")
        const devolver = fetch(urlBack)
            .then(response => {
                
                return response.json();
            }, null)
            .then(myJson => {
                console.log(myJson)
                return  myJson;
            }, null);
        return devolver;
    }

    makeCognitoPOC(dataIN){
        
        console.log("haciendo req a Cognito")
        fetch(urlCognito, {
            method: 'POST', // 
            body: JSON.stringify(dataIN), // data puede ser `string` u {object}!
            headers:{
              'Content-Type': 'application/json' // agregar a gusto como la sal 
            }
          }).then(res => res.json())
          .catch(error => console.error('Error:', error))
          .then(response => console.log('Success:', response));
    }

}

export default Ragnar;