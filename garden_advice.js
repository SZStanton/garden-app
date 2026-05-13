// User Prompt for the growing season and 'cancel' error handling
let season = prompt(
  'Which season are you growing your plant in?',
).toLowerCase();
season = season ? season.toLowerCase() : ''; // Avoids crash if user clicks cancel

// User Prompt for the plant type and 'cancel' error handling
let plantType = prompt(
  'Are you asking about a flower, a vegetable or other?',
).toLowerCase();
plantType = plantType ? plantType.toLowerCase() : '';

// Stores gardening advice
let advice = '';

// Adds advice based on the season user enters
if (season === 'summer') {
  advice += 'Water your plants regularly and provide some shade.\n';
} else if (season === 'winter') {
  advice += 'Protect your plants from frost with covers.\n';
} else {
  advice += 'No advice for this season.\n';
}

// Adds advice based on the plant type user enters
if (plantType === 'flower') {
  advice += 'Use fertiliser to encourage blooms.';
} else if (plantType === 'vegetable') {
  advice += 'Keep an eye out for pests!';
} else {
  advice += 'No advice for this type of plant.';
}

// Display the final gardening advise to user
console.log(advice);

