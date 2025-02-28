import styled from "styled-components";

export const StyleSkillsBar = styled.header`
    background-color: #998496;

    /* width: 100%; */
    /* height: 500px; */
    
    padding-bottom: 20px;
    padding-top: 20px;
    
    .icon{
        font-size: 125px;
        padding: 8px;
        /* background-color: red; */
        margin: 11px;
    }

    .msmTechSpanBox{
        /* width: 50px;
        height: 50px;
        border-radius: 15px 15px 15px 15px; */
        background-color: aliceblue;
        /* font-size: 20px; */
        position: absolute;
        /* margin-left: 50px; */
        /* padding: 10px; */
        /* margin-bottom: 100px; */
    }

    .msmTechSpan{
        margin-top: -160px;
        /* margin-left: 40px; */
        border-radius: 15px 15px 15px 15px; 
        font-size: 20px;
        justify-content: center;
        background-color: aliceblue;
        color: black;
        padding: 11px;
        position: absolute;
    }

    .iconTech{
        /* background-color: blue; */
        cursor: pointer;
        font-size: 150px;
        margin: 10px;


    }

    .titleOfSkillsBar1{
        /* background-color: green; */
        color: black;
        display: flex;
        font-size: 50px;
        justify-content: center;

    }

    .boxIcon{
        display: flex;
        width: 1000px;
        /* background-color: red; */
        flex-wrap: wrap;
    }

    .internalBoxIcon{
        display: flex;
        justify-content: center;
        background-color: #998496;
        width: 100%;
    }



    .iconTech:hover{
        /* color: #ccff33; */
    }

`