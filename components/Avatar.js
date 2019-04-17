import styled from 'styled-components'

const Img = styled.img`
  clip-path: circle(35px at center);
  vertical-align: middle;
  margin-right: 20px;
`

const Avatar = ({ path }) => {
  return <Img src={path} width="70px" height="70px" />
}

export default Avatar