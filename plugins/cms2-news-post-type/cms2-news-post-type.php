<?php
/*
*Plugin Name: cms2-post-type
*/

function cms2_register_post_type() {

   $labels = array(

      'name'                     => __( 'News', 'cms2' ),
      'singular_name'            => __( 'New', 'cms2' ),
      'add_new'                  => __( 'Add New', 'cms2' ),
      'add_new_item'             => __( 'Add New New', 'cms2' ),
      'edit_item'                => __( 'Edit New', 'cms2' ),
      'new_item'                 => __( 'New New', 'cms2' ),
      'view_item'                => __( 'View New', 'cms2' ),
      'view_items'               => __( 'View News', 'cms2' ),
      'search_items'             => __( 'Search News', 'cms2' ),
      'not_found'                => __( 'No News found.', 'cms2' ),
      'not_found_in_trash'       => __( 'No News found in Trash.', 'cms2' ),
      'parent_item_colon'        => __( 'Parent News:', 'cms2' ),
      'all_items'                => __( 'All News', 'cms2' ),
      'archives'                 => __( 'New Archives', 'cms2' ),
      'attributes'               => __( 'New Attributes', 'cms2' ),
      'insert_into_item'         => __( 'Insert into New', 'cms2' ),
      'uploaded_to_this_item'    => __( 'Uploaded to this New', 'cms2' ),
      'featured_image'           => __( 'Featured Image', 'cms2' ),
      'set_featured_image'       => __( 'Set featured image', 'cms2' ),
      'remove_featured_image'    => __( 'Remove featured image', 'cms2' ),
      'use_featured_image'       => __( 'Use as featured image', 'cms2' ),
      'menu_name'                => __( 'News', 'cms2' ),
      'filter_items_list'        => __( 'Filter New list', 'cms2' ),
      'filter_by_date'           => __( 'Filter by date', 'cms2' ),
      'items_list_navigation'    => __( 'News list navigation', 'cms2' ),
      'items_list'               => __( 'News list', 'cms2' ),
      'item_published'           => __( 'New published.', 'cms2' ),
      'item_published_privately' => __( 'New published privately.', 'cms2' ),
      'item_reverted_to_draft'   => __( 'New reverted to draft.', 'cms2' ),
      'item_scheduled'           => __( 'New scheduled.', 'cms2' ),
      'item_updated'             => __( 'New updated.', 'cms2' ),
      'item_link'                => __( 'New Link', 'cms2' ),
      'item_link_description'    => __( 'A link to an news.', 'cms2' ),

   );

   $args = array(

      'labels'                => $labels,
      'description'           => __( 'organize and manage company News', 'cms2' ),
      'public'                => true,
      'hierarchical'          => false,
      'exclude_from_search'   => true,
      'publicly_queryable'    => true,
      'show_ui'               => true,
      'show_in_menu'          => true,
      'show_in_nav_menus'     => false,
      'show_in_admin_bar'     => false,
      'show_in_rest'          => true,
      'menu_position'         => null,
      'menu_icon'             => 'dashicons-megaphone',
      'capability_type'       => 'post',
      'capabilities'          => array(),
      'supports'              => array( 'title', 'editor', 'excerpt', 'thumbnail'),
      'taxonomies'            => array( 'category'),
      'has_archive'           => true,
      'rewrite'               => array( 'slug' => 'news' ),
      'query_var'             => true,
      'can_export'            => true,
      'delete_with_user'      => false,
      'template'              => array(),
      'template_lock'         => false,

   );

   register_post_type( 'cms2_news', $args );

}
add_action( 'init', 'cms2_register_post_type' );
