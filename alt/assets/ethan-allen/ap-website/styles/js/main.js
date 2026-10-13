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
        $('.navlink').click(function() {
            $('#mobclose, #mainnav').css("display", "none");
            $('#mobopen').css("display", "block");
        });
    });
});