var doc = window.document;

// Selection

function $id(id) { // id: String - element id
	return doc.getElementById(id);
}

function $q(query) { // query: String - selector query
	return doc.querySelector(query);
}

function $qAll(query) { // query: String - selector query
	return doc.querySelectorAll(query);
}

// Manipulation

/* Creates a new DOM element */
function $el(el, class, id) { // el: String - element to create; class, id: String - class, id to apply to element
	var n = doc.createElement(el);
	if (class) n.className = class;
	if (id) n.id = id;
	return n;
}

function $append(parent, child) { // parent: DOM Node - the container; child: DOM Node or String - the appendee
	if (typeof child === "string") {
		var el = $el("div");
		el.innerHTML = child;
		while (el.childNodes.length > 0) {
			parent.appendChild(el.childNodes[0]);
		}
	} else {
		parent.appendChild(child);
	}
}

function $prepend(parent, child) { // parent: DOM Node - the container; child: DOM Node or String - the prependee
	if (typeof child === "string") {
		var el = $el("div");
		el.innerHTML = child;
		while (el.childNodes.length > 0) {
			parent.insertBefore(el.childNodes[0], parent.childNodes[0]);
		}
	} else {
		parent.insertBefore(child, parent.childNodes[0]);
	}
}

function $html(el, html) {
	el.innerHTML = html;
}

function $empty(el) {
	$html(el, "");
}

function $text(el, text) {
	el.textContent = text;
}

function $remove(el) {
	el.parentNode.removeChild(el);
}

// Classes

function $addClass(el, c) {
	if(el) el.classList.add(c);
}

function $removeClass(el, c) {
	if (el) el.classList.remove(c);
}