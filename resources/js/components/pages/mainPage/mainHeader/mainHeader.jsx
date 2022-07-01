import { Link } from "@inertiajs/inertia-react";
import style from "./mainHeader.module.css";

const MainHeader = (role) => {
    return (
        <header className={`${style.header}`}>
            <div>
                <Link href="/">
                    <img src="/images/logo-upwork.svg" alt="Logo"></img>
                </Link>
            </div>

            <div className={style.auth}>
                {role.role === "Freelancer" ? (
                    <Link href={route("freelancer_dashboard_index")}>
                        <img
                            src="/images/myprofile-icon-6.png"
                            alt="Logo"
                        ></img>
                    </Link>
                ) : (
                    <Link href={route("employer_dashboard_index")}>
                        <img
                            src="/images/myprofile-icon-6.png"
                            alt="Logo"
                        ></img>
                    </Link>
                )}
            </div>
        </header>
    );
};
export default MainHeader;
