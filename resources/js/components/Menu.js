import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {Inertia} from "@inertiajs/inertia";
import {InertiaLink, usePage, Link} from "@inertiajs/inertia-react";

export default function GoMenu () {
const props = usePage().props;
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);

const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
};
const handleClose = () => {
    setAnchorEl(null);
};
const handleLogout=() => {
    Inertia.post('/logout');
};
const handleDashboard=() => {
    props.auth.user.role ==="Freelancer" ?  Inertia.get('/dashboard/frl') : Inertia.get('/dashboard/emp')
};
const handleProfile = (e) => {
    e.preventDefault();
    Inertia.get(route("user_profile", props.auth.user.id));
}

    return (
    <div>
        <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            Menu
        </Button>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={handleDashboard}>Dashboard</MenuItem>
            <MenuItem onClick={handleProfile}>My profile</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
    </div>
)
}
