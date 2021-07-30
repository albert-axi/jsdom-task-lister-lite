function addNewUser(newUser, username) {
  console.log("Add new user in the user collection!")
  db.collection("users").doc(newUser.uid).set({
    username: username
  })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}

function addNewTask(task) {

  return db.collection("users").doc(auth.currentUser.uid).collection('tasks').add({
    description: task.description,
    priority: task.priority,
    dueDate: task.dueDate
  })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      return docRef.id
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });

}

function removeTask(task) {
  db.collection("users").doc(auth.currentUser.uid).collection('tasks').doc(task.id)
    .then(() => {
      console.log("Document successfully deleted!");
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
}