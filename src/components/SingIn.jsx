import React from "react";

class SingIn extends React.Component {
  render(){
  return(
    <div className = "mt-5 mb-5" >
      <div className="row">
        <div className="col" />
        <div md="6" className="align-center">
          <div className="card">
            <div className="card-body mx-4">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong>Sign in</strong>
                </h3>
              </div>
              <input
                label="Your email"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <input
                label="Your password"
                group
                type="password"
                validate
                containerClass="mb-0"
              />
              <p className="font-small blue-text d-flex justify-content-end pb-3">
                Forgot
                <a href="#!" className="blue-text ml-1">

                  Password?
                </a>
              </p>
              <div className="text-center mb-3">
                <div

                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                >
                  Sign in
                </div>
              </div>
              <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2">

                or Sign in with:
              </p>
              <div className="row my-3 d-flex justify-content-center">
                <div

                  type="button"
                  color="white"
                  rounded
                  className="btn bnt-success mr-md-3 z-depth-1a"
                >
                  <div fab div="facebook-f" className="blue-text text-center" />
                </div>
                <div

                  type="button"
                  color="white"
                  rounded
                  className="mr-md-3 z-depth-1a"
                >
                  <div fab div="twitter" className="blue-text" />
                </div>
                <div

                  type="button"
                  color="white"
                  rounded
                  className="z-depth-1a"
                >
                  <div fab div="google-plus-g" className="blue-text" />
                </div>
              </div>
            </div>
            <div className="modal-footer mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                <a href="#!" className="blue-text ml-1">

                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      <div className="col"/>
      </div>
      </div>
    
  )};
};

export default SingIn;