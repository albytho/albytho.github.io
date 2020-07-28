function isVisibile(element) {
	let elementBox = element.getBoundingClientRect();
	let distanceFromTop = 0;

	if (elementBox.top - window.innerHeight < distanceFromTop) {
		return true;
	} else {
		return false;
	}
}

function scanDocument() {
	let sectionList = document.querySelectorAll(".hidden");
	sectionList.forEach(function (section) {
		if (isVisibile(section)) {
			section.classList.remove("hidden");
		}
	});
}

document.addEventListener("scroll", scanDocument);
