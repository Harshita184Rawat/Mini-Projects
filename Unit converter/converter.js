const units = {
    "Length": [
        { name: "Millimeter", value: 0.001 },
        { name: "Centimeter", value: 0.01 },
        { name: "Meter", value: 1 },
        { name: "Kilometer", value: 1000 },
        { name: "Inch", value: 0.0254 },
        { name: "Foot", value: 0.3048 },
        { name: "Yard", value: 0.9144 },
        { name: "Mile", value: 1609.344 }
    ],
    "Temperature": [
        { name: "Celsius", value: "celsius" },
        { name: "Fahrenheit", value: "fahrenheit" },
        { name: "Kelvin", value: "kelvin" }
    ],
    "Weight": [
        { name: "Milligram", value: 0.001 },
        { name: "Gram", value: 1 },
        { name: "Kilogram", value: 1000 },
        { name: "Pound", value: 453.592 },
        { name: "Ounce", value: 28.3495 }
    ],
    "Volume": [
        { name: "Milliliter", value: 0.001 },
        { name: "Centiliter", value: 0.01 },
        { name: "Liter", value: 1 },
        { name: "Gallon", value: 3.78541 },
        { name: "Quart", value: 0.946353 },
        { name: "Pint", value: 0.473176 },
        { name: "Fluid Ounce", value: 0.0295735 }
    ]
};

const unitTypes = Object.keys(units);

// UI elements
const form = document.querySelector("form");
const fromUnit = document.querySelector("#from-unit");
const toUnit = document.querySelector("#to-unit");
const input = document.querySelector("#input");
const output = document.querySelector("#output");

// Add unit types to the dropdown list
unitTypes.forEach(type => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    document.querySelector("#unit-type").appendChild(option);
});

// Add units to the from and to dropdown lists
document.querySelector("#unit-type").addEventListener("change", e => {
    const type = e.target.value;
    const unitsList = units[type];
    
    // Clear the dropdown lists
    fromUnit.innerHTML = "";
    toUnit.innerHTML = "";

    // Add the units to the dropdown lists
    unitsList.forEach(unit => {
        const fromOption = document.createElement("option");
        fromOption.value = unit.value;
        fromOption.textContent = unit.name;
        fromUnit.appendChild(fromOption);

        const toOption = document.createElement("option");
        toOption.value = unit.value;
        toOption.textContent = unit.name;
        toUnit.appendChild(toOption);
    });
});

// Handle form submission
form.addEventListener("submit", e => {
    e.preventDefault();

    const fromValue = parseFloat(input.value);
    const fromUnitValue = parseFloat(fromUnit.value);
    const toUnitValue = parseFloat(toUnit.value);
    const conversionFactor = fromUnitValue / toUnitValue;
    const result = fromValue * conversionFactor;
    
    output.value = result.toFixed(2);
});