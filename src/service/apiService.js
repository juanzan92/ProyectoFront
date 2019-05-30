
const urlBack = "http://proyectoback-tesis.us-west-2.elasticbeanstalk.com/poc/service";

class Ragnar {

    makePOC = () => {
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

}

export default Ragnar;