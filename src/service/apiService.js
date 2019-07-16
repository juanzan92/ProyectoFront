

// la clase Ragnar hace de servicio central de la app

class Ragnar {

    async makePOC(url){
        console.log("hola")
        try {
            const response = await fetch(url)
            console.log(response)
            const json = await response.json()
            return json
        } catch (error) {
            console.log('Error:', error)
            return {}
        }
    }

    makeCognitoPOC(dataIN, urlCognito){
        
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