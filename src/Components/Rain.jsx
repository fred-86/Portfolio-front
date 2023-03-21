// import React from 'react'
// import ReactDOM from 'react-dom'
// import { FaTint } from 'react-icons/fa'

// export function Rain() {
//     function random(min, max) {
//         return Math.floor(Math.random() * (max - min + 1)) + min
//     }
//     return ReactDOM.createPortal(
//         <div className="rain">
//             <FaTint
//                 size={random(0, 1) * 15}
//                 style={{
//                     color: 'rgba(13, 176, 240, 0.541)',
//                     opacity: random(0, 1) + 0.2,
//                 }}
//             />
//         </div>,
//         document.body
//     )
// }

import { FaTint } from 'react-icons/fa'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

export function Rain() {
    const [droplets, setDroplets] = useState([])

    useEffect(() => {
        const interval = setInterval(() => {
            setDroplets((prevDroplets) => {
                const newDroplets = [...prevDroplets]
                const droplet = (
                    <div
                        key={Date.now() + Math.random()}
                        style={{
                            position: 'absolute',
                            left: `${Math.random() * window.innerWidth}px`,
                            opacity: Math.random() + 0.4,
                            fontSize: `${Math.random() * 15}px`,
                            color: 'rgba(13, 176, 240, 0.541)',
                            animationDuration: `${Math.random() * 2}s`,
                        }}
                    >
                        <FaTint />
                    </div>
                )
                newDroplets.push(droplet)
                return newDroplets
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const timer = setTimeout(() => {
            setDroplets((prevDroplets) => prevDroplets.slice(1))
        }, 5000)

        return () => clearTimeout(timer)
    }, [droplets])

    return createPortal(droplets, document.body)
}

// export function Rain() {
//     const [raindrops, setRaindrops] = useState([])

//     useEffect(() => {
//         const timer = setInterval(() => {
//             const newRaindrop = {
//                 id: Math.random(),
//                 style: {
//                     color: 'rgba(13, 176, 240, 0.541)',
//                     animationDuration: `${Math.random() * 2}s`,
//                     left: `${Math.random() * window.innerWidth}px`,
//                     opacity: Math.random() + 0.4,
//                     fontSize: `${Math.random() * 15}px`,
//                 },
//             }
//             setRaindrops((raindrops) => [...raindrops, newRaindrop])
//         }, 500)

//         return () => clearInterval(timer)
//     }, [])

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             if (raindrops.length > 0) {
//                 setRaindrops((raindrops) => raindrops.slice(1))
//             }
//         }, 5000)

//         return () => clearTimeout(timer)
//     }, [raindrops])

//     return (
//         <div>
//             {raindrops.map((raindrop) => (
//                 <i
//                     key={raindrop.id}
//                     className="fa-solid fa-droplet"
//                     style={raindrop.style}
//                 ></i>
//             ))}
//         </div>
//     )
// }
