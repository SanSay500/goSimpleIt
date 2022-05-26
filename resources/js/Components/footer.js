const Footer=()=>{
    return(
        <footer className="footer" >
                <div className="container">
                    <div className="footer-wrapper">
                        <div className="footer-logo">
                            <img src="/images/logo-upwork.svg" alt="Logo"></img>
                        </div>
                            <ul className="contacts-networks">
                                <li className="network-item">
                                    <a href="#" className="network-link">
                                        <img
                                            src="/images/whatsapp.svg"
                                            alt="Whatsapp"
                                        />
                                    </a>
                                </li>
                                <li className="network-item">
                                    <a href="#" className="network-link">
                                        <img
                                            src="/images/telegram.svg"
                                            alt="Telegram"
                                        />
                                    </a>
                                </li>
                                <li className="network-item">
                                    <a href="#" className="network-link">
                                        <img src="/images/vk.svg" alt="Vk" />
                                    </a>
                                </li>
                                <li className="network-item">
                                    <a href="#" className="network-link">
                                        <img
                                            src="/images/youtube.svg"
                                            alt="Youtube"
                                        />
                                    </a>
                                </li>
                                <li className="network-item">
                                    <a href="#" className="network-link">
                                        <img
                                            src="/images/instagram.svg"
                                            alt="Instagram"
                                        />
                                    </a>
                                </li>
                            </ul>
                    </div>
                </div>
            </footer>
    )
}
export default Footer;