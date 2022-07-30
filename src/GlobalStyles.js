import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    @font-face {
        font-family: "proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif;
        src: local("proxima-nova"), url('./fonts/ProximaNova-Regular.otf') format('openType');
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        a {
            color: #AF524B;
        }
    }

    body {
        font-size: 100%;
        font-family: "proxima-nova","Helvetica Neue",Helvetica,Arial,sans-serif;
    }

`

export default GlobalStyles;