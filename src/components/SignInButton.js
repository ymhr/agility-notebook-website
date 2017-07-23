import React, {Component} from 'react';

export default class SignInButton extends Component {

    render(){

        const styles = {
            "background-color": "blue",
            "border-radius": "3px",
            "color": "white",
            "fontFamily": "sans-serif",
            "border": "0",
            "padding": "5px 10px",
            "text-decoration": "none"
        }

        if(this.props.float){
            styles["float"] = this.props.float || "right";
        }

        return (
            <a
                style={styles}
                href="https://api.agilitynotebook.com/auth/facebook"
            >
                Log in with Facebook
            </a>
        );
    }

}