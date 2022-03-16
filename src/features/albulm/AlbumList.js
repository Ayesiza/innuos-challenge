import React, { useEffect, useState } from "react";
import "./album.css";
import { useSelector } from "react-redux";
import NullImage from "../../images/undefined_album_cover.png";
import logo from "../../images/qobuz.png";
import { Link } from "react-router-dom";
import { getSelectedCategory } from '../../features/albulm/albumSlice';
import Filters from "../../components/filter/Filters";
//import albums from "../../albums.json";



const AlbumList = () => {
  const albums = useSelector((state)=> state.albums.albums);
  
  
  return (
    <div className="albums">
      <div className="topwrap">
        <Link  className="sider" to="/">
          <img className="logo" src={logo} alt="" />
          <h4 style={{color:"white", textDecoration:"none"}}>Home</h4>
        </Link>
      <div  className='borderedContainer'>
    <Filters/>
    </div>
       
      </div>

      <div className="card-item">
        {albums.map(alb => (
          <div key={alb.id} className="card">
            {alb.cover === null ? (
              <img className="image" src={NullImage} alt="null_pic" />
            ) : (
              <img className="image" src={`./covers/${alb.cover}`} alt="Pic" />
            )}

            <div>
              <div className="card-info">
               
                  <h4>{alb.source}</h4>
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
