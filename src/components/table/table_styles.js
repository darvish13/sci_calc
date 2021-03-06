import styled from 'styled-components'

export const Container = styled.div`
  max-width: 70em;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 2em;

  @media (max-width: 700px) {
    padding: 1em;
    width: 95%;
    overflow-x: auto;
  }
`

export const BaseCell = styled.div`
  font-size: 0.85em;
  border-radius: 10px;
  margin: 0.25em;
  min-width: 5em;
  min-height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all ease-in 0.15s;

  b {
    margin-bottom: 0.1em;
    user-select: none;
  }
`

export const TitleCell = styled(BaseCell)`
  border: 1px solid #ff1744;
  color: white;
  background-color: #ff1744;
  cursor: initial;
  user-select: none;
`

export const DataCell = styled(BaseCell)`
  border: 1px solid #38afff;
  color: ${({ isSelected }) => (isSelected ? 'white' : '#38afff')};
  background-color: ${({ isSelected }) => (isSelected ? '#38afff' : 'white')};

  /* &:hover {
    background-color: #d7efff;
    color: #38afff;
  } */
`

export const HollowCell = styled(BaseCell)`
  border: none;
  color: black;
  cursor: initial;
`

export const Row = styled.div`
  display: flex;
`
