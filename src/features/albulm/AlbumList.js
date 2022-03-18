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
          <h2 style={{color:'black', marginLeft:'10px'}}>Home</h2>
        </Link>
        <div className="borderedContainer">
          <h3>Filter:  </h3>
          
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

      <div className="card-items">
        {(filteredCategory || data).map((alb) => (
          <div key={alb.id} className="card">
            <div>
            {alb.cover === null ? (
              <div style={{ background: "#1B1B1B" }}>
                <img
                  className="image"
                  
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
           </div>
              <div className="card-info">
              <p>{alb.album}</p>
                <p>{alb.artist}</p>
              </div>
           
          </div>
        ))}
      </div>
    </div>
  );
};
export default AlbumList;
