import React, { useEffect } from "react";
import Button from "@/components/shared/button/button";
import Checkbox from "@/components/pages/loginPage/checkbox/checkbox";
import Guest from "@/components/shared/guest/guest";
import Input from "@/components/shared/input/input";
import Label from "@/components/shared/label/label";
import ValidationErrors from "@/components/shared/validationErrors/validationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import style from "./login.module.css";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

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

    return (
        <Guest>
            {console.log(status)}
            <Head title="Log in" />
            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <ValidationErrors errors={errors} />

            <form onSubmit={submit} className={`${style.formPage} `}>
                <div>
                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className={`${style.loginInput} `}
                        placeholder="E-mail"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className={`${style.loginFormItem} `}>
                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        placeholder="Password"
                        className={`${style.loginInput} `}
                        autoComplete="current-password"
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            value={data.remember}
                            handleChange={onHandleChange}
                            className={`${style.formCheckbox} `}
                        />

                        <span className={`${style.formCheckboxLabel} `}>
                            Remember me
                        </span>
                    </label>
                </div>

                <div
                    style={{ justifyContent: "space-between" }}
                    className="flex items-center justify-end"
                >
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

                    <Button
                        className={`${style.formBtn} `}
                        processing={processing}
                    >
                        Log in
                    </Button>
                </div>
            </form>
        </Guest>
    );
}
