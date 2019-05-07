import React, {useEffect, useState} from "react";

/**
 *  Hook to handle debounce
 * @param watch - variable to watch
 * @param func - function that will call on debounce
 * @param delay - delay time for function call
 * @private
 */
function useDebounce(watch, func, delay = 300) {
    const [debounceFunc, setDebounceFunc] = useState(func)

    useEffect(() => {

        const debounceTimeout = setTimeout(() => {
            setDebounceFunc(func)
        }, delay)

        return () => {
            clearTimeout(debounceTimeout)
        }
    }, [watch])

    return debounceFunc
}

export default useDebounce