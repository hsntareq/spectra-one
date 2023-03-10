<?php
/**
 * Load Fonts
 *
 * @package Spectra
 * @author Brainstorm Force
 * @since x.x.x
 */

declare( strict_types=1 );

namespace Swt;

add_filter( 'wp_theme_json_data_theme', SWT_NS . 'add_system_fonts' );
/**
 * Add system fonts.
 *
 * @param mixed $theme_json Theme JSON.
 *
 * @return mixed
 */
function add_system_fonts( $theme_json ) {
	$data = $theme_json->get_data();

	$data['settings']['typography']['fontFamilies']['theme'] = array_merge(
		get_system_fonts(),
		$data['settings']['typography']['fontFamilies']['theme'] ?? [],
	);

	$theme_json->update_with( $data );

	return $theme_json;
}

/**
 * Return system font stacks.
 *
 * @since x.x.x
 *
 * @return array
 */
function get_system_fonts(): array {
	$fonts = [
		[
			'name'       => 'Sans Serif',
			'slug'       => 'sans-serif',
			'fontFamily' => '-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto, arial, sans-serif',
		],
		[
			'name'       => 'Serif',
			'slug'       => 'serif',
			'fontFamily' => 'Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
		],
		[
			'name'       => 'Monospace',
			'slug'       => 'monospace',
			'fontFamily' => 'Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace',
		],
	];

	return apply_filters( 'spectra_system_fonts', $fonts );
}
