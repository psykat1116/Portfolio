export const mouse = {
  x: 0,
  y: 0,
  radius: 50,
};

export class Particle {
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
  density: number;
  color: string;
  constructor(x: number, y: number, color: string) {
    this.x = x;
    this.y = y;
    this.size = 1;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random() * 150 + 1;
    this.color = color;
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
  update(
    mouse: { x: number; y: number; radius: number },
    image: HTMLImageElement
  ) {
    const dx = mouse.x - window.innerWidth / 2 + image.width / 2 - this.x;
    const dy = mouse.y - window.innerHeight / 2 + image.height / 2 - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    let fDirectionX = dx / distance;
    let fDirectionY = dy / distance;
    let maxDiastance = mouse.radius;

    let force = (maxDiastance - distance) / maxDiastance;
    let directionX = fDirectionX * force * this.density;
    let directionY = fDirectionY * force * this.density;

    if (distance < maxDiastance) {
      this.x -= directionX;
      this.y -= directionY;
    } else {
      if (this.x != this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 4;
      }
      if (this.y !== this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy / 4;
      }
    }
  }
}
