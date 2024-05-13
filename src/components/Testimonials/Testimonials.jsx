import "./style.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';

const Testimonial = () => {
    return (
        
        <section className="testimonials">
            <div className="testimonials__container container">
                <h2 className="testimonials__title title title_2">What our clients say</h2>
                <Swiper 
                    className="testimonials__swiper swiper"
                    modules={[Navigation, Pagination, Scrollbar, A11y ]}
                    watchSlidesProgress={!0}
                    centeredSlides={!0}
                    pagination= {{
                        el: ".testimonials__swiper-pagination"
                    }}
                    navigation= {{
                        prevEl: ".testimonials__swiper-btn-prev",
                        nextEl: ".testimonials__swiper-btn-next"
                    }}
                    >
                    <div className="swiper-wrapper">
                        <SwiperSlide className="testimonials__swiper-slide swiper-slide">
                            <div className="testimonials__card">
                                <p className="testimonials__card-text text text_lead text_regular text_ebony-gray">Lorem
                                    ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam
                                    viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae
                                    id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate
                                    etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.
                                </p>
                                <div className="testimonials__card-wrapper">
                                    <div className="testimonials__card-profile img">
                                        <img src="img/testimonials-avatar.png" alt="avatar"/>
                                    </div>
                                    <span className="testimonials__card-name text text_base text_bold">Courtney Alexander</span>
                                    <span className="testimonials__card-position text text_small text_regular">Position, Company</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="testimonials__swiper-slide swiper-slide">
                            <div className="testimonials__card">
                                <p className="testimonials__card-text text text_lead text_regular text_ebony-gray">Lorem
                                    ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam
                                    viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae
                                    id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate
                                    etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.
                                </p>
                                <div className="testimonials__card-wrapper">
                                    <div className="testimonials__card-profile img">
                                        <img src="img/testimonials-avatar.png" alt="avatar" />
                                    </div>
                                    <span className="testimonials__card-name text text_base text_bold">Courtney Alexander</span>
                                    <span className="testimonials__card-position text text_small text_regular">Position, Company</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="testimonials__swiper-slide swiper-slide">
                            <div className="testimonials__card">
                                <p className="testimonials__card-text text text_lead text_regular text_ebony-gray">Lorem
                                    ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam
                                    viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae
                                    id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate
                                    etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.
                                </p>
                                <div className="testimonials__card-wrapper">
                                    <div className="testimonials__card-profile img">
                                        <img src="img/testimonials-avatar.png" alt="avatar" />
                                    </div>
                                    <span className="testimonials__card-name text text_base text_bold">Courtney Alexander</span>
                                    <span className="testimonials__card-position text text_small text_regular">Position, Company</span>
                                </div>
                            </div>
                        </SwiperSlide>


                    </div>
                    <div className="testimonials__swiper-pagination swiper-pagination"></div>
                </Swiper>
                <div className="testimonials__swiper__btns">
                    <button className="testimonials__swiper-btn testimonials__swiper-btn-prev swiper-btn swiper-btn-prev button">
                        <svg className="cases-studies-section__swiper-btn__img cases-studies-section__swiper-btn-prev__img swiper-btn__img swiper-btn-prev__img" width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.20711 17.2071C8.81658 17.5976 8.18342 17.5976 7.79289 17.2071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L7.79289 6.79289C8.18342 6.40237 8.81658 6.40237 9.20711 6.79289C9.59763 7.18342 9.59763 7.81658 9.20711 8.20711L6.41421 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L6.41421 13L9.20711 15.7929C9.59763 16.1834 9.59763 16.8166 9.20711 17.2071Z" fill="#424551" />
                        </svg>
                    </button>
                    <button className="testimonials__swiper-btn testimonials__swiper-btn-next swiper-btn swiper-btn-next button">
                        <svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7929 6.79289C15.1834 6.40237 15.8166 6.40237 16.2071 6.79289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L16.2071 17.2071C15.8166 17.5976 15.1834 17.5976 14.7929 17.2071C14.4024 16.8166 14.4024 16.1834 14.7929 15.7929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L14.7929 8.20711C14.4024 7.81658 14.4024 7.18342 14.7929 6.79289Z" fill="#424551" />
                        </svg>
                    </button>
                </div>
            </div>
    </section>
    );
}

export default Testimonial;