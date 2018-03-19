import './styles/styles.scss';
import Isotope from "isotope-layout";
import $ from "jquery";


(function() {
    if("serviceWorker" in navigator) {
        navigator.serviceWorker.register("service-worker.js")
    }
})();

// $(document).ready(function(){

// //     let grid = new Isotope('.grid', {
// //         itemSelector: '.grid-item',
// //         layoutMode: 'fitRows',
// // });
//     var $grid = $('.grid').isotope({
//         itemSelector: '.grid-item'
//       });
      
//       // store filter for each group
//       var filters = [];
      
//       // change is-checked class on buttons
//       $('.filters').on( 'click', 'button', function( event ) {
//         var $target = $( event.currentTarget );
//         $target.toggleClass('is-checked');
//         var isChecked = $target.hasClass('is-checked');
//         var filter = $target.attr('data-filter');
//         if ( isChecked ) {
//           addFilter( filter );
//         } else {
//           removeFilter( filter );
//         }
//         // filter isotope
//         // group filters together, inclusive
//         $grid.isotope({ filter: filters.join(',') });
//       });
        
//       function addFilter( filter ) {
//         if ( filters.indexOf( filter ) == -1 ) {
//           filters.push( filter );
//         }
//       }
      
//       function removeFilter( filter ) {
//         var index = filters.indexOf( filter);
//         if ( index != -1 ) {
//           filters.splice( index, 1 );
//         }
//       }

// })


    

