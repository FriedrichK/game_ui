import * as Yup from "yup";
import {useFormik} from "formik";
import {startGame} from "../actions/startGame";
import {Button, TextField} from "@mui/material";
import {createPlayer} from "../../players/actions/createPlayer";

const UserRegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

interface JoinGamePageMenuFormProps {
  gameAPIEndpoint: string,
  gameID: string,
  handlePlayerCreation: Function
}

const JoinGamePageMenuForm = ({gameAPIEndpoint, gameID, handlePlayerCreation}: JoinGamePageMenuFormProps) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      password: '',
    },
    validationSchema: UserRegistrationSchema,
    onSubmit: values => {
      createPlayer(gameAPIEndpoint, gameID, values.name, values.password)
        .then((response) => {
          handlePlayerCreation && handlePlayerCreation(response.data.player_id, values.name);
        });
    },
  });
  return (
    <>
      <div style={{paddingBottom: "8px"}}>
        Join the Game!
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div style={{paddingBottom: "8px", paddingTop: "8px"}}>
          <TextField
            id="name"
            label="enter your name"
            onChange={formik.handleChange}
            style={{width: "100%"}}
            value={formik.values.name}
            variant="outlined"/>
        </div>
        <div style={{paddingBottom: "8px", paddingTop: "8px"}}>
          <TextField
            id="password"
            type="password"
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
            join the game
          </Button>
        </div>
      </form>
    </>
  )
}

export default JoinGamePageMenuForm;
