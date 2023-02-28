import React, { Component } from 'react'
import { Modal } from "react-responsive-modal";
import ProductDelete from './ProductDelete';
import ProductDetail from './ProductDetail';
import ProductUpdate from './ProductUpdate';
class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {


      open: false,
      open2: false,
      open3: false

    };
  
  }
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  onOpenModal2 = () => {
    this.setState({ open2: true });
  };

  onCloseModal2 = () => {
    this.setState({ open2: false });
  };
  onOpenModal3 = () => {
    this.setState({ open3: true });
  };

  onCloseModal3 = () => {
    this.setState({ open3: false });
  };

  render() {
    const { open, open2, open3 } = this.state;
    return (
      <>


        <tr>
          <td scope='row'>{this.props.props.firmaUrun.id}</td>
          <td>{this.props.props.firmaUrun.urun_kodu}</td>
          <td>{this.props.props.firmaUrun.adi}</td>
          <td>{this.props.props.kategori_adi}</td>
          <td>{this.props.props.firmaUrun.fiyat}</td>
          <td> <button onClick={this.onOpenModal} className='buton btn-info btn-sm'><i className='fa fa-eye'></i></button></td>
          <td><button onClick={this.onOpenModal2} className='buton btn-warning btn-sm'>Güncelle</button>
            <button onClick={this.onOpenModal3} className='buton btn-danger btn-sm'>Sil</button>
          </td>
        </tr>

        <Modal open={open} onClose={this.onCloseModal}>
          <div className="card">
            <div className="card-body">
              <ProductDetail detay={this.props} />
            </div>
          </div>
        </Modal>
        <Modal open={open2} onClose={this.onCloseModal2}>
          <div className="card">
            <div className="card-body">
              <ProductUpdate detay={this.props} kategori={this.props.kategori}/>
            </div>
          </div>
        </Modal>

        <Modal open={open3} onClose={this.onCloseModal3}>
          <div className="card">
            <div className="card-body">
              <ProductDelete detay={this.props} />
            </div>
          </div>
        </Modal>


      </>
    )
  }
}
export default Product;