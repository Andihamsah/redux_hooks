import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addKontak, KontakActions, updateKontak } from "../../actions/KontakActions";

function AddKontak() {
  const [nama, setNama] = useState("");
  const [age, setAge] = useState(0);
  const [id, setId] = useState(false)
  const dispatch = useDispatch();

  const { addKontakResult, editKontakResult, updateKontakResult } = useSelector((state) => state.kontakReducers);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateKontak({id: id, name: nama, age: age}))
    } else {
      
      dispatch(addKontak({ name: nama, age: age }));
    }
  };

  useEffect(() => {
    if (addKontakResult) {
      dispatch(KontakActions());
      setNama('')
      setAge(0)
    }
  }, [addKontakResult, dispatch]);

  useEffect(() => {
    if (editKontakResult) {
      setNama(editKontakResult.name)
      setAge(editKontakResult.age)
      setId(editKontakResult.id)
    }
  }, [editKontakResult, dispatch]);

  useEffect(() => {
    if (updateKontakResult) {
      dispatch(KontakActions());
      setNama('')
      setAge(0)
      setId(false)
    }
  }, [updateKontakResult, dispatch]);

  return (
    <div>
      <h4>{id ? "Update Kontak" : "Add Kontak"}</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="name"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <input
          type="text"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default AddKontak;
