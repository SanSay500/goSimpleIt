import React from "react";
import HeaderLogin from "@/components/shared/headers/headerLogin/headerLogin";
import Footer from "@/components/shared/footer/footer";
import style from "./guest.module.css";
export default function Guest({ children }) {
    return (
        <>
            <HeaderLogin />

            <div className={`${style.loginContainer} `}>
                <div className={`${style.loginWrapper} `}>{children}</div>
            </div>

            <Footer />
        </>
    );
}
