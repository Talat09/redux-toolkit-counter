import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Loading/Loading";
import { useEffect } from "react";
import { fetchPosts } from "./postSlice";

const PostsView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  console.log("postData:", posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div>
      <h2 className="text-4xl md:text-5xl text-center  mt-8 font-bold text-sky-800">
        POST VIEW
      </h2>
      {isLoading && <Loading />}
      {error && <p>{error}</p>}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-5 my-16 mx-4">
        {posts &&
          posts.map((post, i) => {
            const { title, body } = post;
            return (
              <article
                key={i}
                className="bg-sky-800 w-full h-full flex flex-col justify-center items-center rounded-md p-4"
              >
                <h5 className="text-center text-2xl text-white">{title}</h5>
                <p className="text-center text-2xl text-white">{body}</p>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default PostsView;
