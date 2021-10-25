<?php
/*
    Plugin Name: FreshLondon Toolkit
    description: A bespoke toolkit, making WordPress awesome.
    Version: 0.1
    Author: FreshLondon
    Author URI: https://freshlondon.digital/
*/

//ini_set('memory_limit','512M');


update_option( 'isStagingEnvironment', true );
const FRESH_PLUGIN = __DIR__;
/**s
 * Enqueue scripts and styles
 */
add_action( 'wp_enqueue_scripts', 'fl_toolkit_scripts' );
function fl_toolkit_scripts() {
    //enqueue styles
    $staging = get_option( 'isStagingEnvironment' );
    if ( $staging or current_user_can( 'administrator' ) ) {
        define( 'TOOLKIT_VERSION', time() );
        wp_enqueue_style( 'fl-toolkit-front', esc_url( plugins_url( 'assets/compiled/fl-toolkit.css', __FILE__ ) ), array(), time() );
        wp_enqueue_script( 'fl-toolkit-footer', esc_url( plugins_url( 'assets/compiled/footer.js', __FILE__ ) ), array(), time(), true );
    } else {
        define( 'TOOLKIT_VERSION', '1' );
        wp_enqueue_style( 'fl-toolkit-front', esc_url( plugins_url( 'assets/compiled/fl-toolkit.css', __FILE__ ) ), array(), TOOLKIT_VERSION );
        wp_enqueue_script( 'fl-toolkit-footer', esc_url( plugins_url( 'assets/compiled/footer.js', __FILE__ ) ), array(), TOOLKIT_VERSION, true );
    }
//    wp_enqueue_script( 'fl-toolkit-script-header', esc_url( plugins_url( '/assets/compiled/header.js', __FILE__ ) ), array(), '1.0.1', true );
//    wp_enqueue_style( 'fl-toolkit-slick-css', esc_url( plugins_url( 'assets/compiled/slick.css', __FILE__ ) ), array(), '1.8.1' );
//    wp_enqueue_script( 'fl-toolkit-slick-js', esc_url( plugins_url( 'assets/compiled/slick.min.js', __FILE__ ) ), array(), '1.8.1', true );
}


/**
 * Enqueue admin area scripts and styles
 */
add_action( 'admin_enqueue_scripts', 'fl_toolkit_admin_head' );
function fl_toolkit_admin_head() {
    wp_enqueue_style( 'fl-toolkit-admin', esc_url( plugins_url( 'assets/compiled/fl-toolkit-admin.css', __FILE__ ) ), array(), time(), 'all' );
}


/**
 * Include our functions
 */
include 'functions.php';

/**
 * create initial table and insert data
 */

function freshlondon_activate() {
    //create_games_table();
//    fetch_all_games();
}

register_activation_hook( __FILE__, 'freshlondon_activate' );




/**
 * Add admin pages
 */
add_action( 'admin_menu', 'freshlondon_admin_pages' );

function freshlondon_admin_pages() {
//    add_menu_page(
//        'GetYourGames general settings',
//        'GYG Admin',
//        'manage_options',
//        'gyg-admin',
//        function () {
//            include FRESH_PLUGIN . '/pages/admin-settings.php';
//        },
//        'dashicons-superhero',
//        2,
//    );
//    add_submenu_page(
//        'gyg-admin',
//        'Manage catalogue',
//        'Manage catalogue',
//        'manage_options',
//        'gyg-admin-manage-catalogue',
//        function () {
//            include FRESH_PLUGIN . '/pages/manage-catalogue.php';
//        }
//    );
}