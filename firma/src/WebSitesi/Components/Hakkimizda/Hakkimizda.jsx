import React, { Component } from 'react'
import './hakkimizda.css';
import eticaret from '../../../Assets/Hakkimizda/eticaret.png';
import blog from '../../../Assets/Hakkimizda/blog.png';
import web from '../../../Assets/Hakkimizda/web.png';
export class Hakkimizda extends Component {
  render() {
    return (
       <section id='about' className='about section'>
          <div className="secContainer">
             <h2 className="title">
              Neden Etiyo?
             </h2>
             <div className="mainContent2 container2 grid">
                 <div className="singleItem">
                     <img src={eticaret} alt="Image Name" />
                     <h3>Eticaret</h3>
                     <p>
                    Etiyo platformu sayesinde e-ticaret sitenizi dilediğiniz gibi oluşturabilirsiniz. Etiyo platformu sayesinde e-ticaret sitenizi dilediğiniz gibi oluşturabilirsiniz.
                     </p>
                 </div>
                 <div className="singleItem">
                     <img src={blog} alt="Image Name" />
                     <h3>Blog</h3>
                     <p>
                    Etiyo platformu sayesinde e-ticaret sitenizi dilediğiniz gibi oluşturabilirsiniz. Etiyo platformu sayesinde e-ticaret sitenizi dilediğiniz gibi oluşturabilirsiniz.
                     </p>
                 </div>
                 <div className="singleItem">
                     <img src={web} alt="Image Name" />
                     <h3>Web Sitesi</h3>
                     <p>
                    Etiyo platformu sayesinde e-ticaret sitenizi dilediğiniz gibi oluşturabilirsiniz. Etiyo platformu sayesinde e-ticaret sitenizi dilediğiniz gibi oluşturabilirsiniz.
                     </p>
                 </div>
             </div>
          </div>
       </section>
    )
  }
}

export default Hakkimizda
