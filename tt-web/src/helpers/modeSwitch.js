const applyInitialDataTheme = () => {
  document.documentElement.setAttribute("data-theme", "light")
}

const handleModeSwitch = (e) => {
  let body = document.getElementById("switch")
  let classname = body.className
  body.className = classname === "light" ? "dark" : "light"
  let mode = document.getElementById("switch").className
  document.documentElement.setAttribute("data-theme", mode)
}

module.exports = {handleModeSwitch, applyInitialDataTheme}