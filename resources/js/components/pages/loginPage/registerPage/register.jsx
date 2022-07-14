import React, { useEffect } from "react";
import ButtonGreen from "@/components/shared/buttonGreen/buttonGreen";
import Container from "@/components/shared/container/container";
import Input from "@/components/shared/input/input";
import ValidationErrors from "@/components/shared/validationErrors/validationErrors";
import { Link, useForm } from "@inertiajs/inertia-react";
import style from "./register.module.css";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        description: "",
        password: "",
        role: "Freelancer",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value,
            event.target.type === "radio"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <Container>
            <ValidationErrors errors={errors} />

            <form onSubmit={submit} className={`${style.formPage} `}>
                <div className={`${style.loginFormRadio} `}>
                    <div className={`${style.radioContainer} `}>
                        <Input
                            type="radio"
                            name="role"
                            value="Freelancer"
                            id="radio1"
                            className={`${style.registerRadio} `}
                            checked
                            handleChange={onHandleChange}
                            required
                        />
                        <label
                            htmlFor="radio1"
                            className={`${style.radioLabel} `}
                        >
                            Freelancer
                        </label>
                    </div>
                    <div className={`${style.radioContainer} `}>
                        <Input
                            type="radio"
                            name="role"
                            value="Employer"
                            className={`${style.registerRadio} `}
                            handleChange={onHandleChange}
                            required
                            id="radio2"
                        />
                        <label
                            htmlFor="radio2"
                            className={`${style.radioLabel} `}
                        >
                            Employer
                        </label>
                    </div>

                    {/* <SelectInput
                        name="role"
                        value={data.role}
                        onChange={(e) => {
                            console.log(e.target.value);
                            setData("role", e.target.value)}}
                        required
                    >
                        <option key="1" value="Freelancer">
                            Freelancer
                        </option>

                        <option key="2" value="Employer">
                            Employer
                        </option>
                    </SelectInput> */}
                </div>
                <div className={`${style.loginFormItem} `}>
                    <Input
                        type="text"
                        name="name"
                        value={data.name}
                        className={`${style.loginInput} `}
                        placeholder="Name"
                        autoComplete="name"
                        isFocused={true}
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
