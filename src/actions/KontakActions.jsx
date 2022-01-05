import axios from "axios";
import React from "react";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const ADD_KONTAK = "ADD_KONTAK";
export const DELETE_KONTAK = "DELETE_KONTAK";
export const EDIT_KONTAK = "EDIT_KONTAK"
export const UPDATE_KONTAK = "UPDATE_KONTAK"

export const KontakActions = () => {
  return (dispatch) => {
    dispatch({
      type: GET_LIST_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMassage: false,
      },
    });

    axios({
      method: "GET",
      url: "http://localhost:3999/kontaks",
      timeout: 120000,
    })
      .then((res) => {
        dispatch({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: res.data,
            errorMassage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_LIST_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMassage: err.message,
          },
        });
      });
  };
};

export const addKontak = (data) => {
  return (dispatch) => {
    dispatch({
      type: ADD_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMassage: false,
      },
    });

    axios({
      method: "POST",
      url: "http://localhost:3999/kontaks",
      timeout: 120000,
      data: data
    })
      .then((res) => {
        dispatch({
          type: ADD_KONTAK,
          payload: {
            loading: false,
            data: res.data,
            errorMassage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: ADD_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMassage: err.message,
          },
        });
      });
  };
};

export const editKontak = (data) => {
  return (dispatch) => {
    dispatch({
      type: EDIT_KONTAK,
      payload: {
        data: data
      },
    });
  };
};

export const updateKontak = (data) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMassage: false,
      },
    });

    axios({
      method: "PUT",
      url: "http://localhost:3999/kontaks/" + data.id,
      timeout: 120000,
      data: data
    })
      .then((res) => {
        dispatch({
          type: UPDATE_KONTAK,
          payload: {
            loading: false,
            data: res.data,
            errorMassage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: UPDATE_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMassage: err.message,
          },
        });
      });
  };
};

export const deleteKontak = (id) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_KONTAK,
      payload: {
        loading: true,
        data: false,
        errorMassage: false,
      },
    });

    axios({
      method: "DELETE",
      url: "http://localhost:3999/kontaks/" + id,
      timeout: 120000,
    })
      .then((res) => {
        dispatch({
          type: DELETE_KONTAK,
          payload: {
            loading: false,
            data: res.data,
            errorMassage: false,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: DELETE_KONTAK,
          payload: {
            loading: false,
            data: false,
            errorMassage: err.message,
          },
        });
      });
  };
};
