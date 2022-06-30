import React from "react";
import Button from "@/components/shared/buttonGreen/buttonGreen";
import Guest from "@/components/shared/guest/guest";
import Input from "@/components/shared/input/input";
import ValidationErrors from "@/components/shared/validationErrors/validationErrors";
import { Head, useForm } from "@inertiajs/inertia-react";
import style from "./forgotPassword.module.css";
export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <Guest>
            <Head title="Forgot Password" />
            <div className={`${style.formPage} `}>
                <div className={`${style.formText} `}>
                    Forgot your password? No problem. Just let us know your
                    email address and we will email you a password reset link
                    that will allow you to choose a new one.
                </div>

                {status && (
                    <div className="mb-4 font-medium text-sm text-green-600">
                        {status}
                    </div>
                )}

                <ValidationErrors errors={errors} />

                <form onSubmit={submit}>
                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className={`${style.loginInput} `}
                        placeholder="E-mail"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />

                    <div className="flex items-center justify-end mt-4">
                        <ButtonGreen
                            // className={`${style.formBtn} `}
                            processing={processing}
                        >
                            Email Password Reset Link
                        </ButtonGreen>
                    </div>
                </form>
            </div>
        </Guest>
    );
}