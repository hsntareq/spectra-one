<?php
/**
 * Hide Elements
 *
 * @package Spectra
 * @author Brainstorm Force
 * @since x.x.x
 */

declare(strict_types=1);

namespace Swt;

add_filter( 'render_block', SWT_NS . 'hide_elements', 10, 2 );

/**
 * Hide Elements.
 *
 * @since x.x.x
 * @param string $block_content Entire Block Content.
 * @param array  $block Block Properties As An Array.
 * @return string
 */
function hide_elements( string $block_content, array $block ): string {
	$post_id = get_the_ID();

	if ( get_post_meta( $post_id, 'swt_meta_header_display', true ) ) {

		if ( isset( $block['attrs']['slug'] ) && 'header' === $block['attrs']['slug'] ) {
			return '';
		}
	}

	if ( get_post_meta( $post_id, 'swt_meta_footer_display', true ) ) {

		if ( isset( $block['attrs']['slug'] ) && 'footer' === $block['attrs']['slug'] ) {
			return '';
		}
	}

	return $block_content;
}


/**
 * Get disable section fields.
 *
 * @return array $swt_page_meta_elements All toggle based page elements.
 */
function get_disable_section_fields():array {
	$swt_page_meta_elements = array(
		array(
			'key'   => 'swt_meta_header_display',
			'label' => __( 'Disable Header', 'spectra' ),
		),
		array(
			'key'   => 'swt_meta_footer_display',
			'label' => __( 'Disable Footer', 'spectra' ),
		),
	);

	return $swt_page_meta_elements;
}
