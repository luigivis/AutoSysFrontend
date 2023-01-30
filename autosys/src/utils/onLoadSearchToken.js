import React from "react";
import  {sendGet} from "./commonFetch";
import {getPathLoginByToken} from "./endpointCatalog";


const searchToken = () => {
   const sessionStorageValue = window.sessionStorage.getItem('localAuth');
   const localStorageValue = window.localStorage.getItem("sessionAuth");

   console.log(localStorageValue);
   console.log(sessionStorageValue);

   if(sessionStorageValue ===null){
      sendGet(getPathLoginByToken(),sessionStorageValue);
      return (
          {/* ... /}
        <button onClick={() => navigate('/dashboard')}>
        {/ ... */}
      );
   }

   if(localStorageValue === null){
      sendGet(getPathLoginByToken(),localStorageValue);
      return (
          {/* ... /}
        <button onClick={() => navigate('/dashboard')}>
        {/ ... */}
      );
   }

   return (
       {/* ... /}
        <button onClick={() => navigate('/')}>
        {/ ... */}
   );
}
export  {searchToken};