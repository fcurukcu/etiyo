import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import './Slider.css';
import 'swiper/css/navigation';
import resim1 from '../../../Assets/OrnekTemaIcinResimler/Slider/default_pictures_2.jpg';
import resim2 from '../../../Assets/OrnekTemaIcinResimler/Slider/ayakkabi.jpg';
import resim3 from '../../../Assets/OrnekTemaIcinResimler/Slider/sliderresim.jpg';
import resim4 from '../../../Assets/OrnekTemaIcinResimler/Slider/sliderresim2.jpg';
import {HiArrowSmRight,HiArrowSmLeft} from 'react-icons/hi';
import 'bootstrap/dist/css/bootstrap.min.css';
function Slider() {
  return (
    <div className='SliderHomeEticaret'>
       <Swiper 
       spaceBetween={50} 
       slidesPerView={1}
       autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
       navigation ={true}
       modules={[Autoplay, Pagination, Navigation]}
       >
        <SwiperSlide>
            <div className='image'>
                 <img className='resimEticaretSlider' src={resim1}/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='image'>
                 <img className='resimEticaretSlider' src={resim2}/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='image'>
                 <img className='resimEticaretSlider' src={resim3}/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='image'>
                 <img className='resimEticaretSlider' src={resim4}/>
            </div>
        </SwiperSlide>

       </Swiper>
    </div>
  )
}

export default Slider
