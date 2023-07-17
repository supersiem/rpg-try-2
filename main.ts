function change_camra () {
    if (camra == 1) {
        camra = 2
    } else if (camra == 2) {
        camra = 3
    } else if (camra == 3) {
        camra = 4
    } else if (camra == 4) {
        camra = 1
    }
}
function move () {
    if (controller.player1.isPressed(ControllerButton.Right)) {
        player_1.x += 2.5
    }
    if (controller.player1.isPressed(ControllerButton.Left)) {
        player_1.x += -2.5
    }
    if (controller.player1.isPressed(ControllerButton.Down)) {
        player_1.y += 2.5
    }
    if (controller.player1.isPressed(ControllerButton.Up)) {
        player_1.y += -2.5
    }
    if (controller.player2.isPressed(ControllerButton.Right)) {
        player_2.x += 2.5
    }
    if (controller.player2.isPressed(ControllerButton.Left)) {
        player_2.x += -2.5
    }
    if (controller.player2.isPressed(ControllerButton.Down)) {
        player_2.y += 2.5
    }
    if (controller.player2.isPressed(ControllerButton.Up)) {
        player_2.y += -2.5
    }
    if (controller.player4.isPressed(ControllerButton.Right)) {
        player_camra.x += 2.5
    }
    if (controller.player4.isPressed(ControllerButton.Left)) {
        player_camra.x += -2.5
    }
    if (controller.player4.isPressed(ControllerButton.Down)) {
        player_camra.y += 2.5
    }
    if (controller.player4.isPressed(ControllerButton.Up)) {
        player_camra.y += -2.5
    }
    if (controller.player3.isPressed(ControllerButton.Up)) {
        player_3.y += -2.5
    }
    if (controller.player3.isPressed(ControllerButton.Right)) {
        player_3.x += 2.5
    }
    if (controller.player3.isPressed(ControllerButton.Left)) {
        player_3.x += -2.5
    }
    if (controller.player3.isPressed(ControllerButton.Down)) {
        player_3.y += 2.5
    }
    if (controller.player3.isPressed(ControllerButton.Up)) {
        player_3.y += -2.5
    }
}
function update_camra () {
    if (camra == 1) {
        scene.cameraFollowSprite(player_1)
    } else if (camra == 2) {
        scene.cameraFollowSprite(player_2)
    } else if (camra == 3) {
        scene.cameraFollowSprite(player_3)
    } else if (camra == 4) {
        scene.cameraFollowSprite(player_camra)
    }
}
let camra = 0
let player_camra: Sprite = null
let player_3: Sprite = null
let player_2: Sprite = null
let player_1: Sprite = null
player_1 = sprites.create(assets.image`myImage`, SpriteKind.Player)
player_2 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
player_3 = sprites.create(assets.image`myImage1`, SpriteKind.Player)
player_camra = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
camra = 1
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(player_1)
game.onUpdate(function () {
    move()
    update_camra()
    if (controller.menu.isPressed()) {
        change_camra()
    }
    if (controller.A.isPressed()) {
        player_1.sayText(camra)
    }
})
