<script>
  import blogService from "./services/blogService";


  export let dialog

  let title = ""
  let content = ""


  const addBlog = async () => {
    await blogService.postBlog({title, content})
    dialog.close()
  }

</script>

<dialog bind:this={dialog} on:close>
<form on:submit|preventDefault={addBlog}>
<h2>Create new</h2>

<label for="">Title: </label>
<input type="text" name="" id="" bind:value={title}>
<label for="">Content: </label>
<textarea name="" id="" bind:value={content}></textarea>
<button type="submit">Add blog</button>
</form>
</dialog>

<style>
  input, label, textarea {
    display: block;
  }
</style>