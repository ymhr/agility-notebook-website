import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import SignInButton from "../components/SignInButton"
import "../css/typography.css"

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Agility Notebok</h1>
        <p>An app which allows you to plan for and record your Dog Agility shows and runs.</p>
        <p>To use the app, please sign in with the button at the top right, or click this button:</p>
        <SignInButton />
      </div>
    )
  }
}
