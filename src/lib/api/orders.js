// TODO: point at NEXT_PUBLIC_API_BASE_URL once a real backend exists, e.g.:
// const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/orders`, {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(orderPayload),
// });
// return res.json();

function randomOrderId() {
  return "EC-" + Math.floor(10000 + Math.random() * 89999);
}

export async function createOrder(orderPayload) {
  await new Promise((resolve) => setTimeout(resolve, 900));

  return {
    orderId: randomOrderId(),
    status: "confirmed",
  };
}
