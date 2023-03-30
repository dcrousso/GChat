const electron = require("electron");

function forceInteraction(selector, type = "click") {
	const element = document.querySelector(selector);
	if (!element)
		return;

	element[type in element ? type : "click"]();
}

function pollForElement(selector, callback) {
	requestAnimationFrame(function handleAnimationFrame() {
		const element = document.querySelector(selector);
		if (element) {
			callback(element);
			return;
		}

		requestAnimationFrame(handleAnimationFrame);
	});
}

pollForElement(".XU", (element) => {
	(new MutationObserver(() => {
		electron.ipcRenderer.send("unread-count", parseInt(element.textContent.trim()));
	})).observe(element, {
		characterData: true,
		childList: true,
		subtree: true
	});
});

electron.ipcRenderer.on("show-preferences", () => {
	forceInteraction("[data-tooltip=\"Settings\"]");
});

electron.ipcRenderer.on("log-out", () => {
	window.location = "https://accounts.google.com/Logout?continue=https://chat.google.com/";
});

electron.ipcRenderer.on("start-chat", () => {
	forceInteraction("[data-tooltip=\"Start a chat\"]");
});

electron.ipcRenderer.on("search-chats", () => {
	forceInteraction("[placeholder=\"Find people, spaces, and messages\"]", "focus");
});
