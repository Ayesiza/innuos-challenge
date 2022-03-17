import React from "react";
import "./album.css";
import { useDispatch, useSelector } from "react-redux";
import NullImage from "../../images/undefined_album_cover.png";
import logo from "../../images/qobuz.png";
import { Link } from "react-router-dom";
import { filterAlbums } from "./albumSlice";

const AlbumList = () => {
  const { data, filteredCategory } = useSelector(({ album }) => album);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(filterAlbums(e.target.value.toUpperCase()))
  };

  return (
    <div className="albums">
      <div className="topwrap">
        <Link className="sider" to="/">
          <img className="logo" src={logo} alt="" />
          <h4 style={{ color: "white", textDecoration: "none" }}>Home</h4>
        </Link>
        <div className="borderedContainer">
          <b>Filter: </b>
          <div >
            <button  value='All' onClick={handleChange} className="filterButton">
              All
            </button>
            <button value='Qobuz'onClick={handleChange} className="filterButton">
              Qobuz
            </button>
            <button value='Local' onClick={handleChange} className="filterButton">
              Local
            </button>
          </div>
        </div>
      </div>

      <div className="card-item">
        {(filteredCategory || data).map((alb) => (
          <div key={alb.id} className="card">
            {alb.cover === null ? (
              <div style={{ backgroundColor: "rgb(27, 27, 27)" }}>
                <img
                  className="image"
                  style={{ height: "250px", margin: "5px" }}
                  src={NullImage}
                  alt="null_pic"
                />
              </div>
            ) : (
              <img className="image" src={`./covers/${alb.cover}`} alt="Pic" />
            )}
            <div className="stream">
              {alb.source === "QOBUZ" ? (
                <img className="album-cover-icon" alt="icon" src={logo} />
              ) : (
                ""
              )}
            </div>
            <div>
              <div className="card-info">
              <p>{alb.album}</p>
                <p>{alb.artist}</p>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AlbumList;
