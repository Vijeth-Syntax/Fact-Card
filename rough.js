// function getData(dataId, getNextData) {
//   // Its is gona print after 2 second
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//     console.log("It is an random text ...");
//   }, 2000);
//   console.log(`Getting Data${dataId} ...`);
// }
// // getData(1, getData(2)); It is wrong see below line
// // Below lines are the example for callback hell. Not a good way
// getData(1, () => {
//   getData(2, () => {
//     getData(3, () => {
//       getData(4);
//     })
//   });
// });



// Writing same above program using promise
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.2; // 80% chance of success
      console.log(`Please Wait... Data${dataId} is Loading`);
      
      if (isSuccess) {
        console.log("data", dataId);
        resolve(`Data ${dataId} loaded successfully`);
      } else {
        console.log(`Error loading data ${dataId}`);
        reject(`Failed to load data ${dataId}`);
      }
    }, 2000);
  });
}

// Promise chaining with error handling
getData(1)
  .then(() => getData(2))
  .then(() => getData(3))
  .then(() => getData(4))
  .then(() => {
    console.log("🎉 All data loaded successfully!");
  })
  .catch((error) => {
    console.log("❌ Error:", error);
  });


function validateOrder(item) {
  return new Promise((resolve, reject) => {
    if (item === 'pizza' || item === 'burger') {
      resolve(item);
    } else {
      reject(`${item} is not on the menu`);
    }
  });
}

function prepareFood(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.2;
      if (success) {
        resolve(`Your ${item} is ready.`);
      } else {
        reject(`Kitchen error: couldn't prepare ${item}`);
      }
    }, 2000);
  });
}

function deliverOrder(message) {
  const min = 15 * 60 * 1000;
  const max = 45 * 60 * 1000;
  const estTime = Math.floor(Math.random() * (max - min + 1)) + min;
  const mins = Math.floor(estTime / 60000);

  console.log(`Delivered: ${message} (Estimated time: ${mins} mins)`);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${message} delivered after ${mins} minutes.`);
    }, estTime);
  });
}

const item = "pizza";

validateOrder(item)
  .then(prepareFood)
  .then(deliverOrder)
  .then(console.log)
  .catch(console.error);

  