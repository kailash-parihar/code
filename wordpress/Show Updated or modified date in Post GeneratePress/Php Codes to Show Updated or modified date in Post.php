

// This Code is Paste in 
// Theme File Editor >> Function.php >> Paste Under the Code


add_filter( 'generate_post_date_output', function( $output, $time_string ) {
    $time_string = '<time class="entry-date published" datetime="%1$s" itemprop="datePublished">Published On: %2$s</time>';

    if ( get_the_date() !== get_the_modified_date() ) {
        $time_string = '<time class="entry-date updated-date" datetime="%3$s" itemprop="dateModified">Last Updated On: %4$s</time>';
    }

    $time_string = sprintf( $time_string,
        esc_attr( get_the_date( 'c' ) ),
        esc_html( get_the_date() ),
        esc_attr( get_the_modified_date( 'c' ) ),
        esc_html( get_the_modified_date() )
    );

    return sprintf( '<span class="posted-on">%s</span> ',
        $time_string
    );
}, 10, 2 );