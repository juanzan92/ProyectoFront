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
      title: '',
      category: 'Tecnologia',
      vendor: [],
      vendor_username: '',
      vendor_rol: '',
      date_finished: null,
      initial_price: -1,
      in_discount: false,
      initial_stock: -1,
      description_short: '',
      description: '',
      pictures: [],
      thumbnails: [],
      attributes: [],
      dimensions: {},
      tags: null,

      map: [],
      url: 'https://s-market-images.s3.amazonaws.com/1570915087753-logo-smarket.png',
      urlx: '',

      marca: '',
      modelo: '',
      color: '',

      alto: -1,
      ancho: -1,
      profundidad: -1,
      peso: -1,

      filesLoaded: false,
      isAuthenticated: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

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
          vendor: user.attributes,
          vendor_username: user.username.toLowerCase(),
          vendor_rol: user.attributes["custom:role"]
        });
        console.log("Authenticated User FileUpload");
        console.log(this.state.vendor)
      })
      .catch(err => console.log(err));
  }

  async componentDidMount() {
    console.log("LOGUEANDO PARENT PROPS");
    console.log(this.props);
    this.currentActiveUser();
    //console.log(this.state.vendor_username)
    //this.setState({date_created: this.getDate()});
  }

  setDimensions(alto, ancho, prof, peso) {
    this.state.dimensions.height = alto;
    this.state.dimensions.width = ancho;
    this.state.dimensions.depth = prof;
    this.state.dimensions.weight = peso;
  }

  setAttributes(marca, modelo, color) { 
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
    this.state.attributes.push(colour)
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

  async handleFileUpload(data, i, urls){
    try {
      fetch('http://localhost:8080/catalog/img/upload', {
        method: "POST",
        body: data
      })
      .then(response =>{
        return response.json()
      })
      .then(
        response => {
          //var urlx = response.response_url;
          //this.setState({url: response.response_url});
          //this.setState({url: response.response_url});
          console.log("Response file N°" + i);
          //console.log(response);
          console.log(response.response_url);
          console.log("Pusheanding uri N°" + i)
          urls.push(response.response_url);
          /*this.setState({
            urlx: response.response_url
          })*/
          //console.log(this.state.urlx)
          //return response.response_url
      })
      .catch(e => console.log(e))
    }
    catch (error) {
      alert(error.message)
    }
  }

  postItem = (ev) => {
    fetch('http://localhost:8080/catalog/items', {
      method: "POST",

      body: JSON.stringify(this.state.map)
    })
    .then(response =>{
      return response.json()
    })
    .then(
      myJson => {
        console.log("Post Item Response");
        //console.log(response);
        console.log(myJson);
    })
    .catch(e => console.log(e))
  }

	handleSubmit(event) {
    
    event.preventDefault();

    var uris = [];
    //console.log("Urlx");
    //console.log(this.state.urlx);

    this.setAttributes(this.state.marca, this.state.modelo, this.state.color);    
    console.log("*attributes* []")
    console.log(JSON.stringify(this.state.attributes));

    /*this.setState({
      actual_price: this.state.initial_price,
      stock: this.state.initial_stock
    });*/

    this.setDimensions(this.state.alto, this.state.ancho, this.state.alto, this.state.peso);

    let allFiles = this.uploadInput.files;
    
    for (let i = 0; i < allFiles.length; i++) {

        let fileParts = allFiles[i].name.split('.');
        let fileName = fileParts[0];
        let fileType = fileParts[0] + "-" + fileParts[1];
        
        console.log("Uploading file N°" + i);
        
        const formData = new FormData();
        formData.append('file', allFiles[i]);

        this.handleFileUpload(formData, i, uris);
        
        const img = {};
        img.index = fileName;
        img.src = uris[i];
        img.img_desc = fileType;    

        this.state.pictures.push(img)
    }

    console.log("*this.state.pictures* []");
    console.log(JSON.stringify(this.state.pictures));

    console.log("¡¡¡URLs WEON!!!");
    console.log(uris);

    const mapp = {};
    mapp.end_date = this.state.date_finished;
    mapp.title = this.state.title;
    mapp.category = this.state.category;
    mapp.vendor_username = this.state.vendor_username;
    mapp.initial_price = this.state.initial_price;
    mapp.actual_price = this.state.initial_price;
    mapp.in_discount = this.state.in_discount;
    mapp.initial_stock = this.state.initial_stock;
    mapp.stock = this.state.initial_stock;
    mapp.description_short = this.state.description_short;
    mapp.description = this.state.description;
    mapp.pictures = this.state.pictures;
    mapp.thumbnails = this.state.thumbnails;
    mapp.attributes = this.state.attributes;
    mapp.dimensions = this.state.dimensions;
    mapp.tags = this.state.tags;

    console.log("*mapp* {}")
    console.log(JSON.stringify(mapp));

    fetch('http://localhost:8080/catalog/items', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(mapp)
    })
    .then(response =>{
      return response.json()
    })
    .then(
      myJson => {
        console.log("Post Item Response");
        console.log(myJson)
    })
    .catch(e => console.log(e))
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

            <form onSubmit={this.handleSubmit}>

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
                          <option value="Moda">Moda</option>
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

                <h6>Dimensiones unitarias (CGS)</h6> 

                <div className="form-group row pt-1">
                    <div className="col-3">
                        <div className="form-group input-group">
                          <label htmlFor="alto">Alto</label>
                          <input className="form-control" type="number" name="alto"  
                              min="1" 
                              max="250"
                              placeholder="cm"
                              pattern="[0-9]}"
                              title="centímetros"
                              value={this.value}
                              onChange={this.handleChange} 
                              required/>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="form-group input-group">
                          <label htmlFor="ancho">Ancho</label>
                          <input className="form-control" type="number" name="ancho"  
                              min="1" 
                              max="250"
                              placeholder="cm"
                              pattern="[1-9]"
                              title="centímetros"
                              value={this.value}
                              onChange={this.handleChange} 
                              required/>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="form-group input-group">
                          <label htmlFor="profundidad">Profundidad</label>
                          <input className="form-control" type="number" name="profundidad"  
                              min="1" 
                              max="250"  
                              placeholder="cm"
                              pattern="[1-9]"
                              title="centímetros"
                              value={this.value}
                              onChange={this.handleChange}  
                              required/>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="form-group input-group">
                          <label htmlFor="peso">Peso</label>
                          <input  className="form-control" type="number" name="peso"
                              min="1" 
                              max="25000"  
                              placeholder="g"
                              pattern="[0-9]"
                              title="gramos"
                              value={this.value}
                              onChange={this.handleChange} 
                              required/>
                        </div>
                    </div>
                </div>

                <h6>Describí tu Oportunidad</h6> 

                <div className="form-group row pt-2">
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
                          placeholder="Relatá detalladamente tu oportunidad!"
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
                      <button className="btn btn-primary" type="submit">PUBLICAR</button>
                  </div>
                </div>

              </form>
            </div>      
      </div>
      <div>
        {JSON.stringify(this.state)}
      </div>
      </>
    );
  }
}

export default wrapper(FileUpload);