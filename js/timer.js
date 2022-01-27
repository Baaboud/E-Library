const timer = ()=>{
    const upperDate = new Date('2 03, 2022 00:00:00').getTime();
    const currentDate = new Date().getTime();
    const diffDate = upperDate-currentDate;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    const remain_days = Math.floor(diffDate/days);
    const remain_hours = Math.floor((diffDate%days)/hours);
    const remain_minutes = Math.floor((diffDate%hours)/minutes);
    const remain_seconds = Math.floor((diffDate%minutes)/seconds);

    var d = document.getElementById('days');
    var h = document.getElementById('hours');
    var m = document.getElementById('minutes');
    var s = document.getElementById('seconds');

    d.innerHTML = remain_days;
    h.innerHTML = remain_hours;
    m.innerHTML = remain_minutes;
    s.innerHTML = remain_seconds;
}

setInterval(timer, 1000);