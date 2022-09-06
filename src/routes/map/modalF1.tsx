import { classDataType, F } from "../../assets/data/constants";
import "./map.css";
import { useCallback, useState } from 'react'
import { useAdobeFonts } from 'react-adobe-fonts'
import { AdobeFonts } from 'react-adobe-fonts'

export default function MapInfoModal(
    selectedFloor: F,
    selectedClassData: classDataType
    ){

  return (
    <body>
    <div>
    <p className="floor">{selectedFloor}</p>
    </div>
    <div>
    <p className="className">{selectedClassData.className}</p>
    </div>
    <div>
    <p className="description">{selectedClassData.description}</p>
    </div>
    <div className="title">
    <p className="title_map">{selectedClassData.title}</p>
    </div>
</body>
  )
}