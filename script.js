
 // Cat Millwood
// Date: 11/03/2026
// Class: Personal Project
// Assignment: Pixel-Cat

const canvas = document.getElementById("catCanvas");
const ctx = canvas.getContext("2d");

const PIXEL = 12;

const COLORS = {
    outline: "#754052",
    shadow: "#AD496B",
    fur: "#D96891",
    furLight: "#F08EAD",
    highlight: "#FFC4D5",
    ear: "#F6B2C8",
    cream: "#FFF5F3",
    white: "#FFFFFF",
    eye: "#49303C",
    nose: "#7D2948",
    blush: "#F7A4BC",
    bow: "#FFB5D0",
    bowDark: "#D95E8A"
};

// Draw a pixel on the canvas.
function pixel(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(
        x * PIXEL,
        y * PIXEL,
        width * PIXEL,
        height * PIXEL
    );
}

// Draw small decorative sparkles.
function sparkle(x, y, color = COLORS.white) {
    pixel(x, y, 1, 1, color);
    pixel(x + 1, y, 1, 1, color);
    pixel(x, y + 1, 1, 1, color);
    pixel(x + 1, y + 1, 1, 1, color);
}

// Draw the ears.
function drawEars() {
    // Left ear outline.
    pixel(7, 7, 5, 2, COLORS.outline);
    pixel(7, 5, 2, 3, COLORS.outline);
    pixel(8, 3, 2, 3, COLORS.outline);
    pixel(9, 2, 2, 2, COLORS.outline);
    pixel(10, 3, 3, 2, COLORS.outline);
    pixel(11, 4, 2, 3, COLORS.outline);

    // Right ear outline.
    pixel(20, 7, 5, 2, COLORS.outline);
    pixel(23, 5, 2, 3, COLORS.outline);
    pixel(22, 3, 2, 3, COLORS.outline);
    pixel(21, 2, 2, 2, COLORS.outline);
    pixel(18, 3, 3, 2, COLORS.outline);
    pixel(19, 4, 2, 3, COLORS.outline);

    // Inner ears.
    pixel(9, 4, 2, 2, COLORS.ear);
    pixel(10, 5, 2, 2, COLORS.ear);
    pixel(9, 6, 3, 1, COLORS.highlight);

    pixel(20, 4, 2, 2, COLORS.ear);
    pixel(19, 5, 2, 2, COLORS.ear);
    pixel(19, 6, 3, 1, COLORS.highlight);

    pixel(8, 7, 4, 2, COLORS.fur);
    pixel(20, 7, 4, 2, COLORS.furLight);
}

// Draw the head.
function drawHead() {
    // Outer head silhouette.
    pixel(8, 7, 16, 2, COLORS.outline);
    pixel(6, 9, 20, 8, COLORS.outline);
    pixel(7, 17, 18, 2, COLORS.outline);
    pixel(9, 19, 14, 1, COLORS.outline);

    // Main fur.
    pixel(8, 9, 16, 8, COLORS.fur);
    pixel(9, 8, 14, 1, COLORS.fur);
    pixel(8, 17, 16, 1, COLORS.furLight);
    pixel(10, 18, 12, 1, COLORS.furLight);

    // Forehead highlights.
    pixel(10, 9, 3, 1, COLORS.furLight);
    pixel(11, 10, 2, 1, COLORS.highlight);
    pixel(20, 10, 2, 2, COLORS.furLight);

    // Fur details.
    pixel(8, 12, 1, 2, COLORS.furLight);
    pixel(22, 13, 1, 2, COLORS.shadow);
    pixel(10, 16, 2, 1, COLORS.furLight);
    pixel(20, 16, 2, 1, COLORS.furLight);

    // Forehead markings.
    pixel(14, 8, 1, 2, COLORS.highlight);
    pixel(16, 8, 1, 2, COLORS.highlight);
    pixel(15, 9, 1, 2, COLORS.furLight);
}

