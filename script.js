/* =========================================
   VENU LEARNING - COMMON JAVASCRIPT
   ========================================= */


/* =========================================
   SHOW / HIDE SOLUTIONS
   ========================================= */

function toggleSolution(id) {

    const element =
        document.getElementById(id);

    if (!element) {
        return;
    }

    if (element.style.display === "block") {

        element.style.display = "none";

    } else {

        element.style.display = "block";

    }

}


/* =========================================
   SIDEBAR SEARCH
   ========================================= */

function searchTopics() {

    const input =
        document.getElementById("topicSearch");

    if (!input) {
        return;
    }

    const searchText =
        input.value.toLowerCase();

    const links =
        document.querySelectorAll(
            ".sidebar a"
        );

    links.forEach(function(link) {

        const text =
            link.textContent.toLowerCase();

        if (text.includes(searchText)) {

            link.style.display = "block";

        } else {

            link.style.display = "none";

        }

    });

}
