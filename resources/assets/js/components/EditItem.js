import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';

class EditItem extends Component {
  constructor(props) {
      super(props);
      this.state = {namabarang: '', hargabarang: ''};
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    axios.get(`http://localhost:8000/api/items/${this.props.params.id}/edit`)
    .then(response => {
      this.setState({ namabarang: response.data.namabarang, hargabarang: response.data.hargabarang });
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  handleChange1(e){
    this.setState({
      namabarang: e.target.value
    })
  }
  handleChange2(e){
    this.setState({
      hargabarang: e.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const products = {
      namabarang: this.state.namabarang,
      hargabarang: this.state.hargabarang
    }
    let uri = 'http://localhost:8000/api/items/'+this.props.params.id;
    axios.patch(uri, products).then((response) => {
          this.props.history.push('/');
    });
  }
  render(){
    return (
      <div>
        <h1>Update Item</h1>
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Item Name</label>
                <input type="text"
                  className="form-control"
                  value={this.state.namabarang}
                  onChange={this.handleChange1} />
            </div>

            <div className="form-group">
                <label name="product_price">Item Price</label>
                <input type="text" className="form-control"
                  value={this.state.hargabarang}
                  onChange={this.handleChange2} />
            </div>

            <div className="form-group">
                <button className="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
    )
  }
}
export default EditItem;
