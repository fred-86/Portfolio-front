import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setIdInterval, clearIdInterval } from '../__features__/counter.slice'

export function Rainfall() {
    const [isRaining, setIsRaining] = useState(false)
    const [count, setCount] = useState(0)
    // const [idInterval, setIdInterval] = useState(0)

    // const idInterval = useSelector((state) => state.interval.idInterval)
    const dispatch = useDispatch()

    function rainfall() {
        const divElement = document.createElement('div')
        divElement.classList.add('rain')
        divElement.setAttribute('id', 'rain')
        divElement.style.left = Math.random() * window.innerWidth + 'px'
        divElement.style.opacity = Math.random() + 0.4

        document.body.appendChild(divElement)

        setTimeout(() => {
            divElement.remove()
        }, 5000)
    }

    function handleClick() {
        setCount(count + 1)
        setIsRaining(!isRaining)
    }
    useEffect(() => {
        // if (count === 1) {
        //     setIdInterval(setInterval(rainfall, 10))
        //     // console.log('start', idInterval)
        // }
        // if (count === 2) {
        //     setCount(0)
        //     setIdInterval(clearInterval(idInterval))
        //     // console.log('end :', idInterval)
        // }
        const startInterval = () => {
            const intervalId = setInterval(rainfall, 10)
            dispatch(setIdInterval(intervalId))
        }

        const stopInterval = () => {
            dispatch(clearIdInterval())
        }

        if (count === 1) {
            startInterval()
        }

        if (count === 2) {
            setCount(0)
            stopInterval()
        }
    }, [isRaining])

    return (
        <div>
            <button className="btn btn-rain" onClick={() => handleClick()}>
                {isRaining ? 'Stop' : 'Start'}
            </button>
        </div>
    )
}
