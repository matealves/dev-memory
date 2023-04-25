import * as C from "./App.styles";
import logoImage from "./assets/devmemory_logo.png";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink>
          <img src={logoImage} alt="" width="200" />
        </C.LogoLink>

        <C.InfoArea>...</C.InfoArea>

        <button>Reiniciar</button>
      </C.Info>
      <C.GridArea>...</C.GridArea>
    </C.Container>
  );
}

export default App;
