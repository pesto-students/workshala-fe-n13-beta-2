import {useSelector} from "react-redux";

export const isEmpty = (value) => {
    return value === undefined || value === null || value.length <= 0
    ? true
    : false;
   };

export function GetRole() {
    const auth = useSelector((state) => state.user);
    if(auth !== undefined && auth.user !== undefined && auth.user.data !== undefined)
        return auth.user.data.role;
    else
        return null;
}