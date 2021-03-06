document.addEventListener('DOMContentLoaded', function () {
	console.log('Loaded page content');
	
	let load = document.getElementById('load');
	
	/* Build an XHR/ajax request */
	
	// 1. create the request obj
	let xhr = new XMLHttpRequest();
	
	// 2. create the callback function, the code you want to run when the
	// response from the server is received - create a function that is
	// invoked when ever there is a change in the onReadyStateChange event
	xhr.onreadystatechange = function () {
		// we're only interested in the final state change, ready state == 4
		// and everything is correct
		if(xhr.readyState === 4) { // 0-4 (4 means the server has sent back the complete response)
			if(xhr.status === 200) {
				document.getElementById('ajax').innerHTML = xhr.responseText;
			}
			// else if(xhr.status === 404) {
			// 	// file not found
			//
			// } else if(xhr.status === 500) {
			// 	// server error
			//
			// }
			else {
				console.log(xhr.response);
			}
		}
	};
	
	// 3. open the request, passing the http method and url (file or service)
	xhr.open('GET', 'paragraph.html');
	
	// execute ajax call via button click
	load.addEventListener('click', function () {
		// 4. send the request - when submitting info, eg form data, pass it to send()
		xhr.send();
		load.style.display = 'none';
	});
	
});