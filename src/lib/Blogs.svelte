<script>
  import { blogsList } from "../stores/blogStore";
  import blogService from "../services/blogService";

  export let blogs;
  export let showBlogForm;

  const deleteBlog = async (blogId) => {
    const deletedBlog = await blogService.deleteBlog(blogId);
    blogsList.update((blogs) =>
      blogs.filter((blog) => blog.id !== deletedBlog.id)
    );
  };
</script>

<h2>Blogs</h2>
<ul>
  {#each blogs as blog}
    <li>
      <div>
        <h3>{blog.title}</h3>
        <p>{blog.content}</p>
        <button on:click={() => deleteBlog(blog._id)}>Delete</button>
        <button
          on:click={() => {
            showBlogForm(blog);
          }}>Edit</button
        >
      </div>
    </li>
  {/each}
</ul>
