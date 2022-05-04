import React, {useState, useEffect} from 'react'
import { InertiaLink, useForm, usePage } from '@inertiajs/inertia-react'
import SelectInput from '../Shared/SelectInput';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';



const SearchJob = () => {
    const { data, setData, errors, post } = useForm({
        title: '',
        description: '',
        user_id: ''
    })

    const [moneyTotal, setMoneyTotal] = useState(0);
    const [hoursTotal, setHoursTotal] = useState(0);
    const { jobs, tasks1, tasks2, tasks3, engines } = usePage().props;

    const changeSearch = ({ target: {value} }) =>{
        setMoneyTotal(0);
        setHoursTotal(0);
         let job_found = jobs.find(e => (e.name == value));
     if (job_found) {
         setMoneyTotal(jobs.find(e => (e.name == value)).money);
         setHoursTotal(jobs.find(e => (e.name == value)).time);
     }
    }

    useEffect(() => {

    });

    return (

        <Stack spacing={2} sx={{ width: 300 }}>
            <p>Cost: from {moneyTotal} $</p>
            <p>Time: from {hoursTotal} hours</p>

            <p> Search by jobs </p>

            <Autocomplete
                freeSolo
                id="search-job auto"
                disableClearable
                options={jobs.map((option) => option.name)}
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

    )
}
export default SearchJob
