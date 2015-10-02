QUnit.test( 'Generate new random number bounds.', function( assert ) {
	var new_generated_number = generate_new_number_to_guess();
	assert.ok( new_generated_number > 0, "Generated number is greater than zero." );
	assert.ok( new_generated_number <= number_to_guess_limit, "Generated number is less than or equal to the limit." );
} );

QUnit.test( 'Test scrub user input guess values.', function( assert ) {
	assert.ok( null === scrub_user_input_guess( null ) );
	assert.ok( false === scrub_user_input_guess( false ) );
	assert.ok( false === scrub_user_input_guess( 4.5 ) );
	assert.ok( false === scrub_user_input_guess( 'a' ) );
	assert.ok( false === scrub_user_input_guess( '4a' ) );
	assert.ok( 4 === scrub_user_input_guess( '4' ) );
} );