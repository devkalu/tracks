import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

const reducer = (state, action) => {
  switch (action.type) {
    case "Add_ERROR":
      return { ...state, errorMessage: action.payload };
    case "SIGNED_UP":
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "SIGNED_UP", payload: response.data.token });
      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "Add_ERROR",
        payload: "Something went wrog with sign up",
      });
    }
  };

const signin = (dispatch) => {
  return ({ email, password }) => {
    //make api request to sign up with
    dispatch({});
    //handle success by updating state

    //Handle failure by showing error
  };
};

const signout = (dispatch) => {
  return () => {
    //just sign out
  };
};

export const { Context, Provider } = createDataContext(
  reducer,
  { signup, signin, signout },
  { token: null, errorMessage: "" }
);
