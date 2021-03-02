// append menu to menu icon 

// $(document).ready(function () {
//     toggelSidebarExpendded();
//     toggelSidebarCollapsed();
//     addMenue() 
//     })


// function addMenue() {
//     $(".menu-icon-product").click(()=>{
//       console.log(9999999);
//     })
//   }

    // stutas of table
    document.querySelectorAll(".stutas").forEach((e) => {
      // Now do something with my button
      console.log(e.text);
      $(e).click(function () {
        if (e.text === "مفعل") {
          $(this).css("background", "#C61414");
          $(this).text("غير مفعل");
        } else {
          $(this).css("background", "#4CAF50");
          $(this).text("مفعل");
        }
      });
    });