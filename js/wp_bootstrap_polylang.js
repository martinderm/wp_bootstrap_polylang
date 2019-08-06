/*
 *
 *   Polylang Create Bootstrap Dropdown - WordPress
 *   Github: https://github.com/icetee/wp-bootstrap-polylang
 *
 *   I used (Fork):
 *   https://gist.github.com/icetee/5f44c321de44b13b903e
 *
 *   @since 1.2.4
 *
 */

(function wp_bootstrap_polylang($) {

    var $lang = $('html').attr('lang');
    var $navbar = $('.langswitch');
    var $navitem = 'option'; //'li.lang-item';
    var pageId = pllVars.postID;
    var $changelang = "";
    var lang = {};

    if (!$navbar.find($navitem).hasClass("pll-lang")) {

      if ($lang === "de-AT") $lang = 'at';
      else if ($lang === "de-DE") $lang = 'de';
      else if ($lang === "el-CY") $lang = 'cy';
      else if ($lang === "fr-BE") $lang = 'be';
      else {
        $lang = $lang.split('-')[0];
        if ($lang == 'ga') $lang = 'ie';
        if ($lang == 'sv') $lang = 'se';
        if ($lang == 'cs') $lang = 'cz';
      }

        $navbar.find($navitem).each(function() {
            var ltd = $(this).attr('value');
            lang[ltd] = $(this).text();
        });
        //console.log(lang);
        $changelang += '<li class="menu-item lang-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown pll-lang">';
        $changelang += '<a aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#" title="' + lang[$lang] + '">';
        $changelang += lang[$lang];
        $changelang += ' <span class="caret"></span></a>';
        $changelang += '<ul class="dropdown-menu" role="menu">';

        $.each(lang, function(key, value) {
            var lang = '';
            if (key === "de-AT") lang = 'at';
            else if (key === "de-DE") lang = 'de';
            else if (key === "el-CY") lang = 'cy';
            else if (key === "fr-BE") lang = 'be';
            else {
              key = key.split('-')[0];
              lang = key;
              if (key == 'ga') lang = 'ie';
              if (key == 'sv') lang = 'se';
              if (key == 'cs') lang = 'cz';
            }
            $changelang += '<li class="lang-item ' + lang + '"><a target="_self" href="//' + window.location.host + '/' + lang + '/' + pageId[lang] + '" title="' + value + '">' + value + '</a></li>';
        });

        $changelang += '</ul></li>';

        $navbar.find('select').remove();
        $navbar.append($changelang);
    }

})(jQuery);
