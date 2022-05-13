import SelectInput from '../Shared/SelectInput';
import {usePage} from "@inertiajs/inertia-react";
import React, {useState, useEffect, useRef} from 'react'

const Create = () => {
    const {tasks1, tasks2, tasks3, engines} = usePage().props;
    const [hoursTotal, setHoursTotal] = useState(0);
    const [moneyTotal, setMoneyTotal] = useState(0);
    const [hours1, setHours1] = useState(0);
    const [hours2, setHours2] = useState(0);
    const [hours3, setHours3] = useState(0);

    const [money1, setMoney1] = useState(0);
    const [money2, setMoney2] = useState(0);
    const [money3, setMoney3] = useState(0);
    const [task1, setTask1] = useState(0);
    const [task2, setTask2] = useState(0);
    const [engine, setEngine] = useState(0);

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
        moneyRef.current = moneyTotalSearch;
        hoursRef.current = hoursTotalSearch;
        console.log(data);

    });
    return (
        <div>
            <p>Cost: from {moneyTotal} $</p>
            <p>Time: from {hoursTotal} hours</p>
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
    )
}
export default SelectTasks
