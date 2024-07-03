<script>
  import { onMount } from "svelte";
  import blogService from "./services/blogService";

  import BlogForm from "./BlogForm.svelte";
  import Blogs from "./lib/Blogs.svelte"

  import {blogsList} from "./stores/blogStore"


  let blogs = []
  let dialog

  blogsList.subscribe((value) => {
    blogs = value
  })


  onMount(async () => {
    const blogsOnSever = await blogService.getAllBlogs()
    blogsList.update(() => blogsOnSever)
  })

</script>

<h1>Blogs-API</h1>
<button on:click|preventDefault={() => dialog.showModal()}>New blog</button>

<BlogForm bind:dialog />
<Blogs {blogs}/>
