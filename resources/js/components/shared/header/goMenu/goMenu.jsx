import React, { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import style from "./goMenu.module.css";

export default function GoMenu({ styleBtn }) {
    const props = usePage().props;
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(() => !isOpen);

    const handleLogout = () => {
        Inertia.post("/logout");
    };
    const handleDashboard = () => {
        props.auth.user.role === "Freelancer"
            ? Inertia.get("/dashboard/frl")
            : Inertia.get("/dashboard/emp");
    };
    const handleProfile = (e) => {
        e.preventDefault();
        Inertia.get(route("user_profile", props.auth.user.id));
    };
    const handleChat = (e) => {
        e.preventDefault();
        Inertia.get(route("chatify"));
    };
    const handlerLogin = (e) => {
        e.preventDefault();
        Inertia.get(route("login"));
    };

    return (
        <>
            {props.auth.user ? (
                <div onBlur={toggleMenu}>
                    <button className={`${style.btnMenu}`} onClick={toggleMenu}>
                        Menu
                    </button>
                    {isOpen && (
                        <div className={style.menu}>
                            <div
                                className={style.item}
                                onMouseDown={handleProfile}
                            >
                                My profile
                            </div>
                            <div
                                className={style.item}
                                onMouseDown={handleDashboard}
                            >
                                Dashboard
                            </div>
                            <div
                                className={style.item}
                                onMouseDown={handleChat}
                            >
                                Messenger
                            </div>
                            <div
                                className={style.item}
                                onMouseDown={handleLogout}
                            >
                                Logout
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div
                    className={`${style.auth} ${styleBtn}`}
                    onClick={handlerLogin}
                >
                    Login
                </div>
            )}
        </>
    );
}

// const [isMenuOpen, setIsMenuOpen] = useState(false);
// const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen);

// <button onClick={toggleMenu}>Toggle Menu</button>;
// {
//     isMenuOpen && (
//         <div>
//             <Link to="/body" onClick={toggleMenu}>
//                 Головна
//             </Link>
//             <Link to="/about" onClick={toggleMenu}>
//                 Про адвоката
//             </Link>
//         </div>
//     );
// }

{
    /* {props.auth && (
                <>
                    <Button
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                        className={`${style.auth}`}
                    >
                        Menu
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            "aria-labelledby": "basic-button",
                        }}
                    >
                        <MenuItem onClick={handleDashboard}>Dashboard</MenuItem>
                        <MenuItem onClick={handleChat}>Messenger</MenuItem>
                        <MenuItem onClick={handleProfile}>My profile</MenuItem>

                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>
                </>
            )} */
}
