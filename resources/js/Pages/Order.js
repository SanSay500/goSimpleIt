import React from 'react';
import {Head, Link, usePage} from '@inertiajs/inertia-react';
import Container from "@mui/material/Container";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import OrderProposal from "@/Pages/OrderProposal";



export default function Order(order, props) {
    const {proposalsForOrder} = usePage().props;
    return (
        <Container>
            <Card variant="outlined" key={order.id}>
            <CardContent >
                <Typography sx={{ fontSize: 22 }} color="text.primary">
                    Order # {order.id}
                </Typography>
                <Typography sx={{ fontSize: 18 }} color="text.primary">
                   Title: {order.title}
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Decription: {order.description}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Money: {order.money} $
                </Typography>
                <Typography variant="body2">
                    Term: {order.hours} days
                </Typography>
                <Typography variant="body2">
                    Status: {order.status}
                </Typography>
                {order.status != 'Done' && order.status != 'Cancelled' &&
                    <OrderProposal {...order}/>
                }

            </CardContent>

            </Card>

        </Container>
    )
}
