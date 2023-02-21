import { sendGetLoginByToken } from "./commonFetch";
import { getPathLoginByToken } from "./endpointCatalog";

const searchToken = async () => {

   const sessionStorageValue = window.sessionStorage.getItem('sessionAuth');
   const localStorageValue = window.localStorage.getItem("localAuth");

   if (localStorageValue !== null || sessionStorageValue !== null) {
      let result = await sendGetLoginByToken(getPathLoginByToken(), localStorageValue || sessionStorageValue);

      result = JSON.parse(result);
      let statusCode = result.status.code;

      if (statusCode !== 200) {
         window.location.href = '/';
      }

      if (window.location.pathname !== "/") {
         return;
      }
      window.location.href = '/dashboard';
      return;
   }

   if (localStorageValue === null && sessionStorageValue === null) {
      if (window.location.pathname === "/") {
         return;
      }
      window.location.href = '/';
      return;
   }

}
export { searchToken };