let timeDiv = document.querySelector(".time")
let dateDiv = document.querySelector(".date")
let fajr = document.querySelector(".fajr")
let sunRise = document.querySelector(".sun-rise")
let dhuhr = document.querySelector(".Dhuhr")
let asr = document.querySelector(".Asr")
let maghrib = document.querySelector(".Maghrib")
let isha = document.querySelector(".Isha")
let gv = document.querySelector("#governorates")
let gvValue = gv.value
gv.addEventListener("change",()=>{
    gvValue = gv.value
    getPrayTime(gvValue)
})

let date = new Date()
let month = (date.getMonth())+1
let day = (date.getDate())-1
let year = date.getFullYear()

async function getPrayTime(gvValue) {
    let prayTime = await fetch(`https://api.aladhan.com/v1/calendarByCity/${year}/${month}?city=${gv.value}&country=egypt&method=5`)
    let myApi = await prayTime.json()
    let {data} = myApi
    dateDiv.innerHTML=data[day].date.readable
    fajr.innerHTML=[...(data[day].timings.Fajr)].slice(0,5).join("")
    sunRise.innerHTML=[...(data[day].timings.Sunrise)].slice(0,5).join("")
    dhuhr.innerHTML=[...(data[day].timings.Dhuhr)].slice(0,5).join("")
    asr.innerHTML=[...(data[day].timings.Asr)].slice(0,5).join("")
    maghrib.innerHTML=[...(data[day].timings.Maghrib)].slice(0,5).join("")
    isha.innerHTML=[...(data[day].timings.Isha)].slice(0,5).join("")
}

getPrayTime(gvValue)