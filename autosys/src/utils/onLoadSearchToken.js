import  {sendGet} from "./commonFetch";
import {getPathLoginByToken} from "./endpointCatalog";


const searchToken =  () => {
   const sessionStorageValue = window.sessionStorage.getItem('sessionAuth');
   const localStorageValue = window.localStorage.getItem("localAuth");

   if(sessionStorageValue !==null){
      sendGet(getPathLoginByToken(),sessionStorageValue);
      return (
          {/* ... /}
        <button onClick={() => navigate('/dashboard')}>
        {/ ... */}
      );
   }

   if(localStorageValue !== null){
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