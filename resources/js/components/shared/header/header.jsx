import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import GoMenu from './goMenu/goMenu'
import style from './header.module.css'
const Header = (title) => {
    const props = usePage().props;
    console.log(props.auth);

    return (
        <header className="header">
            <div className="container">
                <div className={`${style.headerWapper}`}>
                    <div className={`${style.headerLogo}`}>
                        <Link href="/">
                            <img src="/images/logo-upwork.svg" alt="Logo"></img>
                        </Link>
                    </div>
                    <GoMenu /> 
                </div>
            </div>
        </header>
    );
};
export default Header;