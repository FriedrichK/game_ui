import {Button, TextField} from "@mui/material";
import {useFormik} from "formik";
import {startGame} from "../../games/actions/startGame";

interface CreateNewGameForm {
  gameAPIEndpoint: string,
  handleGameCreation: Function
}

const CreateNewGameForm = ({gameAPIEndpoint, handleGameCreation}: CreateNewGameForm) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      user_name: "",
      password: '',
    },
    onSubmit: values => {
      startGame(gameAPIEndpoint, values.name)
        .then((response) => {
          handleGameCreation && handleGameCreation(response.data.game_id);
        });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div style={{paddingBottom: "8px", paddingTop: "8px"}}>
        <TextField
          id="name"
          label="enter a name for the game"
          onChange={formik.handleChange}
          style={{width: "100%"}}
          value={formik.values.name}
          variant="outlined"/>
      </div>
      <div style={{paddingBottom: "8px", paddingTop: "8px"}}>
        <TextField
          id="user_name"
          label="enter a user name for yourself"
          onChange={formik.handleChange}
          style={{width: "100%"}}
          value={formik.values.user_name}
          variant="outlined"/>
      </div>
      <div style={{paddingBottom: "8px", paddingTop: "8px"}}>
        <TextField
          id="password"
          label="enter a password"
          onChange={formik.handleChange}
          style={{width: "100%"}}
          value={formik.values.password}
          variant="outlined"/>
      </div>
      <div style={{alignItems: "center", display: "flex", paddingTop: "8px", width: "100%"}}>
        <Button
          type="submit"
          variant="contained">
          start new game
        </Button>
      </div>
    </form>
  );
}

export default CreateNewGameForm;
