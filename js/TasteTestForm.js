//Programming with Mosh (2020), says this is how you make a validating form in JavaScript

document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('TasteTestForm');
	const messages = document.getElementById('form-messages');

	const fields = [
		{ id: 'firstName', required: true, label: 'First name' },
		{ id: 'surname', required: false, label: 'Surname' },
		{ id: 'email', required: true, label: 'Email', type: 'email' },
		{ id: 'cellphone', required: true, label: 'Cellphone' },
		{ id: 'eventType', required: false, label: 'Event type' },
		{ id: 'eventDate', required: true, label: 'Event date' },
		{ id: 'numberOfGuests', required: true, label: 'Number of guests', type: 'number' }
	];

	function clearErrors() {
		messages.textContent = '';
		messages.className = '';
		fields.forEach(f => {
			const err = document.getElementById('error-' + f.id);
			if (err) err.textContent = '';
			const input = document.getElementById(f.id);
			if (input) input.classList.remove('input-error');
		});
	}

	function showError(fieldId, message) {
		const err = document.getElementById('error-' + fieldId);
		const input = document.getElementById(fieldId);
		if (err) err.textContent = message;
		if (input) input.classList.add('input-error');
	}

	function validate() {
		clearErrors();
		const errors = [];

		fields.forEach(f => {
			const input = document.getElementById(f.id);
			if (!input) return;
			const val = (input.value || '').trim();

			if (f.required && !val) {
				errors.push({ id: f.id, message: `${f.label} is required.` });
				return;
			}

			if (val) {
				if (f.type === 'email') {
					// simple email check
					const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
					if (!re.test(val)) errors.push({ id: f.id, message: 'Please enter a valid email address.' });
				}

				// cellphone: allow digits only
				if (f.id === 'cellphone') {
					const phoneRe = /^\d{10}$/;
					if (!phoneRe.test(val)) errors.push({ id: f.id, message: 'Cellphone must be exactly 10 digits (e.g., 0123456789)' });
				}

				// eventDate: do not allow past dates
				if (f.id === 'eventDate') {
					// val is yyyy-mm-dd from input[type=date]
					const selected = new Date(val);
					const today = new Date();
					// zero time portion for accurate date-only comparison
					today.setHours(0,0,0,0);
					selected.setHours(0,0,0,0);
					if (selected < today) errors.push({ id: f.id, message: 'Event date cannot be in the past.' });
				}
				if (f.type === 'number') {
					const num = Number(val);
					if (!Number.isFinite(num) || num < 1) errors.push({ id: f.id, message: 'Enter a valid number of guests' });
				}
			}
		});

		errors.forEach(e => showError(e.id, e.message));
		return errors;
	}

	form.addEventListener('submit', function (ev) {
		ev.preventDefault();
		const errors = validate();
		if (errors.length > 0) {
			messages.textContent = 'Please fix the errors mentioned above.';
			messages.className = 'form-error';
			const first = document.getElementById(errors[0].id);
			if (first) first.focus();
			return;
		}

		// All good — simulate a successful submit (no backend specified)
		messages.textContent = 'Form submitted successfully. Thank you!';
		messages.className = 'form-success';
		// Optionally reset the form after success
		form.reset();
		// Clear visual error markers after reset
		setTimeout(clearErrors, 3000);
	});
});

//This code will make the Return button navigate back to the previous page when clicked.
document.addEventListener('DOMContentLoaded', () => {
    // Find the return button by its ID to implement the code
    const returnButton = document.querySelector('#returnButton');
    
    // This checks if button exists before adding the listener
    if (returnButton) {
        returnButton.addEventListener('click', () => {
            // Uses the users history to go back to previous page
			    window.history.back();
        });
    }
});