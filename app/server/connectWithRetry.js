// import { MongoClient } from "mongodb";

// /**
//  *
//  * @param {MongoClient} client
//  */
// async function retryConnection(client, attempts = 0, maxAttempts = 10) {
//   try {
//     const connection = await client.connect();
//     // return client.connect();
//     return connection;
//   } catch (error) {
//     console.log(error);
//     setTimeout(() => {}, 1000);
//   }
// }
// /**
//  *
//  * @param {MongoClient} client
//  */
// async function retryMongoConnection(client, maxAttempts = 10) {
//   let currentAttempt = 0;
//   return new Promise((res, rej) => {
//     const intervalId = setInterval(async () => {
//       try {
//         const result = await client.connect();
//         clearInterval(intervalId);
//         res(result);
//         if (currentAttempt == maxAttempts) {
//           clearInterval(intervalId);
//           rej(null);
//         }
//       } catch (err) {
//       } finally {
//         currentAttempt++;
//         if (currentAttempt > maxAttempts) {
//           rej(null);
//         }
//       }
//     }, 500);
//   });
// }
