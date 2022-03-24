// control inputs
function changeFromInput(from_slider, from_input, to_input, controlSlider) {
    const from = parseInt(from_input.value, 10);
    const to = parseInt(to_input.value, 10);
    const final = parseInt(final_input.value, 10);
    fillSlider(from_input, to_input, controlSlider);
    
    if (from > to) {
        from_slider.value = to;
        from_input.value = to;
		from = to;
    } else {
        from_slider.value = from;
    }

	if (from >= final) {
		final_input.value = from;
		final_slider.value = from;
	}
}
    
function changeToInput(to_slider, from_input, to_input, controlSlider) {
    const from = parseInt(from_input.value, 10);
    const to = parseInt(to_input.value, 10);
    const final = parseInt(final_input.value, 10);
    fillSlider(from_input, to_input, controlSlider);
    makeToggleAccessible(to_slider);

    if (from <= to) {
        to_slider.value = to;
        to_input.value = to;
    } else {
        to_input.value = from;
		to = from;
    }

	if (to <= final) {
		final_input.value = to;
		final_slider.value = to;
	}
}

// control sliders
function changeFromSlider(from_slider, to_slider, from_input) {
	const from = parseInt(from_slider.value, 10);
	const to = parseInt(to_slider.value, 10);
    const final = parseInt(final_input.value, 10);
	fillSlider(from_slider, to_slider, to_slider);

	if (from > to) {
		from_slider.value = to;
		from_input.value = to;
		from = to;
	} else {
		from_input.value = from;
	}

	if (from >= final) {
		final_input.value = from;
		final_slider.value = from;
	}

}

function changeToSlider(from_slider, to_slider, to_input) {
	const from = parseInt(from_slider.value, 10);
	const to = parseInt(to_slider.value, 10);
	const final = parseInt(final_input.value, 10);
	fillSlider(from_slider, to_slider, to_slider);
	makeToggleAccessible(to_slider);

	if (from <= to) {
		to_slider.value = to;
		to_input.value = to;
	} else {
		to_input.value = from;
		to_slider.value = from;
		to = from;
	}

	if (to <= final) {
		final_input.value = to;
		final_slider.value = to;
	}

}

function changeFinalInput(final_input, from_input, to_input) {
	const final = parseInt(final_input.value, 10);
	const from = parseInt(from_input.value, 10);
	const to = parseInt(to_input.value, 10);
	
	if (final > to) {
		final_input.value = to;
		final_slider.value = to;
	} else if (final < from) {
		final_input.value = from;
		final_slider.value = from;
	} else {
		final_input.value = final;
		final_slider.value = final;
	}

}

function changeFinalSlider(final_slider, from_slider, to_slider) {
	const final = parseInt(final_slider.value, 10);
	const from = parseInt(from_slider.value, 10);
	const to = parseInt(to_slider.value, 10);
	
	if (final > to) {
		final_input.value = to;
		final_slider.value = to;
	} else if (final < from) {
		final_input.value = from;
		final_slider.value = from;
	} else {
		final_input.value = final;
		final_slider.value = final;
	}
}

// control Toggle 
function makeToggleAccessible(to_slider) {
	if (Number(to_slider.value) <= 0 ) {
		to_slider.style.zIndex = 2;
	} else {
		to_slider.style.zIndex = 0;
	}
}

// control slider style
function fillSlider(from, to, controlSlider) {
    const rangeDistance = to.max-to.min;
    const fromPosition = from.value - from.min;
    const toPosition = to.value - to.min;
	const relative_from_position = (fromPosition)/(rangeDistance)*100;
	const relative_to_position = (toPosition/rangeDistance)*100;
    controlSlider.style.background = `linear-gradient(
		90deg,
		${bar_color} 0% ${relative_from_position}%,
		${interval_color_red} ${relative_from_position}% ${relative_to_position < 50? relative_to_position: 50}%,
		${interval_color_green} ${relative_to_position < 50? relative_to_position: 50}% ${relative_to_position}%, 
		${bar_color} ${relative_to_position}% 100%)`;
}

// get dom elements 
const interval_color_red = "#ff0000";
const interval_color_green = "#33ff00";
const bar_color = '#c4c4c4';
const from_slider = document.querySelector('#from_slider');
const to_slider = document.querySelector('#to_slider');
const final_slider = document.querySelector('#final_slider');
const middle = to_slider.dataset.middle
const from_input = document.querySelector('#from_input');
const to_input = document.querySelector('#to_input');
const final_input = document.querySelector('#final_input');
fillSlider(from_slider, to_slider, to_slider);
makeToggleAccessible(to_slider);

// activate listers
from_slider.oninput = () => changeFromSlider(from_slider, to_slider, from_input);
to_slider.oninput = () => changeToSlider(from_slider, to_slider, to_input);
from_input.oninput = () => changeFromInput(from_slider, from_input, to_input, to_slider);
to_input.oninput = () => changeToInput(to_slider, from_input, to_input, to_slider);
final_slider.oninput = () => changeFinalSlider(final_slider, from_slider, to_slider);
final_input.oninput = () => changeFinalInput(final_input, from_input, to_input);
