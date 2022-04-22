<script>
    let title = "Anchor Protocol yield reserve calculator";
</script>


<!-- setting the title of the website-->
<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class="body">
    <h1>{title}</h1>

    <form action= "/data.json" method="post">
        <button>fetch</button>
    </form>
</div>