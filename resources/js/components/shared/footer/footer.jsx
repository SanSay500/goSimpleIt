import React from "react";
import style from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={`${style.container}`}>
            <div>
                <img src="/images/logo-upwork.svg" alt="Logo"></img>
            </div>

            <ul className={style.socialList}>
                <li>
                    <a href="#">
                        <img src="/images/whatsapp.svg" alt="Whatsapp" />
                    </a>
                </li>

                <li>
                    <a href="#">
                        <img src="/images/telegram.svg" alt="Telegram" />
                    </a>
                </li>

                <li>
                    <a href="#">
                        <img src="/images/vk.svg" alt="Vk" />
                    </a>
                </li>

                <li>
                    <a href="#">
                        <img src="/images/youtube.svg" alt="Youtube" />
                    </a>
                </li>

                <li>
                    <a href="#">
                        <img src="/images/instagram.svg" alt="Instagram" />
                    </a>
                </li>
            </ul>
        </footer>
    );
};
export default Footer;
