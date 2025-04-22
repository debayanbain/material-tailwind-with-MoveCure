import React from 'react'
import confetti from 'canvas-confetti';
import { Button } from '@/lib/MtConfig';

const fireConfetti = () => {
    confetti({
        particleCount: 200,
        spread: 130,
        origin: { y: 0.6 }
    })
}

const FireCelebrateion = () => {
    return (
        <div>
            <Button variant="gradient" onClick={fireConfetti}>
                Fire
            </Button>
        </div>
    )
}

export default FireCelebrateion