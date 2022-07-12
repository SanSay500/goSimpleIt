import React from "react";
import { Link } from "@inertiajs/inertia-react";
import style from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={`container ${style.container}`}>
            <div>
                <Link href="/" className={`${style.logo}`}>
                    <img src="/images/logo-upwork.svg" alt="Logo"></img>
                </Link>
            </div>

            <ul className={style.socialList}>
                <li>
                    <a href="#" className={style.link}>
                        <img src="/images/whatsapp.svg" alt="Whatsapp" />
                    </a>
                </li>

                <li>
                    <a href="#" className={style.link}>
                        <img src="/images/telegram.svg" alt="Telegram" />
                    </a>
                </li>

                <li>
                    <a href="#" className={style.link}>
                        <img src="/images/vk.svg" alt="Vk" />
                    </a>
                </li>

                <li>
                    <a href="#" className={style.link}>
                        <img src="/images/youtube.svg" alt="Youtube" />
                    </a>
                </li>

                <li>
                    <a href="#" className={style.link}>
                        <img src="/images/instagram.svg" alt="Instagram" />
                    </a>
                </li>
            </ul>
        </footer>
    );
};
export default Footer;
