import React, { Component } from 'react'
import Login from './Componets/Login/Login';
import Appbar from './Componets/appBar/appBar';
import Index from './Componets/index';
import './App.css';
import Mayre from 'mayre';
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      login: false,
      value: 0,
      token: ''
    }
  }

  handleChangeValue = (event, newValue) => {
    this.setState({ value: newValue })
  }
  handelLogin = (login) => {
    this.setState({ login })
  }
  logins() {
    if (this.state.token && !this.state.login)
      this.handelLogin(true);
    return this.state.login || this.state.token;
  }
  logout = () => {
    this.handelLogin(false);
    this.setState({ token: '' });
    localStorage.clear();
  }
  componentWillMount() {
    this.setState({ token: localStorage.getItem('token') });
  }
  render() {
    return (
      <div>
        <Mayre
          of={<Appbar handleChangeValue={this.handleChangeValue} values={this.state.value} logout={this.logout} login={this.state.login} />}
          when={() => this.logins()}
        />
        
          <Mayre
            of={<div style={{padding:"20px",marginTop:"30px"}}><Index values={this.state.value} /></div>}
            or={<Login handelLogin={this.handelLogin} login={this.state.login} />}
            when={() => this.logins()}
          />
        
      </div>

    )
  }
}

export default (App);