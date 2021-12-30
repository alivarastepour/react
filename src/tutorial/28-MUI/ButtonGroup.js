import React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'

const Setup = () => {
    return <>
        <ButtonGroup orientation='vertical' className='x' aria-label="outlined button group" variant='outlined'>
            <Button className='y' onClick={() => console.log(1)}>option1</Button>
            <Button className='y' onClick={() => console.log(12)}>option2</Button>
            <Button className='y' onClick={() => console.log(13)}>option3</Button>
        </ButtonGroup>
    </>
}
export default Setup;