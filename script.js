
function getGithubInfo(username, callback) {
	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://api.github.com/users/' + username);
	
	xhr.addEventListener('load', function() {
		callback(null, xhr);
	});
	
	xhr.addEventListener('error', function() {
		callback(error);
	});
	
	xhr.send();
};;

function showUser(user){
	console.log(user);
	var profile = document.getElementById('profile');
	
	profile.innerHTML = '';
	
	var userDetails = document.createElement('p');
	userDetails.textContent = user.login + " is Github user #" + user.id;
	
	profile.appendChild(userDetails);
	
    var userInfo = document.createElement('a');
    userInfo.href = user.html_url;
	userInfo.textContent = "Click Here";
	 profile.appendChild(userInfo);
	 
	var userAvatar = document.createElement('img');
	userAvatar.src = user.avatar_url;
	 profile.appendChild(userAvatar);
};
	 

function onLoadGitHubData(err, req) {
	if (err) {
		return console.log(err);
	}
	
	var githubUserData = JSON.parse(req.responseText);
	showUser(githubUserData);
}

document.getElementById('username').addEventListener('keydown', function(e) {
	if (e.which === 13) {
		getGithubInfo($('input').val(), onLoadGitHubData);
	}
});

	
