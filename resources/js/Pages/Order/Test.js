import React, {useState, useEffect} from 'react'
import { InertiaLink, useForm, usePage } from '@inertiajs/inertia-react'
import SelectInput from '../Shared/SelectInput';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';


const Test = () => {
    const { data, setData, errors, post } = useForm({
        title: '',
        description: '',
        user_id: ''
    })

    const [moneyTotal, setMoneyTotal] = useState(0);
    const [hoursTotal, setHoursTotal] = useState(0);
    const { jobs, tasks1, tasks2, tasks3, engines } = usePage().props;
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
    const changeSearch = ({ target: {value} }) =>{
      setMoneyTotal(value);
    }

    useEffect(() => {

    });

    return (

        <Stack spacing={2} sx={{ width: 300 }}>
            <p>Cost: from {moneyTotal} $</p>
            <p>Time: from {hoursTotal} hours</p>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={jobs.map((option) => option.name)}
                renderInput={(params) => (
                    <TextField
                        onChange={changeSearch}
                        {...params}
                        label="Search job type"
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                    />
                )}
            />
        </Stack>

    )
}
export default Test
