import React, { useEffect } from "react";
import ButtonGreen from "@/components/shared/buttonGreen/buttonGreen";
import Container from "@/components/shared/container/container";
import Input from "@/components/shared/input/input";
import ValidationErrors from "@/components/shared/validationErrors/validationErrors";
import { Link, useForm } from "@inertiajs/inertia-react";
import style from "./register.module.css";
import { useState } from "react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        description: "",
        password: "",
        role: "Freelancer",
        currency: "EUR",
        password_confirmation: "",
    });

    const [roleChecked, setRoleChecked] = useState(data.role);
    const [currencyChecked, setCurrencyChecked] = useState(data.currency);

    const onHandleChange = (e) => {
        switch (e.target.name) {
            case "role":
                setRoleChecked(e.target.value);
                break;

            case "currency":
                setCurrencyChecked(e.target.value);
                break;
            default:
                break;
        }

        setData(e.target.name, e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    return (
        <Container>
            <ValidationErrors errors={errors} />

            <form onSubmit={submit} className={`${style.formPage} `}>
                <div className={`${style.loginFormRadio} `}>
                    <div className={`${style.radioContainer} `}>
                        <input
                            type="radio"
                            name="role"
                            value="Freelancer"
                            id="roleFreelancer"
                            className={`${style.registerRadio}`}
                            checked={
                                roleChecked === "Freelancer" ? true : false
                            }
                            onChange={onHandleChange}
                            required
                        />

                        <label
                            htmlFor="roleFreelancer"
                            className={`${style.radioLabel} `}
                        >
                            Freelancer
                        </label>
                    </div>

                    <div className={`${style.radioContainer} `}>
                        <input
                            type="radio"
                            name="role"
                            value="Employer"
                            className={`${style.registerRadio} `}
                            checked={roleChecked === "Employer" ? true : false}
                            onChange={onHandleChange}
                            required
                            id="roleEmployer"
                        />

                        <label
                            htmlFor="roleEmployer"
                            className={`${style.radioLabel} `}
                        >
                            Employer
                        </label>
                    </div>
                </div>

                <div className={`${style.loginFormRadio} `}>
                    <div className={`${style.radioContainer} `}>
                        <Input
                            type="radio"
                            name="currency"
                            value="EUR"
                            id="currencyEUR"
                            className={`${style.registerRadio} `}
                            checked={currencyChecked === "EUR" ? true : false}
                            handleChange={onHandleChange}
                            required
                        />

                        <label
                            htmlFor="currencyEUR"
                            className={`${style.radioLabel} `}
                        >
                            EUR
                        </label>
                    </div>

                    <div className={`${style.radioContainer} `}>
                        <Input
                            type="radio"
                            name="currency"
                            id="currencyUSD"
                            value="USD"
                            className={`${style.registerRadio} `}
                            checked={currencyChecked === "USD" ? true : false}
                            handleChange={onHandleChange}
                            required
                        />

                        <label
                            htmlFor="currencyUSD"
                            className={`${style.radioLabel} `}
                        >
                            USD
                        </label>
                    </div>

                    <div className={`${style.radioContainer} `}>
                        <Input
                            type="radio"
                            name="currency"
                            id="currencyGBP"
                            value="GBP"
                            className={`${style.registerRadio} `}
                            checked={currencyChecked === "GBP" ? true : false}
                            handleChange={onHandleChange}
                            required
                        />

                        <label
                            htmlFor="currencyGBP"
                            className={`${style.radioLabel} `}
                        >
                            GBP
                        </label>
                    </div>
                </div>

                <div className={`${style.loginFormItem} `}>
                    <Input
                        type="text"
                        name="name"
                        value={data.name}
                        className={`${style.loginInput} `}
                        placeholder="Name"
                        autoComplete="name"
                        // isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className={`${style.loginFormItem} `}>
                    <Input
                        type="email"
                        name="email"
                        value={data.email}
                        className={`${style.loginInput} `}
                        placeholder="E-mail"
                        autoComplete="username"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className={`${style.loginFormItem} `}>
                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className={`${style.loginInput} `}
                        placeholder="Password"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className={`${style.loginFormItem} `}>
                    <Input
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className={`${style.loginInput} `}
                        placeholder="Confirm password"
                        handleChange={onHandleChange}
                        required
                    />
                </div>

                <div className={`${style.loginFormItem} `}>
                    <div className="flex flex-col items-start">
                        <textarea
                            name="description"
                            value={data.description}
                            className={`${style.loginInput} `}
                            placeholder={
                                data.role === "Freelancer"
                                    ? "Tell about your skills"
                                    : "Tell about yourself"
                            }
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            required
                        />
                    </div>
                </div>

                <div className={`${style.loginFormCont} `}>
                    <Link
                        href={route("login")}
                        className={`${style.formLink} `}
                    >
                        Already registered?
                    </Link>

                    <ButtonGreen processing={processing}>Register</ButtonGreen>
                </div>
            </form>
        </Container>
    );
}
