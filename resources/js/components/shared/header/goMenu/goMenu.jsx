import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import style from './goMenu.module.css'

export default function GoMenu() {
    const props = usePage().props;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    console.log(props.auth);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
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
    const handleChat= (e) => {
        e.preventDefault();
        Inertia.get(route('chatify'));
    };
    return (
        <div className={`${style.menuWrapper}`}>
            {props.auth &&(
                <>                            <Button
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
            </Menu></>

            )
            }

        </div>
    );
}
