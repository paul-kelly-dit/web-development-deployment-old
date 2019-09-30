const name = 'Alexa';
name = 'Siri';
<< TypeError: Assignment to constant variable.

const name = { value: 'Alexa' }; // an object
name.value = 'Siri'; // change the value
<< 'Siri'