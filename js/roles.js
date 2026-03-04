document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("roleForm");
    const tableBody = document.getElementById("rolesBody");

    let editRow = null; 

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const roleName = document.getElementById("roleName").value.trim();
        const roleDesc = document.getElementById("roleDesc").value.trim();

        if (!roleName || !roleDesc) return;

        if (editRow) {
            editRow.children[0].textContent = roleName;
            editRow.children[1].textContent = roleDesc;
            editRow = null;
        } else {
            const row = createRow(roleName, roleDesc);
            tableBody.appendChild(row);
        }

        form.reset();
    });

    function createRow(roleName, roleDesc) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${roleName}</td>
            <td>${roleDesc}</td>
            <td>3</td>
            <td>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;

       
        row.querySelector(".delete-btn").addEventListener("click", function () {
            row.remove();
        });

        row.querySelector(".edit-btn").addEventListener("click", function () {
            document.getElementById("roleName").value = row.children[0].textContent;
            document.getElementById("roleDesc").value = row.children[1].textContent;
            editRow = row;
        });

        return row;
    }

});