$( document ).ready( function() {
  /* We have JS! */
  $("html").removeClass("no-js");

  /* Listen for filter change */
  $("input:checkbox[name=filter]").click(hideUnchecked);

  /* Hide elements that are not selected */
  hideUnchecked();
});

function hideUnchecked() {
  var filterIds = [];
  $('input:checkbox[name=filter]:checked').each(function() {
    filterIds.push(this.id);
  });

  var $timelineEntry = $('.timeline-entry');
  $timelineEntry.each(function() {
    var $this = $(this);
    if (!hasOverlap($this.data('category'), filterIds)) {
      $this.hide();
    } else {
      $this.show();
    }
  });

  $timelineEntry.removeClass("odd even");
  $('.timeline-entry:visible:odd').addClass("odd");
  $('.timeline-entry:visible:even').addClass("even");
}

function hasOverlap(categories, ids) {
  return ids.some(function (id) {
    return categories.indexOf(id) >= 0;
  });
}
