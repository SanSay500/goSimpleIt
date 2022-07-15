import React, { useState } from "react";
import { usePage, Link, useForm } from "@inertiajs/inertia-react";
import Container from "@/components/shared/container/container";
import style from "./userProfile.module.css";
import ButtonGreen from "@/components/shared/buttonGreen/buttonGreen";
import FlashMessages from "@/components/shared/flashMessages/flashMessages";

export default function UserProfile() {
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
            <FlashMessages />

            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.fileBlock}>
                    <div className={style.fileContainer}>
                        <input
                            accept="image/*"
                            className={style.fileInput}
                            id="uploaded-file"
                            type="file"
                            name="avatar"
                            onChange={(e) => {
                                uploadFile(e);
                            }}
                        />

                        <div className={style.logoContainer}>
                            {toggleLogo ? (
                                <img
                                    className={style.img}
                                    src={toggleLogo}
                                    alt="logo"
                                />
                            ) : (
                                <>
                                    <img
                                        src="/images/downloadLogo.svg"
                                        alt="logo"
                                        className={style.logoImg}
                                    />
                                    <span className={style.fileText}>
                                        Download logo
                                    </span>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                <div className={style.inputsContainer}>
                    <label className={style.formLabel}>
                        Name
                        <input
                            required
                            type="text"
                            className={style.formInput}
                            label="Name"
                            name="name"
                            value={data.name}
                            readOnly={readOnly}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                    </label>

                    <label className={style.formLabel}>
                        Email
                        <input
                            required
                            type="email"
                            className={style.formInput}
                            label="email"
                            name="email"
                            value={data.email}
                            readOnly={readOnly}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                    </label>

                    <label className={style.formLabel}>
                        Your skills
                        <textarea
                            type="text"
                            className={style.formInput}
                            label="description"
                            name="description"
                            readOnly={readOnly}
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            placeholder="Tell about your skills"
                        />
                    </label>

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

                        {readOnly && (
                            <ButtonGreen
                                children={"Edit"}
                                type={"button"}
                                mouseDown={(e) => {
                                    e.preventDefault();
                                    setReadOnly(!readOnly);
                                }}
                            />
                        )}
                        {!readOnly && (
                            <ButtonGreen children={"Save"} type={"submit"} />
                        )}
                    </div>
                </div>
            </form>
        </Container>
    );
}
