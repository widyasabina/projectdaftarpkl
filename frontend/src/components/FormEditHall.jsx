import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditHall = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getHallById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/halls/${id}`
        );
        setTitle(response.data.title);
        setDesc(response.data.desc);
        setPhoto(response.data.photo);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getHallById();
  }, [id]);

  const updateHall = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:8000/halls/${id}`, {
        title: title,
        desc: desc,
        photo: photo
      });
      navigate("/halls");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Balai</h1>
      <h2 className="subtitle">Edit Balai</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateHall}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Nama</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Nama Balai"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Deskripsi</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="Deskripsi Balai"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Logo</label>
                <div className="control">
                  <input
                    type="file"
                    className="file"
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success">
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEditHall;
