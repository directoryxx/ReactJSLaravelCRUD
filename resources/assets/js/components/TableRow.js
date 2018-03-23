import React, { Component } from 'react';
import { Link } from 'react-router';
import { Router, Route, browserHistory } from 'react-router';

class TableRow extends Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    let uri = `http://localhost:8000/api/items/${this.props.obj.id}`;
    axios.delete(uri);
      browserHistory.push('/daftar');
  }
  render() {
    return (
        <tr>          
          <td>
            {this.props.obj.namabarang}
          </td>
          <td>
            {this.props.obj.hargabarang}
          </td>
          <td>
            <Link to={"edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
          </td>
          <td>
          <form onSubmit={this.handleSubmit}>
             <input type="submit" value="Delete" className="btn btn-danger"/>
          </form>
          </td>
        </tr>
    );
  }
}

export default TableRow;
