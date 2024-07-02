<script>
  import { onMount } from "svelte";
  import blogService from "./services/blogService";
  import EditBlog from "./EditBlog.svelte";

  let title = ""
  let content = ""
  let blogs = []
  let showModal = false

  onMount( async() => {
    blogs = await blogService.getAllBlogs()
  })

  const addBlog = async () => {
    const newBlog = await blogService.postBlog({title, content})
    blogs = [...blogs, newBlog]
  }

  const editBlog = () => {
    showModal = true
  }


  const deleteBlog = async (blogId) => {
    const deletedBlog = await blogService.deleteBlog(blogId)
    blogs = blogs.filter(blog => blog._id !== deletedBlog._id)
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

<EditBlog showModal={showModal}/>

<h2>Blogs</h2>
<ul>
  {#each blogs as blog}
  <li>
    <div>
      <h3>{blog.title}</h3>
      <p>{blog.content}</p>
      <button on:click={() => deleteBlog(blog._id)}>Delete</button>
      <button on:click={editBlog}>Edit</button>
    </div>
  </li>
  {/each}
</ul>

<style>
  input, label, textarea {
    display: block;
  }
</style>