/**
 * Created by rlopes on 26/01/2017.
 */
function Snake() {
    this.x      = 0;
    this.y      = 0;
    this.xSpeed = 1;
    this.ySpeed = 0;
    this.total  = 0;
    this.tail   = [];

    this.update = function update() {
        if (this.total === this.tail.length) {
            for (var i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1];
            }
        }
        this.tail[this.total - 1] = createVector(this.x, this.y);

        this.x = this.x + this.xSpeed * scl;
        this.y = this.y + this.ySpeed * scl;

        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);
    };

    this.eat = function eat(pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
            this.total++;
            return true;
        }

        return false;
    };

    this.show = function show() {
        fill(255);
        for (var i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        rect(this.x, this.y, scl, scl);
    };

    this.dir = function dir(x, y) {
        this.xSpeed = x;
        this.ySpeed = y;
    };

    this.death = function death() {
        for (var i = 0; i < this.tail.length; i++) {
            var pos = this.tail[i];
            var d   = dist(this.x, this.y, pos.x, pos.y);
            if (d < 1) {
                this.total = 0;
                this.tail = [];
            }
        }
    }
}
