<link rel='stylesheet' href='/global.css'>

<script>
    import SvelteTable from "svelte-table";
    const rows = [
        { id: 1, first_name: "Marilyn", last_name: "Monroe", pet: "dog" },
        { id: 2, first_name: "Abraham", last_name: "Lincoln", pet: "dog" },
        { id: 3, first_name: "Mother", last_name: "Teresa", pet: "dino" },
        { id: 4, first_name: "John F.", last_name: "Kennedy", pet: "dog" },
        { id: 5, first_name: "Martin Luther", last_name: "King", pet: "dog" },
        { id: 6, first_name: "Nelson", last_name: "Mandela", pet: "cat" },
        { id: 7, first_name: "Winston", last_name: "Churchill", pet: "cat" },
        { id: 8, first_name: "George", last_name: "Soros", pet: "bird" },
        { id: 9, first_name: "Bill", last_name: "Gates", pet: "cat" },
        { id: 10, first_name: "Muhammad", last_name: "Ali", pet: "dog" },
        { id: 11, first_name: "Mahatma", last_name: "Gandhi", pet: "bird" },
        { id: 12, first_name: "Margaret", last_name: "Thatcher", pet: "cat" }
    ];
    const columns = [
        {
            key: "id",
            title: "ID",
            value: (v) => v.id,
            sortable: true,
        },
        {
            key: "first_name",
            title: "FIRST_NAME",
            value: (v) => v.first_name,
            sortable: true,
        },
        {
            key: "last_name",
            title: "LAST_NAME",
            value: (v) => v.last_name,
            sortable: true,
        },
        {
            key: "pet",
            title: "Pet",
            value: (v) => v.pet,
            sortable: true,
        },
    ];
</script>

<main>
    <table>
        <SvelteTable {columns} {rows}/>
    </table>
</main>

<style>

    table {
        margin: 5em;
        padding: 2.5rem;
        background-color: var(--c5);
        border: 1px solid var(--c2);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
    }

    :global(table td) {
        text-align: left;
        padding: 1rem;
        border-radius: 2.5px;
    }

    :global(table tr:hover) {
        background-color: var(--c2) !important;
        color: var(--c5) !important;
    }

    :global(table tbody tr:nth-child(odd)) {
        background-color: var(--c3);
    }

    :global(table tbody tr:nth-child(even)) {
        background-color: var(--c4);
    }
</style>
