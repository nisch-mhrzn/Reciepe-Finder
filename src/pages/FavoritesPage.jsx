import RecipeCard from "../components/RecipeCard";

const FavoritesPage = () => {
  const fav = false; // Change this to true to show the 404 image or implement logic to determine favorites

  return (
    <div className="bg-[#f8f9fb] flex-1 p-10 min-h-screen">
      <div>
        <p className="font-bold text-3xl md:text-5xl my-4">FavoritesPage</p>
        {!fav ? (
          <div className="h-[80vh] flex flex-col items-center gap-4">
            <img src="/404.svg" className="h-3/4" alt="404 svg" />
            <p className="text-lg">No favorites found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <RecipeCard/>
            {/* Render your favorite items here */}
            <p>Your favorite items will be displayed here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
