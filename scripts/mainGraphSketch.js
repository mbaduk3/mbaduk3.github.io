/*
    The home page graph sketch. Relies on p5.js.
*/

var vertices = [];
var edges = [];
var cnv;

function centerCanvas() {
    var cnvx = (windowWidth - width) / 2;
    var cnvy = (windowHeight - height) / 2;
    cnv.position(cnvx, cnvy);
}

function setup() {
    cnv = createCanvas(2*windowWidth / 3, 2*windowWidth / 3);
    centerCanvas();

    var maxEdgeLen = 2 * windowWidth / 3;

    for (var i = 0; i < 22; i++) {
        var initX = random(width);
        var initY = random(height);
        var baseX = randomGaussian(width / 2, width / 7);
        var baseY = randomGaussian(height / 2, width / 7);
        vertices.push(new Vertex(initX, initY, baseX, baseY, 7));
    }

    for (var i = 0; i < vertices.length; i++) {
        for (var j = 0; j < vertices.length; j++) {
            if (i != j) {
                var v = vertices[i]; var v_ = vertices[j];
                var d = dist(v.baseX, v.baseY, v_.baseX, v_.baseY);
                if (d < maxEdgeLen) {
                    if (random(d) < 50) {
                        edges.push(new Edge(i, j));
                    }
                }
            }
        }
    }

}

function windowResized() {
    resizeCanvas(2*windowWidth / 3, 2*windowWidth / 3);
    centerCanvas();
}

function update() {
    vertices.forEach(v => v.update());
    edges.forEach(e => e.update());
}

function draw() {
    stroke(255, 255, 255);
    strokeWeight(0.5);
    clear();
    update();
    vertices.forEach(v => v.draw());
    edges.forEach(e => e.draw());
}


class Vertex {

    constructor(x, y, x_, y_, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.baseX = x_;
        this.baseY = y_;
        this.travelling = true;
    }

    update() {
        if (this.travelling) {
            let diffX = this.baseX - this.x;
            let diffY = this.baseY - this.y;
            if (abs(diffX) < 1) {
                this.x = this.baseX;
                this.travelling = false;
            } else {
                this.x = this.x + (diffX / 50);
            }
            if (abs(diffY) < 1) {
                this.y = this.baseY;
                this.travelling = false;
            } else {
                this.y = this.y + (diffY / 50);
            }
        }
    }

    draw() {
        ellipse(this.x, this.y, this.r, this.r);
    }

}

class Edge {

    constructor(fromI, toI) {
        this.fromI = fromI;
        this.toI = toI;
        this.len = 0;
    }

    update() {
        this.len = dist(vertices[this.fromI].x, vertices[this.fromI].y, vertices[this.toI].x, vertices[this.toI].y);
    }

    draw() {
        strokeWeight(min(4, max(100 / this.len, 0.2)));
        line(vertices[this.fromI].x, vertices[this.fromI].y,
            vertices[this.toI].x, vertices[this.toI].y);
    }
}
