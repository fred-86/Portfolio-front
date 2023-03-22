import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setIdInterval, clearIdInterval } from '../__features__/counter.slice'
/**
 * @component
 *  in charge of launching the rain animation
 * @returns  {React.ReactElement}
 */
export function Rainfall() {
    const [isRaining, setIsRaining] = useState(false)

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
        setIsRaining(!isRaining)
    }
    useEffect(() => {
        const startInterval = () => {
            const intervalId = setInterval(rainfall, 10)
            dispatch(setIdInterval(intervalId))
        }

        const stopInterval = () => {
            dispatch(clearIdInterval())
        }
        if (isRaining) {
            startInterval()
        } else {
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
