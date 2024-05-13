import React, { useState } from "react";
import "./style.css"

const FaqId = ({ faqList }) => {

    const [openId, setId] = useState(null);

    const clickHandler = (id) => {
        if (id === openId) setId(null);
        else setId(id)
    };


    return (
        <section className="faq">
            <div className="container">
                <h2 className="faq__title title title title_2">Freequently Ask Questions</h2>


                <ul className="faq__accordion accordion-content">
                    {faqList.map((faqItem, id) => {
                        return (
                        <li className={`accordion accordion-1 ${id === openId ? "active" : ""}`}>
                            <button
                                className="accordion__control text text_lead text_bold text_ebony-gray button"
                                onClick={() => clickHandler(id)}
                            >
                                {faqItem.q}
                            </button>
                            <div
                                className={`accordion__content text text_base text_regular text_storm-gray ${id === openId ? "accordion__content_open" : ""}`}>
                                {faqItem.a}
                            </div>
                        </li>
                        );
                    })}


                    {/* <div className="accordion accordion-2">
                        <button className="accordion__control text text_lead text_bold text_ebony-gray button"
                            aria-expanded="false">Orci commodo, viverra orci mollis ut euismod?
                        </button>
                        <div className="accordion__content text text_base text_regular text_storm-gray"
                            aria-hidden="true">Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet
                            elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper
                            massa ac facilisis.
                            Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus
                            dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac
                            facilisis.
                        </div>
                    </div>
                    <div className="accordion accordion-3">
                        <button className="accordion__control text text_lead text_bold text_ebony-gray button"
                            aria-expanded="false">Sagittis vitae facilisi rutrum amet mauris quisque vel
                            convallis?
                        </button>
                        <div className="accordion__content text text_base text_regular text_storm-gray"
                            aria-hidden="true">Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet
                            elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper
                            massa ac facilisis.
                        </div>
                    </div>
                    <div className="accordion accordion-4">
                        <button className="accordion__control text text_lead text_bold text_ebony-gray button"
                            aria-expanded="false">In id dolor quis nunc, urna hendrerit pharetra?
                        </button>
                        <div className="accordion__content text text_base text_regular text_storm-gray"
                            aria-hidden="true">Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet
                            elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper
                            massa ac facilisis.
                            Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus
                            dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac
                            facilisis.
                            Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus
                            dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac
                            facilisis.
                        </div>
                    </div> */}
                </ul>
                <a href="#" className="faq__btn btn btn_fill a" aria-label="Go pages to discover more">Discover more</a>
            </div>
        </section>
    );
}

export default FaqId;