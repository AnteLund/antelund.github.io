$(function(){
    $('#myModal').on('shown.bs.modal', function(){
        var myModal = $(this);
        clearTimeout(myModal.data('hideInterval'));
        myModal.data('hideInterval', setTimeout(function(){
            myModal.modal('hide');
        }, 3000));
          $('#form').trigger("reset");
          $('.form-control-feedback').attr('aria-hidden', 'true').hide();

    });

    $('#form').validator().on('submit', function (e) {
      var isDefprev = e.isDefaultPrevented();
      if (e.isDefaultPrevented()) {
      } else {
        e.preventDefault();
        $('#myModal').modal('show');

      }
    });
});
