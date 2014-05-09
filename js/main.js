(function(win) {

	var doc = win.document;

	var View = {
		Modal: {
			info: $(".modal-info")
		},
		Field: {
			image: $(".js-file-field")
		},
		Buttons: {
			openModal: $(".btn-open-modal-info"),
			closeModal: $(".btn-close-modal-info")
		}
	};

	View.Field.image.on("change", function(e) {
		var file = e.target.files[0];
		readImageFile(file);
	});

	View.Buttons.openModal.on("click", function(e) {
		View.Modal.info.addClass("active");
	});

	View.Buttons.closeModal.on("click", function(e){
		View.Modal.info.removeClass("active");
	});

	var readImageFile = function(file) {
		var reader = new FileReader();
		reader.onload = function(event) {
			var dataUri = event.target.result;
			createImageFromURI(dataUri, ".image-container");
		};

		reader.onerror = function(event) {
			console.error("File could not be read! Code " + event.target.error.code);
		};
		reader.readAsDataURL(file);
	};

	var createImageFromURI = function(imageURI, selector) {
		var container = doc.querySelector(selector);
		container.innerHTML = "";
		var img = doc.createElement("img");
		img.src = imageURI;
		container.appendChild(img);
	};

})(window);