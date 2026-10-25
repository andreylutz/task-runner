function ticketPrice(category) {
  switch (category) {
    case 1:
      return 300;
    case 2:
      return 500;
    case 3:
      return 900;
    default:
      return 0;
  }
};

function maxTickets(budget, price) {
  if (price <= 0) {
    return 0;
  }

  let count = 0;
  let remainingBudget = budget;

  while (remainingBudget >= price) {
    remainingBudget -= price;
    count++;
  };

  return count;
};

function printTicketResult(category, budget) {
  const price = ticketPrice(category);

  if (price === 0) {
    console.log('неизвестная категория');
    return;
  }

  const count = maxTickets(budget, price);
  console.log(`Категория ${category}, билет ${price} руб., бюджет ${budget} руб.: можно купить ${count} шт.`);
};

module.exports = {
  ticketPrice,
  maxTickets,
  printTicketResult
};