<script>
    import SvelteTable from "svelte-table";
    import { parseAptJSON } from "../loadJSON.js";

    parseAptJSON();
    // const rows2 = parseAptJSON();
    // console.log(rows2);

    const rows = [
        {
            name: "@babel/code-frame",
            version: "7.16.7",
            resolved:
                "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.16.7.tgz",
        },
        {
            name: "@babel/helper-validator-identifier",
            version: "7.16.7",
            resolved:
                "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.16.7.tgz",
        },
        {
            name: "@babel/highlight",
            version: "7.17.9",
            resolved:
                "https://registry.npmjs.org/@babel/highlight/-/highlight-7.17.9.tgz",
        },
        {
            name: "@nodelib/fs.scandir",
            version: "2.1.5",
            resolved:
                "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
        },
        {
            name: "@nodelib/fs.stat",
            version: "2.0.5",
            resolved:
                "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
        },
        {
            name: "@nodelib/fs.walk",
            version: "1.2.8",
            resolved:
                "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
        },
        {
            name: "@polka/url",
            version: "1.0.0-next.21",
            resolved:
                "https://registry.npmjs.org/@polka/url/-/url-1.0.0-next.21.tgz",
        },
        {
            name: "@rollup/plugin-commonjs",
            version: "17.1.0",
            resolved:
                "https://registry.npmjs.org/@rollup/plugin-commonjs/-/plugin-commonjs-17.1.0.tgz",
        },
        {
            name: "@rollup/plugin-node-resolve",
            version: "11.2.1",
            resolved:
                "https://registry.npmjs.org/@rollup/plugin-node-resolve/-/plugin-node-resolve-11.2.1.tgz",
        },
        {
            name: "@rollup/plugin-typescript",
            version: "8.3.2",
            resolved:
                "https://registry.npmjs.org/@rollup/plugin-typescript/-/plugin-typescript-8.3.2.tgz",
        },
        {
            name: "@rollup/pluginutils",
            version: "3.1.0",
            resolved:
                "https://registry.npmjs.org/@rollup/pluginutils/-/pluginutils-3.1.0.tgz",
        },
        {
            name: "@tsconfig/svelte",
            version: "2.0.1",
            resolved:
                "https://registry.npmjs.org/@tsconfig/svelte/-/svelte-2.0.1.tgz",
        },
        {
            name: "@rollup/plugin-commonjs",
            version: "17.1.0",
            resolved:
                "https://registry.npmjs.org/@rollup/plugin-commonjs/-/plugin-commonjs-17.1.0.tgz",
        },
        {
            name: "@rollup/plugin-node-resolve",
            version: "11.2.1",
            resolved:
                "https://registry.npmjs.org/@rollup/plugin-node-resolve/-/plugin-node-resolve-11.2.1.tgz",
        },
        {
            name: "@rollup/plugin-typescript",
            version: "8.3.2",
            resolved:
                "https://registry.npmjs.org/@rollup/plugin-typescript/-/plugin-typescript-8.3.2.tgz",
        },
        {
            name: "@rollup/pluginutils",
            version: "3.1.0",
            resolved:
                "https://registry.npmjs.org/@rollup/pluginutils/-/pluginutils-3.1.0.tgz",
        },
        {
            name: "@tsconfig/svelte",
            version: "2.0.1",
            resolved:
                "https://registry.npmjs.org/@tsconfig/svelte/-/svelte-2.0.1.tgz",
        },
        {
            name: "@rollup/plugin-commonjs",
            version: "17.1.0",
            resolved:
                "https://registry.npmjs.org/@rollup/plugin-commonjs/-/plugin-commonjs-17.1.0.tgz",
        },
        {
            name: "@rollup/plugin-node-resolve",
            version: "11.2.1",
            resolved:
                "https://registry.npmjs.org/@rollup/plugin-node-resolve/-/plugin-node-resolve-11.2.1.tgz",
        },
        {
            name: "@rollup/plugin-typescript",
            version: "8.3.2",
            resolved:
                "https://registry.npmjs.org/@rollup/plugin-typescript/-/plugin-typescript-8.3.2.tgz",
        },
        {
            name: "@rollup/pluginutils",
            version: "3.1.0",
            resolved:
                "https://registry.npmjs.org/@rollup/pluginutils/-/pluginutils-3.1.0.tgz",
        },
        {
            name: "@tsconfig/svelte",
            version: "2.0.1",
            resolved:
                "https://registry.npmjs.org/@tsconfig/svelte/-/svelte-2.0.1.tgz",
        },
    ];

    const columns = [
        {
            key: "name",
            title: "Name",
            value: (v) => v.name,
            sortable: true,
        },
        {
            key: "version",
            title: "Version",
            value: (v) => v.version,
            sortable: true,
        },
        {
            key: "resolved",
            title: "Direct Link",
            value: (v) => v.resolved,
            sortable: true,
            renderValue: v => `<a href="${v.resolved}">${v.resolved}<a>`,
        },
    ];
</script>

<link rel="stylesheet" href="/global.css" />

<main>
    <table>
        <SvelteTable 
            {columns} 
            {rows} 
        />
    </table>
</main>

<style>
    main {
        padding-bottom: 100px;
    }

    table {
        margin: 30px;
        padding: 2.5rem;
        background-color: var(--c5);
        border: 1px solid var(--c2);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 15px;
        overflow: auto;
    }

    :global(table td) {
        text-align: left;
        padding: 1rem;
        border-radius: 2.5px;
    }

    :global(table tr) {
        border-radius: 2.5px;
    }

    :global(table tbody tr:nth-child(odd)) {
        background-color: var(--c3);
    }

    :global(table tbody tr:nth-child(even)) {
        background-color: var(--c4);
    }
</style>
