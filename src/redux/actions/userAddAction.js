import { ADDUSER } from "../constant";

export const addUser = (user) => ({ type: ADDUSER, payload: user });
