import React from "react";
import image from "./assets/news-16-11-2020.gif";
import "./News.scss";

function News() {
    return (
        <div className="news-cont" onClick={() => { window.open("/changelog.txt", "_blank"); }}>
            <h1 className="news-header">News</h1>
            <p className="news-date">16/11/2020</p>
            <p className="news-title">
                Update 7
                <br />
                Darkness
            </p>
            <img className="news-image" draggable="false" src={image} />
        </div>
    );
}

export default News;