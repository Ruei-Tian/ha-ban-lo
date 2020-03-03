/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Context/Firebase';
import * as ROUTES from '../../constants/routes';

import SignInWithAccount from '../SignInWithAccount';

const INITIAL_STATE = {
  memberName: '',
  memberEmail: '',
  memberPassword: '',
  error: null
};

const SignUp = (props) => (
  <SignUpForm slip={props.isShowUp} />
);

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onClick = (e) => {
    e.preventDefault();
    const { memberName, memberEmail, memberPassword } = this.state;
    const { firebase, history } = this.props;
    firebase.doCreateUserWithEmailAndPassword(memberEmail, memberPassword)
      .then((authUser) => {
        console.log(authUser);
        // const actionCodeSettings = {
        //   url: `https://ha-ban-lo.firebaseapp.com/account/${firebase.auth.currentUser.uid}`,
        //   handleCodeInApp: false
        // };
        // authUser.user.sendEmailVerification(actionCodeSettings).then(() => {
        //   // Email sent.
        //   console.log('send');
        // }).catch((error) => {
        //   // An error happened.
        //   this.setState({ error });
        // });
        authUser.user.updateProfile({
          displayName: memberName
        });
        const documentRefString = firebase.db.collection('members').doc(`${authUser.user.uid}`);
        const recipeRef = firebase.db.doc(documentRefString.path);
        firebase.member(authUser.user.uid).set({
          memberName,
          memberEmail,
          memberId: authUser.user.uid,
          ref: recipeRef
        });
        history.push(`/account/${authUser.user.uid}`);
      })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const {
      memberName,
      memberEmail,
      memberPassword,
      error
    } = this.state;

    const { slip } = this.props;

    const isInvalid = memberPassword.trim() === ''
      || memberEmail.trim() === ''
      || memberName.trim() === '';

    return (
      <form className={`sign-up-with-email ${slip === 'signUp' || slip === 'mobile-signUp' ? 'slip' : ''}`}>
        <h3>SIGN UP</h3>
        <input
          type="text"
          id="new-name"
          placeholder="Your name"
          name="memberName"
          value={memberName}
          onChange={this.onChange}
        />
        <input
          type="text"
          id="new-email"
          placeholder="Email"
          name="memberEmail"
          value={memberEmail}
          onChange={this.onChange}
        />
        <input
          type="password"
          id="new-pwd"
          placeholder="Password"
          name="memberPassword"
          value={memberPassword}
          onChange={this.onChange}
        />

        <div className="btn-area">
          <SignInWithAccount />
          <button id="sign-up" type="button" disabled={isInvalid} onClick={this.onClick}>Sign up</button>
        </div>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUpFormBase);


export default SignUp;
