import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Barra from './Barra.jsx';
import Ficha from './Ficha.jsx';

const Home = () => {
    return (
        <div className="">
            <Barra />
            <div className="paginaProyectos">{/*containerFichaCuerpo*/}
                <Ficha />
            </div>
            
        </div>
    );
}
export default Home;

/*

*/