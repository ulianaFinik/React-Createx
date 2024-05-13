import "./style.css"

const Agency = () => {
    return (
        <section className="agency">
            <div className="agency__container container">
                <div className="agency__wrapper">
                    <h2 className="agency__title title title_2">Createx Agency </h2>
                    <p className="agency__text text text_base text_regular">Lacus ac mollis vitae viverra. Tincidunt
                        est, feugiat montes, viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit
                        diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor ultrices mattis eget orci
                        eu nisi sed augue odio. Et senectus risus, pharetra, tristique libero. Dolor risus ac quam
                        dictum mattis ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis hendrerit.
                        Cras at ac magna ultricies orci.</p>
                    <a href="#" className="agency__btn btn btn_fill a">More about us</a>
                </div>
                <img class="agency__img img" src="img/about.jpg" alt="agency-people" />
                </div>
            </section>
        );
}

export default Agency;