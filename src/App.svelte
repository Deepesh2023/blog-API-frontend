<script>
  import { onMount } from "svelte";
  import blogService from "./services/blogService";

  import BlogForm from "./lib/BlogForm.svelte";
  import Blogs from "./lib/Blogs.svelte";

  import { blogsList } from "./stores/blogStore";

  let blogs;
  let dialog;

  let title = "";
  let content = "";
  let blogId = null;

  blogsList.subscribe((value) => {
    blogs = value;
  });

  onMount(async () => {
    const blogsOnSever = await blogService.getAllBlogs();
    blogsList.update(() => blogsOnSever);
  });

  const showBlogForm = (blog = null) => {
    if (blog) {
      (title = blog.title), (content = blog.content), (blogId = blog._id);
    }

    dialog.showModal();
  };
</script>

<h1>Blogs-API</h1>
<button on:click|preventDefault={showBlogForm}>New blog</button>

<BlogForm bind:dialog {title} {content} {blogId} />
<Blogs {blogs} editBlog={showBlogForm} />
