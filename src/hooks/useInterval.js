import {useEffect, useRef} from 'react'

const useInterval = (callback, delay) => {
    useEffect(()=>{
        if(delay){
            let id = setInterval(callback, delay)
            return () => clearInterval(id)
        }
    })
}

export default useInterval
