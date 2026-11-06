import { Box, Typography } from "@mui/material";

export default function PdfError({ error }) {

    return (

        <Box
            sx={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >

            <Typography color="error">

                {error?.message}

            </Typography>

        </Box>

    );

}