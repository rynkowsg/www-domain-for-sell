(function ($) {
    "use strict";

    var domainName =  window.location.host;

    function sendEmail() {
        document.location.href = getMailtoText('greg', 'rynkowski.info');
    }

    function getMailtoText(name, domain) {
        var result = "mailto";
        result += ":" + name + "@" + domain;
        result += "?" + "subject=" + "RE: %20" + domainName;
        console.log(result);
        return result;
    }

    var mainApp = {
        main_fun: function () {
            console.log("main_fun");
            $('#domain_name').html(domainName);
            $('#btnSendEmail').on( "click", sendEmail);
        }
    };

    $(document).ready(function () {
        mainApp.main_fun();
    });

}(jQuery));
