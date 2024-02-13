wp.blocks.registerBlockStyle( 'core/paragraph', {
    name: 'fancy-paragraph',
    label: 'Fancy Paragraph',
} );

wp.blocks.registerBlockStyle( 'core/navigation', {
    name: 'cust-navigation',
    label: 'Custom Navigation',
} );

wp.domReady( function () {
    wp.blocks.unregisterBlockStyle( 'core/social-links', 'pill-shape' );
} );