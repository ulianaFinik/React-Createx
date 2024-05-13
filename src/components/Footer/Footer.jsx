import "./style.css"

const Footer = () => {
    return ( 
        <footer className="footer">
        <div className="footer__container container">
            <div className="footer__top">
                <div className="footer__wrapper">
                    <a href="#" className="footer__logo a">
                        <img src="img/logo.png" alt="logo" aria-hidden="true" className="footer__img" />
                    </a>
                    <p className="footer__text text text_small text_regular">Createx SEO Agency is a full-service
                        digital marketing agency. We help businesses make more money through a wealth of performance
                        data and market research. We create science-based SEO strategies to empower our clients.</p>
                    <ul className="footer__soc-list ul">
                        <li className="footer__soc-item">
                            <a href="#" className="footer__soc-item__link a" aria-label="Go to our facebook">
                                <img className="footer__soc-item__img" src="img/ig.svg" alt="" />
                            </a>
                        </li>
                        <li className="footer__soc-item">
                            <a href="#" className="footer__soc-item__link a" aria-label="Go to our in">
                                <img className="footer__soc-item__img" src="img/fb.svg" alt="" />
                            </a>
                        </li>
                        <li className="footer__soc-item">
                            <a href="#" className="footer__soc-item__link a" aria-label="Go to our twitter">
                                <img className="footer__soc-item__img" src="img/linked-in.svg" alt="" />
                            </a>
                        </li>
                        <li className="footer__soc-item">
                            <a href="#" className="footer__soc-item__link a" aria-label="Go to our instagram">
                                <img className="footer__soc-item__img" src="img/twitter.svg" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__columns">
                    <div className="footer__column">
                        <span className="footer__column-title">Company</span>
                        <ul className="footer__column-list ul">
                            <li className="footer__column-item"><a href="#"
                                    className="footer__column-link text text_base text_regular a"
                                    aria-label="Go to page About Us">About Us</a></li>
                            <li className="footer__column-item"><a href="#"
                                    className="footer__column-link text text_base text_regular a"
                                    aria-label="Go to page Case Studies">Case Studies</a></li>
                            <li className="footer__column-item"><a href="#"
                                    className="footer__column-link text text_base text_regular a"
                                    aria-label="Go to page Blog">Blog</a></li>
                            <li className="footer__column-item"><a href="#"
                                    className="footer__column-link text text_base text_regular a"
                                    aria-label="Go to page Careers">Careers</a></li>
                            <li className="footer__column-item"><a href="#"
                                    className="footer__column-link text text_base text_regular a"
                                    aria-label="Go to page Contacts">Contacts</a></li>
                        </ul>
                    </div>
                    <div className="footer__column">
                        <span className="footer__column-title">Services</span>
                        <ul className="footer__column-list ul">
                            <li className="footer__column-item"><a href="#"
                                    className="footer__column-link text text_base text_regular a"
                                    aria-label="Go to page Social Media">Social Media</a></li>
                            <li className="footer__column-item"><a href="#"
                                    className="footer__column-link text text_base text_regular a"
                                    aria-label="Go to page SEO">SEO</a></li>
                            <li className="footer__column-item"><a href="#"
                                    className="footer__column-link text text_base text_regular a"
                                    aria-label="Go to page Research">Research</a></li>
                            <li className="footer__column-item"><a href="#"
                                    className="footer__column-link text text_base text_regular a"
                                    aria-label="Go to page Content & PR">Content & PR</a></li>
                            <li className="footer__column-item"><a href="#"
                                    className="footer__column-link text text_base text_regular a"
                                    aria-label="Go to page Payed Traffic">Payed Traffic</a></li>
                        </ul>
                    </div>
                    <div className="footer__column">
                        <span className="footer__column-title">Contact us</span>
                        <ul className="footer__column-list ul">
                            <li className="footer__column-item">
                                <a href="tel:+4055550128" className="footer__column-link text text_base text_regular a"
                                    aria-label="Call us">
                                    <div className="footer__column-link__img">
                                        <img src="img/phone.svg" alt="" />
                                    </div>
                                    (405) 555-0128
                                </a>
                            </li>
                            <li className="footer__column-item">
                                <a href="mailto:hello@createx.com"
                                    className="footer__column-link text text_base text_regular a"
                                    aria-label="Write us to email">
                                    <div className="footer__column-link__img">
                                        <img src="img/envelope.svg" alt="" />
                                    </div>
                                    hello@createx.com
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__column">
                        <span className="footer__column-title">Sign up to our newsletter</span>
                        <label for="footer-email" className="footer__column-label">
                            <input type="email" className="footer__column-input" placeholder="Email address"
                                name="footer-email" id="footer-email" />
                            <div className="footer__column-input-img">
                                <img src="img/arrow-footer.svg" alt="" />
                            </div>
                        </label>
                        <span className="footer__column-text text text_small text_regular text_white">*Subscribe to our
                            newsletter to receive communications and early updates from Createx SEO Agency.</span>
                    </div>
                </div>
            </div>
            <ul className="footer__awards-list ul">
                <li className="footer__awards-item">
                    <img src="img/aw-1.png" alt="Award clutch" className="footer__awards-item__img img" />
                </li>
                <li className="footer__awards-item">
                    <img src="img/aw-2.png" alt="Award goodfirms" className="footer__awards-item__img img" />
                </li>
                <li className="footer__awards-item">
                    <img src="img/aw-3.png" alt="Award google" className="footer__awards-item__img img" />
                </li>
                <li className="footer__awards-item">
                    <img src="img/aw-4.png" alt="Award hubspot" className="footer__awards-item__img img" />
                </li>
            </ul>
        </div>
        <div className="footer__bottom">
            <div className="container">
                <span className="footer__bottom-text text text_small text_regular text_white">
                    © All rights reserved. Made with
                    <span className="footer__bottom-text footer__bottom-text_by">by Createx Studio </span>
                </span>
            </div>
        </div>
    </footer>
     );
}
 
export default Footer;