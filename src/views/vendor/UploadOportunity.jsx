import React from "react";
import wrapper from "../../components/Wrapper";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";

class UploadOportunity extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      category: "Tecnologia",
      vendor_username: "",
      vendor_rol: "",
      date_finished: null,
      initial_price: -1,
      in_discount: false,
      initial_stock: -1,
      description_short: "",
      description: "",
      pictures: [],
      thumbnails: [],
      attributes: [],
      dimensions: {},
      tags: null,
      marca: "",
      modelo: "",
      color: "",
      alto: -1,
      ancho: -1,
      profundidad: -1,
      peso: -1,
      filesLoaded: false,
      isButtonDisabled: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    today = dd + "/" + mm + "/" + yyyy;
    return today;
  }

  getDate(day) {
    var date = new Date();
    date.setDate(date.getDate()+day);  
    var dd = String(date.getDate()).padStart(2, "0");
    var mm = String(date.getMonth() + 1).padStart(2, "0");
    var yyyy = date.getFullYear();
    var today = `${yyyy}-${mm}-${dd}`;

    return today;
  }

  changeDateFormat(inputDate) {
    // Expects yyyy-mm-dd
    var newdate = inputDate
      .split("-")
      .reverse()
      .join("/");
    return newdate;
  }

  changeDateFormat2(inputDate) {
    // Expects dd/mm/yyyy
    var newdate = inputDate
      .split("/")
      .reverse()
      .join("-");
    return newdate;
  }

  currentActiveUser() {
    Auth.currentAuthenticatedUser({})
      .then(user => {
        this.setState({
          vendor_username: user.username.toLowerCase(),
          vendor_rol: user.attributes["custom:role"].toLowerCase()
        });
        console.log("Authenticated Vendor");
        console.log(this.state.vendor);
      })
      .catch(e => {
        console.log(e);
      });
  }

  async componentDidMount() {
    this.currentActiveUser();
  }

  setDimensions(alto, ancho, prof, peso) {
    this.state.dimensions.height = alto;
    this.state.dimensions.width = ancho;
    this.state.dimensions.depth = prof;
    this.state.dimensions.weight = peso;
  }

  setAttributes(marca, modelo, color) {
    let brand = {};
    brand.id = "Marca";
    brand.value = marca;
    this.state.attributes.push(brand);

    let model = {};
    model.id = "Modelo";
    model.value = modelo;
    this.state.attributes.push(model);

    let colour = {};
    colour.id = "Color";
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

  assignInputValue(target) {
    if (target.type === "text") {
      if (target.name == "initial_stock" || target.name == "initial_price") {
        return target.value;
      } else {
        return target.value.toUpperCase();
      }
    }
    if (target.type === "date") {
      return this.changeDateFormat(target.value);
    } else {
      return target.value;
    }
  }

  getCategories() {
    const url = "http://localhost:8080/catalog/categories/get_all";
    fetch(url, {
      method: "GET",
      mode: "no-cors"
    })
      .then(response => {
        if (!response.ok) throw new Error(response.status);
        else return response.json();
      })
      .then(myJson => {
        this.setState({
          categories: myJson
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  async iterateAllFiles(allFiles) {
    var filesLoaded = false;
    var prePicturesArray = [];
    try {
      for (let i = 0; i < allFiles.length; i++) {
        let fileParts = allFiles[i].name.split(".");
        let fileName = fileParts[0];
        let fileType = fileParts[0] + "-" + fileParts[1];
        const formData = new FormData();
        formData.append("file", allFiles[i]);
        const imgObject = await this.uploadFileToAWS(
          formData,
          fileName,
          fileType
        );
        prePicturesArray.push(imgObject);
      }
      this.setState({
        pictures: prePicturesArray
      });
      filesLoaded = true;
      return filesLoaded;
    } catch (error) {
      alert(error.message);
      throw error;
    }
  }

  uploadFileToAWS(pic, fileName, fileType) {
    const img = {};
    return new Promise(resolve => {
      fetch("http://localhost:8080/catalog/img/upload", {
        method: "POST",
        body: pic
      })
        .then(response => {
          if (!response.ok) throw new Error(response.status);
          else return response.json();
        })
        .then(response => {
          img.index = fileName;
          img.src = response.response_url;
          img.img_desc = fileType;
          resolve(img);
        })
        .catch(e => {
          console.log(e);
        });
    });
  }

  postItem = flag => {
    if (!flag) {
      alert("Files could not be uploaded!!!");
    } else {
      const jsonMap = {};
      jsonMap.end_date = new Date(this.state.date_finished);
      jsonMap.title = this.state.title;
      jsonMap.category = this.state.category;
      jsonMap.vendor_username = this.state.vendor_username;
      jsonMap.initial_price = this.state.initial_price;
      jsonMap.actual_price = this.state.initial_price;
      jsonMap.in_discount = this.state.in_discount;
      jsonMap.initial_stock = this.state.initial_stock;
      jsonMap.stock = this.state.initial_stock;
      jsonMap.description_short = this.state.description_short;
      jsonMap.description = this.state.description;
      jsonMap.pictures = this.state.pictures;
      jsonMap.thumbnails = this.state.thumbnails;
      jsonMap.attributes = this.state.attributes;
      jsonMap.dimensions = this.state.dimensions;
      jsonMap.tags = this.state.tags;

      fetch("http://localhost:8080/catalog/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonMap)
      })
        .then(response => {
          if (!response.ok) throw new Error(response.status);
          else {
            const r = window.confirm("Oportunidad cargada correctamente!!!");
            if (r) window.location.href = "/vendor-oportunities";
            return response.json();
          }
        })
        .catch(e => {
          console.log(e);
          alert("Error al cargar la Oportunidad !!!");
          window.location.reload();
        });
    }
  };

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      isButtonDisabled: true
    });
    setTimeout(() => this.setState({ isButtonDisabled: false }), 10000);
    this.setAttributes(this.state.marca, this.state.modelo, this.state.color);
    this.setDimensions(
      this.state.alto,
      this.state.ancho,
      this.state.profundidad,
      this.state.peso
    );
    let allFiles = this.uploadInput.files;
    this.iterateAllFiles(allFiles)
      .then(response => {
        this.postItem(response);
      })
      .catch(error => {
        console.log(error);
      });
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
                  <Link to="/">
                    <span className="navi-link" />
                    Home
                  </Link>
                </li>
                <li className="separator">&nbsp;</li>
                <li>
                  <Link to="/account">
                    <span className="navi-link" />
                    Mi Cuenta
                  </Link>
                </li>
                <li className="separator">&nbsp;</li>
                <li>
                  <span className="navi-link" />
                  Publicar
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row padding-top-0.5x padding-bottom-2x">
          <div className="login-box col-md-6 offset-3">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group row">
                <label className="col-12" htmlFor="category">
                  Categoría
                </label>
                <div className="col-8">
                  <select
                    className="form-control"
                    name="category"
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
                <label className="col-12" htmlFor="title">
                  Título
                </label>
                <div className="col-8">
                  <input
                    className="form-control"
                    type="text"
                    name="title"
                    placeholder="Termo Stanley Adventure 750ml"
                    pattern="[A-Z0-9Ñ\s]{3,40}"
                    value={this.state.title}
                    onChange={this.handleChange}
                    required
                  />
                  <small className="form-text text-muted">
                    Comenzá describiendo tu oportunidad. Indicá producto, marca
                    y modelo.
                  </small>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-4">
                  <div className="form-group input-group">
                    <label htmlFor="marca">Marca</label>
                    <input
                      className="form-control"
                      type="text"
                      name="marca"
                      placeholder="Stanley"
                      pattern="^[a-zA-Z0-9_-]{2,40}"
                      title="Alfanumérico. Entre 2-40 caracteres."
                      value={this.state.marca}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group input-group">
                    <label htmlFor="modelo">Modelo</label>
                    <input
                      className="form-control"
                      type="text"
                      name="modelo"
                      placeholder="Adventure 750ml"
                      pattern="[A-Z0-9Ñ\s]{1,40}"
                      title="Alfanumérico. Entre 1-40 caracteres."
                      value={this.state.modelo}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group input-group">
                    <label htmlFor="color">Color</label>
                    <input
                      className="form-control"
                      type="text"
                      name="color"
                      placeholder="Azul"
                      pattern="^[A-Z]{3,15}"
                      title="Sólo texto. Entre 2-15 caracteres."
                      value={this.state.color}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-4">
                  <div className="form-group input-group">
                    <label htmlFor="initial_stock">Unidades</label>
                    <input
                      className="form-control"
                      type="text"
                      name="initial_stock"
                      placeholder="100"
                      pattern="[0-9]{1,5}"
                      title="Alfanumérico. Entre 2-5 caracteres."
                      value={this.value}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group input-group">
                    <label htmlFor="initial_price">Precio Unitario</label>
                    <input
                      className="form-control"
                      type="text"
                      name="initial_price"
                      placeholder="$"
                      pattern="[0-9]+(\\.[0-9][0-9]?)?"
                      title="Numérico. Admite 2 decimales."
                      value={this.value}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-4">
                  <div className="form-group input-group">
                    <label className="col-12" htmlFor="date_finished">
                      Fecha de Cierre
                    </label>
                    <input
                      className="form-control"
                      type="date"
                      name="date_finished"
                      min={this.getDate(20)}
                      max={this.getDate(120)}
                      value={this.value}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>

              <h6>Dimensiones unitarias (CGS)</h6>

              <div className="form-group row pt-1">
                <div className="col-3">
                  <div className="form-group input-group">
                    <label htmlFor="alto">Alto</label>
                    <input
                      className="form-control"
                      type="number"
                      name="alto"
                      min="1"
                      max="250"
                      placeholder="cm"
                      pattern="[0-9]}"
                      title="centímetros"
                      value={this.value}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-3">
                  <div className="form-group input-group">
                    <label htmlFor="ancho">Ancho</label>
                    <input
                      className="form-control"
                      type="number"
                      name="ancho"
                      min="1"
                      max="250"
                      placeholder="cm"
                      pattern="[1-9]"
                      title="centímetros"
                      value={this.value}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-3">
                  <div className="form-group input-group">
                    <label htmlFor="profundidad">Profundidad</label>
                    <input
                      className="form-control"
                      type="number"
                      name="profundidad"
                      min="1"
                      max="250"
                      placeholder="cm"
                      pattern="[1-9]"
                      title="centímetros"
                      value={this.value}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="col-3">
                  <div className="form-group input-group">
                    <label htmlFor="peso">Peso</label>
                    <input
                      className="form-control"
                      type="number"
                      name="peso"
                      min="1"
                      max="25000"
                      placeholder="g"
                      pattern="[0-9]"
                      title="gramos"
                      value={this.value}
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              <h6>Describí tu Oportunidad</h6>

              <div className="form-group row pt-2">
                <label
                  className="col-2 col-form-label"
                  htmlFor="description_short">
                  Resumen
                </label>
                <div className="col-10">
                  <textarea
                    className="form-control"
                    name="description_short"
                    rows="3"
                    placeholder="Resumí lo esencial de tu oportunidad!"
                    value={this.state.description_short}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-2 col-form-label" htmlFor="description">
                  Descripción
                </label>
                <div className="col-10">
                  <textarea
                    className="form-control"
                    name="description"
                    rows="7"
                    placeholder="Relatá detalladamente tu oportunidad!"
                    value={this.state.description}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="form-group row">
                <label
                  className="col-2 col-form-label padding-top-1x"
                  htmlFor="file-input">
                  Imágenes
                </label>
                <div className="col-10">
                  <div className="custom-file">
                    <input
                      className="padding-top-1x"
                      ref={ref => {
                        this.uploadInput = ref;
                      }}
                      name="file-input"
                      type="file"
                      multiple
                    />
                  </div>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-8">
                  <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={this.state.isButtonDisabled}>
                    PUBLICAR
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default wrapper(UploadOportunity);
