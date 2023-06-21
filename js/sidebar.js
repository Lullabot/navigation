const sidebar = document.getElementById("navigation-sidebar");
const sidebar_control = document.getElementById("sidebar-control");
const dropdowns = document.getElementsByClassName('navigation-handle');

// expand/collapse the sidebar
if (sidebar_control) {
  sidebar_control.addEventListener("click", () => {
    if (sidebar.classList.contains("is-active")) {
      sidebar.classList.remove("is-active");
      sidebar_control.setAttribute("aria-label", "Expand sidebar");
      sidebar_control.setAttribute("aria-expanded", "false");
    } else {
      sidebar.classList.add("is-active");
      sidebar_control.setAttribute("aria-label", "Collapse sidebar");
      sidebar_control.setAttribute("aria-expanded", "true");
    }
  });

}

// expand/collapse sidebar menu dropdowns
if (dropdowns) {
  for (let i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener("click", (e) => {
      const parent_list_item = e.target.parentElement.parentElement;
      if (parent_list_item.classList.contains('menu-item--expanded')) {
        e.target.classList.remove('open');
        e.target.querySelector('.action').textContent = 'Extend';
        parent_list_item.classList.remove('menu-item--expanded');
      } else {
        e.target.classList.add('open');
        e.target.querySelector('.action').textContent = 'Collapse';
        parent_list_item.classList.add('menu-item--expanded');
      }
    });
  }
}