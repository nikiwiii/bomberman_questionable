export class Elements {
  public stoneUrl?: string;
  public grassUrl?: string;
  public brickUrl?: string;
  public playerUrl?: string;
  public ghostUrl?: string;
  constructor() {
    let img: CanvasImageSource = new Image();
    img.src = '../img/sheet.png';
    let canvas: HTMLCanvasElement = document.createElement('canvas');
    canvas.width = 27;
    canvas.height = 27;
    let ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
    img.onload = () => {
      ctx.drawImage(img, 48, 48, 28, 28, 0, 0, 48, 48);
      this.stoneUrl = canvas.toDataURL();
      ctx.reset()
      ctx.drawImage(img, 48, 70, 28, 28, 0, 0, 48, 48);
      this.grassUrl = canvas.toDataURL();
      ctx.reset()
      ctx.drawImage(img, 0, 0, 28, 28, 0, 0, 48, 48);
      this.playerUrl = canvas.toDataURL();
      ctx.reset()
      ctx.drawImage(img, 0, 240.5, 28, 28, 0, 0, 48, 48);
      this.ghostUrl = canvas.toDataURL();
    };
  }
}
