import {useEffect, useRef} from 'react'

// from https://overreacted.io/making-setinterval-declarative-with-react-hooks/
const useInterval = (callback, delay) => {
    // const savedCallback = useRef()
    // useEffect(() => {
    //     savedCallback.current = callback    
    // }, [callback])
    useEffect(()=>{
        // function tick(){
        //     savedCallback.current()
        // }
        if(delay){
            let id = setInterval(callback, delay)
            return () => clearInterval(id)
        }
    })
}

export default useInterval
