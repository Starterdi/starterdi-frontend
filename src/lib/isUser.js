const user = window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')) : false;

export default user;