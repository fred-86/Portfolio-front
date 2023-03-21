import { useState, useEffect } from 'react'

export function Rainfall() {
    const [isRaining, setIsRaining] = useState(false)
    const [count, setCount] = useState(0)
    const [idInterval, setIdInterval] = useState(0)

    function rainfall() {
        const divElement = document.createElement('div')
        divElement.classList.add('rain')
        divElement.setAttribute('id', 'rain')

        // iElement.classList.add('fa-solid')
        // iElement.classList.add('fa-droplet')
        divElement.style.color = 'rgba(13, 176, 240, 0.541)'
        // divElement.style.animationDuration = Math.random() * 2 + 's'
        divElement.style.left = Math.random() * window.innerWidth + 'px'
        divElement.style.opacity = Math.random() + 0.4
        // iElement.style.fontSize = Math.random() * 15 + 'px'

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
        if (count === 1) {
            setIdInterval(setInterval(rainfall, 10))
            console.log('start', idInterval)
        }

        if (count === 2) {
            setCount(0)

            setIdInterval(clearInterval(idInterval))
            console.log('end :', idInterval)
        }
    }, [isRaining])

    console.log(count)

    return (
        <div>
            <button className="btn btn-rain" onClick={() => handleClick()}>
                {isRaining ? 'Stop' : 'Start'}
            </button>
        </div>
    )
}
