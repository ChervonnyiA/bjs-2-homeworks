class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (time === null|| callback === null || arguments.length !== 2) {
            throw new Error('Отсутствуют обязательные аргументы');
        }

        let oldAlarm = this.alarmCollection.find((element) => element.time === time);
            if (oldAlarm) {
                console.warn('Уже присутствует звонок на это же время');
            }

        let alarm = {
            callback: callback,
            time: time,
            canCall: true
        };
        this.alarmCollection.push(alarm);
    }

    removeClock(time) {
        let alarms = this.alarmCollection.filter((element) => element.time === time);
        for (let i = 0; i < alarms.length; i++) {
            this.alarmCollection.splice(alarms[i], 1);
        }
    }

    getCurrentFormattedTime() {
        let now = new Date();
        return now.toLocaleTimeString().substring(0, 5);
    }

    start() {
        if (this.intervalId === null) {
            this.intervalId = setInterval(() => {
                this.alarmCollection.forEach((element) => {
                    if (element.time === this.getCurrentFormattedTime() && element.canCall) {
                        element.canCall = false;
                        element.callback();
                    } 
                })
            }, 1000);
        }    
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach((element) => element.canCall = true);
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}