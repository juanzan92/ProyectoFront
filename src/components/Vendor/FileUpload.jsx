import React from "react";
import wrapper from "../Wrapper";
import axios from 'axios';
import { Link } from "react-router-dom";
import { number } from "prop-types";

class FileUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      category: "",
      sellerId: "",
      price: null,
      inDiscount: false,
      initialStock: null,
      description: "",
      descriptionShort: "",
      pictures: [],
      attributes: [],
      tags: [],
      dateCreated: null,      
      files: null,
      url: '',
      urlx: []
    };
  }

  //funcion que reciba todas las llamadas del promise all

  getDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = dd + '/' + mm + '/' + yyyy;
    return today
  }

  componentDidMount() {
    this.setState({dateCreated: this.getDate()});
  }

  assignInputValue(target){
    if (target.type === 'email'){
      if (target.name!=='userEmail') {
        document.getElementById('userEmailConf').pattern = this.state.userEmail;
      }
      return target.value.toLowerCase(); 
    }
    if (target.type === 'password'){
      if (target.name!=='userPw') {
        document.getElementById('userPwConf').pattern = this.state.userPw;
      }
      return target.value; 
    }
    if (target.type === 'text'){
      if (target.name!=='userName') {
        return target.value.toUpperCase();
      }
      return target.value.toLowerCase();
    }

    if(target.type === 'select-one'){
      return target.value.toLowerCase();
    }
  }

  handleChange(event) { 
    const target = event.target;
    const value = this.assignInputValue(target);
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.signUp(this.state.userName, this.state.userPw, 
      this.state.userEmail, this.state.userRol, this.state.userNombres, 
      this.state.userApellidos, this.state.userDni, this.state.userPhone,
      this.state.userAddCalle, this.state.userAddNum, this.state.userAddCp);
      var confirm = window.confirm("Se ha enviado un enlace de verificación a su casilla de correo.\n¡Confirme su usuario e inicie sesión!");
      if (confirm == true) {
        window.location.href = "/signin";
      } else {
        window.location.href = "/";
      }
  }

  getCategories() {
    const url = "http://localhost:8080/catalog/categories/get_all";
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        console.log(myJson);
        this.setState({
          categories: myJson,
          isLoading: false
        });
      })
      .catch(e => console.log(e));
  }

  submitFile = (event) => {
    event.preventDefault();
    //console.log(this.state.files);
    console.log(this.state.files[0]);
    const url = 'http://localhost:8080/catalog/img/upload';
    /*for (const f in this.state.file){
      var body = {
        file: f
      }
      */
    const formData = new FormData();
    formData.append('file', this.state.files[0]);
    //console.log(formData);
    fetch(url, {
        method: "POST",
        mode: 'no-cors',
        //headers: {'Content-Type':'multipart/form-data'},
        body: formData
        //antes estaba como body: {'file': formData},
      })
        .then(
          response => {
            //console.log(JSON.parse(response));
            console.log(response);
            console.log(response.data.url);
            /*
            var returnData = response.data.returnData;
            console.log(returnData);
            var signedRequest = returnData.signedRequest;
            console.log(signedRequest);
            var urlx = returnData.url;
            console.log(urlx);
            this.setState({url: urlx});
            console.log(this.state.url);
            */
            //console.log("Recieved a signed request " + signedRequest + "\bURL\b" + urlx)
            //return response.json();
          } 
        )
        .catch(e => console.log(e));

        //console.log(this.state.url)
  }

  handleFileUpload = (event) => {
    this.setState({files: event.target.files});
    console.log(this.state.dateCreated)
  }

  render() {
    return (
      <>
      <div className="row padding-top-3x padding-bottom-3x">
          <div className="login-box col-md-6 offset-3">
            <form onSubmit={this.submitFile}>

            <div className="form-group row">
                  <label className="col-12" htmlFor="category">Categoría</label>
                  <div className="col-8">
                    <select className="form-control" id="category" placeholder="Seleccione categorías">
                      <option value="Dallas">Dallas</option>
                      <option value="Houston">Houston</option>
                      <option value="Los Angeles">Los Angeles</option>
                      <option value="Miami">Miami</option>
                      <option value="New York">New York</option>
                    </select>
                    <small className="form-text text-muted">
                      Indicá una categoría para tu oportunidad.
                    </small>
                  </div>
              </div>
              
              <div className="form-group row">
                  <label className="col-12" htmlFor="title">Título</label>
                  <div className="col-8">
                    <input className="form-control" type="text" id="title" placeholder="Ej: Termo Stanley Classic 750ml"/>
                    <small className="form-text text-muted">
                      Comenzá describiendo tu oportunidad. Indicá producto, marca y modelo.
                    </small>
                  </div> 
              </div>

              <div className="form-group row">
                  <label className="col-12" htmlFor="title">Imágenes</label>
                  <div className="col-8 padding-left:5px">
                  <input className="custom-file" type="file" id="file-input" multiple onChange={this.handleFileUpload}/>
                    <label className="custom-file-label" htmlFor="file-input">Choose files...</label>
                  </div> 
              </div>

              <div className="form-group row">
                <div className="col-8">
                    <button type='submit' className="btn btn-primary">PUBLICAR</button>
                </div>
              </div>

            </form>
          </div>
          <br/>
          <label>{JSON.stringify(this.state.files)}</label>
      </div>
      </>
    );
  }
}

export default wrapper(FileUpload);
