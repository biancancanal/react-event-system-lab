// Code Keypad Component Here
import React, { Component } from 'react'

function handleKey() {
    console.log('Entering password...')
}

export default class Keypad extends Component {
    render() {
        return (
            <div>
                <input onKeyUp={handleKey} type="password" />
            </div>
        )
    }
}
