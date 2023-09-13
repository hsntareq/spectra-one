window.addEventListener( 'load', function() {
	onLoad();
} );

function onLoad() {
	let titleCheckbox = document.getElementById( 'site-post-title' );

	if ( null === titleCheckbox ) {
		titleCheckbox = document.querySelector( '.site-post-title input' );
	}

	if ( null !== titleCheckbox ) {
		titleCheckbox.addEventListener( 'change', function() {
			const titleBlock = document.querySelector( '.editor-post-title__block' );
			if ( null !== titleBlock ) {
				if ( titleCheckbox.checked ) {
					titleBlock.style.opacity = '0.2';
				} else {
					titleBlock.style.opacity = '1.0';
				}
			}
		} );
	}

	wp.data.subscribe( function () {
		setTimeout( function () {
			// Title visibility with new editor compatibility update.
			let titleBlock = document.querySelector( '.edit-post-visual-editor__post-title-wrapper' );
			let editorDocument = document;

			swtSiteTitle();

			if ( spectraOne.swt_wp_version_higher_6_3 ) {
				const desktopPreview = document.getElementsByClassName( 'is-desktop-preview' ),
					tabletPreview = document.getElementsByClassName( 'is-tablet-preview' ),
					mobilePreview = document.getElementsByClassName( 'is-mobile-preview' );
				let devicePreview = desktopPreview[ 0 ];

				if ( tabletPreview.length > 0 ) {
					devicePreview = tabletPreview[ 0 ];
				} else if ( mobilePreview.length > 0 ) {
					devicePreview = mobilePreview[ 0 ];
				}

				const iframe = undefined !== devicePreview ? devicePreview.getElementsByTagName( 'iframe' )[ 0 ] : undefined;
				if ( iframe && devicePreview.querySelector( 'iframe' ) !== null ) {
					editorDocument = iframe.contentWindow.document || iframe.contentDocument;
				}

				titleBlock = editorDocument.querySelector( '.edit-post-visual-editor__post-title-wrapper' );
			}

			const editorStylesWrapper = editorDocument.querySelector( '.editor-styles-wrapper' );

			if ( null !== editorStylesWrapper ) {
				const editorStylesWrapperWidth = parseInt( editorStylesWrapper.offsetWidth );
				if ( editorStylesWrapperWidth < 870 ) {
					editorStylesWrapper.classList.remove( 'swt-stacked-title-visibility' );
					editorStylesWrapper.classList.add( 'swt-stacked-title-visibility' );
				} else {
					editorStylesWrapper.classList.remove( 'swt-stacked-title-visibility' );
				}
			}

			// Show post/page title wrapper outline & eye icon only when clicked.
			const titleInput = editorDocument.querySelector( '.editor-post-title__input' );
			const visibilityIcon = editorDocument.querySelector( '.title-visibility' );
			if ( null !== titleInput && null !== visibilityIcon ) {
				if ( ! spectraOne.swt_wp_version_higher_6_3 ) {
					editorDocument.addEventListener( 'click', function ( event ) {
						if ( ! titleBlock.contains( event.target ) ) {
							visibilityIcon.classList.remove( 'swt-show-visibility-icon' );
							titleInput.classList.remove( 'swt-show-editor-title-outline' );
						}
					} );
				}
				editorDocument.addEventListener( 'visibilitychange', function () {
					visibilityIcon.classList.remove( 'swt-show-visibility-icon' );
					titleInput.classList.remove( 'swt-show-editor-title-outline' );
				} );
				titleBlock.addEventListener( 'focusout', function () {
					visibilityIcon.classList.remove( 'swt-show-visibility-icon' );
					titleInput.classList.remove( 'swt-show-editor-title-outline' );
				} );
				titleBlock.addEventListener( 'click', function () {
					visibilityIcon.classList.add( 'swt-show-visibility-icon' );
					titleInput.classList.add( 'swt-show-editor-title-outline' );
				} );
				titleInput.addEventListener( 'input', function () {
					visibilityIcon.classList.add( 'swt-show-visibility-icon' );
					this.classList.add( 'swt-show-editor-title-outline' );
				} );
			}

			const responsivePreview = document.querySelectorAll( '.is-tablet-preview, .is-mobile-preview' );
			if ( responsivePreview.length ) {
				document.body.classList.add( 'responsive-enabled' );
			} else {
				document.body.classList.remove( 'responsive-enabled' );
			}
		}, 1 );
	} );
}

