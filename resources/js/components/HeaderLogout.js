import { InertiaLink, Link } from "@inertiajs/inertia-react";
import React from "react";
import Typography from "@mui/material/Typography";
import GoMenu from "@/components/Menu";

const HeaderDashboardContainer = (title) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <div className="header-logo">
                        <Link href="/">
                            <img src="/images/logo-upwork.svg" alt="Logo"></img>
                        </Link>
                    </div>
                    <Typography variant="overline" sx={{ fontSize: 25 }}>
                        {title.title}
                    </Typography>

                    <GoMenu />
                </div>
            </div>
        </header>
    );
};
export default HeaderDashboardContainer;
