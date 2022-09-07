import { classDataType, F } from "../../assets/data/constants";
import "./map.css";
import { useCallback, useState } from 'react'
import { useAdobeFonts } from 'react-adobe-fonts'
import { AdobeFonts } from 'react-adobe-fonts'


export default function MapInfoModal(
    selectedFloor: F,
    selectedClassData: classDataType
    ){
    return(
        <div>
        <p className="floor_F2">{selectedFloor}</p>
        <p className="className_F2">{selectedClassData.className}</p>
        <p className="title_map_F2">{selectedClassData.title}</p>
        <p className="description_F2">{selectedClassData.description}</p>
        </div>
    );
    
}
