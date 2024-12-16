import AllPost from "./post/AllPost";

const HomeGrid = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="hidden col-span-1 lg:flex ">Aside</div>
      <AllPost />
    </div>
  );
};

export default HomeGrid;
