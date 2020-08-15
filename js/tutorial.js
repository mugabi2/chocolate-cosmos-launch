
var tour = new Tour({
  steps: [
  {
    element: "#account_namecrt",
    title: "STEP 1",
    content: "Lets create our 1st account. Give it name: UTILITY"
  },
  {
    element: "#createAccBtncrt",
    title: "STEP 1",
    content: "Finalise with this button"
  },
  {
    element: "#item_namecrt",
    title: "STEP 2",
    content: "Lets create our 1st item. Give it name: ELECTRICITY"
  },
  {
    element: ".crtitdrp",
    title: "STEP 2",
    content: "Select Account where this item belongs"
  },
  {
    element: "#createItcrt",
    title: "STEP 2",
    content: "Finalise with this button"
  },
  {
    element: "#supplier_namecrt",
    title: "STEP 3",
    content: "Lets create our 1st Supplier. Name him: UMEME"
  },
  {
    element: "#supplier_phonecrt",
    title: "STEP 3",
    content: "Phone contact is Optional."
  },
  {
    element: "#regsupcrt",
    title: "STEP 3",
    content: "Finalise with this button"
}
,
{
  element: "#transactbut",
  title: "RECORD A TRANSACTION",
  content: "Choose an item.",
  path:'index.html'
}
],
  backdrop: true,
  storage: false,
  template: `<div class='popover tour black-text'>
    <div class='arrow'></div>
    <h2 class='popover-title'></h2>
    <div class='popover-content'></div>
    <div class='popover-navigation'>
        <button class='btn btn-default' data-role='prev'>« Prev</button>
        <span data-role='separator'>|</span>
        <button class='btn btn-default' data-role='next'>Next »</button>
    </div>
  </div>`
});

tour.init();
tour.start();
