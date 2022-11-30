const posts = [
  { title: "post a", content: "<p>Hello A</p>" },
  { title: "post b", content: "<p>Hello B</p>" },
  { title: "post c", content: "<p>Hello C</p>" },
  { title: "post d", content: "<p>Hello D</p>" },
];

const fetchPosts = () =>
  new Promise((resolve, reject) => {
    const timeout = Math.floor(Math.random() * 1000);
    console.log(timeout);
    setTimeout(() => {
      const rand = Math.random(); // 0-1
      if (rand > 0.7) {
        // error occured
        reject({ err: "server error", time: timeout });
        // resolve({ err: "server error", time: timeout });
        // error({ err: "server error", time: timeout })
      } else {
        // everything went fine
        resolve({ posts, time: timeout });
        // resolve(timeout);
        // success({ posts, time: timeout })
      }
    }, timeout);
  });

const success = (data) => {
  console.log(data);
};
const error = (err) => {
  console.log(err);
};
// new Promise().then().catch().finally()
// fetchPosts()
//   .then(success)
//   .catch(error)
//   .finally(() => {
//     console.log("finally");
//   });

const promises = [];

// for (let i = 0; i < 10; i++) {
//   // promises.push(new Promise())
//   promises.push(fetchPosts());
// }

// promises[0].then((d) => {
//   console.log(d);
// });

// Promise.all(promises)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// Promise.allSettled(promises)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// Promise.race(promises)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// console.log(promises);
