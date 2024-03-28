
// Changing the Text
wp.blocks.registerBlockStyle( 'core/heading', {
    name: 'cust-heading',
    label: 'Custom heading',
} );

wp.blocks.registerBlockStyle( 'core/paragraph', {
    name: 'fancy-paragraph',
    label: 'Fancy Paragraph',
} );

wp.blocks.registerBlockStyle( 'core/list-item', {
    name: 'cust-listitem',
    label: 'Custom List Item',
} );

wp.blocks.registerBlockStyle( 'core/code', {
    name: 'cust-code',
    label: 'Custom Code',
} );

wp.blocks.registerBlockStyle( 'core/quote', {
    name: 'cust-quote',
    label: 'Custom quote',
} );

wp.blocks.registerBlockStyle( 'core/details', {
    name: 'cust-details',
    label: 'Custom details',
} );

wp.blocks.registerBlockStyle( 'core/preformatted', {
    name: 'cust-preformatted',
    label: 'Custom preformatted',
} );

wp.blocks.registerBlockStyle( 'core/pullquote', {
    name: 'cust-pullquote',
    label: 'Custom pullquote',
} );

wp.blocks.registerBlockStyle( 'core/table', {
    name: 'cust-table',
    label: 'Custom table',
} );

wp.blocks.registerBlockStyle( 'core/verse', {
    name: 'cust-verse',
    label: 'Custom verse',
} );

wp.blocks.registerBlockStyle( 'core/footnotes', {
    name: 'cust-footnotes',
    label: 'Custom footnotes',
} );



// Changing everything else

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