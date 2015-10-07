
var smallButton = $("#smallSearchPopupoverButton");
smallButton.popover({
  html: true,
  container: 'body',
  placement: 'bottom',
  trigger: 'manual',
  content: function()
  {
    var html = $('#popover-content').html();
    // console.log("html:", html);
    return html;
  }
});

var largeButton = $("#largeSearchPopupoverButton");
largeButton.popover({
  html: true,
  container: 'body',
  placement: 'bottom',
  trigger: 'manual',
  template:'<div class="popover popoverLarge" role="tooltip" style="margin-top:0em;">'
        +'<div class="arrow"></div>'
        +'<div class="popover-content"></div>'
        +'</div>',
  content: function()
  {
    return $('#popover-content2').html();
  }
});

smallButton.click(function()
{
  $(this).popover('toggle');
});

largeButton.click(function()
{
  $(this).popover('toggle');
});

// smallButton.on('show.bs.popover', function () {
//   console.log("show.bs.popover");
// });

// smallButton.on('shown.bs.popover', function () {
//   console.log("shown.bs.popover");
// });

// smallButton.on('hide.bs.popover', function () {
//   console.log("hide.bs.popover");
// });

// smallButton.on('hidden.bs.popover', function () {
//   console.log("hidden.bs.popover");
// });

// smallButton.on('inserted.bs.popover', function () {
//   console.log("inserted.bs.popover");
// });

var $window = $(window);
$window.on('resize', function() {
    smallButton.popover('hide');
    largeButton.popover('hide');
});