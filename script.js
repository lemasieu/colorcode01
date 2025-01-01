function rgbToHex(r, g, b) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
}

document.getElementById("to-hex").addEventListener("click", () => {
    const rgbInput = document.getElementById("rgb-input").value;
    const rgbParts = rgbInput.split(",").map(num => parseInt(num.trim()));
    if (rgbParts.length === 3 && rgbParts.every(num => num >= 0 && num <= 255)) {
        const hex = rgbToHex(rgbParts[0], rgbParts[1], rgbParts[2]);
        document.getElementById("hex-input").value = hex; // Điền kết quả vào ô HEX
    } else {
        alert("Dữ liệu RGB không hợp lệ! Hãy nhập dạng: 255, 0, 0.");
    }
});

document.getElementById("to-rgb").addEventListener("click", () => {
    const hexInput = document.getElementById("hex-input").value.trim();
    const rgb = hexToRgb(hexInput);
    if (rgb) {
        document.getElementById("rgb-input").value = rgb; // Điền kết quả vào ô RGB
    } else {
        alert("Dữ liệu HEX không hợp lệ! Hãy nhập dạng: #FF0000.");
    }
});
