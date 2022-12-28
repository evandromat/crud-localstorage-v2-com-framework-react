import React from 'react'
import { Link, Typography } from "@mui/material";

export default function Copyright(props) {
    return (
        <Typography
            variant="body2"
            align="center"
            {...props}

            sx={{color:'#fff'}}
        >
            {"Copyright © "}
            <Link  href="tel:94992928041" >
                Evandro Rocha
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}