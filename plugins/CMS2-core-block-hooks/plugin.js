wp.blocks.registerBlockStyle( 'core/paragraph', {
    name: 'fancy-paragraph',
    label: 'Fancy Paragraph',
} );

wp.blocks.registerBlockStyle( 'core/list-item', {
    name: 'cust-listitem',
    label: 'Custom List Item',
} );

wp.blocks.registerBlockStyle( 'core/navigation', {
    name: 'cust-navigation',
    label: 'Custom Navigation',
} );

wp.blocks.registerBlockStyle( 'core/separator', {
    name: 'cust-separator',
    label: 'Custom Line',
} );

wp.blocks.registerBlockStyle( 'core/row', {
    name: 'cust-homepage-row',
    label: 'Custom Row',
} );

wp.domReady( function () {
    wp.blocks.unregisterBlockStyle( 'core/social-links', 'pill-shape' );
} );