//navbar fixed

window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
};

//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

 setInterval(waktu, 1000)
    function waktu(){
      let time = new Date()
      let hour = time.getHours()
      let min = time.getMinutes()
      am_pm = "AM"

      if(hour >= 12){
        if(hour > 12) hour -+12
        am_pm = "AM"
      }

      hour = hour < 10 ? "0" + hour : hour
      min = min < 10 ? "0" + + min : min
      let currenTime = hour + ":" + min + " " + am_pm

      document.getElementById("jam").innerHTML = currenTime
    }

    function tanggal(){
      const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
      let tgl = new Date()
      let tanggal = tgl.getDate()
      let hari = tgl.getDay()
      let bulan = tgl.getMonth()
      let currentDate = weekday[hari] + " " + tanggal + " " + month[bulan]

      document.getElementById("tanggal").innerHTML = currentDate
    }

