import React, { useContext } from 'react'
import { Context } from './context'

const MyButton = props => {
    console.log(props)
    return <button>{props.children}</button>
}

function App() {

    let a = 1
    let b = 2

    const { state, disptach } = useContext(Context)

    return (
        <>
            <MyButton>My data</MyButton> <br />
            <MyButton>hello world</MyButton>
            <MyButton>damn man</MyButton>
        </>
    )
}

export default App
