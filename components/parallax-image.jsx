import React from 'react'

import styled from '@emotion/styled'

const ParallaxStyle = styled.div`
  user-select: 'none';
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  height: 100%;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const ParallaxImage = props => (
  <ParallaxStyle {...props}>
    {props.children}
  </ParallaxStyle>
)

export default ParallaxImage
