import React, {Component} from 'react';
import { Router, Route, browserHistory } from 'react-router';

class TambahItem extends Component {
    constructor(props){
      super(props);
      this.state = {productName: '', productPrice: ''};

      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange1(e){
      this.setState({
        productName: e.target.value
      })
    }
    handleChange2(e){
      this.setState({
        productPrice: e.target.value
      })
    }
    handleSubmit(e){
      e.preventDefault();
      const products = {
        name: this.state.productName,
        price: this.state.productPrice
      }
      let uri = 'http://localhost:8000/api/items';
      axios.post(uri, products).then((response) => {
         browserHistory.push('/daftar');
      });
    }
    render() {
      return (
      <div>
        <h1>Tambah Barang</h1>
        <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Nama Barang:</label>
                <input type="text" className="form-control" onChange={this.handleChange1} />
              </div>
              <div className="form-group">
                  <label>Harga Barang:</label>
                  <input type="number" className="form-control" onChange={this.handleChange2} />
              </div>
              <br />
              <div className="form-group">
                <button className="btn btn-primary">Simpan</button>
              </div>
        </form>
      </div>
      )
    }
}
export default TambahItem;
