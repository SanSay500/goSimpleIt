import React, {useRef,useState} from "react";
import { usePage, useForm } from "@inertiajs/inertia-react";
import Container from "@/components/shared/container/container";
import style from "./userProfile.module.css";
import ButtonGreen from "@/components/shared/buttonGreen/buttonGreen";

export default function UserProfile() {

    const props = usePage().props;
    const logo = useRef();
    const name = useRef();

        const { data, setData, errors, post, processing } = useForm({
            name: props.auth.user.name,
            email: props.auth.user.email,
            description: props.auth.user.description,
            file:"",
        });
    const [toggleLogo, setToggleLogo] = useState("");
    const [readOnly, setReadOnly] = useState(true);
    
    const uploadFile = (e)=>{
        setData("file", e.target.files[0]);
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


    return (
        <Container>
            <form className={style.form} /*onSubmit={handleSubmit}*/>
                <div className={style.fileBlock}>
                    <div className={style.fileContainer}>
                        <input
                            className={style.fileInput}
                            id="uploaded-file"
                            type="file"
                            name="file"
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
                            ref={name}
                            type="text"
                            className={style.formInput}
                            label="Name"
                            name="name"
                            value={data.name}
                            readOnly={readOnly}
                            onChange={(e) => setData("name", e.target.value)}
                            placeholder="Name"
                        />
                    </label>

                    <label className={style.formLabel}>
                        Email
                        <input
                            type="email"
                            className={style.formInput}
                            label="email"
                            name="email"
                            value={data.email}
                            readOnly={readOnly}
                            onChange={(e) => setData("email", e.target.value)}
                            placeholder="Email"
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

                    {readOnly ? (
                        <ButtonGreen
                            classes={style.btn}
                            children={"Edit"}
                            type={"button"}
                            mouseDown={(e) => {
                                e.preventDefault();
                                setReadOnly(!readOnly);
                            }}
                        />
                    ) : (
                        <ButtonGreen
                            classes={style.btn}
                            children={"Save"}
                            type={"button"}
                            mouseDown={(e) => {
                                e.preventDefault();
                                setReadOnly(!readOnly);
                            }}
                        />
                    )}
                </div>
            </form>
        </Container>
    );
}
