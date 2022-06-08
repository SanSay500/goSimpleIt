import { InertiaLink, Link, usePage } from "@inertiajs/inertia-react";

const HeaderContainer = (props) => {

return(
    <header className="header">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="header-logo">
                            <Link href="/">
                                <img src="/images/logo-upwork.svg" alt="Logo"></img>
                            </Link>
                        </div>
                        <div className="header-block"></div>
                        <div className="header-auth">
                                    <Link
                                        href={route("dashboard")}
                                    >
                                        <img src="/images/myaccount-icon-6.png" alt="Logo"></img>
                                    </Link>
                        </div>
                    </div>
                </div>
            </header>
)
}
export default HeaderContainer;
