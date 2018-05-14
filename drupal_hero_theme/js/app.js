
// IIFE to contain main script code and keep the global scope clean

(function initLoad(window, document, $) {

	// Executing code when page loads

	$( function initScript() {

		// Block for navbar interactions

		{

			// Object to hold state of navbar content

			let navState = {
				isShown: false,
				userCanToggle: true
			};			

			// Adding click listener

			$( '.js-navbar-button' ).on( 'click', function toggleContent() {

				// Getting dom elements (with jQuery)

				const $topBar = $( '.js-navbar-bar' ).first(),
					$bottomBar = $( '.js-navbar-bar' ).last(),
					$navbarContentContainer = $( '.js-navbar-content-container' );

				// Only if user can toggle

				if ( navState.userCanToggle ) {

					navState.userCanToggle = !navState.userCanToggle;

					// Bar animations for state changes

					if ( !navState.isShown ) {  

						// Bar animations

						$topBar.css( 'animation', 'topBarStart .4s ease forwards' );
						$bottomBar.css( 'animation', 'bottomBarStart .4s ease forwards' );

					}
					else {
						$topBar.css( 'animation', 'topBarRestart .4s ease forwards' );
						$bottomBar.css( 'animation', 'bottomBarRestart .4s ease forwards' );
					}

					// Toggling content container

					$navbarContentContainer.toggle(
						400,
						// This will return user control and register state change
						function changeStates() {
							navState.isShown = !navState.isShown;
							navState.userCanToggle = !navState.userCanToggle;
						}
					);

				}

			} );

		}

		

	} );



})(window, document, jQuery);
