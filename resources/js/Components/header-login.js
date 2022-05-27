import { InertiaLink, Link } from "@inertiajs/inertia-react";
const HeaderLoginContainer = () => {
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
                        </div>
                    </div>
                </header>
    )
    }
    export default HeaderLoginContainer;
