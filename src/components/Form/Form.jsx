import "./style.css"

const Form = () => {
    return (
        <section className="form-section">
            <div className="form-section__container container">
                <div className="form-section__wrapper">
                    <h2 className="form-section__title title title_2 title_white">Get a Free SEO Analysis!</h2>
                    <form action="#" className="form-section__form">
                        <label for="form-name" className="form-section__label">
                            <span
                                className="form-section__label-text text text_base text_regular text_white">Name</span>
                            <input type="text" className="form-section__label-input input" placeholder="Your name" name="form-name" />
                        </label>
                        <label for="form-email" className="form-section__label">
                            <span className="form-section__label-text text text_base text_regular text_white">Email</span>
                            <input type="email" className="form-section__label-input input" placeholder="Your working email" name="form-email" />
                        </label>
                        <label for="form-website" className="form-section__label">
                            <span className="form-section__label-text text text_base text_regular text_white">Your website URL</span>
                            <input type="text" className="form-section__label-input input" placeholder="http://yoursite.com" name="form-website" />
                        </label>
                        <div className="form-section__form-wrapper">
                            <label for="checkbox" className="form-section__form-custom-checkbox custom-checkbox">
                                <input type="checkbox" className="real-checkbox" name="form-checkbox" id="checkbox" />
                                <span className="form-section__form-custom-checkbox__checkbox custom-checkbox__checkbox"></span>
                                <span className="form-section__form-custom-checkbox__text custom-checkbox__text text text_base text_regular text_white">I agree to receive communications from Createx SEO Agency</span>
                            </label>
                            <button className="form-section__btn btn btn_fill button">Get a free analysis</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Form;