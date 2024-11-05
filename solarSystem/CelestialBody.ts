namespace SolarSystem {

    export class CelestialBody {

        name: string;
        color: string;
        radius: number;
        rotAngle: number;
        rotSpeed: number;
        distanceFromCenter: number;
        path: Path2D;
        children: CelestialBody[];

        constructor(_data: Data) {
            const children: CelestialBody[] = [];
            const earthSpeed: number = 0.00015;

            this.children = children
            this.name = _data.name;
            this.color = _data.color;
            this.radius = _data.radius;
            this.rotAngle = _data.rotAngle;
            this.rotSpeed = _data.speedFactor * earthSpeed;
            this.distanceFromCenter = _data.distanceFromCenter;
            this.path = new Path2D;
        }

        draw(): void {
            //draw every celestial body in the children array
            // console.log("draw celestial bodies");

            const path: Path2D = new Path2D;

            crc2.save();
            crc2.rotate(this.rotAngle);
            crc2.translate(this.distanceFromCenter, 0);

            crc2.fillStyle = this.color;
            path.arc(0, 0, this.radius, 0, 2 * Math.PI);
            crc2.fill(path);
            path.closePath();
            this.path = path;

            for (let i: number = 0; i < this.children.length; i++) {
                const child: CelestialBody = this.children[i];
                child.draw();
            }

            crc2.restore();

        }

        orbitStep(_speedModifier: number): void {
            // console.log("orbit step");

            this.rotAngle += this.rotSpeed * _speedModifier;
            if (this.rotAngle > 360) {
                this.rotAngle -= 360;
            }

            for (let i: number = 0; i < this.children.length; i++) {
                const child: CelestialBody = this.children[i];
                child.orbitStep(_speedModifier);
            }
        }

        checkedIfClicked(_event: MouseEvent): CelestialBody | null{
            // console.log("clicked");

            crc2.save();
            crc2.rotate(this.rotAngle);
            crc2.translate(this.distanceFromCenter, 0);

            const x: number = _event.offsetX;
            const y: number = _event.offsetY;

            //check if the the planet = its path is clicked -> else: check for the children 
            if (crc2.isPointInPath(this.path, x, y)) 
                return this;

            else
                for (const child of this.children) {
                    child.checkedIfClicked(_event);
                }

            crc2.restore();

            return null
        }
        
        addChild(_child: CelestialBody): void {
            this.children.push(_child);
        }

            
        }


    }


