<?php
if (!defined('ABSPATH')) {
	exit;
}

?>
<!DOCTYPE html>
<html>
<head>

	<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
	<script src="starrating.js" type="text/javascript"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">
    <link rel="stylesheet" href="css/city_recomm_style.css">
	<style type="text/css">

		.rating-text{
			text-align: center;
			font-size: 14px;
		}
        .star-rating-div{
            font-size: 20px;
            margin-bottom: 25px;
        }
        .fa {
            padding-bottom: 10px;
        }
	</style>
</head>
<body>
    <div style="font-size: 24px; font-weight: bold; font-family: Roboto; text-align: center; margin-bottom: 20px; margin-top: 10px">
        Which Cities Are Suitable For You ?
        <a style="color: #666666;" title="The data used in the recommended tools comes from the Victorian Government website and the Bureau of Statistics website. These include annual urban rents, types and quantities of employment, crime rates for six types of crime, school classification and number, and hospital distribution.">*</a>
    </div>
    <div style="font-size: 24px; font-weight: bold; font-family: Roboto; margin-bottom: 20px; margin-top: 10px; margin-left: 140px; color: gray">
        Choose your preference:</div>
    <div class="ui grid">
        <div class="two wide column" style="text-align: center; font-family: Roboto;"></div>
        <div class="six wide column" style="text-align: left">
            <div class="star-rating-div">Lower house rent price</div>
            <div class="star-rating-div">Safety (low crime rate)</div>
            <div class="star-rating-div">Education (more schools)</div>
            <div class="star-rating-div">Healthcare (more hospitals)</div>
            <div class="star-rating-div">Short Distance to Melbourne</div>
        </div>
        <div class="six wide column">
            <div id="city_star_a" >
                <span style="float: left; margin-right: 10px; font-size: 12px;">Low</span>
                <span style="float: right; margin-left: 10px; font-size: 12px;">High</span>
                <input type="range" min="1" max="5" value="1" id="slider_a">

            </div>
            <div id="city_star_b" >
                <span style="float: left; margin-right: 10px; font-size: 12px;">Low</span>
                <span style="float: right; margin-left: 10px; font-size: 12px;">High</span>
                <input type="range" min="1" max="5" value="1" id="slider_b">
            </div>
            <div id="city_star_c" >
                <span style="float: left; margin-right: 10px; font-size: 12px;">Low</span>
                <span style="float: right; margin-left: 10px; font-size: 12px;">High</span>
                <input type="range" min="1" max="5" value="1" id="slider_c">
            </div>
            <div id="city_star_d" >
                <span style="float: left; margin-right: 10px; font-size: 12px;">Low</span>
                <span style="float: right; margin-left: 10px; font-size: 12px;">High</span>
                <input type="range" min="1" max="5" value="1" id="slider_d">
            </div>
            <div id="city_star_e" >
                <span style="float: left; margin-right: 10px; font-size: 12px;">Low</span>
                <span style="float: right; margin-left: 10px; font-size: 12px;">High</span>
                <input type="range" min="1" max="5" value="1" id="slider_e">
            </div>

        </div>
        <div class="two wide column" style="text-align: center"></div>
    </div>
    <div style="text-align: center; font-family: Roboto;">
        <button class="ui primary button" id="star-submit" style="text-align: center; padding: 15px 15px 15px 15px; background-color: skyblue">
            <i class="check icon"></i>
            Submit
        </button>
    </div>


    <div id="recommendation_result" style="display: none; text-align: center; font-size: 18px; margin-top: 20px; font-family: Roboto;">
    </div>
    <br>


    <div class="ui grid" style="margin-top: 20px; margin-left: 25px">
        <div class="five wide column" id="card1">
        </div>
        <div class="five wide column" id="card2">
        </div>
        <div class="five wide column" id="card3">
        </div>
    </div>

<br><br><br>
    <div class="dis_butt" style="text-align: center; display: none">
        <a href="http://regionalcompass.cf/comparison-tool-val-2/">
        <button class="ui right labeled icon button" id="dis_butt" style="background-color: skyblue">
            <i class="right arrow icon"></i>
            Explore More Among 10 Regional Cities
        </button>
        </a>
    </div>
</body>
</html>
