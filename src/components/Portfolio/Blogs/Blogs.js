import { useState } from "react";
import { FaMediumM } from "react-icons/fa";
import Blog from "./Blog";

const Blogs = ({openMenu}) => {
  const [blogs] = useState([
    {
      id: 1,
      title: "INTUITION BEHIND GANS",
      description:
        "GANs or Generative Adversarial Networks are a type of machine learning framework. It has two neural networks which compete against each other in a game. One is a generator, and the other is a discriminator.",
      link: "https://iamyajat.medium.com/intuition-for-gans-generative-adversarial-networks-beginner-friendly-4f38af40b9e1",
      show: true,
    },
    {
      id: 5,
      title: "ABCD: EFGHIJKLMG HIJKLMNOPQ RSTUVWXYZ",
      description: "",
      link: "",
      show: false,
    },
    {
      id: 6,
      title: "ABCD: EFGHIJKLMG HIJKLMNOPQ RSTUVWXYZ",
      description: "",
      link: "",
      show: false,
    },
  ]);

  return (
    <>
      <div className={`portfolio-section opened-menu-${openMenu}`}>
        <div className="card-view">
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
      <div className="github-card github-icons">
        <a
          className="github-icon"
          href="https://iamyajat.medium.com/"
          target="_blank"
          rel="noreferrer"
        >
          <FaMediumM />
        </a>
      </div>
    </>
  );
};
export default Blogs;
