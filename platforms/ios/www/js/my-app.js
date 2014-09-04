// Initialize your app
var myApp = new Framework7({
    pushState: false,
    swipePanel: 'left',
    modalTitle: 'Hometown Market',
    cache: true,
    fastClicks: true,
    cacheIgnore: 'shoppinglist.html',
     onAjaxStart: function (xhr) {
        myApp.showIndicator();
    },
    onAjaxComplete: function (xhr) {
        myApp.hideIndicator();
    }
    
});

// Expose Internal DOM library
var $$ = Framework7.$;
// Add Main view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
    
});
//  Initialize Auto-Geocode Feature on pageInit
myApp.onPageInit('locations', function (page){
        
        $(function() {
          $('#map-container').storeLocator({ autoGeocode: true, slideMap: false});
        });
});
// THIS IS LOADING AN OLD SHOPPING LIST FEATURE - REPLACE THIS SECTION WITH YOURS MARIO
// Load in script for Shopping List on pageInit
myApp.onPageInit('shoppinglist', function (page) {
   
	 $(function() {
		 
		  
			var availableTags = [
				      				"Eggs",
				      				"Milk",
				      				"Cereal",
				      				"Bread",
				      				"Orange Juice",
				      				"Apples",
				      				"Bananas",
				      				"Doughnuts",
				      				"Flour",
				      				"Grapes",
				      				"Ham",
				      				"Ice",
				      				"Jam",
				      				"Lamb Chops",
				      				"Mushrooms",
				      				"Yogurt",
				      				"Olives",
				      				"Peanut Butter",
				      				"Raisins",
				      				"Rasberries",
				      				"Sour Cream",
				      				"Tortillas"				      				
				      				];
			
		 $( "#tags" ).autocomplete({
			 source: availableTags
		 });
		 
	 });
	 
     $(document).ready(initializeForm);
    
	    //First ADD TO LIST
	    function initializeForm() {
		
		
	    $("a#add-item").click(addItemToList);	
	    $("a.del-item").click(removeItemFromList);
	
	    // restore list
	    shoppingListDataReset = localStorage.getItem("shoppingListData");
	  /* check checkboxes again
	   * 
	   *  $("input.checkbox").change(function(){

	        var val = $(this).val();
	    	if($(this).hasClass('checked')) {
	    	    $(":checkbox[value='"+val+"']").attr("checked", true);
	    	} else {
	            $(":checkbox[value='"+val+"']").attr("checked", false);
	        }
	    });
	   
	    */
	    $("#shoppingListItems").html(shoppingListDataReset);
	    $("a.del-item").click(removeItemFromList);
	    $("input.checkbox").click(updateCheckedStatus);
	    $("a#clear-list").click(clearList);
	
	    
	    function clearList(){
	    	$('#shoppingListItems').empty();
	    }
	    
		function addItemToList(){
			newItemText = $("#tags").val();
			newItem = "<li><label class=\"label-checkbox item-content\">" +
					"<input type=\"checkbox\" name=\"my-checkbox\" class=\"checkbox\">" +
					"<div class=\"item-media\"><i class=\"icon icon-form-checkbox\"></i></div>"+
					"<div class=\"item-inner\">"+
						"<div class=\"item-title-row\">"+
							"<div class=\"item-title\">"+ newItemText+"</div>"+
				            "<div class=\"item-after\"><a href=\"#\" class=\"del-item button button-red\">Remove</a></div>"+
						"</div>"+
					"</div>"+
			"</label></li>";
			
		    $("#shoppingListItems").prepend(newItem);
	
		    $("a.del-item").click(removeItemFromList);
		    $("input.checkbox").click(updateCheckedStatus);
		    
		    $("#tags").val("");
		    
		    localStorage.setItem("shoppingListData",$("#shoppingListItems").html());

		}
		
		function removeItemFromList(){
			 $(this).closest('li').remove();
		    localStorage.setItem("shoppingListData",$("#shoppingListItems").html());
		}
		
		function updateCheckedStatus(){
	
			if ($(this).is(':checked')) {
				$(this).addClass("checked");
			}else{
				$(this).removeClass("checked");
			}
		}
    }
	/*// initialize the app
    var itemCount = 0;
    var itemInput = $("input#item");
    itemInput.val("");

    // define what happens when we click the "Add Item" link
    $("a#add-item").click(shoppingList);
    $("#item").keydown(function (enter) {
        if (enter.keyCode == 13) {
            shoppingList();
        }
    });

    function shoppingList() {
        if (itemInput.val() === '') {
            return;
        }
        // get the items list and item to add
        var items = $("ul#items");
        var purchased = $("ul#purchased");
        var itemToBuy = itemInput.val();
        itemInput.val("");

        // create a list item and checkbox, assigning an id to it.
        var listItem = $("<li><input type='checkbox' name=" + itemToBuy + " value=" + itemToBuy + "> " + itemToBuy + " <a class='delete' href='#'><strong>-</strong> Delete</a></li>");
        listItem.attr("id", "item[" + itemCount+++"]");
        addItem(listItem);

        //delete items
        listItem.find("a").click(function () {
            $(this).parent().hide('slow', function () {
                $(this).remove();
            });
        });

        // add the item to the list. initially hidden, then slide in slowly
        function addItem(listItem) {
            listItem.hide();
            items.append(listItem);
            listItem.show('slow');
        }
        // move the corresponding list item to 'purchased' when checkbox is clicked.
        function purchasedItem(listItem) {
            listItem.hide();
            purchased.append(listItem);
            listItem.show('slow');
        }
        //toggle!! (sorta)
        listItem.find("input:checkbox").click(function () {
            this.checked ? purchasedItem(listItem) : addItem(listItem);
        });

        // clear input and refocus
        itemInput.focus();
    }
}*/

});
// COUPON BROWSER
// LOAD IN COUPON IMAGES - Want to create a JSON/XML load this
var couponBrowserPhotos = [
    'http://fisherapp.fisherprinting.net/img/coupon/__large__Save3Unilever.eps.png',
    'http://fisherapp.fisherprinting.net/img/coupon/KraftProducts_CPN.png',
    'http://fisherapp.fisherprinting.net/img/coupon/__large__NakedJuice_COUPON.eps.jpg',
    'http://fisherapp.fisherprinting.net/img/coupon/__large__Gatorade_Coupon.eps.jpg',
];

var couponBrowserDark = myApp.photoBrowser({
    photos: couponBrowserPhotos,
    theme: 'dark',
    type: 'popup',
    swipeToClose: false,
    exposition: false,
});

   myApp.onPageInit('index', function (page) {
    $$('.view-coupons').on('click', function () {
        couponBrowserDark.open();
    });
});
    
$$('.view-coupons').on('click', function () {
        couponBrowserDark.open();
    });

// VIEW FULL CIRUCULAR
// LOAD IN CIRCULAR  PAGE IMAGES - Want to create a JSON/XML load this
var circularBrowserImages = [
	'http://fisherapp.fisherprinting.net/weeklyAd/current/page1.jpg',
    'http://fisherapp.fisherprinting.net/weeklyAd/current/page2.jpg',
    'http://fisherapp.fisherprinting.net/weeklyAd/current/page3.jpg',
    'http://fisherapp.fisherprinting.net/weeklyAd/current/page4.jpg',
];

var circularBrowserDark = myApp.photoBrowser({
    photos: circularBrowserImages,
    theme: 'dark',
    swipeToClose: false,
    type: 'popup'
});
// INITIALIZE 
myApp.onPageInit('weeklyAd', function (page) {
    $$('.view-circular').on('click', function () {
        circularBrowserDark.open();
    });
});

 
