import React from 'react'

import Spinner from '../../components/Spinner'
import CardHF from '../../components/CardHeader';

class Splash extends React.Component {

    redirectToHome() {
        window.location.href = "/"
    }

    render() {
        return (
            <>
                <div className="row center">
                    <div className="container center pt-50px">
                        <CardHF
                            header="Estamos Redirigiendo"
                            title="Cuando tu pagina esta lista seras redirigo automaticamente"
                            body=""
                            spinner={true}
                        />
                    </div>
                </div>
            </>
        )
    }

}

export default Splash