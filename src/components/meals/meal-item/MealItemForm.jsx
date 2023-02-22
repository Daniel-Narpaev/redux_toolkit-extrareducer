import React, { useState } from 'react'
import styled from 'styled-components'
import {ReactComponent as PlusIcons} from "../../../assets/icons/plus-icons.svg"
import Button from '../../UI/Button'
import {addToBasket} from "../../../store/basket/basketSlice"
import { useDispatch } from 'react-redux'


const MealItemForm = ({id, title, price }) => {
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(1)
   
  const amountChangeHandler = (event)=>{
     setAmount(event.target.value)
  }

  const submitHandler = (event)=>{
    event.preventDefault()
  
    const basketItem = {
      id,
      price,
      title,
      amount,
    }
  dispatch(addToBasket(basketItem))
    }
  return (
    <StyledForm onSubmit={submitHandler}>
       <Contaiber>
       <label htmlFor={id}>Amount</label>
       <input
        type="number"
         value={amount} 
         onChange={amountChangeHandler} 
         id={id} 
         min={1} 
         max={5} />
       </Contaiber>
            <Button>
            <StyledIcon/>Add
            </Button>
    </StyledForm>
  )
}

export default MealItemForm;

const StyledIcon = styled(PlusIcons)`
    margin-right: 10px;
`
const Contaiber = styled.div`
    margin-bottom: 12px;
    label {
        line-height: 27px;
        font-weight: 600;
        font-size: 18px;
        color: #222222;
    }
    input {
        border-radius: 6px;
        width: 60px;
        height: 32px;
       outline: none;
       border: 1px solid #d6d6d6;
       padding: 4px 12px;
       line-height: 24px;
       font-weight: 600;
       font-size: 16px;
    }
    display: flex;
    align-items: center;
    
`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  
`
