import './style.css';
import { Elements } from './elements';

const height: number = 13;
const width: number = 41;
let gameBoard: number[][] = [];
const elements = new Elements();
const size:number = 27

window.onload = () => {
  document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div id="test"></div>
  `;
  
  createGameBoard(width, height);
  putGhosts(10)
};

const createGameBoard = (w: number, h: number) => {
  const body: HTMLElement = document.querySelector('#test')!;
    for (let i = 0; i < h; i++) {
    const container: HTMLElement = document.createElement('div');
    const tileTypes: string[] = [
      '',
      elements.playerUrl!,
      elements.grassUrl!,
      elements.stoneUrl!,
    ];
    container.className = 'container';
    gameBoard.push([])
    for (let j = 0; j < w; j++) {
      let el = i === 0 || i === h-1 || j === 0 || j ===w-1 || (i % 2 === 0 && j % 2 === 0) ? 3 : 2
      el = i === 1 && j === 1 ? 1 : el//put player at 1,1
      const field: HTMLElement = document.createElement('div');
      field.id = i === 1 && j === 1 ? `player` : `${i},${j}`;
      field.style.backgroundImage = "url('" + tileTypes[el] + "')";
      field.style.top = `${i*size}px`
      field.style.left = `${j*size}px`
      container.appendChild(field);
      gameBoard[i].push(el)
    };
    body.appendChild(container);
  };
  console.log(gameBoard);
};
const putGhosts = (amount:number) => {
  let count = amount
  while(count > 0) {
    const x:number= Math.floor(Math.random() * (width-1))
    const y:number= Math.floor(Math.random() * (height-1))
    if (gameBoard[y][x] == 2) {
      const container = document.querySelector('.container')!
      const ghost: HTMLElement = document.createElement('div');
      ghost.className = "ghost"
      ghost.id = `ghost${count}`;
      ghost.style.backgroundImage = "url('" + elements.ghostUrl! + "')";
      ghost.style.top = document.getElementById(`${y},${x}`)!.style.top
      ghost.style.left = document.getElementById(`${y},${x}`)!.style.left
      container.appendChild(ghost);
      count--
    }
  }
}