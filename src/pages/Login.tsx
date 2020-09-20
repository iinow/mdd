import React from 'react'
import { Link } from 'react-router-dom'
import vowb from '../assets/images/undraw_publish_post_vowb.svg'
import wave from '../assets/images/wave.svg'
// import avatar from '../assets/images/undraw_profile_pic_ic5t.svg'
import '../scss/Login.scss'

const Login: React.FC = () => {
  return (
    <>
      <img className="wave" src={wave} alt="wave"/>
      <div className="login-container">
        <div className="img">
          <img className="wave" src={vowb} alt="background"/>
        </div>
        <div className="login-form-container">
          <form className="box" action={'/'}>
            {/*<img className="avatar" src={avatar}/>*/}
            {/*<h2>Diary Map</h2>*/}
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left">
                <input className="input" type="text"/>
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope"/>
                </span>
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control has-icons-left">
                <input className="input" type="password"/>
                <span className="icon is-small is-left">
                  <i className="fa fa-lock"/>
                </span>
              </div>
            </div>
            <Link className="login-link" to={'/'}>
              Forgot Password?
            </Link>
            <input type="submit" className="btn" value="Login"/>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
