import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {usePage, Link} from "@inertiajs/inertia-react";

export default function BasicCard(props) {

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.props['title']}
                </Typography>

                <Typography sx={{ fontSize: 18 }}>
                    Description
                <br/>
                    {props.props['description']}
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Price: {props.props['money']}
                </Typography>

                <Typography variant="body2">
                    File: {props.props['file']}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={route('order.details', [props.props['id']])}
                      className="bg-sky-500 text-bg font-medium text-gray-900 bg-blue"
                >Learn more</Link>
            </CardActions>
        </Card>
    );
}
