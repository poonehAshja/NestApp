import React, {useState, useEffect} from 'react';
import styled from "styled-components";

const ButtonCont= styled.button `
background-color:red;
`;


const Controls = ({onClick}) => {
    return <div>
           <ButtonCont onClick={onClick}>
            Click me</ButtonCont>
    </div>
}



Controls.defaultProps = {
 onClick: ()=>{}
}
   

export default Controls;