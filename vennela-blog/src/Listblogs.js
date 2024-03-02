import { Link } from "react-router-dom/cjs/react-router-dom.min"
const Listblogs = (props) => {
    const blogs = props.blogs
    const handleDelete = props.handleDelete

    return (   
            <div className="blogslist">
            {blogs.map(blog => (
                
                <div className="blog-preview" key={blog.id} >
                    <Link to={`details/${blog.id}`}>
                        <h2>{ blog.title }</h2>
                        <p>Written by { blog.author }</p>
                    </Link>
                </div>
                
                ))}    
            </div>
        );
}


export default Listblogs;