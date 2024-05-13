import "./style.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Cases = () => {
    return (
        <section className="cases-studies-section">
            <div className="cases-studies-section__container container">
                <h2 className="cases-studies-section__title title title_2">Read our clients' case studies</h2>
                <Swiper className="cases-studies-section__swiper swiper"
                    modules={[Navigation, Pagination, Scrollbar, A11y ]}
                    spaceBetween={50}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    navigation= {{
                        prevEl: ".cases-studies-section__swiper-btn-prev",
                        nextEl: ".cases-studies-section__swiper-btn-next"
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                            slidesPerGroup: 1
                        },
                        870: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                            slidesPerGroup: 2
                        },
                        1220: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                            slidesPerGroup: 3
                        }
                      }}
                    // scrollbar={{ draggable: true }}
                >

                    <div className="cases-studies-section__swiper-wrapper swiper-wrapper">
                        <SwiperSlide className="cases-studies-section__swiper-slide swiper-slide">
                            <div className="cases-studies-section__card">
                                <img src="img/case-logo.png" alt="Client"
                                    className="cases-studies-section__card-img img" />
                                <span className="cases-studies-section__card-name text text_small text_regular">Charityorganisation</span>
                                <p className="cases-studies-section__card-text text text_base text_regular text_storm-gray">
                                    Createx SEO Agency helped National Inc. increase their MQL to SQL conversion
                                    rate by 300%.</p>
                                <ul className="cases-studies-section__card-list ul">
                                    <li className="cases-studies-section__card-item">
                                        <div className="cases-studies-section__card-item__svg">
                                            <img src="img/case-circle.png" alt="" />
                                        </div>
                                        <span
                                            className="cases-studies-section__card-item__value text text_lead text_bold text_ebony-gray">90%</span>
                                        <span
                                            className="cases-studies-section__card-item__text text text_small text_regular text_ebony-gray">Engagement
                                        </span>
                                    </li>
                                    <li className="cases-studies-section__card-item">
                                        <div className="cases-studies-section__card-item__svg">
                                            <img src="img/case-circle.png" alt="" />
                                        </div>
                                        <span
                                            className="cases-studies-section__card-item__value text text_lead text_bold text_ebony-gray">100%</span>
                                        <span
                                            className="cases-studies-section__card-item__text text text_small text_regular text_ebony-gray">Deliverability</span>
                                    </li>
                                </ul>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="cases-studies-section__swiper-slide swiper-slide">
                            <div className="cases-studies-section__card">
                                <img src="img/case-logo-2.png" alt="Client"
                                    className="cases-studies-section__card-img img" />
                                <span className="cases-studies-section__card-name text text_small text_regular">Oil and
                                    natural resources</span>
                                <p
                                    className="cases-studies-section__card-text text text_base text_regular text_storm-gray">
                                    With an advanced A/B testing and usability analysis, Createx SEO Agency helps
                                    Del Mar see a 400% increase in conversion rate.</p>
                                <ul className="cases-studies-section__card-list ul">
                                    <li className="cases-studies-section__card-item">
                                        <div className="cases-studies-section__card-item__svg">
                                            <img src="img/case-circle-2.png" alt="" />
                                        </div>
                                        <span
                                            className="cases-studies-section__card-item__value text text_lead text_bold text_ebony-gray">200%</span>
                                        <span
                                            className="cases-studies-section__card-item__text text text_small text_regular text_ebony-gray">Growth
                                            in sales</span>
                                    </li>
                                    <li className="cases-studies-section__card-item">
                                        <div className="cases-studies-section__card-item__svg">
                                            <img src="img/case-circle.png" alt="" />
                                        </div>
                                        <span
                                            className="cases-studies-section__card-item__value text text_lead text_bold text_ebony-gray">1,400</span>
                                        <span
                                            className="cases-studies-section__card-item__text text text_small text_regular text_ebony-gray">Target
                                            investors</span>
                                    </li>
                                </ul>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="cases-studies-section__swiper-slide swiper-slide">
                            <div className="cases-studies-section__card">
                                <img src="img/case-logo-3.png" alt="Client"
                                    className="cases-studies-section__card-img img" />
                                <span className="cases-studies-section__card-name text text_small text_regular">Personal
                                    care</span>
                                <p
                                    className="cases-studies-section__card-text text text_base text_regular text_storm-gray">
                                    We helped Sunset company break through a noisy industry and better understand
                                    their buyer's journey.</p>
                                <ul className="cases-studies-section__card-list ul">
                                    <li className="cases-studies-section__card-item">
                                        <div className="cases-studies-section__card-item__svg">
                                            <img src="img/case-circle.png" alt="" />
                                        </div>
                                        <span
                                            className="cases-studies-section__card-item__value text text_lead text_bold text_ebony-gray">70%</span>
                                        <span
                                            className="cases-studies-section__card-item__text text text_small text_regular text_ebony-gray">Open
                                            Rate</span>
                                    </li>
                                    <li className="cases-studies-section__card-item">
                                        <div className="cases-studies-section__card-item__svg">
                                            <img src="img/case-circle-3.png" alt="" />
                                        </div>
                                        <span
                                            className="cases-studies-section__card-item__value text text_lead text_bold text_ebony-gray">200%</span>
                                        <span
                                            className="cases-studies-section__card-item__text text text_small text_regular text_ebony-gray">Growth
                                            in sales</span>
                                    </li>
                                </ul>
                            </div>
                        </SwiperSlide>



                        <SwiperSlide className="cases-studies-section__swiper-slide swiper-slide">
                            <div className="cases-studies-section__card">
                                <img src="img/case-logo.png" alt="Client"
                                    className="cases-studies-section__card-img img" />
                                <span className="cases-studies-section__card-name text text_small text_regular">Personal
                                    care</span>
                                <p
                                    className="cases-studies-section__card-text text text_base text_regular text_storm-gray">
                                    We helped Sunset company break through a noisy industry and better understand
                                    their buyer's journey.</p>
                                <ul className="cases-studies-section__card-list ul">
                                    <li className="cases-studies-section__card-item">
                                        <div className="cases-studies-section__card-item__svg">
                                            <img src="img/case-circle.png" alt="" />
                                        </div>
                                        <span
                                            className="cases-studies-section__card-item__value text text_lead text_bold text_ebony-gray">70%</span>
                                        <span
                                            className="cases-studies-section__card-item__text text text_small text_regular text_ebony-gray">Open
                                            Rate</span>
                                    </li>
                                    <li className="cases-studies-section__card-item">
                                        <div className="cases-studies-section__card-item__svg">
                                            <img src="img/case-circle-4.png" alt="" />
                                        </div>
                                        <span
                                            className="cases-studies-section__card-item__value text text_lead text_bold text_ebony-gray">200%</span>
                                        <span
                                            className="cases-studies-section__card-item__text text text_small text_regular text_ebony-gray">Growth
                                            in sales</span>
                                    </li>
                                </ul>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="cases-studies-section__swiper-slide swiper-slide">
                            <div className="cases-studies-section__card">
                                <img src="img/case-logo-3.png" alt="Client"
                                    className="cases-studies-section__card-img img" />
                                <span className="cases-studies-section__card-name text text_small text_regular">Personal
                                    care</span>
                                <p
                                    className="cases-studies-section__card-text text text_base text_regular text_storm-gray">
                                    We helped Sunset company break through a noisy industry and better understand
                                    their buyer's journey.</p>
                                <ul className="cases-studies-section__card-list ul">
                                    <li className="cases-studies-section__card-item">
                                        <div className="cases-studies-section__card-item__svg">
                                            <img src="img/case-circle-5.png" alt="" />
                                        </div>
                                        <span
                                            className="cases-studies-section__card-item__value text text_lead text_bold text_ebony-gray">70%</span>
                                        <span
                                            className="cases-studies-section__card-item__text text text_small text_regular text_ebony-gray">Open
                                            Rate</span>
                                    </li>
                                    <li className="cases-studies-section__card-item">
                                        <div className="cases-studies-section__card-item__svg">
                                            <img src="img/case-circle.png" alt="" />
                                        </div>
                                        <span
                                            className="cases-studies-section__card-item__value text text_lead text_bold text_ebony-gray">200%</span>
                                        <span
                                            className="cases-studies-section__card-item__text text text_small text_regular text_ebony-gray">Growth
                                            in sales</span>
                                    </li>
                                </ul>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="cases-studies-section__swiper-slide swiper-slide">
                            <div className="cases-studies-section__card">
                                <img src="img/case-logo.png" alt="Client"
                                    className="cases-studies-section__card-img img" />
                                <span className="cases-studies-section__card-name text text_small text_regular">Personal
                                    care</span>
                                <p
                                    className="cases-studies-section__card-text text text_base text_regular text_storm-gray">
                                    We helped Sunset company break through a noisy industry and better understand
                                    their buyer's journey.</p>
                                <ul className="cases-studies-section__card-list ul">
                                    <li className="cases-studies-section__card-item">
                                        <div className="cases-studies-section__card-item__svg">
                                            <img src="img/case-circle.png" alt="" />
                                        </div>
                                        <span
                                            className="cases-studies-section__card-item__value text text_lead text_bold text_ebony-gray">70%</span>
                                        <span
                                            className="cases-studies-section__card-item__text text text_small text_regular text_ebony-gray">Open
                                            Rate</span>
                                    </li>
                                    <li className="cases-studies-section__card-item">
                                        <div className="cases-studies-section__card-item__svg">
                                            <img src="img/case-circle.png" alt="" />
                                        </div>
                                        <span
                                            className="cases-studies-section__card-item__value text text_lead text_bold text_ebony-gray">200%</span>
                                        <span
                                            className="cases-studies-section__card-item__text text text_small text_regular text_ebony-gray">Growth
                                            in sales</span>
                                    </li>
                                </ul>
                            </div>
                        </SwiperSlide>
                    </div>
                    <div className="cases-studies-section__swiper-pagination swiper-pagination"></div>
                </Swiper >
                <div className="cases-studies-section__swiper__btns">
                    <button
                        className="cases-studies-section__swiper-btn cases-studies-section__swiper-btn-prev swiper-btn swiper-btn-prev button"
                        aria-label="Prev slide">
                        <svg className="cases-studies-section__swiper-btn__img cases-studies-section__swiper-btn-prev__img swiper-btn__img swiper-btn-prev__img" width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.20711 17.2071C8.81658 17.5976 8.18342 17.5976 7.79289 17.2071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L7.79289 6.79289C8.18342 6.40237 8.81658 6.40237 9.20711 6.79289C9.59763 7.18342 9.59763 7.81658 9.20711 8.20711L6.41421 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L6.41421 13L9.20711 15.7929C9.59763 16.1834 9.59763 16.8166 9.20711 17.2071Z" fill="#424551" />
                        </svg>

                    </button>
                    <button
                        className="cases-studies-section__swiper-btn cases-studies-section__swiper-btn-next swiper-btn swiper-btn-next button"
                        aria-label="Next slide">
                        <svg width="27" height="27" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7929 6.79289C15.1834 6.40237 15.8166 6.40237 16.2071 6.79289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L16.2071 17.2071C15.8166 17.5976 15.1834 17.5976 14.7929 17.2071C14.4024 16.8166 14.4024 16.1834 14.7929 15.7929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L14.7929 8.20711C14.4024 7.81658 14.4024 7.18342 14.7929 6.79289Z" fill="#424551" />
                        </svg>
                        {/* <svg
                            className="cases-studies-section__swiper-btn__img cases-studies-section__swiper-btn-next__img swiper-btn__img swiper-btn-next__img">
                            <use href="img/sprite.svg#arrow"></use>
                        </svg> */}
                    </button>
                </div>
                <div className="cases-studies-section__wrapper">
                    <span className="cases-studies-section__text ">Explore more case studies</span>
                    <a href="#" className="cases-studies-section__btn btn btn_fill a">View all case studies</a>
                </div>
            </div>
        </section>
    );
}

export default Cases;