import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const HallList = () => {
  const [halls, setHalls] = useState([]);

  useEffect(() => {
    getHalls();
  }, []);

  const getHalls = async () => {
    const response = await axios.get("http://localhost:8000/halls");
    setHalls(response.data);
  };

  const deleteHall = async (hallId) => {
    await axios.delete(`http://localhost:8000/halls/${hallId}`);
    getHalls();
  };

  return (
    <div>
      <h1 className="title">Balai</h1>
      <h2 className="subtitle">List Data Balai</h2>
      <Link to="/halls/add" className="button is-primary mb-2">
        Tambah
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Balai</th>
            <th>Deskripsi</th>
            <th>Logo</th>
            <th>Dibuat Oleh</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {halls.map((hall, index) => (
            <tr key={hall.uuid}>
              <td>{index + 1}</td>
              <td>{hall.title}</td>
              <td>{hall.desc}</td>
              <td>{hall.photo}</td>
              <td>{hall.user.name}</td>
              <td>
                <Link
                  to={`/halls/edit/${hall.uuid}`}
                  className="button is-small is-info"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteHall(hall.uuid)}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HallList;
