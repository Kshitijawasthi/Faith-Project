import logo from "../assets/logo.jpeg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const abouIns = () => {
  return (
    <div className="my-10 bg-slate-100 py-10">
      <h1 className="text-3xl font-bold ml-16">About the Instructor</h1>
      <div className="flex my-8 mx-6">
        <div className="mx-10 px-4 py-4">
          <img src={logo} alt="" className=" rounded-full w-96 h-32" />
        </div>
        <div className="text-xl mx-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
          consectetur ex doloribus officiis? Dignissimos accusamus tempora
          deserunt architecto minus sequi ipsam reiciendis consectetur mollitia
          iusto? Nemo vitae soluta aspernatur quisquam ab quas ratione ipsum
          esse.
        </div>
        <div className="text-xl mx-6 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          ducimus totam, beatae quos ex hic saepe vel autem, ipsum officia
          perferendis aspernatur sint, voluptatum iste reprehenderit rerum
          aliquam! Quis nulla voluptates natus molestiae porro Lorem ipsum dolor
          sit amet consectetur adipisicing elit.
        </div>
      </div>
      <div className=" mx-8 my-8">
        <ul className="flex mx-32 my-5">
          <li className="mx-34 px-20">
            <FacebookIcon />
            <span className="px-3">Facebook</span>
          </li>
          <li className="mx-34 px-20">
            <InstagramIcon /> <span className="px-3">Instagram</span>
          </li>
          <li className="mx-34 px-20">
            <TwitterIcon /> <span className="px-3">Twitter</span>
          </li>
          <li className="mx-34 px-20">
            <YouTubeIcon />
            <span className="px-3">YouTube</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default abouIns;
