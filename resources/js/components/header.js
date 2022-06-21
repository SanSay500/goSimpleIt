import { InertiaLink, Link, usePage } from "@inertiajs/inertia-react";

const HeaderContainer = (role) => {

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

                            {role.role === 'Freelancer' ?
                                <Link
                                    href={route("freelancer_dashboard_index")}
                                >
                                    <img src="/images/myaccount-icon-6.png" alt="Logo"></img>
                                </Link>
                                :
                                <Link
                                    href={route("employer_dashboard_index")}
                                >
                                    <img src="/images/myaccount-icon-6.png" alt="Logo"></img>
                                </Link>
                            }
                                </div>
                    </div>
                </div>
            </header>
)
}
export default HeaderContainer;
