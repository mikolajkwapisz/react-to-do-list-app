import { useState, useEffect} from 'react'

interface windowSizeInterface {
    width:  number
    height:  number

}

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState<windowSizeInterface>( {
        width:  window.innerWidth,
        height: window.innerHeight
    })

    useEffect(() => {

        function handleResize () {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
                })
        }
    
        // Set new width and height on resize 
        window.addEventListener('resize', handleResize)
    
    
    }, [window.innerWidth])

    return windowSize
}

export default useWindowSize