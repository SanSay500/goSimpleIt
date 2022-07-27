import React, { useEffect } from "react";
import ButtonGreen from "@/components/shared/buttonGreen/buttonGreen";
import Checkbox from "@/components/pages/loginPage/checkbox/checkbox";
import Container from "@/components/shared/container/container";
import Input from "@/components/shared/input/input";
import ValidationErrors from "@/components/shared/validationErrors/validationErrors";
import { Link, useForm } from "@inertiajs/inertia-react";
import style from "./login.module.css";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    return (
        <Container styleBtn={style.btn}>
            <ValidationErrors errors={errors} />

            <form onSubmit={submit} className={`${style.form} `}>
                <Input
                    type="text"
                    name="email"
                    value={data.email}
                    className={`${style.input} `}
                    placeholder="E-mail"
                    autoComplete="username"
                    isFocused={true}
                    handleChange={onHandleChange}
                />

                <Input
                    type="password"
                    name="password"
                    value={data.password}
                    placeholder="Password"
                    className={`${style.input} `}
                    autoComplete="current-password"
                    handleChange={onHandleChange}
                />

                <label className={`${style.checkboxLabel} `}>
                    <Checkbox
                        name="remember"
                        value={data.remember}
                        handleChange={onHandleChange}
                        className={`${style.checkbox} `}
                    />
                    Remember me
                </label>

                <div className={style.btnContainer}>
                    <div>
                        <Link
                            href={route("register")}
                            className={`${style.formLink} `}
                        >
                            Register
                        </Link>
                    </div>

                    {canResetPassword && (
                        <div>
                            <Link
                                href={route("password.request")}
                                className={`${style.formLink} `}
                            >
                                Forgot your password?
                            </Link>
                        </div>
                    )}

                    <ButtonGreen
                        classes={style.btnLogin}
                        processing={processing}
                    >
                        Log in
                    </ButtonGreen>
                </div>
            </form>
        </Container>
    );
}
