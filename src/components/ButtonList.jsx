import React from 'react'
import { Button } from './Button'

const ButtonList = () => {
    return (
        <div className='flex'>
            <Button name="All" />
            <Button name="Podcasts" />
            <Button name="Mixes" />
            <Button name="Music" />
            <Button name="News" />
            <Button name="Gaming" />
            <Button name="Computer Engineering" />

        </div>
    )
}

export default ButtonList