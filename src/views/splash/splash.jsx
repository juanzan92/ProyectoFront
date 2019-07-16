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

    parse_query_string(query) {
        var vars = query.split("&");
        var query_string = {};
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            var key = decodeURIComponent(pair[0]);
            var value = decodeURIComponent(pair[1]);
            // If first entry with this name
            if (typeof query_string[key] === "undefined") {
                query_string[key] = decodeURIComponent(value);
                // If second entry with this name
            } else if (typeof query_string[key] === "string") {
                var arr = [query_string[key], decodeURIComponent(value)];
                query_string[key] = arr;
                // If third or later entry with this name
            } else {
                query_string[key].push(decodeURIComponent(value));
            }
        }
        return query_string;
    }

    getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
            vars[key] = value;
        });
        return vars;
    }

    sendCode() {
        const authCode = this.getUrlVars()["code"];
        console.log(authCode);

        fetch('http://localhost:8080/mp/users/marketplace_auth?code=' + authCode, {
            method: 'POST'
        }).then(
            function () {
                this.redirectToHome();
            }).catch(function (e) {
                console.log(e)
            })
    }

    componentDidMount() {
        this.sendCode();
    }
}

export default Splash