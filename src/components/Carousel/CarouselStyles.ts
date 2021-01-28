import { makeStyles } from '@material-ui/core/styles';

const cardStyle = makeStyles(() => ({
    carouselContainer: {
        display: "flex",
        '& div': {
            margin: "6px",
        },
        width: "100%",
        flexDirection: "row",
        position:"relative",
        transition: "0.5s",
    },
    mainContainer: {
        marginTop:"2em"

    },
    leftButton: {
        position: "absolute",
        top: "35%",
        left: 0,
        width: "5%",
        height:"10%",
        zIndex: 10,
        cursor:"pointer"

    },
    rightButton: {
        position: "absolute",
        top: "35%",
        right: 0,
        width: "5%",
        height:"10%",
        zIndex: 10,
        cursor:"pointer"
    },
    endItem: {
        alignSelf: "flex-end"
    },
    online: {
        textAlign: "right",
        flexGrow: 1
    }
}));

export default cardStyle