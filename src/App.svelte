<script>
  import { onMount } from "svelte";
  import blogService from "./services/blogService";
  import EditBlog from "./EditBlog.svelte";

  let blogs = []
  let dialog

  onMount( async() => {
    blogs = await blogService.getAllBlogs()
  })


  const editBlog = () => {
    dialog.showModal()
  }


  const deleteBlog = async (blogId) => {
    const deletedBlog = await blogService.deleteBlog(blogId)
    blogs = blogs.filter(blog => blog._id !== deletedBlog._id)
  }

</script>

<h1>Blogs-API</h1>
<button on:click|preventDefault={() => dialog.showModal()}>New blog</button>

<EditBlog bind:dialog/>

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
