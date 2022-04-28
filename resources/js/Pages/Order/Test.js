import React, {useState} from 'react'
import { InertiaLink, useForm, usePage } from '@inertiajs/inertia-react'
import SelectInput from '../Shared/SelectInput';

const Test = () => {
    const { data, setData, errors, post } = useForm({
        title: '',
        description: '',
        user_id: ''
    })

    const { tasks1_ids, task1_types, tasks2_ids, task2_types, tasks3, engines } = usePage().props;
    const [task1,setTask1] = useState();
    const [task2, setTask2] = useState();
    const [engine, setEngine] = useState();
    const [money, setMoney] = useState(0);
    const [hours, setHours] = useState(0);

    const changeTask1 = ({ target: { value } }) => {
        setTask1(value);
        setTask2('');
        //setMoney(0);
        //setTask2(0);
        //setHours(tasks1[value-1].minimum_time_in_hours);
        //setMoney(tasks1[value-1].minimum_price);
    };

    const changeTask2 = ({ target: { value } }) => {
        setTask2(value);
        setEngine('');
        //setMoney(0);
        //setHours(0);
        //setMoney(tasks2[value-1].minimum_price);
        //setHours(tasks2[value-1].minimum_time_in_hours);
    }

   const changeEngine = ({ target: {value} }) =>{
        setEngine(value);
        //setMoney(0);
        //setHours(0);
        setMoney(engines[value-1].minimum_price);
        setHours(engines[value-1].minimum_time_in_hours);
   }

   const countMoney= ({value}) => {
        console.log(tasks1[value-1].minimum_price);
        //console.log(tasks2[value-1].minimum_price);
        //console.log(tasks3[value-1].minimum_price);
    }

    return (
        <div className="container flex flex-col justify-center mx-auto">
            <p>Selected: {task1} {task2} {engine} </p>
                <p>Dollars: {money}</p>
                <p>Hours: {hours}</p>

            <SelectInput onChange={changeTask1}>
                {/*{!tasks1.type && <option/>}*/}
                {tasks1_ids.map((c, i) => (
                    <option value={c.id} key={i}>

                        {c.id}
                    </option>
                ))}
            </SelectInput>

            <SelectInput style={{display: task1 ? "block" : "none"}} onChange={changeTask2}>
                {!tasks2.type && <option/>}
                {tasks2.filter(c =>
                    (c.task1_id == task1))
                    .map((c, i) => (
                        <option value={c.id} key={i}>
                            {c.type}
                        </option>
                    ))}
            </SelectInput>
            <SelectInput style={{display: task1  ? "block" : "none"}} onChange={changeEngine}>
                {!engines.name && <option/>}
                {engines.map((c, i) => (
                    <option value={c.name} key={i}>
                        {c.name}
                    </option>
                ))}
            </SelectInput>
        </div>
    )
}
export default Test
