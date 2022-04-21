import { InertiaLink, useForm } from "@inertiajs/inertia-react";
const Create = () => {

    const { data, setData, errors, post } = useForm({
        title: "",
        description: "",
        user_id:"",
    });
    function handleSubmit(e) {
        e.preventDefault();
        let k=document.querySelector('.user_id_input').defaultValue;
        console.log(k);
        data.user_id=k;
        console.log(data);
        post(route("order.store"));
    }
    function handleChange(event) {
        setState({value: event.target.value});
    }
    const state = {value: ''};

    return (
        <div className="mt-20">
            <div className="container flex flex-col justify-center mx-auto">
                <div>
                    <h1 className="mb-8 text-3xl font-bold">
                        Orders
                        <span className="font-medium text-indigo-600"> / </span>
                        Create
                    </h1>
                </div>
                <div className="max-w-6xl p-8 bg-white rounded shadow form-section">
                    <form name="createForm" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <div className="mb-4">
                                <label className="">Type of Job</label>
                                <select value={state.value} onChange={handleChange}>
                                    <option ></option>
                                </select>

                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="">Title</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2"
                                label="Title"
                                name="title"
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                            />

                            <input hidden
                                   type="text"
                                   className="user_id_input"
                                   label="user_id"
                                   name="user_id"
                                   defaultValue="1"
                            />
                            <span className="text-red-600">
                                    {errors.title}
                                </span>

                            <div className="mb-0">
                                <label className="">Description</label>
                                <textarea
                                    type="text"
                                    className="w-full rounded"
                                    label="description"
                                    name="description"
                                    errors={errors.description}
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.description}
                                </span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
);
};
export default Create;
