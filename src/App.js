import Header from "./components/header/Header";
import Summary from "./components/summary/Summary";
import Meals from "./components/meals/Meals";
import Basket from "./components/basket/Basket";
import styled from "styled-components";
import { useState } from "react";


function App() {

  const [isBasketVisible, setBasketVisible]= useState(false)

  const showBasketHandler = ()=>{
    setBasketVisible(prevState => ! prevState)
  }
  return (
   <div>
        <Header onShowBasket={showBasketHandler}/>
     <Content>
     <Summary/>
      <Meals/>
      {isBasketVisible && <Basket onClose={showBasketHandler}/>}
     </Content>
   </div>
    
  
  );
}

export default App;
 const Content = styled.div`
 margin-top: 101px;
 `

