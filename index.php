<?php

/*
Plugin Name: Star Rating City Recommendation
Description: Short Code: [Star-Rating-Recommendation]
Version: 1.1
Author: Zoe
*/

if (!defined('ABSPATH')) {
	exit;
}

// Add short code for the plugin
function short_generator_1() {
	include 'city-recommendation.php';
}

add_shortcode('Star-Rating-Recommendation', 'short_generator_1');

// Add the scripts
function add_starrating_scripts() {
	wp_enqueue_script('starrating_script', plugins_url('/starrating.js',__FILE__), array('jquery'),'1.1', true);
	wp_enqueue_style( 'city_recomm_style', plugins_url('/css/city_recomm_style.css', __FILE__), array(), '1.1');
}

add_action('wp_enqueue_scripts', 'add_starrating_scripts');