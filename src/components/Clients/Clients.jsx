import "./style.css"

const Clients = () => {
    return (
        <div className="clients">
            <div className="container">
                <ul className="clients__list">
                    <li className="clients__item">
                        <img src="img/client-logo-1.png" alt="Client" className="clients__item-img img" />
                    </li>
                    <li className="clients__item">
                        <img src="img/client-logo-2.png" alt="Client" className="clients__item-img img" />
                    </li>
                    <li className="clients__item">
                        <img src="img/client-logo-3.png" alt="Client" className="clients__item-img img" />
                    </li>
                    <li className="clients__item">
                        <img src="img/client-logo-4.png" alt="Client" className="clients__item-img img" />
                    </li>
                    <li className="clients__item">
                        <img src="img/client-logo-5.png" alt="Client" className="clients__item-img img" />
                    </li>
                    <li className="clients__item">
                        <img src="img/client-logo-6.png" alt="Client" className="clients__item-img img" />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Clients;