import {useState} from 'react'

export function useLocalStorage(key, inicialValue) {
    const [storedValue, setStoredValue] = useState(()=>{
        try{
            const item = window.localStorage.getItem(key)
            return item? json.parse(item): inicialValue
        }catch (error){
            return  inicialValue
        }
    })

    const setValue = value => {
        try {
            setStoredValue(value)
            window.localStorage.setItem(key, JSON.stringify(value))
        } catch
            (error) {
            console.log(error)
        }
    }
    return {storedValue, setValue}

}

