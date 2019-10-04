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
      seller_id: this.currentActiveUser(),
      category: '',
      title: '',
      marca: '',
      modelo: '',
      color: '',
      initial_stock: -1,
      initial_price: -1,
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
      
      filesLoaded: false,
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
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    return today
  }

  changeDateFormat(inputDate){  // Expects yyyy-mm-dd
    var newdate = inputDate.split("-").reverse().join("/");
    return newdate
  }

  changeDateFormat2(inputDate){  // Expects dd/mm/yyyy
    var newdate = inputDate.split("/").reverse().join("-");
    return newdate
  }

  currentActiveUser() {
    Auth.currentAuthenticatedUser({})
      .then(user => {
        this.setState({
          seller_id: user.username.toLowerCase()
        });
        console.log(Auth.currentAuthenticatedUser());
        console.log(JSON.stringify(this.state.seller_id));
      })
      .catch(err => console.log(err));
  }

  async componentDidMount() {
    this.setState({date_created: this.getDate()});

    //this.getCategories();
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
      if (target.name == "initial_stock" || target.name == "initial_price"){
        return target.value
      }
      else{
        return target.value.toUpperCase();
      }
    }   
    if(target.type === 'date'){
      return this.changeDateFormat(target.value);
    }
    else{
        return target.value
    } 
  }
  
  getCategories() {
    const url =
      'http://proyectoback-tesis.us-west-2.elasticbeanstalk.com/catalog/categories/get_all';
    fetch(url, {
      method: 'GET',
      mode: 'no-cors'
    })
    .then(myJson => {
        console.log('KE LO KE');
        console.log(myJson);
        console.log(myJson.body);
        this.setState({
          categories: myJson
        });
      })
      .catch(e => console.log(e));
  }

  handleFileChange = (ev) => {
    this.setState({filesLoaded: true});
  }

  handleFileUpload = (ev) => {
    let allFiles = this.uploadInput.files;

    console.log(allFiles);
    console.log("allFiles length :" + allFiles.length);

    console.log("-----------------------------------")
    
    for (let i = 0; i < allFiles.length; i++) {
        console.log("Preparing upload File N°" + i);
        console.log(allFiles[i]);
        const formData = new FormData();
        formData.append('file', allFiles[i]);
      fetch('http://localhost:8080/catalog/img/upload', {
        method: "POST",
        mode: 'no-cors',
        body: formData
      })
      .then(
        response => {
          console.log("Response File N°" + i);
          console.log(response);
          console.log(response.url);
          console.log(JSON.stringify(response));
          console.log(JSON.stringify(response.url));
          
          //this.state.urlx.push(response.url());
          
          console.log("Response to Text");
          console.log(response.text());
          
          console.log("Response to JSON");
          console.log(JSON.parse(response));
          
          return response.text() ? JSON.parse(response) : null
          
          /*
          console.log("*url*");
          console.log(response.body);
          console.log(response.url);
          
          return response.json()
          */

      })
      .catch(e => console.log(e))
    }
  }

	handleSubmit(event) {
    event.preventDefault();
    this.handleAttribChange(this.state.brand, this.state.model, this.state.colour);
    console.log(JSON.stringify(this.state));
    console.log(JSON.stringify(this.state.attributes))
  }

  render() {
    return (
      <>
      <div className="page-title">
          <div className="container">
              <div className="column">
                  <h1>Publicá tu Oportunidad</h1>
              </div>
              <div className="column">
                  <ul className="breadcrumbs">	               
                      <li>	                      
                          <Link to='/'>	                       
                              <span className="navi-link"/>Home
                          </Link>	                
                      </li>	                      
                      <li className="separator">&nbsp;</li>	            
                      <li>	                      
                          <Link to='/account-profile'>	                          
                              <span className="navi-link"/>Mi Cuenta	                              
                          </Link>	                          
                      </li>	                      
                      <li className="separator">&nbsp;</li>	                      
                      <li>
                          <span className="navi-link"/>Publicar
                      </li>	                      
                  </ul>	                  
              </div>	              
            </div>
        </div>
        
        <div className="row padding-top-0.5x padding-bottom-2x">
          
          <div className="login-box col-md-6 offset-3">

            <form onSubmit={this.submitFilex}>

              <div className="form-group row">
                    <label className="col-12" htmlFor="category">Categoría</label>
                    <div className="col-8">
                      <select className="form-control" name="category" 
                          placeholder="Seleccione categoría"
                          value={this.state.category} 
                          onChange={this.handleChange}>
                          <option value="Tecnologia">Tecnologia</option>
                          <option value="Hogar">Hogar</option>
                          <option value="Maquinaria">Maquinaria</option>
                          <option value="Herramientas">Herramientas</option>
                          <option value="Construccion">Construccion</option>
                          <option value="Deportes">Deportes</option>
                          <option value="Indumentaria">Indumentaria</option>
                          <option value="Calzado">Calzado</option>
                          <option value="Accesorios">Accesorios</option>
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
                          placeholder="Termo Stanley Adventure 750ml"
                          pattern="[A-Z0-9Ñ\s]{3,40}"
                          value={this.state.title}
                          onChange={this.handleChange}
                          required/>
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
                              placeholder="100"
                              pattern="[0-9]{1,5}"
                              title="Alfanumérico. Entre 2-5 caracteres."
                              value={this.value}
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
                              value={this.value}
                              onChange={this.handleChange}  
                              required/>
                        </div>
                    </div>
                    <div className="col-4">
                      <div className="form-group input-group">
                        <label className="col-12" htmlFor="date_finished">Fecha de Cierre</label>
                        <input className="form-control" type="date" name="date_finished"
                              value={this.value} 
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
              <label className="col-2 col-form-label padding-top-1x" htmlFor="file-input">Imágenes</label>
              <div className="col-10">
                <div className="custom-file">
                  <input className="padding-top-1x" onChange={this.handleFileChange} ref={(ref) => { this.uploadInput = ref; }} name="file-input" type="file" multiple/>
                </div>
              </div>
            </div>

                

                <div className="form-group row">
                  <div className="col-8">
                      <button className="btn btn-primary" onClick={this.handleFileUpload}>PUBLICAR</button>
                  </div>
                </div>

              </form>
            </div>
            <br/>
            <label>{JSON.stringify(this.state.files)}</label>
      </div>
      <div>
        {JSON.stringify(this.state)}
      </div>
      </>
    );
  }
}

export default wrapper(FileUpload);