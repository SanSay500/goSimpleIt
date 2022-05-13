import React from "react";
import Create from "@/Pages/Order/Create";
import { myJson } from "../../mocks/review-data.js";
import ReviewContainer from "./review-container";
import PortfolioContainer from "./portfolio-container";
import AboutContainer from "./about-container";
import { InertiaLink, Link } from "@inertiajs/inertia-react";

const Main = (props) => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="header-logo">
                            <img src="/images/logo-upwork.svg" alt="Logo"></img>
                        </div>
                        <div className="header-block"></div>
                        <div className="header-auth">
                            {props.auth.user ? (
                                <Link
                                    href={route("dashboard")}
                                    className="auth-link"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route("login")}
                                        className="auth-link link"
                                    >
                                        Log in
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
            <section className="hero">
                <div className="container mx-auto">
                    <div className="hero-wrapper">
                        <h2 className="hero-title">
                            Find the perfect freelance services for your
                            business
                        </h2>
                        <div className="hero-cont">
                            <a className="hero-link link">Place an order</a>
                        </div>
                    </div>
                </div>
            </section>
            <PortfolioContainer portfolioList={myJson.portfolio} />
            <ReviewContainer reviewsList={myJson.reviews} />
            <AboutContainer />
            {/* <div className="container flex flex-col justify-center mx-auto">
                <div>
                    <h1 className="mb-8 text-3xl font-bold">
                        <InertiaLink
                            href={route("index")}
                            className="text-indigo-600 hover:text-indigo-700"
                        >
                            Orders
                        </InertiaLink>
                        <span className="font-medium text-indigo-600"> / </span>
                        Create
                    </h1>
                </div> */}

            <Create />
            <footer className="footer">
                <div className="container">
                    <div className="footer-wrapper">
                        <div className="footer-logo">
                            <img src="/images/logo-upwork.svg" alt="Logo"></img>
                        </div>
                            <ul className="contacts-networks">
                                <li className="network-item">
                                    <a href="#" className="network-link">
                                        <img
                                            src="/images/whatsapp.svg"
                                            alt="Whatsapp"
                                        />
                                    </a>
                                </li>
                                <li className="network-item">
                                    <a href="#" className="network-link">
                                        <img
                                            src="/images/telegram.svg"
                                            alt="Telegram"
                                        />
                                    </a>
                                </li>
                                <li className="network-item">
                                    <a href="#" className="network-link">
                                        <img src="/images/vk.svg" alt="Vk" />
                                    </a>
                                </li>
                                <li className="network-item">
                                    <a href="#" className="network-link">
                                        <img
                                            src="/images/youtube.svg"
                                            alt="Youtube"
                                        />
                                    </a>
                                </li>
                                <li className="network-item">
                                    <a href="#" className="network-link">
                                        <img
                                            src="/images/instagram.svg"
                                            alt="Instagram"
                                        />
                                    </a>
                                </li>
                            </ul>
                    </div>
                </div>
            </footer>

            {/*
            </div> */}
        </>
    );
};
export default Main;
