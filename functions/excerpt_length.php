<?php

/**
 * Change the length of excerpt.
 *
 * @param int $length The number of words. Default 55.
 * @return int New excerpt length.
 */
if (!function_exists('custom_excerpt_length')) {
    function custom_excerpt_length($length) {
        return 20; // number of words. Default is 55.
    }

    add_filter('excerpt_length', 'custom_excerpt_length', 999);
}