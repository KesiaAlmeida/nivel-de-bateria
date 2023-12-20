document.addEventListener("DOMContentLoaded", function () {
    updateBatteryLevel(90);

});

function updateBatteryLevel(level) {
    const batteryLevelElement = document.getElementById("battery-level");
    batteryLevelElement.style.width = level + "%" 
}