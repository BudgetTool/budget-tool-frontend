import React from "react";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

class OAuthContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
    this.callback = this.callback.bind(this);
  }
  callback(res, type) {
    let userData;

    if (type === "facebook" && res.email) {
      this.setState({ loggedIn: true });
      userData = {
        name: res.name,
        provider: type,
        email: res.email,
        provider_id: res.id,
        token: res.accessToken,
        img: res.picture,
      };
    }

    if (type === "google" && res) {
      this.setState({ loggedIn: true });
     console.log(res)
    }

    console.log(type, userData);
  }

  render() {
    const responseGoogle = (response) => {
      this.callback(response, "google");
    };

    const responseFacebook = (response) => {
      this.callback(response, "facebook");
    };

    const componentClicked = (response) => {};

    return (
      <section className="oauth-container">
        <FacebookLogin
          appId="239793550638491"
          autoLoad={true}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
        />

        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </section>
    );
  }
}
export default OAuthContainer;
