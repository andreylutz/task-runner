const readline = require('node:readline/promises');

const { printTicketResult } = require('./tickets');
const { printDelivery } = require('./delivery');
const { printSteps } = require('./staircase');

async function app() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  try {
    console.log('Выберите задачу:');
    console.log('1 — билетная касса');
    console.log('2 — доставка заказа');
    console.log('3 — лестница');

    const choice = await rl.question('Ваш выбор: ');

    switch (choice.trim()) {
      case '1': {
        const category = Number(
          await rl.question('Категория билета: ')
        );

        const budget = Number(
          await rl.question('Бюджет: ')
        );

        printTicketResult(category, budget);
        break;
      };
      case '2': {
        const distance = Number(
          await rl.question('Расстояние: ')
        );

        const total = Number(
          await rl.question('Сумма заказа: ')
        );

        printDelivery(distance, total);
        break;
      };
      case '3': {
        const height = Number(
          await rl.question('Высота лестницы: ')
        );

        printSteps(height);
        break;
      };
      default:
        console.log('такой задачи нет');
    };
  } catch (error) {
    console.error('Ошибка выполнения приложения:', error);
    process.exitCode = 1;
  } finally {
    rl.close();
  }
}

module.exports = { app };