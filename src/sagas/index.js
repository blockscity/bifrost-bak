import { take, put, call, fork, race, cancelled } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const INCREMENT_IF_ODD = 'INCREMENT_IF_ODD'

export const INCREMENT_ASYNC = 'INCREMENT_ASYNC'
export const CANCEL_INCREMENT_ASYNC = 'CANCEL_INCREMENT_ASYNC'

export const COUNTDOWN_TERMINATED = 'COUNTDOWN_TERMINATED'
export function* watchIncrementAsync() {
    try {
        while (true) {
            const action = yield take(INCREMENT_ASYNC)
            // starts a 'Race' between an async increment and a user cancel action
            // if user cancel action wins, the incrementAsync will be cancelled automatically
            yield race([call(incrementAsync, action), take(CANCEL_INCREMENT_ASYNC)])
        }
    } finally {
        console.log('watchIncrementAsync terminated')
    }
}

export default function* rootSaga() {
    yield fork(watchIncrementAsync)
}