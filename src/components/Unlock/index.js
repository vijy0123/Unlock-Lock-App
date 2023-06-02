// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  LockContainer,
  Description,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [lock, setLock] = useState(true)
  const onClickButton = () => {
    setLock(prevState => !prevState)
  }

  return (
    <MainContainer>
      {lock ? (
        <LockContainer>
          <img
            src="https://assets.ccbp.in/frontend/hooks/lock-img.png"
            alt="lock"
            width="200px"
          />
          <Description>Your Device is Locked</Description>
        </LockContainer>
      ) : (
        <LockContainer>
          <img
            src="https://assets.ccbp.in/frontend/hooks/unlock-img.png"
            alt="unlock"
            width="200px"
          />
          <Description>Your Device is Unlocked</Description>
        </LockContainer>
      )}

      {lock ? (
        <Button type="button" onClick={onClickButton}>
          Unlock
        </Button>
      ) : (
        <Button type="button" onClick={onClickButton}>
          Lock
        </Button>
      )}
    </MainContainer>
  )
}
export default Unlock
