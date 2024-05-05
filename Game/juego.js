document.addEventListener("DOMContentLoaded", function() {
    var canvas = document.getElementById("gameCanvas");
    var ctx = canvas.getContext("2d");
    var shipWidth = 50;
    var shipHeight = 50;
    var shipX = (canvas.width - shipWidth) / 2;
    var shipY = canvas.height - shipHeight - 10;
    var shipSpeed = 5;
    var rightPressed = false;
    var leftPressed = false;
    var spacePressed = false;
    var bulletWidth = 5;
    var bulletHeight = 15;
    var bulletX;
    var bulletY;
    var bulletSpeed = 10;
    var bulletActive = false;
    var enemyWidth = 50;
    var enemyHeight = 50;
    var enemyX = Math.random() * (canvas.width - enemyWidth);
    var enemyY = 0;
    var enemySpeed = 2;
    var enemyImage = new Image();
    enemyImage.src = "enemigo.PNG";
    var score = 0;
    var gameover = false;

    function drawShip() {
        ctx.beginPath();
        ctx.rect(shipX, shipY, shipWidth, shipHeight);
        ctx.fillStyle = "blue";
        ctx.fill();
        ctx.closePath();
    }

    function drawBullet() {
        if (bulletActive) {
            ctx.beginPath();
            ctx.rect(bulletX, bulletY, bulletWidth, bulletHeight);
            ctx.fillStyle = "red";
            ctx.fill();
            ctx.closePath();
        }
    }

    function drawEnemy() {
        ctx.drawImage(enemyImage, enemyX, enemyY, enemyWidth, enemyHeight);
    }

    function drawScore() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("Score: " + score, 10, 20);
    }

    function drawGameOver() {
        ctx.font = "30px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("Game Over", canvas.width / 2 - 100, canvas.height / 2);
    }

    function collisionDetection() {
        if (bulletActive && bulletY < enemyY + enemyHeight && bulletX > enemyX && bulletX < enemyX + enemyWidth) {
            score++;
            resetBullet();
            resetEnemy();
        }

        // Resto de la lógica de colisión
    }

    function resetBullet() {
        bulletActive = false;
        bulletX = undefined;
        bulletY = undefined;
    }

    function resetEnemy() {
        enemyX = Math.random() * (canvas.width - enemyWidth);
        enemyY = 0;
    }

    function keyDownHandler(event) {
        if (event.key === "ArrowRight" || event.key === "Right") {
            rightPressed = true;
        } else if (event.key === "ArrowLeft" || event.key === "Left") {
            leftPressed = true;
        } else if (event.key === " ") {
            spacePressed = true;
        }
    }

    function keyUpHandler(event) {
        if (event.key === "ArrowRight" || event.key === "Right") {
            rightPressed = false;
        } else if (event.key === "ArrowLeft" || event.key === "Left") {
            leftPressed = false;
        } else if (event.key === " ") {
            spacePressed = false;
        }
    }

    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (!gameover) {
            if (rightPressed && shipX < canvas.width - shipWidth) {
                shipX += shipSpeed;
            } else if (leftPressed && shipX > 0) {
                shipX -= shipSpeed;
            }

            drawShip();

            if (spacePressed && !bulletActive) {
                bulletX = shipX + shipWidth / 2 - bulletWidth / 2;
                bulletY = shipY;
                bulletActive = true;
            }

            if (bulletActive) {
                bulletY -= bulletSpeed;

                if (bulletY < 0) {
                    resetBullet();
                }

                drawBullet();
            }

            drawEnemy();
            drawScore();
            collisionDetection();
        } else {
            drawGameOver();
            return;
        }

        requestAnimationFrame(update);
    }

    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);

    enemyImage.onload = function() {
        update();
    };
});
