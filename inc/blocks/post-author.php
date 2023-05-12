<?php
/**
 * Post author block.
 *
 * @package Spectra One
 * @author Brainstorm Force
 * @since 0.0.6
 */

declare( strict_types=1 );

namespace Swt;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

add_filter( 'render_block_core/post-author', SWT_NS . 'render_post_author_block', 10, 2 );


/**
 * Modifies front end HTML output of block.
 *
 * @since 0.0.6
 *
 * @param string $html  Block HTML.
 * @param array  $block Block data.
 *
 * @return string
 */
function render_post_author_block( string $html, array $block ): string {

	if ( isset( $block['blockName'] ) && 'core/post-author' === $block['blockName'] ) {
		add_filter( 'swt_dynamic_theme_css', SWT_NS . 'post_author_inline_css' );
	}
	return $html;
}


/**
 * Load Inline Css.
 *
 * @since 0.0.6
 * @param string $css Inline CSS.
 * @return string
 */
function post_author_inline_css( string $css ): string {

	$css_output = array(
		'.wp-block-post-author__bio' => array(
			'font-size' => 'inherit',
		),
	);

	$css .= parse_css( $css_output );
	return $css;
}
