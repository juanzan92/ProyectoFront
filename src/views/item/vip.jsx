
import React from 'react';


import wraper from '../../components/Wrapper';
import VIPTitle from '../../components/VIPTitle';
import VIPItem from '../../components/VIPItem';
import { METHODS } from 'http';



class VIP extends React.Component {
    constructor(params) {
        super(params)

    

    }


    state = {
        item: {
            pictures: [],
        },
        isLoading: true,
        isError: false,
    };


    


    pagar()  {
        const preferences = null;
        const url = 'http://localhost:8080/mp/preferences/create'  //url backend
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                item_id:"1234",
                user_id:"675",
                quantity:"1"
            })

        })
            .then(response => {
                return response.json();
            })
            .then(preference => {
                console.log(preference)
                window.location.href = preference.redirect_url
            });
    }



    render() {
        return (
            <>
                <VIPTitle />
                <div class="container padding-bottom-3x mb-1">



                    <div class="col-md-6">
                    </div>
                    <div class="btn btn-lg btn-secondary" onClick={this.pagar}>
                        <a >Pagar con Mercado Pago</a>
                    </div>


                    <div class="col-md-6">
                    </div>





                </div>
            </>
        )
    }







}
export default wraper(VIP)