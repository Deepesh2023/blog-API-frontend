<script>
  import blogService from "../services/blogService";
  import { blogsList } from "../stores/blogStore";
  export let dialog;

  let title = "";
  let content = "";

  const addBlog = async () => {
    const newBlog = await blogService.postBlog({ title, content });
    blogsList.update((blogs) => [...blogs, newBlog]);
    title = "";
    content = "";
    dialog.close();
  };
</script>

<dialog bind:this={dialog} on:close>
  <form on:submit|preventDefault={addBlog}>
    <h2>Create new</h2>

    <label for="">Title: </label>
    <input type="text" name="" id="" bind:value={title} />
    <label for="">Content: </label>
    <textarea name="" id="" bind:value={content}></textarea>
    <button type="submit">Add blog</button>
  </form>
</dialog>

<style>
  dialog {
    height: 80%;
    width: 80%;
  }

  input,
  label,
  textarea {
    display: block;
  }

  textarea {
    width: 100%;
    height: 240px;
  }
</style>
