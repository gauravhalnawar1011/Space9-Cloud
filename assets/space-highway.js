
(function () {
    function startSpaceEffect() {
        if (document.getElementById("space9-canvas")) return;

        var canvas = document.createElement("canvas");
        canvas.id = "space9-canvas";

        Object.assign(canvas.style, {
            position: "fixed",
            inset: "0",
            width: "100%",
            height: "100%",
            zIndex: "999",
            pointerEvents: "none"
        });

        document.body.appendChild(canvas);

        var ctx = canvas.getContext("2d");
        var particles = [];
        var width, height;

        function resize() {
            var ratio = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;

            canvas.width = width * ratio;
            canvas.height = height * ratio;
            ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

            particles = [];

            for (var i = 0; i < 75; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5
                });
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);

            particles.forEach(function (p, i) {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                ctx.fillStyle = "#25caff";
                ctx.shadowBlur = 12;
                ctx.shadowColor = "#008cff";
                ctx.fill();
                ctx.shadowBlur = 0;

                for (var j = i + 1; j < particles.length; j++) {
                    var q = particles[j];
                    var dx = p.x - q.x;
                    var dy = p.y - q.y;
                    var distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 130) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(q.x, q.y);
                        ctx.strokeStyle =
                            "rgba(0,180,255," +
                            (1 - distance / 130) * 0.35 + ")";
                        ctx.stroke();
                    }
                }
            });

            requestAnimationFrame(animate);
        }

        resize();
        window.addEventListener("resize", resize);
        animate();

        console.log("Space9 Premium Effect Activated!");
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", startSpaceEffect);
    } else {
        startSpaceEffect();
    }
})();
