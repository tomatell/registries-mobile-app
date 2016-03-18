function onDeviceReady() {
  if(typeof navigator.globalization !== "undefined") {
     
      //alert(transarray.en.description);
      navigator.globalization.getPreferredLanguage(function(language) {
        var language_value = (language.value).split(/[\s,-]+/)[0];
        var transarray = [];
        transarray.description = 'To access preferred Membery sites, open a web browser on desktop or other device and log into the Membery sites. After the login, click on <i class=\"icon-question-circle\"><\/i> icon and display the help page. A QR-Code will be generated on the fly. Scan the QR-Code by clicking the \"SCAN QR-CODE\" button below.';
        transarray.scanbutton = 'SCAN QR-CODE';
        if(language_value === 'en') {
            $.get( './lang/translation.en.json').success(function(data) {
              if(data) {
                transarray = JSON.parse(data);
                $(".scrollable-content h3").html(transarray.description);
                $("#scanner").html(transarray.scanbutton);
              }
          });
        } else if(language_value === 'sk') {
            $.get( './lang/translation.sk.json').success(function(data) {
              if(data) {
                transarray = JSON.parse(data);
                $(".scrollable-content h3").html(transarray.description);
                $("#scanner").html(transarray.scanbutton);
              }
          });
        } else if(language_value === 'cz') {
            $.get( './lang/translation.cz.json').success(function(data) {
              if(data) {
                transarray = JSON.parse(data);
                $(".scrollable-content h3").html(transarray.description);
                $("#scanner").html(transarray.scanbutton);
              }
          });
        } else if(language_value === 'ja') {
          $.get( './lang/translation.ja.json').success(function(data) {
              if(data) {
                transarray = JSON.parse(data);
                $(".scrollable-content h3").html(transarray.description);
                $("#scanner").html(transarray.scanbutton);
              }
          });
        } else {
            $.get( './lang/translation.en.json').success(function(data) {
              if(data) {
                transarray = JSON.parse(data);
                $(".scrollable-content h3").html(transarray.description);
                $("#scanner").html(transarray.scanbutton);
              }
          });
        }
        $(".scrollable-content h3").html(transarray.description);
        $("#scanner").html(transarray.scanbutton);
      }, null);
  }
}

document.addEventListener('deviceready', onDeviceReady, true);