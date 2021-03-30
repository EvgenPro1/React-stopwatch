import {ACTIVE_STOPWATCH, RESET_STOPWATCH, START_STOPWATCH, STOP_STOPWATCH} from "./constants";
import {initialState} from '../initialState'

export const timeReducer = (state, {type}) => {
    switch (type) {
        case START_STOPWATCH:
            const newStateStart = {...state}
            return ({...newStateStart, active: true})

        case RESET_STOPWATCH:
            return ({
                ...initialState
            })

        case STOP_STOPWATCH:
            const newStateStop = {...state}
            return ({
                ...newStateStop, active: false
            })

        case ACTIVE_STOPWATCH:
            const newStateActive = {...state}
            return ({
                ...newStateActive,
                time: state.time + 5,
                minutes: new Date(newStateActive.time).getMinutes(),
                seconds: new Date(newStateActive.time).getSeconds(),
                milliseconds: new Date(newStateActive.time).getMilliseconds(),
            })

        default:
            return state
    }
}
