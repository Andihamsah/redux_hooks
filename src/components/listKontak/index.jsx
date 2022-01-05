import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteKontak, editKontak, KontakActions } from "../../actions/KontakActions";

function index() {
  const {
    getListKontakResult,
    getListKontakLoading,
    getListKontakError,
    deleteKontakResult,
  } = useSelector((state) => state.kontakReducers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(KontakActions());
  }, [dispatch]);

  useEffect(() => {
    if (deleteKontakResult) {
      dispatch(KontakActions());
    }
  }, [deleteKontakResult, dispatch]);
  

  return (
    <div>
      <h4>List Kontak</h4>
      {getListKontakResult ? (
        getListKontakResult.map((kontak) => {
          return (
            <p key={kontak.id}>
              {kontak.name} - {kontak.age} -{" "}
              <button onClick={() => dispatch(deleteKontak(kontak.id))}>
                hapus
              </button>{" "}
              -{" "}
              <button onClick={() => dispatch(editKontak(kontak))}>
                Edit
              </button>
            </p>
          );
        })
      ) : getListKontakLoading ? (
        <p>loading ...</p>
      ) : (
        <p>{getListKontakError ? getListKontakError : "Data Kosong"}</p>
      )}
    </div>
  );
}

export default index;