// Draw the face.
// Draw a symmetrical cat face
function drawFace(blink) {

    // LEFT EYE
    if (blink) {
        pixel(9, 13, 4, 1, COLORS.eye);
    } else {
        pixel(9, 11, 4, 5, COLORS.outline);
        pixel(10, 11, 3, 4, COLORS.eye);
        pixel(10, 11, 2, 2, COLORS.white);
        pixel(12, 14, 1, 1, COLORS.furLight);
    }

    // RIGHT EYE (mirrored)
    if (blink) {
        pixel(19, 13, 4, 1, COLORS.eye);
    } else {
        pixel(19, 11, 4, 5, COLORS.outline);
        pixel(19, 11, 3, 4, COLORS.eye);
        pixel(20, 11, 2, 2, COLORS.white);
        pixel(19, 14, 1, 1, COLORS.furLight);
    }

    // LEFT CHEEK
    pixel(6, 16, 3, 2, COLORS.blush);
    pixel(7, 17, 2, 1, COLORS.highlight);

    // RIGHT CHEEK (mirrored)
    pixel(23, 16, 3, 2, COLORS.blush);
    pixel(23, 17, 2, 1, COLORS.highlight);

    // CENTERED DARK BUTTON NOSE
    pixel(15, 15, 2, 1, "#71364D");
    pixel(14, 16, 4, 1, "#71364D");
    pixel(15, 17, 2, 1, "#71364D");

    // SMALL NOSE HIGHLIGHT
    pixel(15, 16, 1, 1, "#C96B89");

    // SYMMETRICAL THREE-PART CAT SMILE (ω)
    pixel(16, 18, 1, 1, "#71364D");

    pixel(14, 19, 1, 1, "#71364D");
    pixel(13, 18, 1, 1, "#71364D");

    pixel(17, 19, 1, 1, "#71364D");
    pixel(18, 18, 1, 1, "#71364D");

    // LEFT WHISKERS
    pixel(2, 15, 4, 1, COLORS.shadow);
    pixel(3, 17, 4, 1, COLORS.shadow);
    pixel(4, 19, 3, 1, COLORS.shadow);

    // RIGHT WHISKERS (mirrored)
    pixel(26, 15, 4, 1, COLORS.shadow);
    pixel(25, 17, 4, 1, COLORS.shadow);
    pixel(25, 19, 3, 1, COLORS.shadow);
}

// Draw the bow.
function drawBow() {
    // Left ribbon.
    pixel(17, 7, 3, 3, COLORS.bowDark);
    pixel(18, 8, 2, 1, COLORS.highlight);

    // Right ribbon.
    pixel(21, 7, 3, 3, COLORS.bowDark);
    pixel(22, 8, 1, 1, COLORS.highlight);

    // Center knot.
    pixel(20, 8, 2, 2, COLORS.bow);
    pixel(20, 8, 1, 1, COLORS.white);

    // Ribbon tails.
    pixel(19, 10, 1, 2, COLORS.bowDark);
    pixel(22, 10, 1, 2, COLORS.bowDark);
}

// Draw the body.
function drawBody() {
    // Body outline.
    pixel(10, 19, 12, 2, COLORS.outline);
    pixel(8, 21, 16, 7, COLORS.outline);
    pixel(9, 27, 14, 2, COLORS.outline);

    // Main fur.
    pixel(11, 20, 10, 2, COLORS.fur);
    pixel(9, 22, 14, 5, COLORS.fur);
    pixel(10, 27, 12, 1, COLORS.fur);

    // Cream chest.
    pixel(13, 20, 6, 1, COLORS.cream);
    pixel(12, 21, 8, 2, COLORS.cream);
    pixel(13, 23, 6, 2, COLORS.cream);
    pixel(14, 25, 4, 1, COLORS.cream);

    // Little pink heart on the chest.
    pixel(14, 22, 2, 1, COLORS.blush);
    pixel(13, 23, 4, 1, COLORS.blush);
    pixel(14, 24, 2, 1, COLORS.blush);
    pixel(15, 23, 1, 1, COLORS.white);

    // Fur shading.
    pixel(10, 22, 2, 2, COLORS.furLight);
    pixel(20, 23, 2, 2, COLORS.shadow);
    pixel(11, 26, 2, 1, COLORS.furLight);
    pixel(20, 26, 2, 1, COLORS.furLight);
}

