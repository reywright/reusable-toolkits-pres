// example Layout.js
import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Img = styled.div`
  background-image: url('images/npm.svg');
  background-position: center;
  background-size: cover;
  height: 60%;
`
 
const Bottom = styled.div`
  height: 40%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  flex-direction: column;
`

const Text = styled.span`
  display: inline-block;
  vertical-align: middle;
  font-weight: 500;
`

export default () => (
  <Container>
    <Flex>
      <Img />
      <Bottom>
        <div>
          <h2>Creating <em>reusable</em> toolkits 📦</h2>
          <div>
            <Avatar path="images/headshot.jpg" />
            <Text>by Rey Wright</Text>
          </div>
        </div>
      </Bottom>
    </Flex>
  </Container>
)