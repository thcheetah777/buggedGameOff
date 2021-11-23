// Update animations and sprite movement
function update() {
  // Controls
  // Right
  if (game.cursors.right.isDown) {
    // Move right
    game.spy.setVelocityX(350);

    // Move animation
    game.spy.anims.play("run", true);

    // Flip image
    game.spy.flipX = false;
    game.spy.setOffset(25, 20);

    // Left
  } else if (game.cursors.left.isDown) {
    // Move left
    game.spy.setVelocityX(-350);

    // Move animation
    game.spy.anims.play("run", true);

    // Flip image
    game.spy.flipX = true;
    game.spy.setOffset(22, 20);

    // None
  } else {
    // Don't move
    game.spy.setVelocityX(0);

    // Stop anims
    game.spy.setTexture("spy0");
  }

  // Jump
  if (game.cursors.up.isDown && game.spy.body.blocked.down) {
    // Jump
    game.spy.setVelocityY(-800);

    // Play jump sound
    game.sfx.jump.play({
      volume: 0.7
    });
  }

  // Shoot bug
  if (game.keyPress(Phaser.Input.Keyboard.KeyCodes.C)) {
    // Play SFX
    game.sfx.shootBug.play({
      volume: 0.5
    });

    if (game.spy.flipX === false) {
      let bug = game.bugs.create(game.spy.x + 50, game.spy.y, "bug").setScale(3).setSize(7, 5).setOffset(23, 30).setVelocityX(300).setVelocityY(-300);
      bug.flipX = false;
    } else {
      let bug = game.bugs.create(game.spy.x - 30, game.spy.y, "bug").setScale(3).setSize(7, 5).setOffset(23, 30).setVelocityX(-300).setVelocityY(-300);
      bug.flipX = true;
    }
  }

  // Animation
  // Guard animation
  game.guards.getChildren().forEach(sprite => {
    sprite.anims.play("guardWalk", true);
    if (sprite.x >= sprite.endX) {
      sprite.setVelocityX(-100);
      sprite.flipX = true;
    } else if (sprite.x <= sprite.startX) {
      sprite.setVelocityX(100);
      sprite.flipX = false;
    }
  });
}
