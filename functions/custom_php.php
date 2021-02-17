<?php

// Add custom PHP below this line:

// hide admin bar
add_filter('show_admin_bar', '__return_false');


// or..
//if (current_user_can('editor') || current_user_can('administrator')) {
//    // add custom PHP here for non-public
//
//}
