import {styled} from "@mui/material/styles";
import {Button} from "@mui/material";

const StyleButton = styled(Button)(() => ({
    backgroundColor: '#FFE031',
    color: '#414141',
    height: 35,
    width: '80%',
    '&:hover': {
        opacity: 0.5,
        backgroundColor: '#FFE031',
    },
}));
export {StyleButton}