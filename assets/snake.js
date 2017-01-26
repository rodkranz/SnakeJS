/**
 * Created by rlopes on 26/01/2017.
 */
function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = 1;
    this.ySpeed = 0;

    this.update = function update() {
        this.x = this.x + this.xSpeed;
        this.y = this.y + this.ySpeed;
    };

    this.show = function show() {
        fill(255);
        rect(this.x, this.y, 10, 10);
    };

    this.dir = function dir(x, y) {
        this.xSpeed = x;
        this.ySpeed = y;
    }
}
