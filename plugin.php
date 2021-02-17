<?php
/*
Plugin Name:	FreshLondon toolkit
Plugin URI:		https://freshlondon.biz
Description:	Adding custom functionality to WordPress
Version:		1.0.0
Author:			FreshLondon
Author URI:		https://freshlondon.biz
*/

if (!defined('WPINC')) {
    die;
}


/**
 * Define Constants
 */
// plugin path
define('TOOLKIT_PATH', plugin_dir_url( __FILE__ ));
//Use the below line for testing and building
define('TOOLKIT_VERSION', time());
//hide the line above and show the line below once finished developing, just increase the version by 0.1 and save the file!
//define('TOOLKIT_VERSION', '1.0.0');

// add PHP custom stuff
include(TOOLKIT_PATH . '/functions/excerpt_length.php');
// add more custom php to this file here:
include(TOOLKIT_PATH . '/functions/custom_php.php');

/**
 * Enqueue styles
 */
add_action('wp_enqueue_scripts', 'fl_toolkit_enqueue_stuff', 15);
function fl_toolkit_enqueue_stuff() {

    // load these additional styles/scripts
    wp_enqueue_script('fl-toolkit-script-header', TOOLKIT_PATH . '/assets/js/header.js', array(), TOOLKIT_VERSION, false);
    wp_enqueue_script('fl-toolkit-script-footer', TOOLKIT_PATH . '/assets/js/footer.js', array(), TOOLKIT_VERSION, true);
    wp_enqueue_style('fl-toolkit-styles', TOOLKIT_PATH . '/assets/css/styles.css', array(), TOOLKIT_VERSION, 'screen');

    // if user is editor/administrator, load these scripts and styles (can not be seen by regular site visitors)
    if (current_user_can('editor') || current_user_can('administrator')) {
        wp_enqueue_script('fl-toolkit-script-testing-header', TOOLKIT_PATH . '/assets/js/header-testing.js', array(), time(), false);
        wp_enqueue_script('fl-toolkit-script-testing-footer', TOOLKIT_PATH . '/assets/js/footer-testing.js', array(), time(), true);
        wp_enqueue_style('fl-toolkit-styles-testing', TOOLKIT_PATH . '/assets/css/styles-testing.css', array(), time(), 'screen');
    }

}


/**
 * Function for debugging PHP
 */
if (!function_exists('debug')) {
    function debug($data) {
        if (current_user_can('editor') || current_user_can('administrator')) {
            print('<pre style="display:none;">');
            print_r($data);
            print('</pre>');
        }
    }
}