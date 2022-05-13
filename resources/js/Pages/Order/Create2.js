import React, {useState, useEffect, useRef} from 'react'
import {InertiaLink, usePage, useForm} from '@inertiajs/inertia-react'
import SelectInput from '../Shared/SelectInput';
import FileInput from '../Shared/FileInput';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';


const Create = () => {

    const {data, setData, errors, post} = useForm({
        title: '',
        description: '',
        money: '',
        hours: '',
        file: '',
        user_id: '1'
    })

    const moneyRef = useRef();
    const hoursRef = useRef();
    const [selectedFile, setSelectedFile] = useState(null);
    const {tasks} = usePage().props;
    const [moneyTotalSearch, setMoneyTotalSearch] = useState(0);
    const [hoursTotalSearch, setHoursTotalSearch] = useState(0);

    function handleSubmit(e) {
        data.money=moneyRef.current;
        data.hours=hoursRef.current;
        post(route('order.store', data, {
            forceFormData: true,
            _method: 'put',
        }));

    }

    const changeSearch = ({ target: {value} }) =>{
        setMoneyTotalSearch(0);
        setHoursTotalSearch(0);
        let job_found = tasks.find(e => (e.name == value));
        if (job_found) {
            setMoneyTotalSearch(tasks.find(e => (e.name == value)).money);
            setHoursTotalSearch(tasks.find(e => (e.name == value)).time);
        }
    }

    useEffect(() => {
        moneyRef.current= moneyTotalSearch;
        hoursRef.current= hoursTotalSearch;
        console.log(data);

    });


    return (
        <div className="container flex flex-col justify-center mx-auto">

            <div className="max-w-6xl p-8 bg-white rounded shadow form-section">
                <form name="createForm" onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-between">

                            <Stack spacing={2} sx={{ width: 300 }}>
                                <p>Cost: from {moneyTotalSearch} $</p>
                                <p>Time: from {hoursTotalSearch} hours</p>

                                <p> Search by jobs </p>

                                <Autocomplete
                                    freeSolo
                                    id="search-job auto"
                                    disableClearable
                                    options={tasks.map((option) => option.name)}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            onSelect={changeSearch}
                                            label="Start typing job..."
                                            InputProps={{
                                                ...params.InputProps,
                                                type: 'search',
                                            }}
                                        />
                                    )}
                                />
                            </Stack>

                        </div>
                        <div className="mb-0">
                            <label className="">Title</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2"
                                label="Title"
                                name="title"
                                value={data.title}
                                onChange={(e) =>
                                    setData('title', e.target.value)
                                }
                            />

                            <label className="">Description</label>
                            <textarea
                                type="text"
                                className="w-full rounded"
                                label="description"
                                name="description"
                                errors={errors.description}
                                value={data.description}
                                onChange={(e) =>
                                    setData('description', e.target.value)
                                }
                            />
                            <span className="text-red-600">
                                    {errors.description}
                                </span>
                        </div>
                        <label className="">Add file with job description</label>

                        <input
                            type="file"
                            onChange={(e) => {
                                //setSelectedFile(e.target.files[0]);
                                setData('file', e.target.files[0]);
                            }
                            }
                        />
                    </div>

                    <div className="mt-4">
                        <button
                            type="submit"
                            className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                        >
                            Make Order
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Create
