import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";

function Token(){
    const {email, password} = useParams()
    useEffect(() => {
      if (email && password)  {
        Auth()
        console.log(email, password)
    }
      }, [email, password, window]);
      
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = () => {
    dispatch(LoginUser({ email, password }));
  };
    return(
<>
</>
    )
}

export default Token;

