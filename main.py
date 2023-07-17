def change_camra():
    global camra
    if camra == 1:
        camra = 2
    elif camra == 2:
        camra = 3
    elif camra == 3:
        camra = 4
    elif camra == 4:
        camra = 1
def move():
    if controller.player1.is_pressed(ControllerButton.B):
        change_camra()
    if controller.player1.is_pressed(ControllerButton.RIGHT):
        player_1.x += 2.5
    if controller.player1.is_pressed(ControllerButton.LEFT):
        player_1.x += -2.5
    if controller.player1.is_pressed(ControllerButton.DOWN):
        player_1.y += 2.5
    if controller.player1.is_pressed(ControllerButton.UP):
        player_1.y += -2.5
    if controller.player2.is_pressed(ControllerButton.RIGHT):
        player_2.x += 2.5
    if controller.player2.is_pressed(ControllerButton.LEFT):
        player_2.x += -2.5
    if controller.player2.is_pressed(ControllerButton.DOWN):
        player_2.y += 2.5
    if controller.player2.is_pressed(ControllerButton.UP):
        player_2.y += -2.5
    if controller.player4.is_pressed(ControllerButton.RIGHT):
        player_camra.x += 2.5
    if controller.player4.is_pressed(ControllerButton.LEFT):
        player_camra.x += -2.5
    if controller.player4.is_pressed(ControllerButton.DOWN):
        player_camra.y += 2.5
    if controller.player4.is_pressed(ControllerButton.UP):
        player_camra.y += -2.5
    if controller.player3.is_pressed(ControllerButton.UP):
        player_3.y += -2.5
    if controller.player3.is_pressed(ControllerButton.RIGHT):
        player_3.x += 2.5
    if controller.player3.is_pressed(ControllerButton.LEFT):
        player_3.x += -2.5
    if controller.player3.is_pressed(ControllerButton.DOWN):
        player_3.y += 2.5
    if controller.player3.is_pressed(ControllerButton.UP):
        player_3.y += -2.5
def update_camra():
    if camra == 1:
        scene.camera_follow_sprite(player_1)
    elif camra == 2:
        scene.camera_follow_sprite(player_2)
    elif camra == 3:
        scene.camera_follow_sprite(player_3)
    elif camra == 4:
        scene.camera_follow_sprite(player_camra)
camra = 0
player_camra: Sprite = None
player_3: Sprite = None
player_2: Sprite = None
player_1: Sprite = None
player_1 = sprites.create(assets.image("""
    myImage
"""), SpriteKind.player)
player_2 = sprites.create(assets.image("""
    myImage0
"""), SpriteKind.player)
player_3 = sprites.create(assets.image("""
    myImage1
"""), SpriteKind.player)
player_camra = sprites.create(img("""
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
    """),
    SpriteKind.player)
camra = 1
tiles.set_current_tilemap(tilemap("""
    level1
"""))
scene.camera_follow_sprite(player_1)

def on_on_update():
    move()
game.on_update(on_on_update)
