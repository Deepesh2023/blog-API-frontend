<script>
  let title = ""
  let content = ""

  const addBlog = () => {
    console.log(title, content)
  }
</script>

<h1>Blogs-API</h1>
<form on:submit|preventDefault={addBlog}>
<h2>Create new</h2>
<label for="">Title: </label>
<input type="text" name="" id="" bind:value={title}>
<label for="">Content: </label>
<textarea name="" id="" bind:value={content}></textarea>
<button type="submit">Add blog</button>
</form>
<h2>Blogs</h2>

<style>
  input, label, textarea {
    display: block;
  }
</style>