function printSteps(height) {
  let count = 0;

  for (let step = 1; step <= height; step++) {
    if (step === 4) {
      continue;
    }

    if (step > 10) {
      console.log('Дальше лестница не построена');
      break;

    }

    console.log(`Ступень ${step}`);
    count++;
  }

  console.log(`Всего построено: ${count}`);
}

module.exports = { printSteps };