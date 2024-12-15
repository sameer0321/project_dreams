document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('searchBar');
    const filterBtn = document.getElementById('filterBtn');
    const filterDropdown = document.getElementById('filterDropdown');
    const applyFilterBtn = document.getElementById('applyFilterBtn');
    const priceRangeSelect = document.getElementById('priceRange');
    const products = document.querySelectorAll('.card');

    let filteredPriceRange = 'all'; // Default price range

    // Function to filter products based on search term and selected price range
    function filterProducts() {
        const searchTerm = searchBar.value.toLowerCase();
        const [minPrice, maxPrice] = filteredPriceRange !== 'all' ? filteredPriceRange.split('-').map(price => parseInt(price.trim().replace('$', ''))) : [0, Infinity];

        products.forEach(product => {
            const title = product.querySelector('.card-title').textContent.toLowerCase();
            const price = parseInt(product.querySelector('.price').textContent.replace('$', '').trim());

            // Check if product matches search term and price range
            const isSearchMatch = title.includes(searchTerm);
            const isPriceMatch = price >= minPrice && price <= maxPrice;

            if (isSearchMatch && isPriceMatch) {
                product.style.display = 'block'; // Show product
            } else {
                product.style.display = 'none'; // Hide product
            }
        });
    }

    // Handle search input
    searchBar.addEventListener('input', function () {
        filterProducts();
    });

    // Toggle filter dropdown visibility
    filterBtn.addEventListener('click', function (event) {
        event.stopPropagation();
        filterDropdown.style.display = filterDropdown.style.display === 'block' ? 'none' : 'block'; // Toggle filter dropdown visibility
    });

    // Apply filter and close dropdown
    applyFilterBtn.addEventListener('click', function () {
        filteredPriceRange = priceRangeSelect.value;
        filterProducts();
        filterDropdown.style.display = 'none'; // Close dropdown after applying filter
    });

    // Close the filter dropdown if clicking outside of it
    document.addEventListener('click', function (event) {
        if (!filterDropdown.contains(event.target) && !filterBtn.contains(event.target)) {
            filterDropdown.style.display = 'none'; // Close dropdown if clicking outside
        }
    });
});


function openTabs(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("team_tab_btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}


function togglePassword(inputId) {
    var inputField = document.getElementById(inputId);
    var currentType = inputField.type;

    if (currentType === "password") {
        inputField.type = "text";  // Show password
    } else {
        inputField.type = "password";  // Hide password
    }
}


function setActive(link) {
    const links = document.querySelectorAll('.bottom_menu a');
    links.forEach(link => link.classList.remove('active'));
    link.classList.add('active');
}