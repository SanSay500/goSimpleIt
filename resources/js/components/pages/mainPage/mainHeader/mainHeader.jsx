import { Link } from "@inertiajs/inertia-react";
// import "@/../css/header.css";
import style from "./mainHeader.module.css";

const MainHeader = (role) => {
    return (
        <header className={`${style.header} header`}>
            <div className="header-wrapper">
                <div className="header-logo">
                    <Link href="/">
                        <img src="/images/logo-upwork.svg" alt="Logo"></img>
                    </Link>
                </div>
                {/* <div className="header-block"></div> */}
                <div className="header-auth">
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
            </div>
        </header>
    );
};
export default MainHeader;
