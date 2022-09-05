import { classDataType, F } from "../../assets/data/constants";
import "./map.css";
import { useCallback, useState } from 'react'
import { useAdobeFonts } from 'react-adobe-fonts'

export default function MapInfoModal(
    selectedFloor: F,
    selectedClassData: classDataType
    ){
  const [isLoading, setIsLoading] = useState(false)
  const [isActive, setIsActive] = useState(false)

  const onLoading = useCallback(() => {
    setIsLoading(true)
  }, [])

  const onActive = useCallback(() => {
    setIsLoading(false)
    setIsActive(true)
  }, [])

  useAdobeFonts({
    kitId: 'enj7egy',
    onLoading,
    onActive,
  })

  return (
    <div>

    <p className="floor">{selectedFloor}</p>
    <p className="className">{selectedClassData.className}</p>
    <p className="title_map">{selectedClassData.title}</p>
    <p className="description">{selectedClassData.description}</p>
    <div>
      <div>isLoading: {isLoading ? 'true' : 'false'}</div>
      <div>isActive: {isActive ? 'true' : 'false'}</div>
    </div>
    </div>
  )
}