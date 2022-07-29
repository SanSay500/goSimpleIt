import GoMenu from "@/components/shared/header/goMenu/goMenu";
import { Link } from "@inertiajs/inertia-react";
import style from "./header.module.css";
import { Helmet } from "react-helmet";

const Header = ({ styleBtn }) => {
    return (
        <>
            <Helmet>
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=UA-232234708-1"
                />
            </Helmet>

            <header className={`${style.header}`}>
                <div>
                    <Link href="/" className={`${style.headerLogo}`}>
                        <img src="/images/logo-upwork.svg" alt="Logo"></img>
                    </Link>
                </div>

                <GoMenu styleBtn={styleBtn} />
            </header>
        </>
    );
};
export default Header;
