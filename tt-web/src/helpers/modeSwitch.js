const handleModeSwitch = (e) => {
  let body = document.getElementById("switch")
  let classname = body.className
  body.className = classname === "light" ? "dark" : "light"
  let mode = document.getElementById("switch").className
  console.log(mode)
  document.documentElement.setAttribute("data-theme", mode)
}

module.exports = {handleModeSwitch}