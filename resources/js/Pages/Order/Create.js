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
        task1_id: '',
        task2_id: '',
        engine_id: '',
        money: '',
        hours: '',
        user_id: '1'
    })

    const moneyRef = useRef();
    const hoursRef = useRef();
    const {jobs, tasks1, tasks2, tasks3, engines} = usePage().props;
    const [task1, setTask1] = useState(0);
    const [task2, setTask2] = useState(0);
    const [engine, setEngine] = useState(0);
    const [moneyTotal, setMoneyTotal] = useState(0);
    const [moneyTotalSearch, setMoneyTotalSearch] = useState(0);
    const [money1, setMoney1] = useState(0);
    const [money2, setMoney2] = useState(0);
    const [money3, setMoney3] = useState(0);
    const [hoursTotal, setHoursTotal] = useState(0);
    const [hoursTotalSearch, setHoursTotalSearch] = useState(0);
    const [hours1, setHours1] = useState(0);
    const [hours2, setHours2] = useState(0);
    const [hours3, setHours3] = useState(0);

    const changeTask1 = ({target: {value}}) => {
        setTask1(value);
        setData('task1_id', value);
        setTask2('');
        setMoney1(0);
        setHours1(0);
        setMoney1(tasks1[value - 1].minimum_price);
        setHours1(tasks1[value - 1].minimum_time_in_hours);
    };

    const changeTask2 = ({target: {value}}) => {
        setTask2(value);
        setData('task2_id', value);
        setEngine(1);
        setMoney2(0);
        setHours2(0);
        setMoney2(tasks2[value - 1].minimum_price);
        setHours2(tasks2[value - 1].minimum_time_in_hours);
    }

    const changeEngine = ({target: {value}}) => {
        setEngine(value);
        setData('engine_id', value);
        setHours3(0);
        setMoney3(0);
        setMoney3(engines[value - 1].minimum_price);
        setHours3(engines[value - 1].minimum_time_in_hours);

    }

    function handleSubmit(e) {
        data.money=moneyRef.current;
        data.hours=hoursRef.current;
        post(route('order.store'));
    }

    const changeSearch = ({ target: {value} }) =>{
        setMoneyTotalSearch(0);
        setHoursTotalSearch(0);
        let job_found = jobs.find(e => (e.name == value));
        if (job_found) {
            setMoneyTotalSearch(jobs.find(e => (e.name == value)).money);
            setHoursTotalSearch(jobs.find(e => (e.name == value)).time);
        }
    }
    const hideChooseByCategory = () => {

    }

    useEffect(() => {
        if (task2 == 0) {
            setMoney2(0);
            setHours2(0);
        }
        if (task1 == 0) {
            setMoneyTotal(0);
            setHoursTotal(0);
        }
        if (task1 || task2) {
            setMoneyTotal(money1 + money2 + money3);
            setHoursTotal(hours1 + hours2 + hours3);
        }
        if (!task1) {
            setEngine(null);
        }
        moneyRef.current= moneyTotal;
        hoursRef.current= hoursTotal;

    });


    return (
        <div className="container flex flex-col justify-center mx-auto">

            {/*<p>Selected: t1-{task1} t2-{task2} t3-{engine} </p>*/}


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
                                    options={jobs.map((option) => option.name)}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            onFocus={hideChooseByCategory}
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
                            <div>
                            <label>... or Choose by Category </label>
                            <SelectInput name="task1_id"
                                         errors={errors.task1_id}
                                         onChange={changeTask1}
                                         value={data.task1_id}
                            >
                                <option></option>
                                {tasks1.map((c, i) => (
                                    <option value={c.id} key={i}>
                                        {c.type}
                                    </option>
                                ))}
                            </SelectInput>

                            <label
                                style={{display: (task1 && tasks2.find(c => (c.task1_id == task1))) ? "block" : "none"}}>Choose
                                job category </label>
                            <SelectInput name="task2_id"
                                         style={{display: (task1 && tasks2.find(c => (c.task1_id == task1))) ? "block" : "none"}}
                                         onChange={changeTask2}
                            >
                                <option></option>
                                {tasks2.filter(c =>
                                    (c.task1_id == task1))
                                    .map((c, i) => (
                                        <option value={c.id} key={i}>
                                            {c.type}
                                        </option>
                                    ))}
                            </SelectInput>

                            <label style={{display: engine || (task1 && !task2) ? "block" : "none"}}>Choose job
                                engine </label>
                            <SelectInput name="engine_id"
                                         style={{display: engine || (task1 && !task2) ? "block" : "none"}}
                                         onChange={changeEngine}>
                                <option></option>
                                {engines.map((c, i) => (
                                    <option value={c.id} key={i}>
                                        {c.name}
                                    </option>
                                ))}
                            </SelectInput>


                            <span className="text-red-600">
                                    {errors.title}
                                </span>

                        </div>
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
                        <FileInput/>
                    </div>
                    <p>Cost: from {moneyTotal} $</p>
                    <p>Time: from {hoursTotal} hours</p>
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
