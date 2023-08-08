import axios from "axios";
import jwt_decode from "jwt-decode";
import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

// export UserContext for access--------
export const UserContext = createContext();

const UserContextAPI = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [systemData, setSystemData] = useState({});

  const getSystemData = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/settings`)
      .then((response) => {
        const allData = response.data.data[0];
        setSystemData(allData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const methodSignin = async (signinData) => {
    try {
      setLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/signin`,
        signinData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (res) {
        setLoading(false);
        setCurrentUser(res?.data?.data?.userQuery);
        setPermissions(res?.data?.data?.permissions);
      }
      // console.log(permissions);
      return res;
    } catch (error) {
      console.error(error);
      console.error(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    }
  };

  const accessPerm = (moduleId, activityId) => {
    let moduleActivitys = permissions?.find(
      (moduleActivity) =>
        moduleActivity.module_id === moduleId &&
        moduleActivity.activity_id === activityId
    );
    // console.log(moduleActivitys);
    if (moduleActivitys) {
      return true;
    } else {
      return false;
    }
  };

  const modulePerm = (moduleId) => {
    let modules = permissions?.find((module) => module.module_id === moduleId);
    console.log(modules);
    if (modules) {
      return true;
    } else {
      return false;
    }
  };

  const fetchAPI = async (id) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/user/${id}`
      );
      // console.log(res);
      // console.log(res.data.data);
      const data = res?.data?.data;
      if (res.status === 200) {
        setLoading(false);
        setCurrentUser(data?.userQuery);
        setPermissions(data?.permissions);
      } else {
        toast.error("user not found");
      }
    } catch (error) {
      console.error(error);
      console.error(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    }
  };

  const smsAPI = async (mobileNumber, message) => {
    try {
      const res = await axios.post(
        `https://api.greenweb.com.bd/api.php?token=${process.env.NEXT_PUBLIC_SMS_API_TOKEN}&to=${mobileNumber}&message=${message}`
      );
      if (res.status === 200) {
        return res;
      }
    } catch (error) {
      console.error(error);
      console.error(error?.response?.data?.message);
      toast.error(error?.response?.data?.message);
    }
  };
  const check = () => {
    console.log("hello");
  };

  useEffect(() => {
    let token = window.localStorage.getItem("jwtToken");

    if (token) {
      let decoded = jwt_decode(token);
      const { id } = decoded;
      fetchAPI(id);
      // console.log(decoded);
    } else {
      console.log("No Token Found");
    }
  }, []);
  useEffect(() => {
    getSystemData();
  }, []);

  const methods = {
    currentUser,
    setCurrentUser,
    accessPerm,
    modulePerm,
    smsAPI,
    loading,
    setLoading,
    methodSignin,
    check,
    systemData,
  };
  return (
    <>
      <UserContext.Provider value={methods}>{children}</UserContext.Provider>
    </>
  );
};

export default UserContextAPI;
