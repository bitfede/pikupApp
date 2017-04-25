import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  gamesRequest: ['data'],
  gamesSuccess: ['payload'],
  gamesFailure: null,
  gamesWRequest: ['dataWr'],
  gamesWSuccess: null,
  gamesWFailure: null
})

export const GamesTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  games: null,
  fetching: true,
  payload: null,
  error: null
})

/* ------------- Reducers ------------- */

// request the data from an api
export const request = (state) => {
  console.debug("REQ")
  return state.merge({ fetching: true, payload: null })
}
// successful api lookup
export const success = (state, action) => {
  const { payload } = action
  console.debug("PAYLOAD", payload)
  console.debug("SUCC")
  return state.merge({ fetching: false, error: null, games: payload })
}

// Something went wrong somewhere.
export const failure = state =>
  state.merge({ fetching: false, error: true, payload: null })

export const writerequest = (state, dataWr) => {
  return state.merge({ fetching: true, error: false })
}

export const writesuccess = (state) => {

  return state.merge({ fetching: false, error: false })
}

export const writefailure = (state) => {

  return state.merge({ fetching: false, error: true })
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GAMES_REQUEST]: request,
  [Types.GAMES_SUCCESS]: success,
  [Types.GAMES_FAILURE]: failure,
  [Types.GAMES_WREQUEST]: writerequest
})
