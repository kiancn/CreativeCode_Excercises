/**
 * The heart expresses time in seconds.
 * READ the deltaTime property to time-dependent variables (ex. speed)
 * There should only ever exist one HEART.
 */
class Heart {

    _lastTime = Date.now()
    deltaTime = 0
    currentBeat = 0
    timeSinceStart = 0

    beat = function () {
        this.currentBeat++
        this.deltaTime = this._calculateDeltaTime()
        this.timeSinceStart += this.deltaTime
    }

    beginAgain = function(){
        this._lastTime = Date.now()
        currentBeat = 0        
        this.timeSinceStart = 0
    }

    // method returns elapsed time since last heartbeat
    // IMPORTANT: Do not call this method manually
    _calculateDeltaTime = function () {
        const thisTime = Date.now()
        let delta = thisTime - this._lastTime
        this._lastTime = thisTime
        return delta/1000
    }
}

const HEART = new Heart()



