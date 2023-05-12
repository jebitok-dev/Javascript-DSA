// Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.

async function sleep(millis) {
  let t = Date.now();

  await new Promise(resolve => setTimeout(resolve, millis));
  console.log(Date.now() - t);
}

console.log(sleep(100));