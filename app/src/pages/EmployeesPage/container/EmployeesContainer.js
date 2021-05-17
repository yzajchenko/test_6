import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  USERS_REQUEST,
  USERS_SUCCESS,
  USERS_ADD,
  USERS_REMOVE
} from "../actions";

import EmployeesLayout from "../components/EmployeesLayout";

const EmployeesContainer = () => {
  const dispatch = useDispatch();
  const { users, isLoading } = useSelector(state => state.users);
  const [inputValue, setInputValue] = useState({ first: "", last: "" });

  useEffect(() => {
    dispatch(USERS_REQUEST());
    const getUsers = async () => {
      const response = await fetch("https://reqres.in/api/users?per_page=12");
      const { data } = await response.json();
      dispatch(USERS_SUCCESS(data));
    };
    getUsers();
  }, []);

  const handleInput = useCallback(event => {
    const { value, name } = event.target;
    setInputValue(state => {
      return {
        ...state,
        [name]: value
      };
    });
  }, []);

  const handleCreateUser = useCallback(
    event => {
      event.preventDefault();
      dispatch(USERS_ADD(inputValue));
      setInputValue({ first: "", last: "" });
    },
    [inputValue, dispatch]
  );

  const handleRemove = useCallback(
    id => {
      dispatch(USERS_REMOVE(id));
    },
    [inputValue, dispatch]
  );

  return (
    <EmployeesLayout
      users={users}
      inputValue={inputValue}
      isLoading={isLoading}
      handleInput={handleInput}
      handleCreateUser={handleCreateUser}
      handleRemove={id => handleRemove(id)}
    />
  );
};

export default EmployeesContainer;
