(function(global) {

	var initParameterValues = function() {
		var parameters = document.querySelectorAll('#parameter input[type="checkbox"]'),
			showValues = [],
			value = '';

		for(var i = 0; i < parameters.length; i++) {
			if(parameters[i].checked) {
				showValues.push(parameters[i].value);
				parameters[i].parentNode.classList.remove('disabled');
			} else {
				parameters[i].parentNode.classList.add('disabled');
			}
		}

		value = showValues.join(' ');

		var socialSharer = document.querySelector('social-sharer');
		socialSharer.setAttribute('show', value);
		socialSharer.updateModel();

		document.getElementById('code-parameter').innerHTML = value;
	};

	var initParameterEvent = function(update) {
		var inputParamsList = document.querySelectorAll('#parameter input[type="checkbox"]');

		for(var i = 0; i < inputParamsList.length; i++) {

			if(!update) {
				inputParamsList[i].setAttribute('checked', 'checked');
			}

			inputParamsList[i].addEventListener('change', initParameterValues, false);
			inputParamsList[i].parentNode.addEventListener('mousedown', function(event) {
				if(this.classList.contains('disabled')) {
					event.preventDefault();
				}
			}, false);
		}
	};

	// style
	var inputStyleList = document.querySelectorAll('input[name="style"]');
	for(var i = 0; i < inputStyleList.length; i++) {
		inputStyleList[i].addEventListener('change', function() {
			document.getElementById('social-sharer').className = this.value;
			document.getElementById('code-style').innerHTML = this.value;
		}, false);
	}

	// initialize sort
	initParameterEvent();

	var dragParameter = null;
	var dropzone = document.getElementById('parameter');
	var parameters = document.querySelectorAll('#parameter li[draggable="true"]');
	var dataType = (!!~navigator.userAgent.indexOf("Trident") || !!~navigator.userAgent.indexOf("MSIE")) ? 'text' : 'text/html';
	for(var i = 0; i < parameters.length; i++) {
		(function(parameter) {
			parameter.addEventListener('dragstart', function(event) {
				this.classList.add('move');

				dragParameter = this;
				event.dataTransfer.effectAllowed = 'move';
				event.dataTransfer.setData(dataType, this.innerHTML);
			}, false);

			parameter.addEventListener('dragend', function(event) {
				this.classList.remove('move');
			}, false);

			parameter.addEventListener('dragenter', function(event) {
				if(!this.classList.contains('move') && !this.classList.contains('disabled')) {
					this.classList.add('over');
				}
			}, false);

			parameter.addEventListener('dragleave', function(event) {
				this.classList.remove('over');
			}, false);

			parameter.addEventListener('dragover', function(event) {
				if(!this.classList.contains('disabled')) {
					event.preventDefault();
				}
			}, false);

			parameter.addEventListener('drop', function(event) {
				event.preventDefault();
				event.dataTransfer.dropEffect = 'move';

				this.classList.remove('over');

				if(dragParameter != this) {
					dragParameter.innerHTML = this.innerHTML;
					this.innerHTML = event.dataTransfer.getData(dataType);
					initParameterValues();
					initParameterEvent(true);
				}
			}, false);

		}(parameters[i]));
	}
}(window));