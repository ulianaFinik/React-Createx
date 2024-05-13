import "./style.css"

const Benefits = () => {
    return (
        <section className="our-benefits">
            <div className="container">
                <h2 className="our-benefits__title title title_2">Our benefits</h2>
                <ul className="our-benefits__list ul">
                    <li className="our-benefits__item">
                        <img src="img/benefits-1.svg" alt="img" aria-hidden="true"
                            className="our-benefits__item-img img" />
                            <span className="our-benefits__item-span text text_lead text_bold text_ebony-gray">Social
                                Advertising Experts</span>
                            <p className="our-benefits__item-text text text_small text_regular">Culpa nostrud commodo ea
                                consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
                    </li>
                    <li className="our-benefits__item">
                        <img src="img/benefits-2.svg" alt="img" aria-hidden="true"
                            className="our-benefits__item-img img" />
                            <span className="our-benefits__item-span text text_lead text_bold text_ebony-gray">Quality
                                Customer Service</span>
                            <p className="our-benefits__item-text text text_small text_regular">Sed nunc scelerisque ipsum
                                accumsan, proin nunc euismod purus. Dictum tortor, pellentesque vel integer amet. </p>
                    </li>
                    <li className="our-benefits__item">
                        <img src="img/benefits-3.svg" alt="img" aria-hidden="true"
                            className="our-benefits__item-img img" />
                            <span className="our-benefits__item-span text text_lead text_bold text_ebony-gray">ROI Focused
                                Campaigns</span>
                            <p className="our-benefits__item-text text text_small text_regular">Cursus sit eu viverra
                                suspendisse eu quisque enim est tortor. Mauris ornare convallis nisi diam imperdiet.
                            </p>
                    </li>
                    <li className="our-benefits__item">
                        <img src="img/benefits-4.svg" alt="img" aria-hidden="true"
                            className="our-benefits__item-img img" />
                            <span className="our-benefits__item-span text text_lead text_bold text_ebony-gray">Complete SEO
                                Transparency</span>
                            <p className="our-benefits__item-text text text_small text_regular">Culpa nostrud commodo ea
                                consequat aliquip reprehenderit. Ve niam velit nostrud aliquip sunt.</p>
                    </li>
                    <li className="our-benefits__item">
                        <img src="img/benefits-5.svg" alt="img" aria-hidden="true"
                            className="our-benefits__item-img img" />
                            <span className="our-benefits__item-span text text_lead text_bold text_ebony-gray">Monthly
                                Reporting</span>
                            <p className="our-benefits__item-text text text_small text_regular">Aenean urna dictum
                                adipiscing nec, cras quisque. Nunc in odio ultricies ornare ornare nunc venenatis
                                mauris. </p>
                    </li>
                    <li className="our-benefits__item">
                        <img src="img/benefits-6.svg" alt="img" aria-hidden="true"
                            className="our-benefits__item-img img" />
                            <span className="our-benefits__item-span text text_lead text_bold text_ebony-gray">We're a True
                                Partner</span>
                            <p className="our-benefits__item-text text text_small text_regular">Quis sed malesuada tincidunt
                                amet, vitae mi justo elementum eu. Dui gravida id elementum dolor sed elementum, risus.
                            </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Benefits;