import React, {useEffect, useReducer} from "react";

import {RESET_STOPWATCH, START_STOPWATCH, STOP_STOPWATCH, ACTIVE_STOPWATCH} from "../../../store/reducer/constants";
import {Button} from "../../../shared/components/Button";
import {timeReducer} from "../../../store/reducer/timeReducer";
import {initialState} from '../../../store/initialState'

let timer;
const intervalDispatcher = (thatDispatch, {active}) => {
    if (active) {
        timer = setInterval(() => {
            thatDispatch({type: ACTIVE_STOPWATCH})
        }, 5)
    } else {
        clearInterval(timer)
    }
}

export const TimeDisplay = () => {
    const [state, dispatch] = useReducer(timeReducer, initialState)
    const handleStart = () => {
        dispatch({type: START_STOPWATCH})
    }
    const handleStop = () => {
        dispatch({type: STOP_STOPWATCH})
    }
    const handleReset = () => {
        dispatch({type: RESET_STOPWATCH})
    }

    useEffect(() => {
        intervalDispatcher(dispatch, state)
        // eslint-disable-next-line
    }, [state.active])

    const minutes = state.minutes < 10 ? `0${+state.minutes}` : state.minutes
    const seconds = state.seconds < 10 ? `0${+state.seconds}` : state.seconds
    const milliseconds = state.milliseconds < 100 ?
        `0${Math.floor(state.milliseconds / 10)}` :
        Math.floor(state.milliseconds / 10)

    const currentTime = `${minutes} : ${seconds} : ${milliseconds} `

    return (<>
            <h2 className='m-4'>{currentTime}</h2>
            <Button name='Start' classname='btn-outline-light' handleClick={handleStart}/>
            <Button name='Stop' classname='btn-outline-light' handleClick={handleStop}/>
            <Button name='Reset' classname='btn-outline-light' handleClick={handleReset}/>
        </>
    )
}


