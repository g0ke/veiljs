(function($, undefined) {
  'use strict';

  $.fn.veil = function(options) {
    var opt, $screen, $btnOK, $btnNG;

    opt = $.extend({
      screen: null,
      callback: null
    }, options);

    function _setPopup() {
      $screen = opt.screen;
      $screen.css({'visibility':'visible'});

      $btnOK = $screen.find('[data-ui="btn-ok"]');
      $btnNG = $screen.find('[data-ui="btn-cancel"]');

      $btnOK.on('click', doCallback);
      $btnNG.on('click', closePopup);
    }

    function doCallback() {
      opt.callback();
      closePopup();
    }

    function closePopup() {
      $screen.css({'visibility': 'hidden'});
      $btnOK.off('click', doCallback);
      $btnNG.off('click', closePopup);
    }

    this.each(function() {
      $(this).on('click', _setPopup);
    });

    return this;
  };
})($);