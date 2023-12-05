class Scene1 extends Phaser.Scene {
    constructor() {
        super('intro');
    }
    preload() {

    }
    create(){

    }
}
class Scene2 extends Phaser.Scene {
    constructor() {
        super('scene1');
    }
    preload() {

    }
    create(){

    }
}
class Scene3 extends Phaser.Scene {
    constructor() {
        super('scene2');
    }
    preload() {

    }
    create(){
        
    }
}
new Phaser.Game({
    width: 600, 
    height: 600,
    scene: [Scene1,Scene2,Scene3],
    backgroundColor: 0xffffff
});