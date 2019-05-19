(function ($) {
    $(document).ready(function () {


        var rentprice = [0.167, 0.143, 0.1, 0.333, 0.5, 1, 0.25, 0.2, 0.125, 0.111]
        var safety = [0.143, 0.5, 0.25, 0.125, 0.167, 0.1, 0.111, 0.333, 0.2, 1]
        var school = [0.125, 0.143, 0.1, 0.5, 0.167, 0.25, 0.333, 1, 0.2, 0.111]
        var health = [0.2, 0.142, 0.111, 0.167, 0.1, 0.125, 0.25, 1, 0.5, 0.333]
        var distance = [0.5, 0.333, 1, 0.2, 0.125, 0.25, 0.1, 0.167, 0.143, 0.111]

        var new_rentprice = []
        var new_safety = []
        var new_school = []
        var new_health = []
        var new_distance = []

        var cities_list = ['Ballarat', 'Greater Bendigo', 'Greater Geelong', 'Greater Shepparton',
            'Horsham', 'Latrobe', 'Mildura', 'Wangaratta', 'Warrnambool', 'Wodonga']


        function Max(arr, nth = 1, max = Infinity) {
            let large = -Infinity;
            for (e of arr) {
                if (e > large && e < max) {
                    large = e;
                } else if (max == large) {
                    nth++;
                }
            }
            if (nth == 0) {
                return max;
            }
            return Max(arr, nth - 1, large);
        }

        //Operation
        function calculate_housing() {
            var index = $('#slider_a').val();
            new_rentprice = []
            var num = 0;
            if (index === '1') {
                num = 0.2
            }
            if (index === '2') {
                num = 0.4
            }
            if (index === '3') {
                num = 0.6
            }
            if (index === '4') {
                num = 0.8
            }
            if (index === '5') {
                num = 1
            }
            for (let i = 0; i < rentprice.length; i++) {
                new_rentprice.push(rentprice[i] * num)
            }
        }

        function calculate_safety() {
            var index = $('#slider_b').val();
            new_safety = []
            var num = 0;
            if (index === '1') {
                num = 0.2
            }
            if (index === '2') {
                num = 0.4
            }
            if (index === '3') {
                num = 0.6
            }
            if (index === '4') {
                num = 0.8
            }
            if (index === '5') {
                num = 1
            }
            for (let i = 0; i < safety.length; i++) {
                new_safety.push(safety[i] * num)
            }
        }

        function calculate_school() {
            var index = $('#slider_c').val();
            new_school = []
            var num = 0;
            if (index === '1') {
                num = 0.2
            }
            if (index === '2') {
                num = 0.4
            }
            if (index === '3') {
                num = 0.6
            }
            if (index === '4') {
                num = 0.8
            }
            if (index === '5') {
                num = 1
            }
            for (let i = 0; i < school.length; i++) {
                new_school.push(school[i] * num)
            }
        }

        function calculate_heath() {
            var index = $('#slider_d').val();
            new_health = []
            var num = 0;
            if (index === '1') {
                num = 0.2
            }
            if (index === '2') {
                num = 0.4
            }
            if (index === '3') {
                num = 0.6
            }
            if (index === '4') {
                num = 0.8
            }
            if (index === '5') {
                num = 1
            }
            for (let i = 0; i < health.length; i++) {
                new_health.push(health[i] * num)
            }
        }

        function calculate_distance() {
            var index = $('#slider_e').val();
            new_distance = []
            var num = 0;
            if (index === '1') {
                num = 0.2
            }
            if (index === '2') {
                num = 0.4
            }
            if (index === '3') {
                num = 0.6
            }
            if (index === '4') {
                num = 0.8
            }
            if (index === '5') {
                num = 1
            }
            for (let i = 0; i < distance.length; i++) {
                new_distance.push(distance[i] * num)
            }
        }

        var htmllist = {
            "Ballarat": ' <div class="ui card">' +
                '                <div class="image">' +
                '                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/60/Ballarat_Town_Hall_2011_004.JPG" width="200px" height="200px">' +
                '                </div>' +
                '                <div class="content">' +
                '                    <a class="header">Ballarat</a>' +
                '                    <div class="meta">' +
                '                        <span class="date"></span>' +
                '                    </div>' +
                '                    <div class="description">' +
                '                        Ballarat, in Central Highlands Victoria, is an inland city. The Yarrowee River runs through the region and bears witness to its unique mining history and world heritage site.' +
                '                        <br>' +
                '                        <p> <i class="location arrow icon"></i><b>Distance to Melbourne:</b> 102 km</p>' +
                '                        <p> <i class="graduation cap icon"></i><b>Number of school&ast;:</b> 46</p>' +
                '                        <p> <i class="hospital icon"></i><b>Number of hospital:</b> 4</p>' +
                '                    </div>' +
                '                </div>' +
                '                <div class="extra content">' +
                '                    <a href="http://www.ballarat.vic.gov.au/">' +
                '                        <button class="ui right labeled icon button" style="background-color: skyblue">' +
                '                            <i class="right arrow icon"></i>' +
                '                            Visit Now' +
                '                        </button>' +
                '                    </a>' +
                '                </div>' +
                '            </div>',
            'Greater Bendigo': '<div class="ui card">' +
                '                <div class="image">' +
                '                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Bendigo_rosalind.jpg" width="200px" height="200px">' +
                '                </div>' +
                '                <div class="content">' +
                '                    <a class="header">Greater Bendigo</a>' +
                '                    <div class="meta">' +
                '                        <span class="date"></span>' +
                '                    </div>' +
                '                    <div class="description">' +
                '                        Greater Bendigo is a small city in Victoria state, located near the geographical centre of the state. As a legacy of the gold rush, bendigo has many ornate, late Victorian colonial buildings and a colorful cultural life.' +
                '                        <br>' +
                '                        <p> <i class="location arrow icon"></i><b>Distance to Melbourne:</b> 128 km</p>' +
                '                        <p> <i class="graduation cap icon"></i><b>Number of school&ast;:</b> 51</p>' +
                '                        <p> <i class="hospital icon"></i><b>Number of hospital:</b> 4</p>' +
                '                    </div>' +
                '                </div>' +
                '                <div class="extra content">' +
                '                    <a href="https://www.bendigo.vic.gov.au/">' +
                '                        <button class="ui right labeled icon button" style="background-color: skyblue">' +
                '                            <i class="right arrow icon"></i>' +
                '                            Visit Now' +
                '                        </button>' +
                '                    </a>' +
                '                </div>',
            'Greater Geelong': ' <div class="ui card">' +
                '                <div class="image">' +
                '                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fe/St_Mary_of_the_Angels_Basilica%2C_Geelong.jpg" width="200px" height="200px">' +
                '                </div>' +
                '                <div class="content">' +
                '                    <a class="header">Greater Geelong</a>' +
                '                    <div class="meta">' +
                '                        <span class="date"></span>' +
                '                    </div>' +
                '                    <div class="description">' +
                '                        Greater Geelong is the second largest city in Victoria. It has beautiful beaches with interesting and lovely human moorings. It also has a wool museum and a botanical garden. Here is a leisure and comfortable city." +' +
                '                        <br>' +
                '                        <p> <i class="location arrow icon"></i><b>Distance to Melbourne:</b> 75 km</p>' +
                '                        <p> <i class="graduation cap icon"></i><b>Number of school&ast;:</b> 81</p>' +
                '                        <p> <i class="hospital icon"></i><b>Number of hospital:</b> 5</p>' +
                '                    </div>' +
                '                </div>' +
                '                <div class="extra content">' +
                '                    <a href="https://www.geelongaustralia.com.au/">' +
                '                        <button class="ui right labeled icon button" style="background-color: skyblue">' +
                '                            <i class="right arrow icon"></i>' +
                '                            Visit Now' +
                '                        </button>' +
                '                    </a>' +
                '                </div>' +
                '            </div>',
            'Greater Shepparton': '<div class="ui card">' +
                '                <div class="image">' +
                '                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/36/SheppartonMaudeStreetMall.JPG" width="200px" height="200px">' +
                '                </div>' +
                '                <div class="content">' +
                '                    <a class="header">Greater Shepparton</a>' +
                '                    <div class="meta">' +
                '                        <span class="date"></span>' +
                '                    </div>' +
                '                    <div class="description">' +
                '                        Greater Shepparton is an agricultural and manufacturing center. The city underwent a dramatic transformation from a sheep station to a railway town. To this day, it still occupies the center of the gulborn valley irrigation system.' +
                '                        <br>' +
                '                        <p> <i class="location arrow icon"></i><b>Distance to Melbourne:</b> 190 km</p>' +
                '                        <p> <i class="graduation cap icon"></i><b>Number of school&ast;:</b> 42</p>' +
                '                        <p> <i class="hospital icon"></i><b>Number of hospital:</b> 3</p>' +
                '                    </div>' +
                '                </div>' +
                '                <div class="extra content">' +
                '                    <a href="http://greatershepparton.com.au/">' +
                '                        <button class="ui right labeled icon button" style="background-color: skyblue">' +
                '                            <i class="right arrow icon"></i>' +
                '                            Visit Now' +
                '                        </button>' +
                '                    </a>' +
                '                </div>' +
                '            </div>',
            'Horsham': '<div class="ui card">' +
                '                <div class="image">' +
                '                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Horsham_street.jpg" width="200px" height="200px">' +
                '                </div>' +
                '                <div class="content">' +
                '                    <a class="header">Horsham</a>' +
                '                    <div class="meta">' +
                '                        <span class="date"></span>' +
                '                    </div>' +
                '                    <div class="description">' +
                '                        Horsham is famous for its wheat-growing and sheep-herding areas which has several charming parks and gardens. Horsham is surrounded by vast wheat fields, pastoral areas and colorful wildflowers. It is also a recreational lake for fishing, boating.' +
                '                        <br>' +
                '                        <p> <i class="location arrow icon"></i><b>Distance to Melbourne:</b> 300 km</p>' +
                '                        <p> <i class="graduation cap icon"></i><b>Number of school&ast;:</b> 9</p>' +
                '                        <p> <i class="hospital icon"></i><b>Number of hospital:</b> 1</p>' +
                '                    </div>' +
                '                </div>' +
                '                <div class="extra content">' +
                '                    <a href="https://www.hrcc.vic.gov.au/Home">' +
                '                        <button class="ui right labeled icon button" style="background-color: skyblue">' +
                '                            <i class="right arrow icon"></i>' +
                '                            Visit Now' +
                '                        </button>' +
                '                    </a>' +
                '                </div>' +
                '            </div>',
            'Latrobe': '<div class="ui card">' +
                '                <div class="image">' +
                '                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/LakeNarracanCP.jpg" width="200px" height="200px">' +
                '                </div>' +
                '                <div class="content">' +
                '                    <a class="header">Latrobe</a>' +
                '                    <div class="meta">' +
                '                        <span class="date"></span>' +
                '                    </div>' +
                '                    <div class="description">' +
                '                        Latrobe is located in the eastern state of Victoria. The city has traditionally been recognised as the center of Victoria\'s power industry. It is also the centre of a large forestry industry serving Australian paper mills and other sawmills.' +
                '                        <br>' +
                '                        <p> <i class="location arrow icon"></i><b>Distance to Melbourne:</b> 158 km</p>' +
                '                        <p> <i class="graduation cap icon"></i><b>Number of school&ast;:</b> 35</p>' +
                '                        <p> <i class="hospital icon"></i><b>Number of hospital:</b> 2</p>' +
                '                    </div>' +
                '                </div>' +
                '                <div class="extra content">' +
                '                    <a href="http://www.latrobe.vic.gov.au/Home">' +
                '                        <button class="ui right labeled icon button" style="background-color: skyblue">' +
                '                            <i class="right arrow icon"></i>' +
                '                            Visit Now' +
                '                        </button>' +
                '                    </a>' +
                '                </div>' +
                '            </div>',
            'Mildura': ' <div class="ui card">' +
                '                <div class="image">' +
                '                    <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Rio_Vista%2C_Mildura_VIC.jpg" width="200px" height="200px">' +
                '                </div>' +
                '                <div class="content">' +
                '                    <a class="header">Mildura</a>' +
                '                    <div class="meta">' +
                '                        <span class="date"></span>' +
                '                    </div>' +
                '                    <div class="description">' +
                '                        Mildura, a regional city in north-west Victoria, is an important horticultural centre. The city has a long history of oranges and grape farming, supplying 80% of Victoria\'s grapes. Many wineries also source grapes from Mildura.' +
                '                        <br>' +
                '                        <p> <i class="location arrow icon"></i><b>Distance to Melbourne:</b> 546 km</p>' +
                '                        <p> <i class="graduation cap icon"></i><b>Number of school&ast;:</b> 32</p>' +
                '                        <p> <i class="hospital icon"></i><b>Number of hospital:</b> 3</p>' +
                '                    </div>' +
                '                </div>' +
                '                <div class="extra content">' +
                '                    <a href="https://www.mildura.vic.gov.au/Mildura-Rural-City-Council">' +
                '                        <button class="ui right labeled icon button" style="background-color: skyblue">' +
                '                            <i class="right arrow icon"></i>' +
                '                            Visit Now' +
                '                        </button>' +
                '                    </a>' +
                '                </div>' +
                '            </div>',
            'Wangaratta': '<div class="ui card">' +
                '                <div class="image">' +
                '                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/WangarattaOldPostOffice.JPG" width="200px" height="200px">' +
                '                </div>' +
                '                <div class="content">' +
                '                    <a class="header">Wangaratta</a>' +
                '                    <div class="meta">' +
                '                        <span class="date"></span>' +
                '                    </div>' +
                '                    <div class="description">' +
                '                        Wangaratta is an elegant city where people enjoy riding in the natural scenery, tasting wine and planting flowers. The city is located at the junction of the Ovens and King rivers, which drain the northwestern slopes of the Victorian Alps.' +
                '                        <br>' +
                '                        <p> <i class="location arrow icon"></i><b>Distance to Melbourne:</b> 202 km</p>' +
                '                        <p> <i class="graduation cap icon"></i><b>Number of school&ast;:</b> 24' +
                '                        <p> <i class="hospital icon"></i><b>Number of hospital:</b> 2</p>' +
                '                    </div>' +
                '                </div>' +
                '                <div class="extra content">' +
                '                    <a href="https://www.wangaratta.vic.gov.au/">' +
                '                        <button class="ui right labeled icon button" style="background-color: skyblue">' +
                '                            <i class="right arrow icon"></i>' +
                '                            Visit Now' +
                '                        </button>' +
                '                    </a>' +
                '                </div>' +
                '            </div>',
            'Warrnambool': ' <div class="ui card">' +
                '                <div class="image">' +
                '                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Warrnambool-harbour.jpg" width="200px" height="200px">' +
                '                </div>' +
                '                <div class="content">' +
                '                    <a class="header">Warrnambool</a>' +
                '                    <div class="meta">' +
                '                        <span class="date"></span>' +
                '                    </div>' +
                '                    <div class="description">' +
                '                        Warrnambool located on the south-western coast of Victoria state, Warrnambool is a popular tourist and holiday destination. Artists, musicians and writers are fascinated by its stunning scenery.' +
                '                        <br>' +
                '                        <p> <i class="location arrow icon"></i><b>Distance to Melbourne:</b> 257 km</p>' +
                '                        <p> <i class="graduation cap icon"></i><b>Number of school&ast;:</b> 15</p>' +
                '                        <p> <i class="hospital icon"></i><b>Number of hospital:</b> 2</p>' +
                '                    </div>' +
                '                </div>' +
                '                <div class="extra content">' +
                '                    <a href="https://www.warrnambool.vic.gov.au/">' +
                '                        <button class="ui right labeled icon button" style="background-color: skyblue">' +
                '                            <i class="right arrow icon"></i>' +
                '                            Visit Now' +
                '                        </button>' +
                '                    </a>' +
                '                </div>' +
                '            </div>',
            'Wodonga': '<div class="ui card">' +
                '                <div class="image">' +
                '                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/54/Looking_down_High_Street_in_Wodonga_%282%29.jpg" width="200px" height="200px">' +
                '                </div>' +
                '                <div class="content">' +
                '                    <a class="header">Wodonga</a>' +
                '                    <div class="meta">' +
                '                        <span class="date"></span>' +
                '                    </div>' +
                '                    <div class="description">' +
                '                        Wodonga is located on the banks of the Murray river has a humid subtropical climate，where can see the  New South Wales cities. This city has a rich sports culture, whether it\'s football, cricket, Rugby League, cycling, horse riding, you can find like-minded partners here.' +
                '                        <br>' +
                '                        <p> <i class="location arrow icon"></i><b>Distance to Melbourne:</b> 300 km</p>' +
                '                        <p> <i class="graduation cap icon"></i><b>Number of school&ast;:</b> 17</p>' +
                '                        <p> <i class="hospital icon"></i><b>Number of hospital:</b> 2</p>' +
                '                    </div>' +
                '                </div>' +
                '                <div class="extra content">' +
                '                    <a href="http://www.wodonga.vic.gov.au/">' +
                '                        <button class="ui right labeled icon button" style="background-color: skyblue">' +
                '                            <i class="right arrow icon"></i>' +
                '                            Visit Now' +
                '                        </button>' +
                '                    </a>' +
                '                </div>' +
                '            </div>',
        };

        $('#star-submit').click(function () {

            calculate_housing();
            calculate_safety();
            calculate_school();
            calculate_heath();
            calculate_distance();

            //Calculate
            var final_recommen = []
            for (let i = 0; i < new_rentprice.length; i++) {
                final_recommen.push(new_rentprice[i] + new_distance[i] + new_health[i] +
                    new_school[i] + new_safety[i])

            }
            console.log(final_recommen)
            var thirdone = final_recommen.indexOf(Max(final_recommen, 3));
            var secondone = final_recommen.indexOf(Max(final_recommen, 2));
            var firstone = final_recommen.indexOf(Math.max(...final_recommen));
            // console.log(secondone);

            $('#star_alert').hide();
            $('#recommendation_result').html(' <div class="top2">\n' +
                '            <div class="top2_inner">\n' +
                '                <span class="first_ct"></span><br>\n' +
                '                <p style="font-size: 24px; color: black">' +
                cities_list[firstone] + '</p>\n' +
                '            </div>\n' +
                '            <div class="top2_inner">\n' +
                '                <span class="second_ct"></span><br>\n' +
                '                <p style="font-size: 24px; color: black">' +
                cities_list[secondone] + '</p>\n' +
                '            </div>\n' +
                '            <div class="top2_inner">\n' +
                '                <span class="third_ct"></span><br>\n' +
                '                <p style="font-size: 24px; color: black">' +
                cities_list[thirdone] + '</p>\n' +
                '            </div>\n' +
                '        </div>'
            )


            $('#card1').empty();
            $('#card2').empty();
            $('#card3').empty();
            $('#card1').html(htmllist[cities_list[firstone]]);
            $('#card2').html(htmllist[cities_list[secondone]]);
            $('#card3').html(htmllist[cities_list[thirdone]]);
            $('#card1').fadeIn();
            $('#card2').fadeIn();
            $('#card3').fadeIn();
            $('#recommendation_result').fadeIn();
            $('.dis_butt').fadeIn();
            $('html, body').animate({
                scrollTop: $("div#recommendation_result").offset().top
            }, 1000)


        })

    })
})(jQuery)