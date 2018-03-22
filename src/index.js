import './styles/styles.scss';
import ctrl from './controllers/currencyCtrl.js';
ctrl.render();
import Isotope from "isotope-layout";
import $ from "jquery";
import 'owl.carousel';


(function() {
    if("serviceWorker" in navigator) {
        navigator.serviceWorker.register("service-worker.js")
    }
})();

$(document).ready(function(){
	
    $('#custom_conv').on('change', function () {
        
        let custom_input = $('input:checked').val();
        let custom_res = $('#custom_conv').val() * custom_input;
        let my_res = 500 * $('#USD').val();
    
        $('.curr_radio').on('click', 'input', function() {
            
            $('#custom_conv').val(custom_res / $('input:checked').val());
            $('#my_conv').val(my_res / $('input:checked').val());
            });
        });
        
});	



