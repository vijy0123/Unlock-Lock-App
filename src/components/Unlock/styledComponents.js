// Style your elements here

import styled from 'styled-components'

export const Description = styled.p`
  color: #fff;
  font-family: 'Roboto';
`
export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(to bottom, #161617, #3c2940);
  height: 100vh;
`

export const LockContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Button = styled.button`
  padding: 8px;
  border-radius: 5px;
  color: #fff;
  border: none;
  background-color: #06b6d4;
  width: 100px;
  margin-top: 6%;
  cursor: pointer;
`
