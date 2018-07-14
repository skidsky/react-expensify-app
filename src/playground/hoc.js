import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div> 
      { props.isAdmin && <p> This is private info. Please don't share! </p>}
      <WrappedComponent {...props}/>
    </div>
  )
}

const requireAthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} /> 
      ) : (
        <p>Please login </p>
      )} 
    </div>
  )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAthentication(Info);

// requireAuthentication AuthAuthenticated

// ReactDOM.render(<AdminInfo isAdmin={false} info="These are the details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details"/>, document.getElementById('app'));

// Higher Order Component (HOC) - A component  (HOC) that renders another component (Regular )
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state