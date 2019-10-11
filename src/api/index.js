import Firebase from 'firebase/app'
import 'firebase/database'

Firebase.initializeApp({
  databaseURL: 'https://hacker-news.firebaseio.com'
})

const api = Firebase.database().ref('/v0')

function fetch(child) {
  return new Promise((resolve, reject) => {
    api.child(child)
      .once('value', snapshot => {
        resolve(snapshot.val())
      }, reject)
  })
}

export function fetchIdsByType(type) {
  return fetch(`${type}stories`)
}

export function fetchItems(ids) {
  return Promise.all(ids.map(id => fetch(`item/${id}`)))
}
