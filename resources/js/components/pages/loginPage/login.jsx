import React, { useEffect } from "react";
import Button from "@/components/shared/button/button";
import Checkbox from "@/components/pages/loginPage/checkbox/checkbox";
import Guest from "@/components/shared/guest/guest";
import Input from "@/components/shared/input/input";
import Label from "@/components/shared/label/label";
import ValidationErrors from "@/components/shared/validationErrors/validationErrors";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

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
            <Head title="Log in" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div>
                    <Label forInput="email" value="Email" />

                    <Input
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
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
                        />

                        <span className="ml-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                </div>

                <div
                    style={{ justifyContent: "space-between" }}
                    className="flex items-center justify-end mt-4"
                >
                    <div>
                        <Link
                            href={route("register")}
                            className="ml-4 text-sm text-gray-700 underline"
                        >
                            Register
                        </Link>
                    </div>

                    {canResetPassword && (
                        <div>
                            <Link
                                href={route("password.request")}
                                className="underline text-sm text-gray-600 hover:text-gray-900"
                            >
                                Forgot your password?
                            </Link>
                        </div>
                    )}

                    <Button className="ml-4" processing={processing}>
                        Log in
                    </Button>
                </div>
            </form>
        </Guest>
    );
}
