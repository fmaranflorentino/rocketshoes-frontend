import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

export default function* RootSaga() {
  return yield all([cart]);
}
