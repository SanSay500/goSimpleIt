import React, { useState } from "react";
import { usePage, Link, useForm } from "@inertiajs/inertia-react";
import Container from "@/components/shared/container/container";
import style from "./userInfo.module.css";
import ButtonGreen from "@/components/shared/buttonGreen/buttonGreen";
import FlashMessages from "@/components/shared/flashMessages/flashMessages";

export default function UserInfo() {
    const props = usePage().props;
    const { data, setData, errors, post, processing } = useForm({
        name: props.auth.user.name,
        email: props.auth.user.email,
        description: props.auth.user.description,
        avatar: props.auth.user.avatar,
    });

    const [toggleLogo, setToggleLogo] = useState(data.avatar);
    const [readOnly, setReadOnly] = useState(true);

    const uploadFile = (e) => {
        setData("avatar", e.target.files[0]);

        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);

        reader.onload = (event) => {
            setToggleLogo(event.target.result);
        };
    };

    function handleSubmit(e) {
        e.preventDefault();
        setReadOnly(true);
        post(route("user_update", props.auth.user.id), {
            preserveScroll: true,
            forceFormData: true,
            _method: "put",
        });
    }

    function Goback() {
        window.history.back();
    }

    return (
        <Container>
            <div className={style.container}>
                <div className={style.fileBlock}>
                    <div className={style.fileContainer}>
                        <div className={style.logoContainer}>
                            <img
                                className={style.img}
                                src={toggleLogo}
                                alt="logo"
                            />
                        </div>
                    </div>
                </div>

                <div className={style.infoContainer}>
                    <div className={style.blockContainer}>
                        <p className={style.label}>Name</p>
                        <p className={style.info}>{data.name}</p>
                    </div>

                    <div className={style.blockContainer}>
                        <p className={style.label}>Email</p>
                        <p className={style.info}>{data.email}</p>
                    </div>

                    <div className={style.blockContainer}>
                        <p className={style.label}>Your skills</p>
                        <p className={style.info}>{data.description}</p>
                    </div>

                    <div className={style.btnContainer}>
                        <Link
                            as="button"
                            type="button"
                            onClick={Goback}
                            className={`${style.buttonBack}`}
                        >
                            <img
                                src="/images/arrowLeft.svg"
                                alt=""
                                className={`${style.buttonBackImg}`}
                            />
                            Back
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    );
}
