function loadFromLocalStorage(key) {
	const jsonString = localStorage.getItem(key.toUpperCase());
	return JSON.parse(jsonString);
}

function saveToLocalStorage(key, jsonData) {
	const jsonString = JSON.stringify(jsonData);
	localStorage.setItem(key.toUpperCase(), jsonString);
}

function updateDB(){
    saveToLocalStorage("database", database)
}

function refreshDB(){
    //database=loadFromLocalStorage("database");
    database=loadFromLocalStorage('DATABASE') ? loadFromLocalStorage('DATABASE'):originaldatabase
}

function displayActiveUser() {
    if(!database){return}
    if (!database.activeUser){return}

    usernameDisplay = document.getElementById('username-display');
    if (database.activeUser) {
        usernameDisplay.textContent = `Logged in as: ${database.activeUser.username}`;
    } else {
        usernameDisplay.textContent = 'No user logged in';
    }
}

function logout(){
    database.activeUser=null;
    updateDB();
    window.location.href = "Log-in.html"; 
}

function checkIfLoggedIn(){
    refreshDB();

    if(! database.activeUser){
        window.location.href = "Log-in.html"; 
    }

    if(database.activeUser==null){
        window.location.href = "Log-in.html"; 
    }
}

function clearLocalStorage(key) {
	localStorage.removeItem(key);
}

function resetDB(){
    clearLocalStorage("DATABASE");
    window.location.href = "Log-in.html"; 
}