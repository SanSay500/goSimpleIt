import React, {useRef,useState} from "react";
import { usePage, useForm } from "@inertiajs/inertia-react";
import Container from "@/components/shared/container/container";
import style from "./userProfile.module.css";
import ButtonGreen from "@/components/shared/buttonGreen/buttonGreen";
import FlashMessages from "@/components/shared/flashMessages/flashMessages";

export default function UserProfile() {

    const props = usePage().props;
    const logo = useRef();
    const name = useRef();

        const { data, setData, errors, post, processing } = useForm({
            name: props.auth.user.name,
            email: props.auth.user.email,
            description: props.auth.user.description,
            avatar:"",
        });
    const [toggleLogo, setToggleLogo] = useState("");
    const [readOnly, setReadOnly] = useState(true);

    const uploadFile = (e)=>{
        setData("avatar", e.target.files[0]);
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=(event)=>{
            setToggleLogo(event.target.result);
            // const img = document.createElement("img");
            // logo.appendChild(img);
            // img.src = event.target.result;
            // img.alt = e.target.files[0].name;
        }

    }

    function handleSubmit(e){
        e.preventDefault();
        setReadOnly('true');
        post(
            route("user_update", props.auth.user.id),{
                preserveScroll: true,
                forceFormData: true,
                _method: "put",
            }
        );

    }


    return (
        <Container>
            <FlashMessages/>
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
                        <div className={style.logoContainer} ref={logo}>
                            {toggleLogo ? (
                                <img src={toggleLogo} alt="" />
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
                            {/* ÷ */}
                        </div>
                    </div>
                </div>

                <div className={style.inputsContainer}>
                    <label className={style.formLabel}>
                        Name
                        <input
                            required
                            ref={name}
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
                            // errors={errors.description}
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            placeholder="Tell about your skills"
                        />
                    </label>

                    {readOnly && (
                        <ButtonGreen
                            classes={style.btn}
                            children={"Edit"}
                            type={"button"}
                            mouseDown={(e) => {
                                e.preventDefault();
                                setReadOnly(!readOnly);
                            }}
                        />
                    )}
                    {!readOnly && (<ButtonGreen
                        classes={style.btn}
                        children={"Save"}
                        type={"submit"}
                    />
                        )}
                </div>
            </form>
        </Container>
    );
}
