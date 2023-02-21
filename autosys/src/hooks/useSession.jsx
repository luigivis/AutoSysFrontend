import { useState } from "react"

const useSession = () => {
    const [authToken] = useState(() => {
        // Recuperar el authToken de localStorage o de sessionStorage.
        const sessionStorageAuthToken = window.sessionStorage.getItem("authToken")
        const localStorageAuthToken = window.localStorage.getItem("authToken")

        return localStorageAuthToken || sessionStorageAuthToken
    })

    return { authToken }
}

export default useSession;