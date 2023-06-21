// Example for Promise.all, resolve , reject

// Create a promise
let myPromise = new Promise(function (resolve, reject) {
  // Simulating an asynchronous operation
  setTimeout(() => {
    let x = 0;
    // Resolve the promise with some data
    if (x === 0) {
      resolve("Promise resolved");
    } else {
      reject(new Error("Promise rejected!"));
    }
  }, 2000);
});

// Using the promise
myPromise
  .then((result) => {
    // Promise resolved successfully
    console.log(result);
  })
  .catch((error) => {
    // Promise rejected with an error
    console.error(error);
  });



  

//Promise.all()
const findAll = async () => {
  try {
    const orders = orders.find({});
    const products = prducts.find({});
    let [orders, products] = await Promise.all([orders, products]);
    return {
      users,
      products,
    };
  } catch (error) {}
};

