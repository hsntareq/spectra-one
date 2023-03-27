<?php
/**
 * Admin Welcome Notice
 *
 * @package Spectra One
 * @author Brainstorm Force
 * @since 0.0.1
 */

declare(strict_types=1);

namespace Swt;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

add_action( 'admin_notices', SWT_NS . 'render_welcome_notice', 0 );
add_action( 'wp_ajax_swt_dismiss_welcome_notice', SWT_NS . 'close_welcome_notice' );

/**
 * Render the welcome notice.
 *
 * @since 0.0.1
 * @return void
 */
function render_welcome_notice(): void {
	if ( ! welcome_notice_display_conditions() ) {
		return;
	}

	$plugin_status = is_spectra_plugin_installed();

	$file_prefix = defined( 'SWT_DEBUG' ) && SWT_DEBUG ? '' : '.min';
	$dir_name    = defined( 'SWT_DEBUG' ) && SWT_DEBUG ? 'unminified' : 'minified';
	$css_uri     = get_uri() . 'assets/css/' . $dir_name . '/admin';

	/* Check and added rtl prefix */
	if ( is_rtl() ) {
		$file_prefix .= '-rtl';
	}

	/* Load Theme Styles*/
	wp_enqueue_style( SWT_SLUG . '-welcome-notice', $css_uri . '/welcome-notice' . $file_prefix . '.css', array(), SWT_VER );

	$js    = defined( 'SWT_DEBUG' ) && SWT_DEBUG ? get_uri() . 'build/' : get_uri() . 'assets/js/';
	$asset = defined( 'SWT_DEBUG' ) && SWT_DEBUG ? require SWT_DIR . 'build/welcome_notice.asset.php' : require SWT_DIR . 'assets/js/welcome_notice.asset.php';
	$deps  = $asset['dependencies'];

	wp_register_script( SWT_SLUG . '-welcome-notice', $js . 'welcome_notice.js', $deps, SWT_VER, true );

	wp_enqueue_script( SWT_SLUG . '-welcome-notice' );

	wp_localize_script(
		SWT_SLUG . '-welcome-notice',
		SWT_LOC,
		localize_welcome_notice_js( $plugin_status )
	);

	ob_start();

	$banner_image = get_uri() . 'assets/image/spectra-plugin-banner.jpg';
	?>



	<div class="notice notice-info swt-welcome-notice">
		<button type="button" class="notice-dismiss"><span class="screen-reader-text"><?php esc_html_e( 'Close this notice..', 'spectra-one' ); ?></span></button>
		<div class="swt-row">
			<div class="swt-col">
				<div class="notice-content">
					<p class="sub-notice-title">
						<?php esc_html_e( 'Spectra — WordPress Gutenberg Blocks', 'spectra-one' ); ?>
					</p>
					<h2 class="notice-title">
						<?php esc_html_e( 'Page builder that works with the default WordPress editor', 'spectra-one' ); ?>
					</h2>
					<p class="description">
						<?php esc_html_e( 'Whether you are a beginner, marketer, or professional, Spectra has the tools and resources you can rely on to succeed', 'spectra-one' ); ?>
					</p>
					<div class="notice-actions">
						<button id="swt-install-spectra" class="button button-primary button-hero">
							<span class="text">
								<?php
								'installed' === $plugin_status ? esc_html_e( 'Activate Spectra Plugin', 'spectra-one' ) : esc_html_e( 'Install & Activate Spectra', 'spectra-one' );
								?>
							</span>
						</button>
					</div>
				</div>
			</div>
			<div class="swt-col">
				<div class="image-container">
					<img src="<?php echo esc_url( $banner_image ); ?>" alt="spectra-install-banner">
				</div>
			</div>
		</div>
	</div>
	<?php
	echo wp_kses_post( ob_get_clean() );
}

/**
 * Close welcome notice.
 *
 * @since 0.0.1
 */
function close_welcome_notice() {
	if ( ! isset( $_POST['nonce'] ) ) {
		return;
	}

	if ( ! wp_verify_nonce( sanitize_text_field( $_POST['nonce'] ), 'swt-dismiss-welcome-notice-nonce' ) ) {
		return;
	}
	update_option( 'swt-dismiss-welcome-notice', 'yes' );
	wp_die();
}

/**
 * Welcome notice condition.
 *
 * @since 0.0.1
 * @return bool
 */
function welcome_notice_display_conditions(): bool {

	// Check if plugin is active.
	if ( is_plugin_active( 'ultimate-addons-for-gutenberg/ultimate-addons-for-gutenberg.php' ) ) {
		return false;
	}

	// Check if welcome notice was closed.
	if ( get_option( 'swt-dismiss-welcome-notice', 'no' ) === 'yes' ) {
		return false;
	}

	$screen = get_current_screen();

	// Show the notice on dashboard.
	if ( ! in_array( $screen->id, array( 'dashboard', 'themes' ) ) ) {
		return false;
	}

	// Check AJAX actions.
	if ( defined( 'DOING_AJAX' ) && DOING_AJAX ) {
		return false;
	}

	// Hide from network admin.
	if ( is_network_admin() ) {
		return false;
	}

	// Check if use can 'manage_options'.
	if ( ! current_user_can( 'manage_options' ) ) {
		return false;
	}

	// Check if use can 'install_plugins'.
	if ( ! current_user_can( 'install_plugins' ) ) {
		return false;
	}

	// Block editor context.
	if ( $screen->is_block_editor() ) {
		return false;
	}

	return true;
}

/**
 * Spectra plugin status.
 *
 * @since 0.0.1
 * @return string
 */
function is_spectra_plugin_installed(): string {
	$status = 'not-installed';

	if ( file_exists( ABSPATH . 'wp-content/plugins/ultimate-addons-for-gutenberg/ultimate-addons-for-gutenberg.php' ) ) {
		return 'installed';
	}

	return $status;
}

/**
 * Localize js.
 *
 * @since 0.0.1
 * @param string $plugin_status plugin current status.
 * @return array
 */
function localize_welcome_notice_js( $plugin_status ): array {

	return array(
		'nonce'         => wp_create_nonce( 'swt-dismiss-welcome-notice-nonce' ),
		'ajaxUrl'       => esc_url( admin_url( 'admin-ajax.php' ) ),
		'pluginStatus'  => $plugin_status,
		'pluginSlug'    => 'ultimate-addons-for-gutenberg',
		'activationUrl' => esc_url(
			add_query_arg(
				array(
					'plugin_status' => 'all',
					'paged'         => '1',
					'action'        => 'activate',
					'plugin'        => rawurlencode( 'ultimate-addons-for-gutenberg/ultimate-addons-for-gutenberg.php' ),
					'_wpnonce'      => wp_create_nonce( 'activate-plugin_ultimate-addons-for-gutenberg/ultimate-addons-for-gutenberg.php' ),
				),
				admin_url( 'plugins.php' )
			)
		),
		'activating'    => __( 'Activating', 'spectra-one' ) . '&hellip;',
		'installing'    => __( 'Installing', 'spectra-one' ) . '&hellip;',
		'done'          => __( 'Done', 'spectra-one' ),
	);
}
