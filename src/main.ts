import { defaultArgs } from "./funciones/defaultArgs";
import { functionsTs } from "./funciones/functions";
import { optionalArgs } from "./funciones/optionalArgs";
import { requiredArgs } from "./funciones/requiredArgs";
import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Funciones TypeScript</h1>
  </div>
`;

functionsTs();
requiredArgs();
optionalArgs();
defaultArgs();
