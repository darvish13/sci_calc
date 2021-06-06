import React, { useState } from 'react'
import { Cell } from './tableAssets/tableAssets'
import { HollowCell, Row, TitleCell } from './table_styles'
import { generate as makeId } from 'shortid'

const Table = ({ data }) => {
  /**************************************
   ******** State
   *************************************/
  const [SelectedCells, setSelectedCells] = useState([])

  console.log(SelectedCells)

  /**************************************
   ******** render
   *************************************/
  return data.map((row, rowIndex) => (
    <Row key={rowIndex}>
      {row.map(({ id, data }, cellIndex) => {
        // empty cells
        if (!data) return <HollowCell key={id} />
        // title cells
        else if (rowIndex == 0 || cellIndex == 0)
          return <TitleCell key={id}>{data}</TitleCell>
        // wavelength cells
        else if (cellIndex == row.length - 1)
          return <HollowCell key={id}>{data}</HollowCell>

        // data cells
        return (
          <Cell
            key={id}
            id={id}
            selectedCells={SelectedCells}
            setSelectedCells={setSelectedCells}
            data={data}
          />
        )
      })}
    </Row>
  ))
}

export default Table
