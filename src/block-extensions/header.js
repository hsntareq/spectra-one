import { createHigherOrderComponent } from '@wordpress/compose';
import { InspectorControls } from '@wordpress/block-editor';
import { addFilter } from '@wordpress/hooks';
import {
	ToggleControl,
	Panel,
	PanelBody,
	PanelRow,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export const HeaderSettings = ( props ) => {
	let SWTStickyHeader;
	let SWTTransparentHeader;

	if ( props.hasOwnProperty( 'setAttributes' ) ) {
		SWTStickyHeader =
			props?.attributes?.SWTStickyHeader &&
			props.attributes.SWTStickyHeader
				? true
				: false;
		SWTTransparentHeader =
			props?.attributes?.SWTTransparentHeader &&
			props.attributes.SWTTransparentHeader
				? true
				: false;
	} else {
		SWTStickyHeader =
			props?.meta.swt_meta_sticky_header &&
			props.meta.swt_meta_sticky_header
				? true
				: false;
		SWTTransparentHeader =
			props?.meta.swt_meta_transparent_header &&
			props.meta.swt_meta_transparent_header
				? true
				: false;
	}

	return (
		<>
			{ ! SWTTransparentHeader && (
				<PanelRow>
					<ToggleControl
						label={ __( 'Enable Sticky Header', 'spectra-one' ) }
						help={
							SWTStickyHeader
								? __(
									'Transparent header option will be disabled on enabling this option.',
									'spectra-one'
								  )
								: ''
						}
						checked={ SWTStickyHeader }
						onChange={ ( val ) => {
							return props.hasOwnProperty( 'setAttributes' )
								? props.setAttributes( {
									SWTStickyHeader: ! SWTStickyHeader,
								  } )
								: props.setMetaFieldValue(
									val,
									'swt_meta_sticky_header'
								  );
						} }
					/>
				</PanelRow>
			) }
			{ ! SWTStickyHeader && (
				<PanelRow>
					<ToggleControl
						label={ __( 'Enable Transparent Header', 'spectra-one' ) }
						help={
							SWTTransparentHeader
								? __(
									'Sticky header option will be disabled on enabling this option.',
									'spectra-one'
								  )
								: ''
						}
						checked={ SWTTransparentHeader }
						onChange={ ( val ) => {
							return props.hasOwnProperty( 'setAttributes' )
								? props.setAttributes( {
									SWTTransparentHeader:
											! SWTTransparentHeader,
								  } )
								: props.setMetaFieldValue(
									val,
									'swt_meta_transparent_header'
								  );
						} }
					/>
				</PanelRow>
			) }
		</>
	);
};

const Header = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		const { attributes, name } = props;

		if (
			( attributes?.tagName && 'header' === attributes.tagName && 'core/template-part' === name ) ||
			( attributes?.slug && attributes.slug.includes('header') && 'core/template-part' === name ) 
		) {
			return (
				<>
					<BlockEdit { ...props } />
					<InspectorControls>
						<Panel>
							<PanelBody
								title="Header Settings"
								initialOpen={ true }
							>
								<HeaderSettings { ...props } />
							</PanelBody>
						</Panel>
					</InspectorControls>
				</>
			);
		}
		return (
			<>
				<BlockEdit { ...props } />
			</>
		);
	};
}, 'Header' );

addFilter( 'editor.BlockEdit', 'swt/header', Header );

function HeaderAttributes( settings ) {
	const includeBlock = [ 'core/template-part' ];

	if ( includeBlock.includes( settings.name ) ) {
		if ( settings.attributes ) {
			settings.attributes = Object.assign( settings.attributes, {
				SWTStickyHeader: {
					type: 'boolean',
					default: false,
				},
				SWTTransparentHeader: {
					type: 'boolean',
					default: false,
				},
			} );
		}
	}

	return settings;
}

addFilter(
	'blocks.registerBlockType',
	'swt/header-attributes',
	HeaderAttributes
);
