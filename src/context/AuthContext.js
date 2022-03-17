import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";

const reducer = (state, action) => {
  switch (action.type) {
    case "Add_ERROR":
      return { ...state, errorMessage: action.payload };
    case "SIGNED_IN":
      return { errorMessage: "", token: action.payload };
    case "CLEAR_ERROR": {
      return { ...state, errorMessage: "" };
    }
    case "SIGN_OUT":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => {
  return async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      dispatch({ type: "SIGNED_IN", payload: token });
      navigate("TrackList");
    } else {
      navigate("loginFlow");
    }
  };
};

const clearErrorMessage = (dispatch) => {
  return () => {
    dispatch({ type: "CLEAR_ERROR" });
  };
};

const signup =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "SIGNED_IN", payload: response.data.token });
      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "Add_ERROR",
        payload: "Something went wrog with sign up",
      });
    }
  };

const signin = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post("/signin", {
        email: email,
        password: password,
      });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "SIGNED_IN", payload: response.data.token });
      navigate("TrackList");
    } catch (err) {
      dispatch({
        type: "Add_ERROR",
        payload: "Something went wrog with sign up",
      });
    }
  };
};

const signout = (dispatch) => async () => {
  //just sign out
  await AsyncStorage.removeItem("token");
  dispatch({ type: "SIGN_OUT" });
  navigate("loginFlow");
};

export const { Context, Provider } = createDataContext(
  reducer,
  { signup, signin, signout, clearErrorMessage, tryLocalSignin, signout },
  { token: null, errorMessage: "" }
);
