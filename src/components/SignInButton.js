import React, {Component} from 'react';
import {Button, Icon} from 'semantic-ui-react';

export default class SignInButton extends Component {

    goToAppLogin = () => window.location.href = 'https://app.agilitynotebook.com';

    render(){

        let styles = {};

        if(this.props.float){
            styles["float"] = this.props.float || "right";
        }

        return (
            <Button primary style={styles} onClick={this.goToAppLogin}><Icon name="facebook" />Sign in with Facebook</Button>
        );
    }

}