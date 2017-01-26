/**
 * Created by rlopes on 26/01/2017.
 */
function Snake() {
    this.x      = 0;
    this.y      = 0;
    this.xSpeed = 1;
    this.ySpeed = 0;

    this.update = function update() {
        this.x = this.x + this.xSpeed * scl;
        this.y = this.y + this.ySpeed * scl;

        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);
    };

    this.eat = function eat(pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        return (d < 1);
    };

    this.show = function show() {
        fill(255);
        rect(this.x, this.y, scl, scl);
    };

    this.dir = function dir(x, y) {
        this.xSpeed = x;
        this.ySpeed = y;
    }
}
