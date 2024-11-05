namespace SolarSystem {

    // global variables
    
    //const child: CelestialBody[] = [];
    let sun: CelestialBody;
   export  let jsonInfo: {[key: string]: Description};

    //setting up the canvas
    const canvas: HTMLCanvasElement = document.querySelector("canvas")!;
    export const crc2: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d")!;

    //Slider for the SpeedModifier
    const speedSlider: HTMLInputElement = <HTMLInputElement>document.getElementById("SpeedModifier");

    export interface Data {
        name: string,
        info: string,
        text: string,
        color: string,
        radius: number,
        rotAngle: number,
        speedFactor: number,
        distanceFromCenter: number,
        children: Data[],
    }

    export interface Description {
        info: string,
        text: string
    }

    window.addEventListener("load", handleLoad);
    // speedSlider.addEventListener("input", handleSliderInput);

    async function handleLoad(): Promise<void> {
        //preparing the simulation
        console.log("loading page");

        const response: Response = await fetch("Data.json");
        const jsonData: Data = await response.json();

        const infoResponse: Response = await fetch("info.json");
        jsonInfo = await infoResponse.json();
        

        // console.log(jsonInfo[body.name].info);
    
        sun = createCelestialBodies(jsonData, jsonInfo);
        canvas.addEventListener("click", handleClick);
        setInterval(update, 25);

    }

    function createCelestialBodies(_data: Data, _description: {[key: string]: Description}): CelestialBody {
        //creating all simulated celestial bodies
        
        const body: CelestialBody = new CelestialBody(_data);

        for(const child of _data.children) {
            body.addChild(createCelestialBodies(child, _description)); 
        }

        return body;

    }

    function handleClick(_event: MouseEvent): void {

        const hit: CelestialBody | null = sun.checkedIfClicked(_event);
        let planetName: string = "";
        let planetInfo: string = "";
        let planetText: string = "";

        
        //display planetName, planetInfo and planetText in div element beneath slider

        const nameBox: HTMLElement = document.querySelector(".infoBlock .nameBox")!;
        const infoBox: HTMLElement = document.querySelector(".infoBlock .infoBox")!;
        const textBox: HTMLElement = document.querySelector(".infoBlock .textBox")!;
        
        if(hit) {
            planetName = hit.name;
            planetInfo = jsonInfo[hit.name].info;
            planetText = jsonInfo[hit.name].text;

            console.log(planetName);
            console.log(planetInfo);
            console.log(planetText);

            nameBox.innerHTML = planetName;
            infoBox.innerHTML = planetInfo;
            textBox.innerHTML = planetText;
    }
        }
        





    function update(): void {
        //updating and redrawing the simulation
        // console.log("updating");

        crc2.clearRect(0, 0, canvas.width, canvas.height);

        crc2.fillStyle = "black";
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        sun.draw();
        sun.orbitStep(Number(speedSlider.value));

    }

}