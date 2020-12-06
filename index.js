/*to execute this progress bar provide "node ." command in the terminal*/

const process = require("process")
const rdl = require("readline")
class LoadingBar {
    constructor(size) {
        /*initial size*/
        this.size = size
        /*initial cursor is 0*/
        this.cursor = 0
        /*initial timer is null*/
        this.timer = null
    }
start() {
        process.stdout.write("\x1B[?25l")

        /* uncomment this to view the schema of progress bar*/

       /* for (let i = 0; i < this.size; i++) {
            process.stdout.write("\u2591")
        }*/

        /*change the value 5 - cursor value and provide the required cursor value*/
        rdl.cursorTo(process.stdout, this.cursor, 5);
        this.timer = setInterval(() => {
            process.stdout.write("\u2588")

            /*timer is 50 here, increase the value to make the progress slow and vice versa*/

            this.cursor++;
            if (this.cursor >= this.size) {
                clearTimeout(this.timer)
            }
        }, 50)
    }
}

/*the progress bar size is provided here which calls the LoadingBar()*/

const ld = new LoadingBar(50)
ld.start()