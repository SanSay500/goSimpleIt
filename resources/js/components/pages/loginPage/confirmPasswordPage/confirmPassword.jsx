import React, { useEffect } from "react";
import Container from "@/components/shared/container/container";
import Input from "@/components/shared/input/input";
import Label from "@/components/shared/label/label";
import ValidationErrors from "@/components/shared/validationErrors/validationErrors";
import { useForm } from "@inertiajs/inertia-react";

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("password.confirm"));
    };

    return (
        <Container>
            <div className="mb-4 text-sm text-gray-600">
                This is a secure area of the application. Please confirm your
                password before continuing.
            </div>

            <ValidationErrors errors={errors} />

            <form onSubmit={submit}>
                <div className="mt-4">
                    <Label forInput="password" value="Password" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        isFocused={true}
                        handleChange={onHandleChange}
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <ButtonGreen className="ml-4" processing={processing}>
                        Confirm
                    </ButtonGreen>
                </div>
            </form>
        </Container>
    );
}