// Draw the legs and animated feet.
function drawLegs(step) {
    // Back legs.
    pixel(10, 27, 4, 3, COLORS.outline);
    pixel(18, 27, 4, 3, COLORS.outline);

    pixel(11, 28, 2, 2, COLORS.furLight);
    pixel(19, 28, 2, 2, COLORS.furLight);

    // Front legs.
    pixel(8, 25, 3, 4, COLORS.outline);
    pixel(9, 26, 2, 3, COLORS.fur);

    pixel(21, 25, 3, 4, COLORS.outline);
    pixel(22, 26, 2, 3, COLORS.furLight);

    // Alternate paw positions.
    if (step === 0) {
        pixel(7, 28, 5, 3, COLORS.outline);
        pixel(8, 28, 3, 2, COLORS.cream);

        pixel(20, 29, 5, 2, COLORS.outline);
        pixel(21, 29, 3, 1, COLORS.cream);
    } else {
        pixel(7, 29, 5, 2, COLORS.outline);
        pixel(8, 29, 3, 1, COLORS.cream);

        pixel(20, 27, 5, 3, COLORS.outline);
        pixel(21, 28, 3, 2, COLORS.cream);
    }

    // Toe details.
    pixel(9, 29, 1, 1, COLORS.highlight);
    pixel(22, 29, 1, 1, COLORS.highlight);
}

// Draw the tail behind the cat.
function drawTail(time) {
    const wag = Math.sin(time * 0.009);

    ctx.save();
    ctx.translate(22 * PIXEL, 24 * PIXEL);
    ctx.rotate(wag * 0.35);

    // Tail outline.
    pixel(-1, 0, 5, 2, COLORS.outline);
    pixel(2, -2, 2, 3, COLORS.outline);
    pixel(4, -4, 2, 3, COLORS.outline);
    pixel(5, -7, 3, 3, COLORS.outline);
    pixel(6, -10, 3, 4, COLORS.outline);
    pixel(7, -12, 3, 3, COLORS.outline);

    // Tail fur and highlights.
    pixel(0, 0, 4, 1, COLORS.fur);
    pixel(3, -2, 1, 2, COLORS.furLight);
    pixel(5, -4, 1, 2, COLORS.fur);
    pixel(6, -7, 2, 2, COLORS.furLight);
    pixel(7, -10, 2, 3, COLORS.fur);
    pixel(8, -12, 1, 1, COLORS.furLight);

    ctx.restore();
}

// Draw sparkles around the cat.
function drawSparkles(time) {
    const sparkleVisible = Math.sin(time * 0.004) > 0;

    if (sparkleVisible) {
        sparkle(3, 12, COLORS.highlight);
        sparkle(27, 10, COLORS.highlight);
        sparkle(5, 24, COLORS.white);
        sparkle(27, 24, COLORS.white);
    }

    // Tiny floating hearts.
    const heartVisible = Math.sin(time * 0.003) > 0.7;

    if (heartVisible) {
        pixel(3, 8, 1, 1, COLORS.blush);
        pixel(5, 8, 1, 1, COLORS.blush);
        pixel(4, 9, 1, 1, COLORS.blush);

        pixel(27, 6, 1, 1, COLORS.blush);
        pixel(29, 6, 1, 1, COLORS.blush);
        pixel(28, 7, 1, 1, COLORS.blush);
    }
}

// Draw and animate the entire character.
function drawCat(time) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const step = Math.floor(time / 250) % 2;
    const bounce = Math.abs(Math.sin(time * 0.006)) * 12;
    const tilt = Math.sin(time * 0.006) * 0.07;

    const blink =
        Math.floor(time / 2800) % 5 === 0 &&
        time % 2800 < 140;

    ctx.save();

    // Shift the character left to leave room for the tail.
    ctx.translate(-48, bounce);

    // Draw the tail first so it stays behind the body.
    drawTail(time);

    // Dance movement.
    ctx.translate(180, canvas.height / 2);
    ctx.rotate(tilt);
    ctx.translate(-180, -canvas.height / 2);

    drawSparkles(time);
    drawBody();
    drawLegs(step);
    drawEars();
    drawHead();
    drawFace(blink);
    drawBow();

    ctx.restore();
}

// Keep animating.
function animate(time) {
    drawCat(time);
    requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
