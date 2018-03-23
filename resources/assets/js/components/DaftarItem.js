// DisplayItem.js

import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import TableRow from './TableRow';

class DaftarItem extends Component {
  constructor(props) {
       super(props);
       this.state = {value: '', items: ''};
     }
     componentDidMount(){
       axios.get('http://localhost:8000/api/items')
       .then(response => {
         this.setState({ items: response.data });
       })
       .catch(function (error) {
         console.log(error);
       })
     }
     tabRow(){
       if(this.state.items instanceof Array){
         return this.state.items.map(function(object, i){
             return <TableRow obj={object} key={i} />;
         })
       }
     }

  render(){
    return (
      <div>
        <h1>Items</h1>


        <table className="table table-hover">
            <thead>
            <tr>
                <td>Nama Barang</td>
                <td>Harga Barang</td>
                <td>Aksi</td>
            </tr>
            </thead>
            <tbody>
              {this.tabRow()}
            </tbody>
        </table>
    </div>
    )
  }
}
export default DaftarItem;
