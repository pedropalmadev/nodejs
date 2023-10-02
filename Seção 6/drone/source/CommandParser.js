class CommandParser {
    constructor(drone){
        this.parseCommand = function parseCommand(line){
            if(line == 'takeoff'){
                drone.onTakeoff()
                return true
            }
            if(line == 'land'){
                drone.onLand()
                return true
            }
            if(line.startsWith('forward')) {
                const [, dist] = line.split(" ")
                drone.onForward(dist)
                return true
            }
            if(line.starstWith('back')) {
                const [, dist] = line.split(" ")
                drone.onBack(dist)
                return true
            }
            if(line.startsWith('right')) {
                const [, dist] = line.split(" ")
                drone.onRight(dist)
                return true
            }
            if(line.startsWith('left')) {
                const [, dist] = line.split(" ")
                drone.onLeft(dist)
                return true
            }
            if(line == 'battery') {
                drone.onBattery(line)
                return true
            }
            if(line == 'flip') {
                drone.onFlip(line)
                return true
            }

            return false
        }
    }
}


module.exports = CommandParser