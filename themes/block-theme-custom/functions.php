<?php
/**
 * Functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package block-theme-custom
 * @since 1.0.0
 */

/**
 * Enqueue the CSS files.
 *
 * @since 1.0.0
 *
 * @return void
 */
function block_theme_custom_wp_enqueue_scripts() {
	wp_enqueue_style(
		'block-theme-custom',
		get_stylesheet_uri(),
		[],
		wp_get_theme()->get( 'Version' )
	);
}
add_action( 'wp_enqueue_scripts', 'block_theme_custom_wp_enqueue_scripts' );




// function add_custom_pt( $query ) {
// 	if ( !is_admin() && $query->is_main_query() ) {
// 	  if ( $query->is_search ) {
// 		$query->set( 'post_type', array( 'post', 'cms2_news' ) );
// 	  }
// 	}
//   }
//   add_action( 'pre_get_posts', 'cms2_pre_get_posts' );