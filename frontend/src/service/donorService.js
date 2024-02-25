import httpClient from './http-common';

const getVerifyEmail = (email) => {
    return httpClient.get(`http://localhost:9090/donor/verifyemail/${email}`);
  };

  const getVerifyMobile = (mobile) => {
    return httpClient.get(`http://localhost:9090/donor/verifymobile/${mobile}`);
  };

  const donorLogin=(email, password)=>{
    return httpClient.get(`http://localhost:9090/donor/login/${email}/${password}`);
  }

  const getByEmail=(email)=>{
    return httpClient.get(`http://localhost:9090/donor/${email}`);
     
  }

  export default { getVerifyEmail, getVerifyMobile,donorLogin,getByEmail};