import {makeStyles} from '@material-ui/core/styles';

const cardStyle = makeStyles((theme) => ({
    card: {
      width: 350,
    },
    title: {
      fontSize: "16px",
      flexGrow: 1,
      fontWeight:700
    },
    image: {
        width:"100%",
    },
    flexContainer: {
        display: "flex",
        marginTop: "0.5em",
        flexDirection: "row",
        width: "100%"
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