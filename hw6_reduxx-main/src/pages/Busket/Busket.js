// import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {busketSelect} from "../../redux/basketSlice";
import styles from './busket.module.css'
const Busket = () => {
    const {busket} = useSelector(busketSelect);


    return (
        <div className="container">
            {
                busket.map((item, index) => <li key={index} style={{listStyle: 'none'}}>
                    <div className={styles.busket}>
                        <div>
                            <img src={item?.picture} alt={item?.name}/>
                        </div>
                        <h4>{item?.name}</h4>
                        <h6>Price: {item?.price}</h6>
                    </div>
                </li>)
            }
        </div>
    );
};

export default Busket;