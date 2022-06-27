import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { usePage, Link } from "@inertiajs/inertia-react";

export default function BasicCard(props) {
    return (
        <div className="basic-card">
            <div className="basic-card__title">{props.props["title"]}</div>
            <div className="basic-card__description">
                {props.props["description"]}
            </div>
            <div className="basic-card__file">
                {props.props["file"] && (
                    <div>
                        <a className="text-green" href={props.props["file"]}>
                            Download
                        </a>{" "}
                        (jpg; 43.10 Kb)
                    </div>
                )}
            </div>

            <div className="basic-card__bottom-line">
                <div className="basic-card__money">
                    Budget:{" "}
                    <span className="text-green">{props.props["money"]}$</span>
                </div>
                <div className="basic-card__term">
                    Term:{" "}
                    <span className="text-green">{props.props["hours"]}h</span>
                </div>
            </div>
        </div>
        // <Card style variant="outlined" key={props.props['id']}>
        //     <CardContent>
        //         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        //             {props.props['title']}
        //         </Typography>
        //         <Typography sx={{ fontSize: 18 }}>
        //             Description
        //         <br/>
        //             {props.props['description']}
        //         </Typography>
        //         <Typography sx={{ mb: 1.5 }} color="text.secondary">
        //             Price: {props.props['money']}
        //         </Typography>
        //         <Typography variant="body2">
        //             File: {props.props['file']}s
        //         </Typography>
        //     </CardContent>
        //     <CardActions>
        //         <Link href={route('order.details', [props.props['id']])}
        //               className="p-2 bg-sky-500 text-bg font-medium text-gray-900 bg-blue rounded-full"
        //         >Learn more</Link>
        //     </CardActions>
        // </Card>
    );
}
