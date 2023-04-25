import * as C from "./App.styles";
import logoImage from "./assets/devmemory_logo.png";
import restartIcon from "./svgs/restart.svg";
import { InfoItem } from "./components/InfoItem";
// import { useState } from "react";
import { Button } from "./components/RestartButton";

function App() {
  // const [count, setCount] = useState(0);

  const resetAndCreateGrid = () => {};

  return (
    <C.Container>
      <C.Info>
        <C.LogoLink>
          <img src={logoImage} alt="" width="200" />
        </C.LogoLink>

        <C.InfoArea>
          <InfoItem label="Tempo" value="00:00" />
          <InfoItem label="Movimentos" value="0" />
        </C.InfoArea>

        <Button
          label="Reiniciar"
          icon={restartIcon}
          onClick={resetAndCreateGrid}
        />
      </C.Info>
      <C.GridArea>...</C.GridArea>
    </C.Container>
  );
}

export default App;
