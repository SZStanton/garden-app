// Function for User Prompts
function getUserInput(message) {
  let input = prompt(message);

  // Avoids crash if user clicks cancel
  return input ? input.toLowerCase() : '';
}

// Function provides advice based on the season
function getSeasonAdvice(season) {
  if (season === 'summer') {
    return 'Water your plants regularly and provide some shade.\n';
  } else if (season === 'winter') {
    return 'Protect your plants from frost with covers.\n';
  } else {
    return 'No advice for this season.\n';
  }
}

// Function provides advice based on the plant type
function getPlantAdvice(plantType) {
  if (plantType === 'flower' || plantType === 'flowers') {
    return 'Use fertiliser to encourage blooms.';
  } else if (plantType === 'vegetable' || plantType === 'vegetables') {
    return 'Keep an eye out for pests!';
  } else {
    return 'No advice for this type of plant.';
  }
}

// User Prompt for the growing season
let season = getUserInput('Which season are you growing your plant in?');

// User Prompt for the plant type
let plantType = getUserInput(
  'Are you asking about a flower, a vegetable or other?',
);

// Combines all gardening advice
let advice = '';
advice += getSeasonAdvice(season);
advice += getPlantAdvice(plantType);

// Display the final gardening advice
console.log(advice);

