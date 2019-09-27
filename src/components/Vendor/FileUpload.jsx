import React from "react";
import wrapper from "../Wrapper";
import { Auth } from "aws-amplify";
import axios from 'axios';
import { Link } from "react-router-dom";
import { number } from "prop-types";

class FileUpload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sellerId: this.currentActiveUser(),
      categories: null,
      category: '',
      title: '',
      marca: '',
      modelo: '',
      color: '',
      initial_stock: null,
      initial_price: null,
      description_short: '',
      description: '',
      files: null,

      pictures: [],

      attributes: [],
      
      date_created: this.getDate(),
      date_finished: null,

      in_discount: false,
      actual_price: null,
      stock: null,
      status: null,
      tags: null,
      
      url: '',
      urlx: [],
      
      isAuthenticated: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  changeDateFormat(inputDate){  // expects Y-m-d
    var newdate = inputDate.split("-").reverse().join("/");
    return newdate
  }

  currentActiveUser() {
    Auth.currentAuthenticatedUser({})
      .then(user => {
        this.setState({
          sellerId: user.username.toLowerCase()
        });
        console.log(Auth.currentAuthenticatedUser());
        console.log(JSON.stringify(this.state.sellerId));
      })
      .catch(err => console.log(err));
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }
  
  async componentDidMount() {
    try {
      if (await Auth.currentSession()) {
        this.userHasAuthenticated(true);
      }
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }

    this.setState({dateCreated: this.getDate()});
    this.fetchCategories();
  }

  handleAttribChange(marca, modelo, color) { 
 
      let brand = {};
      brand.id = 'Marca';                     
      brand.value = marca;
      this.state.attributes.push(brand);

      let model = {};
      model.id = 'Modelo';                     
      model.value = modelo;
      this.state.attributes.push(model);

      let colour = {};
      colour.id = 'Color';                     
      colour.value = color;
      this.state.attributes.push(colour);

      /*
      this.setState({
        attributes: [...this.state.attributes, ...marca]
      })
      
    }
    if (target.name=='modelo') {

      let modelo = {};
      modelo.id = 'Modelo';                     
      modelo.value = value;
      this.setState(prevState => ({
        attributes: [...prevState.attributes, modelo]
      }))
      
      this.setState({
        attributes: [...this.state.attributes, modelo]
      })

      this.setState(prevState => ({
        attributes: [...prevState.attributes, modelo]
      }))
      */

  }

  handleChange(event) { 
    const target = event.target;
    const value = this.assignInputValue(target);
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  assignInputValue(target){
    if (target.type === 'text'){
      return target.value.toUpperCase();
    }
    if(target.type === 'select-one'){
      return target.value.toLowerCase();
    }   
    if(target.type === 'date'){
      return this.changeDateFormat(target.value);
    }
    else{
        return target.value
    } 
  
    
    /*
    if (target.type === 'text'){
      if (target.name!=='userName') {
        return target.value.toUpperCase();
      }
      return target.value.toLowerCase();
    }
    


    if(target.type === 'select-one'){
      return target.value.toLowerCase();
    }
    if (target.type === 'text'){
      return target.value.toUpperCase();
    }
    */
  }

  handleSubmit(event) {
    event.preventDefault();
    this.handleAttribChange(this.state.brand, this.state.model, this.state.colour);
    console.log(JSON.stringify(this.state));
    console.log(JSON.stringify(this.state.attributes))
  }

  getCategories(){
    fetch('http://localhost:8080/catalog/categories/get_all', {
      method: "GET",
      mode: 'no-cors'
    })
    .then(data => data.json())
    .then((data) => { this.setState({ categories: data }) 
    .catch(e => console.log(e));
    }); 
  }
  
  fetchCategories() {
    const url =
      "http://localhost:8080/catalog/categories/get_all";
    fetch(url, {
      method: "GET"
    })
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        console.log(myJson);
        this.setState({
          categories: myJson
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
  }

  render() {
    return (
      <>
      <div className="row padding-top-3x padding-bottom-3x">
          <div className="login-box col-md-6 offset-3">
            <form onSubmit={this.handleSubmit}>

            <div className="form-group row">
                  <label className="col-12" htmlFor="category">Categoría</label>
                  <div className="col-8">
                    <select className="form-control" name="category" 
                        placeholder="Seleccione categoría"
                        value={this.state.category} 
                        onChange={this.handleChange}>
                      <option value="dallas">Dallas</option>
                      <option value="houston">Houston</option>
                      <option value="angeles" selected>Los Angeles</option>
                      <option value="miami">Miami</option>
                      <option value="newyork">New York</option>
                    </select>
                    <small className="form-text text-muted">
                      Indicá una categoría para tu oportunidad.
                    </small>
                  </div>
              </div>
              
              <div className="form-group row">
                  <label className="col-12" htmlFor="title">Título</label>
                  <div className="col-8">
                    <input className="form-control" type="text" name="title" 
                        placeholder="Ej: Termo Stanley Adventure 750ml"
                        pattern="[A-Z0-9Ñ\s]{3,40}"
                        value={this.state.title}
                        onChange={this.handleChange}
                        requiered/>
                    <small className="form-text text-muted">
                      Comenzá describiendo tu oportunidad. Indicá producto, marca y modelo.
                    </small>
                  </div> 
              </div>

              <div className="form-group row">
                  <div className="col-4">
                      <div className="form-group input-group">
                        <label htmlFor="marca">Marca</label>
                        <input className="form-control" type="text" name="marca"  
                            placeholder="Stanley"
                            pattern="^[a-zA-Z0-9_-]{2,40}"
                            title="Alfanumérico. Entre 2-40 caracteres."
                            value={this.state.marca}
                            onChange={this.handleChange} 
                            required/>
                      </div>
                  </div>
                  <div className="col-4">
                      <div className="form-group input-group">
                        <label htmlFor="modelo">Modelo</label>
                        <input className="form-control" type="text" name="modelo"  
                            placeholder="Adventure 750ml"
                            pattern="[A-Z0-9Ñ\s]{3,40}"
                            title="Alfanumérico. Entre 2-60 caracteres."
                            value={this.state.modelo}
                            onChange={this.handleChange}  
                            required/>
                      </div>
                  </div>
                  <div className="col-4">
                      <div className="form-group input-group">
                        <label htmlFor="color">Color</label>
                        <input className="form-control" type="text" name="color" 
                            placeholder="Azul"
                            pattern="^[A-Z]{3,15}"
                            title="Sólo texto. Entre 2-15 caracteres."
                            value={this.state.color}
                            onChange={this.handleChange}  
                            required/>
                      </div>
                  </div>
              </div>

              <div className="form-group row">
                  <div className="col-4">
                      <div className="form-group input-group">
                        <label htmlFor="initial_stock">Unidades</label>
                        <input className="form-control" type="text" name="initial_stock"  
                            placeholder="Ej: 100"
                            pattern="[0-9]{1,5}"
                            title="Alfanumérico. Entre 2-5 caracteres."
                            value={this.state.initial_stock}
                            onChange={this.handleChange} 
                            required/>
                      </div>
                  </div>
                  <div className="col-4">
                      <div className="form-group input-group">
                        <label htmlFor="initial_price">Precio Unitario</label>
                        <input className="form-control" type="text" name="initial_price"  
                            placeholder="$"
                            pattern="[0-9]+(\\.[0-9][0-9]?)?"
                            title="Numérico. Admite 2 decimales."
                            value={this.state.initial_price}
                            onChange={this.handleChange}  
                            required/>
                      </div>
                  </div>
                  <div className="col-4">
                    <div className="form-group input-group">
                      <label className="col-12" htmlFor="date_finished">Fecha de Cierre</label>
                      <input className="form-control" type="date" name="date_finished" 
                            onChange={this.handleChange}/>
                    </div>
                  </div>
              </div>

              <div className="form-group row">
                <label className="col-2 col-form-label" htmlFor="description_short">Resumen</label>
                <div className="col-10">
                  <textarea className="form-control" name="description_short" rows="3" 
                        placeholder="Resumí lo esencial de tu oportunidad!"
                        value={this.state.description_short}
                        onChange={this.handleChange}/>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-2 col-form-label" htmlFor="description">Descripción</label>
                <div className="col-10">
                  <textarea className="form-control" name="description" rows="7" 
                        placeholder="Describí detalladamente tu oportunidad!"
                        value={this.state.description}
                        onChange={this.handleChange}/>
                </div>
              </div>

              <div className="form-group row">
                  <label className="col-12" htmlFor="file_input">Imágenes</label>
                  <div className="col-8 padding-left:5px">
                    <input className="custom-file" type="file" name="file_input" 
                          multiple 
                          onChange={this.handleFileUpload}/>
                    <label className="custom-file-label" htmlFor="file_input">Choose files...</label>
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
          <label>{JSON.stringify(this.state)}</label>
      </div>
      </>
    );
  }
}

export default wrapper(FileUpload);
