<script>
  import { onMount } from "svelte";

    export let showModal

    let title = ""
    let content = ""
    let dialog


    onMount(()=> {
        if (showModal){
            dialog.showModal()
        }
    })

    $: if(showModal) (dialog.showModal())


    
</script>

<dialog bind:this={dialog} on:close={() => showModal = false}> 
<form>
<h2>Create new</h2>
<label for="">Title: </label>
<input type="text" name="" id="" bind:value={title}>
<label for="">Content: </label>
<textarea name="" id="" bind:value={content}></textarea>
<button type="submit">Add blog</button>
<button >Close</button>
</form>
</dialog>


<style>
  input, label, textarea {
    display: block;
  }
</style>