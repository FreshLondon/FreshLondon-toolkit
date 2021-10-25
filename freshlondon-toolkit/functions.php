<?php

/**
 * DEBUGGING
 */
if ( !function_exists( 'debug' ) ) {
    function debug( $data ) {
        if ( is_string( $data ) ) {
            $tmp[ 'JSON' ] = json_decode( $data, true );
            if ( json_last_error() === JSON_ERROR_NONE ) {
                $data = $tmp;
            }

        }
        print( '<pre>' );
        print_r( $data );
        print( '</pre>' );
    }
}

/**
 * GENERATE A RANDOM STRING
 */
if ( !function_exists( 'generateRandomString' ) ) {
    function generateRandomString( $length = 10 ) {
        $characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen( $characters );
        $randomString = '';
        for ( $i = 0; $i < $length; $i++ ) {
            $randomString .= $characters[ rand( 0, $charactersLength - 1 ) ];
        }
        return $randomString;
    }
}

///**
// * Get a list of thumbnail sizes
// */
//if ( !function_exists( 'fl_thumb_sizes' ) ) {
//    function fl_thumb_sizes() {
//        global $_wp_additional_image_sizes;
//        $sizes = array();
//        $tSizes = array();
//        foreach ( get_intermediate_image_sizes() as $s ) {
//            $sizes[ $s ] = array( 0, 0 );
//            if ( in_array( $s, array( 'thumbnail', 'medium', 'medium_large', 'large' ) ) ) {
//                $sizes[ $s ][ 0 ] = get_option( $s . '_size_w' );
//                $sizes[ $s ][ 1 ] = get_option( $s . '_size_h' );
//            } else {
//                if ( isset( $_wp_additional_image_sizes ) && isset( $_wp_additional_image_sizes[ $s ] ) )
//                    $sizes[ $s ] = array( $_wp_additional_image_sizes[ $s ][ 'width' ], $_wp_additional_image_sizes[ $s ][ 'height' ], );
//            }
//        }
//        foreach ( $sizes as $size => $atts ) {
//            $tSizes[ $size ] = $size . ': ' . implode( ' x ', $atts );
//        }
//        return $tSizes;
//    }
//}