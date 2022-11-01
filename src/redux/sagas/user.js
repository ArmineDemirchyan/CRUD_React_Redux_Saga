import {getUsers, addUser,getUser, editUser, deleteUser} from "../../apis/index"
import { getUsersSlice, addUserSlice, editUserSlice, deleteUserSlice} from '../slice/users';
import { GET_USER, GET_USERS, ADD_USER, DELETE_USER, EDIT_USER } from "./types";
import {takeEvery, put, call} from "redux-saga/effects";

export function*  getUsersSaga() {
    const users = yield call(getUsers);
    yield put(getUsersSlice(users));
}

export function*  addUserSaga(action) {
    yield addUser(action.user);
    yield put(addUserSlice(action.user));
}

export function*  getUserSaga(action) {
    yield getUser(action.id);
    yield put(getUsersSlice(action.id));
}

export function*  editUserSaga(action) {
    yield editUser(action.user);
    yield put(editUserSlice(action.user));
}

export function*  deleteUserSaga(action) {
    yield deleteUser(action.id);
    yield put(deleteUserSlice(action.id));
}

export function* watchUsersAsync() {
    yield takeEvery(GET_USERS, getUsersSaga);
    yield takeEvery(GET_USER, getUserSaga);
    yield takeEvery(EDIT_USER, editUserSaga);
    yield takeEvery(ADD_USER, addUserSaga);
    yield takeEvery(DELETE_USER, deleteUserSaga);

}