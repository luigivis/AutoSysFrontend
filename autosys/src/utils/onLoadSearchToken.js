import  {sendGet} from "./commonFetch";
import {getPathLoginByToken} from "./endpointCatalog";

const searchToken =  () => {
   const sessionStorageValue = window.sessionStorage.getItem('sessionAuth');
   const localStorageValue = window.localStorage.getItem("localAuth");

   if(sessionStorageValue !==null){
      sendGet(getPathLoginByToken(),sessionStorageValue);

      window.location.href = '/dashboard';
      return;
   }

   if(localStorageValue !== null){
      sendGet(getPathLoginByToken(),localStorageValue);

      window.location.href = '/dashboard';
      return;
   }
   const path= window.location.pathname;
   if(path !== "/"){
      window.location.href='/';
   }
}
export  {searchToken};