import React from 'react';

const SignInTile = props => {
  return(
    <div className="sign-in-page">
      <h1>Welcome to Hack Back</h1>
      <div>
        <a href="/auth/github">Sign in as a Developer</a>
      </div>
      <div>
        <a href="/auth/facebook">Sign in as an Organization with Facebook</a>
      </div>
      <div>
        <a href="/auth/linkedin">Sign in as an Organization with LinkedIn</a>
      </div>
      <div>
        <a href="/auth/google_oauth2">Sign in as an Organization with Google</a>
      </div>
    </div>
  )
}

export default SignInTile;
