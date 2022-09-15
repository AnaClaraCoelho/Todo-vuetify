import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

export default {
  getTasks: (callback) => {
    axios.get("/tasks").then((response) => {
      callback(response.data);
    });
  },
  addTasks: (task) => {
    return new Promise((resolve, reject) => {
      axios
        .post("/tasks", task)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  deleteTasks: (task) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/tasks/${task.id}`)
        .then((response) => {
          return resolve(response);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  },
  updateTask: (task, newTask) => {
    return new Promise((resolve, reject) => {
      axios
        .put(`/tasks/${task}`, newTask)
        .then((response) => {
          return resolve(response.data);
        })
        .catch((error) => {
          return reject(error);
        });
    });
  },
};
