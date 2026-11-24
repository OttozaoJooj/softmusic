import PromptSync from "prompt-sync"
import AuthorController from "./controller/AuthorController"
import { ControllerInterface } from "./interfaces/ControllerInterface"
import MusicController from "./controller/MusicController"

const ops: ControllerInterface[] = [
    new MusicController,
    new AuthorController
]


console.log("===================")
console.log("==== SOFTMUSIC ====")
console.log("===================")

console.log("*** MENU ***")
console.log("1. Cadastro de Musica")
console.log("2. Cadastro de Author")


const p = PromptSync();

const choice: number = Number(p("Escolha um número: "));

const controller: ControllerInterface | undefined = ops[choice - 1]

controller?.start();