import { PlusCircle } from '@phosphor-icons/react'

import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import "./global.css";

function App() {
  return (
    <div>
      <Header />

      <div>
        <Input />
        <Button>
          Criar
          <PlusCircle />
        </Button>
      </div>
    </div>
  );
}

export default App;
