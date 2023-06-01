import React from 'react'
import { useWindowSize } from "@uidotdev/usehooks";
import Confetti from 'react-confetti'

export default () => {
  const { width, height } = useWindowSize()
  return (
    <Confetti
      width={width}
      height={height}
    />
  )
}