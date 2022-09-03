import React, {useState} from 'react'
import { ShowCounter } from './ShowCounter';
import { AddCounter } from './AddCounter';
import { RestCounter } from './RestCounter';

import './styles.css'

export const Main = ()=> {
    const [number, setNumber]=useState(0)
        const onAdd=()=>{
            setNumber(number + 1);
            console.log('I added one');

        }
        const onRest=()=>{
            if (number<=0)
            {
                setNumber(number);
            }
            else
            {
                setNumber(number - 1);
            }
            console.log('I minus one')
        }

    return(
        <>
        <ShowCounter number={number}/>
        <AddCounter onAddPress={onAdd}/>
        <RestCounter onRestPress={onRest}/>
        </>
    )
}