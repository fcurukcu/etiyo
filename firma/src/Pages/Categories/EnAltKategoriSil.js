import React, { Component } from 'react';
import axios from 'axios';
export class EnAltKategoriSil extends Component {
    constructor(props) {
        super(props);

    }
    deleteRow(id) {
        axios.get(`https://localhost:44363/urunkategori/sil/` + id)
            .then(function (response) {
                //handle success
                alert("Silme işlemi başarılı", response)
                console.log(response);
            })
            .catch(function (response) {
                //handle error
                console.log(response);
            });



    }
    render() {

        return (

            <div>
                <h3 style={{ textAlign: "center" }}>En Alt Kategoriyi Sil</h3>
                <form className="modal-content">
                    <div className="Sil">

                        <p>Silmek istediğinize emin misiniz?</p>

                        <div className="clearfix">
                            <button onClick={(e) => this.deleteRow(this.props.props.id)} type="button" className="deletebtn">Delete</button>
                            <button type="button" className="cancelbtn">Cancel</button>

                        </div>
                    </div>
                </form>
            </div>

        )

    }
}
export default EnAltKategoriSil;
