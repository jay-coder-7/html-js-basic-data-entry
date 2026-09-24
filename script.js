let dev = [
    {
        name: "Rahul",
        skills: ["HTML", "CSS", "JavaScript"],
        experience: "2 years"
    },

];
let f = document.querySelector("form")
let ac = document.querySelector(".ac")
function prd() {
    let s = ""
    dev.forEach(function (e) {
        s += `<h1>${e.name}</h1>
        <h1>${e.skills}</h1>
        <h1>${e.experience}</h1>`
    })
    ac.innerHTML = s

}
f.addEventListener("submit", function (e) {
    e.preventDefault()
    let no = {
        name:f.childNodes[1].value,
        skills:f.childNodes[3].value,
        experience:f.childNodes[5].value
    }
    dev.push(no)
    prd()
    f.reset()


})
prd()
















