function swtSiteTitle() {
	let titleVisibility = document.querySelector( '.title-visibility' ),
		titleBlock = document.querySelector( '.edit-post-visual-editor__post-title-wrapper' ),
		editorDocument = document;
	const postTitleOption = ( undefined !== wp.data.select( 'core/editor' ) && null !== wp.data.select( 'core/editor' ) && undefined !== wp.data.select( 'core/editor' ).getEditedPostAttribute( 'meta' ) && wp.data.select( 'core/editor' ).getEditedPostAttribute( 'meta' )._swt_meta_site_title_display ) ? wp.data.select( 'core/editor' ).getEditedPostAttribute( 'meta' )._swt_meta_site_title_display : '';

	if ( spectraOne.swt_wp_version_higher_6_3 ) {
		const desktopPreview = document.getElementsByClassName( 'is-desktop-preview' ),
			tabletPreview = document.getElementsByClassName( 'is-tablet-preview' ),
			mobilePreview = document.getElementsByClassName( 'is-mobile-preview' );
		let devicePreview = desktopPreview[ 0 ];

		if ( tabletPreview.length > 0 ) {
			devicePreview = tabletPreview[ 0 ];
		} else if ( mobilePreview.length > 0 ) {
			devicePreview = mobilePreview[ 0 ];
		}

		const iframe = undefined !== devicePreview ? devicePreview.getElementsByTagName( 'iframe' )[ 0 ] : undefined;
		if ( iframe && devicePreview.querySelector( 'iframe' ) !== null ) {
			editorDocument = iframe.contentWindow.document || iframe.contentDocument;
		}

		titleVisibility = editorDocument.querySelector( '.title-visibility' );
		titleBlock = editorDocument.querySelector( '.edit-post-visual-editor__post-title-wrapper' );
	}

	if ( null !== titleBlock && null === titleVisibility ) {
		let titleVisibilityTrigger = '<span class="swt-title title-visibility" data-tooltip="Disable Title"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg> </span>';

		if ( postTitleOption ) {
			titleVisibilityTrigger = '<span class="swt-title title-visibility" data-tooltip="Enable Title"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"></path></svg> </span>';
		}

		if ( null === titleVisibility ) {
			titleBlock.insertAdjacentHTML( 'beforeend', titleVisibilityTrigger );
		}

		const titleVisibilityTriggerElement = editorDocument.querySelector( '.title-visibility' ),
			titleVisibilityWrapper = editorDocument.querySelector( '.edit-post-visual-editor__post-title-wrapper' );

		if ( postTitleOption && ! titleVisibilityWrapper.classList.contains( 'invisible' ) ) {
			titleVisibilityWrapper.classList.add( 'invisible' );
		} else {
			titleVisibilityWrapper.classList.remove( 'invisible' );
		}

		titleVisibilityTriggerElement.addEventListener( 'click', function() {
			const metaTitleOptions = postTitleOption || '';
			if ( this.parentNode.classList.contains( 'invisible' ) && ( metaTitleOptions || '' === metaTitleOptions ) ) {
				this.parentNode.classList.remove( 'invisible' );
				this.dataset.tooltip = 'Disable Title';
				titleVisibilityTriggerElement.innerHTML = '';
				titleVisibilityTriggerElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path></svg>';

				wp.data.dispatch( 'core/editor' ).editPost(
					{
						meta: {
							_swt_meta_site_title_display: false,
						},
					}
				);
			} else {
				this.parentNode.classList.add( 'invisible' );
				this.dataset.tooltip = 'Enable Title';
				titleVisibilityTriggerElement.innerHTML = '';
				titleVisibilityTriggerElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"></path></svg>';

				wp.data.dispatch( 'core/editor' ).editPost(
					{
						meta: {
							_swt_meta_site_title_display: true,
						},
					}
				);
			}
		} );
	}
}

