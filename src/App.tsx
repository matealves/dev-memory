import { useEffect, useState } from "react";
import * as C from "./App.styles";
import logoImage from "./assets/devmemory_logo.png";
import restartIcon from "./svgs/restart.svg";
import { InfoItem } from "./components/InfoItem";
import { Button } from "./components/RestartButton";
import { GridItemType } from "./types/GridItemType";
import { items } from "./data/items";

function App() {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => resetAndCreateGrid(), []);

  const resetAndCreateGrid = () => {
    // step 1: resetar o jogo
    setTimeElapsed(0);
    setMoveCount(0);
    setShownCount(0);

    // step 2: criar o grid
    // step 2.1: criar o grid vazio
    let tempGrid: GridItemType[] = [];
    for (let i = 0; i < items.length * 2; i++) {
      tempGrid.push({
        item: null,
        shown: false,
        permanentShown: false,
      });
    }
    // step 2.2: preencher o grid (aleatóriamente)
    for (let w = 0; w < 2; w++) {
      for (let i = 0; i < items.length; i++) {
        let pos = -1;
        while (pos < 0 || tempGrid[pos].item !== null) {
          pos = Math.floor(Math.random() * (items.length * 2));
        }
        tempGrid[pos].item = i;
      }
    }

    // step 2.3: jogar no state
    setGridItems(tempGrid);

    // step 3: iniciar jogo
    setPlaying(true);
  };

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
      <C.GridArea>
        <C.Grid>...</C.Grid>
      </C.GridArea>
    </C.Container>
  );
}

export default App;
