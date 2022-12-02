import { createGlobalStyle } from "styled-components";
import "@fontsource/kaushan-script";
import "@fontsource/sirin-stencil";
const GlobalStyles = createGlobalStyle`
    *, *::before, *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    a{
        color: inherit;
        text-decoration: none;
    }

    body{
        font-family: "Sirin Stencil";
        overflow-x: hidden;
    }
    h1,h2,h3,h4,h5,h6{
        margin: 0;
        padding: 0;
    }
    img{
}
input, button, select, textarea{
    outline: none;
    font-size: 16px;
}
input{
    line-height:normal;
}
button{
    cursor: pointer;
}
ul,li{
    list-style: none;
}
`;
export default GlobalStyles;
