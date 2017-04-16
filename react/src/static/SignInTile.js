import React from 'react';

const SignInTile = props => {
  return(
    <div className="sign-in-page">
      <h1>Welcome to Hack Back</h1>
      <div>
        <a href="/auth/github">Sign in as a Developer</a>
      </div>
      <div>
        <a href="#">Sign in as an Organization</a>
      </div>
    </div>
  )
}

export default SignInTile;
