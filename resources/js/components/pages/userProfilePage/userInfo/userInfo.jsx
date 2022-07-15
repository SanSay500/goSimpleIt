import React, {useState} from "react";
import {usePage, Link, useForm} from "@inertiajs/inertia-react";
import Container from "@/components/shared/container/container";
import style from "./userInfo.module.css";

export default function UserInfo() {
    const props = usePage().props;

    function goBack() {
        window.history.back();
    }

    let avatar = '';
    if (props.user.avatar) {
        avatar = `../storage/avatars/${props.user.avatar}`
    } else {
        avatar = '../storage/avatars/avatar.png'
    }

    return (
        <Container>
            <div className={style.container}>
                <div className={style.fileBlock}>
                    <div className={style.fileContainer}>
                        <div className={style.logoContainer}>
                            <img
                                className={style.img}
                                src={avatar}
                                alt="logo"
                            />
                        </div>
                    </div>
                </div>

                <div className={style.infoContainer}>
                    <div className={style.blockContainer}>
                        <p className={style.label}>Name</p>
                        <p className={style.info}>{props.user.name}</p>
                    </div>

                    <div className={style.blockContainer}>
                        <p className={style.label}>Email</p>
                        <p className={style.info}>{props.user.email}</p>
                    </div>

                    <div className={style.blockContainer}>
                        <p className={style.label}>Your skills</p>
                        <p className={style.info}>{props.user.description}</p>
                    </div>

                    <div className={style.btnContainer}>
                        <Link
                            as="button"
                            type="button"
                            onClick={goBack}
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
