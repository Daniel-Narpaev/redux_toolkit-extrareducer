import React from 'react'
import styled from 'styled-components'


const Button = ({children, variant="contained", borderStyle="rounder", ...restProps}) => {
  return (
    <StyledButton variant={variant} borderStyle={borderStyle} {...restProps}>{children}</StyledButton>
  )
}

export default Button;


const getBackdropColor = (props)=>{
  return props.variant==="contained"?"#8a2b06":"#FFF"
}

const getBorder = (props)=>{
  return props.variant === "contained"?"none":"1px solid #8A2B06"
}
const getColor = (props)=>{
  return props.variant === "contained"?"#FFF":"#8A2B06"
}

const getBorderRadius = (props)=>{
  return props.borderStyle === "rounder"?"20px":"6px"
}
const StyledButton = styled.button`
    background:${getBackdropColor};
    border-radius: ${getBorderRadius};
    padding: 10px 32px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color:${getColor};
    border: ${getBorder};
    display: flex;
    align-items: center;
    cursor: pointer;
    &&:hover{
        background-color:#7e2a0a;
        color: #fff;
    }
    &&:hover > #counter{
        background-color: #1a0902;
    }
  
`