import React, { useEffect, useState } from "react";
import "./album.css";
import { useDispatch, useSelector } from "react-redux";
import NullImage from "../../images/undefined_album_cover.png";
import logo from "../../images/qobuz.png";
import { Link } from "react-router-dom";
import { filterAlbums } from "./albumSlice";

const AlbumList = () => {
  const { data, filteredCategory } = useSelector(({ album }) => album);
  //const [ search, setSearch] = useState('')
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(filterAlbums(filteredCategory));
  };

  //const albums = useSelector((state) => state.album.albums);
  return (
    <div className="albums">
      <div className="topwrap">
        <Link className="sider" to="/">
          <img className="logo" src={logo} alt="" />
          <h4 style={{ color: "white", textDecoration: "none" }}>Home</h4>
        </Link>
        <div className="borderedContainer">
          <b>Filter: </b>
          <div>
            <button onClick={handleChange} className="filterButton">
              All
            </button>
            <button onClick={handleChange} className="filterButton">
              Qobuz
            </button>
            <button onClick={handleChange} className="filterButton">
              Local
            </button>
          </div>
        </div>
      </div>

      <div className="card-item">
        {(filteredCategory || data).map((alb, index) => (
          <div key={index} className="card">
            {alb.cover === null ? (
              <div style={{ backgroundColor:'rgb(27, 27, 27)'}}><img className="image" style={{height:"250px", margin:'5px'}} src={NullImage} alt="null_pic" /></div>
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
                <p>{alb.artist}</p>
                <p>{alb.album}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AlbumList;
