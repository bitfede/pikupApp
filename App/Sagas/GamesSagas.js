/* ***********************************************************
* A short word on how to use this automagically generated file.
* We're often asked in the ignite gitter channel how to connect
* to a to a third party api, so we thought we'd demonstrate - but
* you should know you can use sagas for other flow control too.
*
* Other points:
*  - You'll need to add this saga to sagas/index.js
*  - This template uses the api declared in sagas/index.js, so
*    you'll need to define a constant in that file.
*************************************************************/

import { call, put } from 'redux-saga/effects'
import GamesActions from '../Redux/GamesRedux'

export function * getGames (api, action) {
  const { data } = action
  // make the call to the api
  const response = yield call(api.getGames)

  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(GamesActions.gamesSuccess(response.data))
  } else {
    yield put(GamesActions.gamesFailure())
  }
}

export function * postGames (api, action) {
  const { dataWr } = action
  // make the call to the api

  const response = yield call(api.postGames, dataWr )
  console.debug("RESPONSE", response)
  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(GamesActions.gamesWriteSuccess(response))
  } else {
    yield put(GamesActions.gamesWriteFailure())
  }
}
