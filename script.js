document.addEventListener("DOMContentLoaded", function () {
    updateBatteryLevel(100); 
});

function updateBatteryLevel(level) {
    const batteryLevelElement = document.getElementById("battery-level");
    batteryLevelElement.style.height = level + "%"
}