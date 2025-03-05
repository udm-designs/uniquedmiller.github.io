/*
Version: 1.0
Author: Unique Miller
Author URL: savourypalette.com
License: (if other than below)
This is a FREE script and is dual licensed under the following:
http://www.opensource.org/licenses/mit-license.php | http://www.gnu.org/licenses/gpl.html
Aside from these comments, you may modify and distribute this file as you please. Have fun!
*/
$(document).ready(function(){
    $('#mobopen').click(function() {
        $('#mobopen').css("display", "none");
        $('#mobclose').css("display", "block");
        $('#mainnav').css("display", "flex");
        $('#mobclose').click(function() {
            $('#mobclose, #mainnav').css("display", "none");
            $('#mobopen').css("display", "block");
        });
    });
    $('#quickrent').click(function() {
        if ($('#rentingarea').css('display') == 'none') {
            $('#rentingarea').css("display", "flex");
            $('#quickrent').css("margin-bottom", "0");
            $('#quickrent img').css("transform", "scaleY(-1)");
        } else if ($('#rentingarea').css('display') == 'flex') {
            $('#rentingarea').css("display", "none");
            $('#quickrent').css("margin-bottom", "3rem");
            $('#quickrent img').css("transform", "scaleY(1)");
        } else {
            $('#rentingarea').css("display", "none");
        }
    });
});