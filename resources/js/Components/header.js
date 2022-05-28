import { InertiaLink, Link } from "@inertiajs/inertia-react";
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

                            {props.user ? (
                                <Link
                                    href={route("dashboard")}
                                    // className="auth-link"
                                >
                                    <img src="/images/myaccount-icon-6.jpg" alt="Logo"></img>
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route("login")}
                                        // className="auth-link link"
                                    >
                                        <img src="/images/myaccount-icon-6.jpg" alt="Logo"></img>
                                    </Link>
                                    {/*
                                    <Link
                                        href={route("register")}
                                        className="ml-4 text-sm text-gray-700 underline"
                                    >
                                        Register
                                    </Link> */}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </header>
)
}
export default HeaderContainer;
