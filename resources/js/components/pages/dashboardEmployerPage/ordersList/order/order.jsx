import React from "react";
import { usePage } from "@inertiajs/inertia-react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import OrderProposal from "./orderProposal/orderProposal";
import style from "./order.module.css";
import BasicCard from "@/components/shared/activeTasks/basicCard/basicCard";
export default function Order(order, props) {
    const { proposalsForOrder } = usePage().props;
    return (
        <div className={`${style.cardContainer}`}>
                    <BasicCard key={order.id} props={order} classes={style.btn}/>
        </div>
        /* { <Container>
            <Card variant="outlined" key={order.id}>
                <CardContent>
                    <Typography sx={{ fontSize: 22 }} color="text.primary">
                        Order # {order.id}
                    </Typography>

                    <Typography sx={{ fontSize: 18 }} color="text.primary">
                        Title: {order.title}
                    </Typography>

                    <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                    >
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

                    {order.status != "Done" && order.status != "Cancelled" && (
                        <OrderProposal {...order} />
                    )}
                </CardContent>
            </Card>
        </Container> }  */
    );
}
