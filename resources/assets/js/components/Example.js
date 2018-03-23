import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,Link} from 'react-router';
import Home from './Home';

export default class Example extends Component {
    constructor(props) {
        super(props);
        this._myHandler = this._myHandler.bind(this);
    }
    _myHandler(props) {
      console.log(props);
    }
    render() {
        return (
        <div>
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">CRUD Example</a>
              </div>
              <div id="navbar" className="navbar-collapse collapse">
                <ul className="nav navbar-nav">

                </ul>
              </div>
            </div>
          </nav>
          <div className="container">
            <div className="col-md-3">
              <ul className="list-group">
                <li className="list-group-item"><Link to={"/"}>Home</Link></li>
                <li className="list-group-item"><Link to={"tambah"}>Tambah Data</Link></li>
                <li className="list-group-item"><Link to={"daftar"}>Daftar Items</Link></li>
              </ul>
            </div>
            <div className="col-md-9">

              {this.props.children}
            </div>

          </div>
        </div>

        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
