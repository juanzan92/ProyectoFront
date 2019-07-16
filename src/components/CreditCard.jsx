import React from 'React';




class CreditCard extends React.Component {

    state = {
        card: {
            number: "xxxx-xxxx-xxxx",
            name: "xxxxxxx",
            cvc: "xxx",
            expirationDate: "xx/xx",

        }

    }


    handleChange = (e) => {
        if (["name", "age"].includes(e.target.className) ) {
          let cats = [...this.state.cats]
          cats[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
          this.setState({ cats }, () => console.log(this.state.cats))
        } else {
          this.setState({ [e.target.name]: e.target.value.toUpperCase() })
        }
      }

      handleSubmit = (e) => { e.preventDefault() }



    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab">
                    <h6><a href="#card" data-toggle="collapse"><i className="icon-columns"></i>Pago con tarjeta de Credito </a></h6>
                </div>
                <div className="collapse show" id="card" data-parent="#accordion" role="tabpanel">
                    <div className="card-body">
                        <p>Aceptamos las siguientes las siguientes targjetas: &nbsp;<img className="d-inline-block align-middle" src="img/credit-cards.png" style={{ width: "120px" }} alt="Cerdit Cards" ></img></p>
                        <div className="card-wrapper" data-jp-card-initialized="true">
                            <div className="jp-card-container">
                                <div className="jp-card">
                                    <div className="jp-card-front">
                                        <div className="jp-card-logo jp-card-elo">
                                            <div className="e">e</div>
                                            <div className="l">l</div>
                                            <div className="o">o</div>
                                        </div>
                                        <div className="jp-card-logo jp-card-visa">visa</div>
                                        <div className="jp-card-logo jp-card-mastercard">MasterCard</div>
                                        <div className="jp-card-logo jp-card-maestro">Maestro</div>
                                        <div className="jp-card-logo jp-card-amex"></div>
                                        <div className="jp-card-logo jp-card-discover">discover</div>
                                        <div className="jp-card-logo jp-card-dinersclub"></div>
                                        <div className="jp-card-logo jp-card-dankort">
                                            <div className="dk"><div className="d"></div>
                                                <div className="k"></div>
                                            </div>
                                        </div>
                                        <div className="jp-card-lower"><div className="jp-card-shiny"></div>
                                            <div className="jp-card-cvc jp-card-display">•••</div>
                                            <div className="jp-card-number jp-card-display">•••• •••• •••• ••••</div>
                                            <div className="jp-card-name jp-card-display">Full Name</div>
                                            <div className="jp-card-expiry jp-card-display" data-before="month/year" data-after="validthru">••/••</div>
                                        </div></div>
                                    <div className="jp-card-back">
                                        <div className="jp-card-bar"></div>
                                        <div className="jp-card-cvc jp-card-display">•••</div>
                                        <div className="jp-card-shiny"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form className="interactive-credit-card row">
                            <div className="form-group col-sm-6">
                                <input className="form-control" type="text" name="number" placeholder="Card Number" required=""></input>
                            </div>
                            <div className="form-group col-sm-6">
                                <input className="form-control" type="text" name="name" placeholder="Full Name" required=""></input>
                            </div>
                            <div className="form-group col-sm-3">
                                <input className="form-control" type="text" name="expiry" placeholder="MM/YY" required=""></input>
                            </div>
                            <div className="form-group col-sm-3">
                                <input className="form-control" type="text" name="cvc" placeholder="CVC" required=""></input>
                            </div>
                            <div className="col-sm-6">
                                <button className="btn btn-outline-primary btn-block margin-top-none" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )

    }
}