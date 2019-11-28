import React from "react";
import { Auth } from "aws-amplify";
import Accordion from "./Accordion";

class AccountProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      user_username: "",
      user_rol: "",
      custom_phone: null,
      custom_dni: null,
      userDynamo: {},
      userFromDynamo: {},

      userPhone: "",
      userPais: "",
      userProvincia: "",
      userCiudad: "",
      userAddCalle: "",
      userAddNum: "",
      userAddCp: "",
      userPw: "",
      userPwConf: "",

      userOldPw: "",
      userNewPw: "",
      userNewPwConf: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  currentLoggedUser() {
    Auth.currentAuthenticatedUser({})
      .then(userObject => {
        this.setState({
          user_username: userObject.username.toLowerCase(),
          user_rol: userObject.attributes["custom:role"].toLowerCase()
        });
        console.log("Username");
        console.log(this.state.user_username);
        console.log("User Role");
        console.log(this.state.user_rol);
      })
      .catch(err => console.log(err));
  }

  async retrieveUser(){
    try {
      if (await Auth.currentSession()) {
        this.currentLoggedUser();
      }
    } catch (e) {
      if (e !== "No current user") {
        console.log(e);
      }
    }
  }

  async componentDidMount() {

    const dynamoUser = await this.getUserByUsername();

    this.setState({
        userFromDynamo: dynamoUser
    })

    console.log("User From Dynamo (AccountForm)"); 
    console.log(JSON.stringify(this.state.userFromDynamo));

  }

  getUserByUsername(){
    //this.state.user.username
    //this.state.user.attributes.nickname
    return new Promise(resolve => {
      fetch("http://localhost:8080/account/users?username=" + this.state.user.nickname, {
        headers: {
          "Content-Type": "application/json"
        },
        method: "GET"
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(response.status);
          } 
          else {
            return response.json()
          }
        })
        .then(userData => {

          console.log("USER DATA ADDRESS");
          console.log(userData.address);
          resolve(userData)
          /*this.setState({
              userFromDynamo: resolve(userData)
          })*/

        })
        .catch(e => console.log(e));
    });
  }

  updatePassword(){
    Auth.currentAuthenticatedUser()
    .then(user => {
        return Auth.changePassword(user, this.state.userOldPw, this.state.userPwConf);
    })
    .then(data => console.log(data))
    .catch(err => console.log(err));
  }
  


  updateUser(){

    var body = {
      username: this.state.userDynamo.username,
      first_name: this.state.userDynamo.first_name,
      last_name: this.state.userDynamo.last_name,
      user_role: this.state.userDynamo.user_rol,
      email: this.state.userDynamo.email,
      phone: this.state.userDynamo.phone,
      dni: this.state.userDynamo.dni,
      address: {
        address_name: this.state.userDynamo.address_name,
        address_number: this.state.userDynamo.address_number,
        address_code: this.state.userDynamo.address_code,
        floor: null,
        apartment: null,
        address_country: this.state.userDynamo.address_country,
        address_region: this.state.userDynamo.address_region,
        address_city: this.state.userDynamo.address_city
      }
    };

    fetch("http://localhost:8080/account/users", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "PUT",
      body: JSON.stringify(body)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      } 
      else {
        return response.json()
      }
    })
    .then(response => {
      var c = window.confirm(
        "Usuario actualizado correctamente !!!"
      );
      if (c) {
        window.location.reload();
      }
      else {
        window.location.href = "/account";
      }
      return response
    })
    .catch(e => console.log(e));
  }


  async handlePasswordChange(event) {
    this.updatePassword();
    this.updateUser();

    document.getElementById("submit-btn").disabled = true;

    console.log("Updating user");
  }

  async handleSubmit(event) {
    this.updateUser();
    console.log("Updating user");
  }
  

  async retrieveData(){
    const dynamoUser = await this.getUserByUsername();

    this.setState({
        userFromDynamo: dynamoUser
    })

    console.log("User From Dynamo (AccountForm)"); 
    console.log(JSON.stringify(this.state.userFromDynamo));

    return dynamoUser;
  }

  render() {

    const {userFromDynamo} = this.state;
    console.log("userFromDynamo render() method")
    console.log(userFromDynamo);

      return (
        <>
          <div className="col-md-8">
  
            <div>
                <Accordion usuarioDeDynamo={userFromDynamo}/>
            </div>
              
          </div>  
        </>
      );

    
    
  }
}

export default AccountProfileForm;
