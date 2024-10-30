const ToyGallery = () => {
    return (
      <div className="py-10">
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 justify-items-center ">
          <img
            src="/images/corn.jpg"
            alt="Toy 1"
            className="w-40 h-40 object-cover rounded-full hover:border-4 hover:border-purple-300"
          />
          <img
            src="/images/ele.jpg"
            alt="Toy 2"
            className="w-40 h-40 object-cover rounded-full hover:border-4 hover:border-purple-300"
          />
          <img
            src="/images/deer.jpg"
            alt="Toy 3"
            className="w-40 h-40 object-cover rounded-full hover:border-4 hover:border-purple-300"
          />
          <img
            src="/images/dino.jpg"
            alt="Toy 4"
            className="w-40 h-40 object-cover rounded-full hover:border-4 hover:border-purple-300"
          />
          <img
            src="/images/panda.jpg"
            alt="Toy 5"
            className="w-40 h-40 object-cover rounded-full hover:border-4 hover:border-purple-300"
          />
          <img
            src="/images/duck.jpg"
            alt="Toy 6"
            className="w-40 h-40 object-cover rounded-full hover:border-4 hover:border-purple-300"
          />
        </div>
      </div>
    );
  };
  
  export default ToyGallery;
  