function deliveryPrice(distance, total) {
  if (total >= 3000) {
    return 0;
  };

  if (distance <= 3) {
    return 0;
  };

  if (distance <= 10) {
    return 200;
  };

  return 200 + (distance - 10) * 25;
};

function printDelivery(distance, total) {
  const price = deliveryPrice(distance, total);
  console.log(`Расстояние ${distance} км, заказ ${total} руб.: доставка ${price} руб.`);
};

module.exports = {
  deliveryPrice,
  printDelivery
};