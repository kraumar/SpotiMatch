import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

export default class LoginFacebook extends Component {
  state = {
    auth: false,
    name: "",
    picture: ""
  };
  responseFacebook = (response) => {
    console.log(response);
    if (response.status !== "unknown")
      this.setState({
        auth: true,
        name: response.name,
        picture: response.picture.data.url
      });
  };

  render() {
    let facebookData;
    this.state.auth
      ? (facebookData = (
          <div
            style={{
              width: "400px",
              margin: "auto",
              background: "#f4f4f4",
              padding: "20px",
              color: "#000"
            }}
          >
            <img src={this.state.picture} alt={this.state.name} />
            <h2>Welcome {this.state.name}!</h2>
          </div>
        ))
      : (facebookData = (
          <FacebookLogin
            appId="3302433616530222"
            autoLoad={true}
            fields="name,picture"
            callback={this.responseFacebook}
          />
        ));

    return <>{facebookData}</>;
  }
}
