function ClockService() {

    this.getTime = function getTime() {
        var today = new Date()
        var hour = today.getHours()
        var minute = today.getMinutes()
        minute = checkTime(minute)
        var elem = document.getElementById('clock')
        var template = ''

        template += `
            <h1>${hour + ":" + minute}</h1>
        `
        elem.innerHTML = template
        var resync = setTimeout(getTime, 5000);        
    }
    function checkTime(i) {
        if (i < 10) { i = "0" + i };
        return i;
    }
}