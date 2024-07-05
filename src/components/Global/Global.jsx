import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root{
    --black: #2A2A2A;
    --lighter-black: #2C2C2C;
    --light-black: #69686C;
    --lighter-gray: #AABCD5;
    --light-gray: #F8F8F8;
    --blue: #215BB8;
}

body{
    font-family: 'Poppins', sans-serif;
}
`;

export default Global;
