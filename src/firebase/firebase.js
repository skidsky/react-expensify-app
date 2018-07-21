import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };


// child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });



// child_changed

// database.ref('expenses').on('value', (snapshot) => {

//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// const onValueChange =
// database.ref('expenses')
//   .once('value')
//   .then( (snapshot) => {
//     const expenses = [];
    
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id:childSnapshot.key, 
//         ...childSnapshot.val()
//       });
//     });
//   });

// const onValueChange = database.ref().on('value', (snapshot) => {

// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// database.ref('expenses').push({
//   description: 'Coffee',
//   note: 'First coffee in the morning', 
//   amount: 2000, 
//   createdAt: 0
// });

// database.ref('expenses').push({
//   description: 'Pancake',
//   note: 'Grate pancake',
//   amount: 4000,
//   createdAt: 1000020
// });

// database.ref('expenses').push({
//   description: 'Boat Rent',
//   note: 'Boat Rental Fees',
//   amount: 9000000,
//   createdAt: 4404040400
// });

// database.ref('notes/-LHsFq536ALw6iKJ9iUd').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'React Native, Angular, Phython'
// });

// database.ref('notes').set(notes);

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// database.ref('location/city')
//   .once('value')
//   .then( (snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch( (e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Andrew Mead',
//   age: 26,
//   stressLevel: 6, 
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },   
//   location: {
//     city: 'Philadelphia',
//     country: 'United States'
//   }
// }).then(() =>{
//   console.log('Data is saved');
// }).catch( (e) => {
//   console.log('This failed >>>>.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon', 
//   'location/city': 'Seattle'
// });

// database.ref('isSingle')set(null);
// database.ref().remove()
// .then( () => {
//   console.log('data is removed');
// }).catch( (e) => {
//   console.log('This failed >>> ', e);
// });