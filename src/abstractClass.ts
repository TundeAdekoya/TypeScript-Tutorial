abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getsepai(): void
    getReelTime(): number{
        // come cal
        return 8
    }
}

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getsepai(): void {
        console.log('sepia')
    }

}

const tunz = new Instagram ('test', 'Test', 3)


