import GoMenu from "@/components/shared/header/goMenu/goMenu";
import { Link } from "@inertiajs/inertia-react";
import style from "./header.module.css";

const Header = ({ styleBtn }) => {
    return (
        <header className={`${style.header}`}>
            <div>
                <Link href="/">
                    <img src="/images/logo-upwork.svg" alt="Logo"></img>
                </Link>
            </div>

            <GoMenu styleBtn={styleBtn} />
        </header>
    );
};
export default Header;
