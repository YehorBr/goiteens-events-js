import styled from "styled-components";

export const Item = styled.li`
    width: 150px;


    border-radius: 25px;

    text-align: center;

    flex: 1 1 calc(25% - 10px); 
    
    color: #dbefff;
    background-color: #018ed7;

    svg{
        margin-top: 2px;
        margin-right: 5px;
        fill: #0b4f86c1
    }

    padding: 20px;


    
`

export const Span = styled.span`
    color:#dbefff ;

    background-color: ${({type})=>{
        switch (type){
            case "free":

                return "#42c642"
            
            case "vip":
                return "#c6b139"    

                default:

                return "#496ea9"
        }
        
    }};
    
    padding: 5px 15px;
    border-radius: 25px;

`