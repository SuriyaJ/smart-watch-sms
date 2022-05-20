function time() {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let date = new Date()
    let hr = date.getHours()
    let min = date.getMinutes()
    let day = date.getDay()


    hr = hr < 10 ? "0" + hr : hr
    min = min < 10 ? "0" + min : min
    let timeformat = hr + ":" + min

    document.querySelector(".smalltime").innerHTML = timeformat
    document.querySelector(".time").innerHTML = timeformat
    document.querySelector(".day").innerHTML = days[day]


}
let timer = setInterval(time, 1000)



document.querySelector(".message").addEventListener("click", displaymessage)
let messageclick = false

function displaymessage() {



    messageclick = !messageclick
    if (messageclick) {
        let screen = document.querySelector(".times")
        let p = document.createElement("p")
        screen.style.backgroundColor = "white"
        screen.style.color = "black"
        screen.style.border = "solid "
        let span = document.querySelectorAll(".times span")
        span.forEach((ele) => ele.style.display = "none")

        p.innerHTML = "Java is a general purpose, high-level programming language first released by Sun Microsystems in 1995. It is designed to have as few implementation dependencies as possible, is free to use, and can run on all platforms. It is concurrent, class-based, and object-oriented. Simply put, Java is a computing platform where users can develop applications."

        screen.appendChild(p)
    } else {
        let screen = document.querySelector(".times")
        let p = document.querySelector(".times p")

        screen.style.backgroundColor = "black"
        screen.style.color = "white"
        screen.style.border = "none "
        let span = document.querySelectorAll(".times span")
        span.forEach((ele) => ele.style.display = "block")

        screen.removeChild(p)
    }



}