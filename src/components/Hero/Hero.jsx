import Modal from "../Modal/Modal";
import { useState } from "react";
import "./style.css"

const Hero = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <section className="hero-main">
            <div className="hero-main__container container">
                <h1 className="hero-main__title title title_1">Best <span
                    className="title title_cornflower-blue">SEO&nbsp;&&nbsp;Marketing </span>Solutions for You
                </h1>
                <div className="hero-main__btns">
                    <a href="#" className="hero-main__btn btn btn_stroke btn_stroke-white a">Get a free analysis</a>
                    <div className="hero-main__play-video">
                        <button onClick={() => setShowModal(true)} className="play-video button">
                            <img src="img/play.svg" className="play-video__img" />
                        </button>
                        <span className="hero-main__play-video__text">Play video</span>
                    </div>
                </div>
                <ul className="hero-main__list ul">
                    <li className="hero-main__item">
                        <img src="img/hero-ic-chart.svg" alt="Icon chart" className="hero-main__item-img img" />
                        <span className="hero-main__item-text">SEO Content Strategy</span>
                    </li>
                    <li className="hero-main__item">
                        <img src="img/hero-ic-speaker.svg" alt="Icon speaker" className="hero-main__item-img img" />
                        <span className="hero-main__item-text">Content Marketing</span>
                    </li>
                    <li className="hero-main__item">
                        <img src="img/hero-ic-computer.svg" alt="Icon computer" className="hero-main__item-img img" />
                        <span className="hero-main__item-text">Website & Social Media Marketing</span>
                    </li>
                </ul>
            </div>
            {showModal && <Modal onClose={() => setShowModal(false)} />}
        </section>
    );
}

export default Hero;