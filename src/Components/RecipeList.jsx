import React, { useState, useEffect } from "react";
import axios from "axios";

const RecipeList = ({ searchQuery, setSearchQuery }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [apiFetched, setApiFetched] = useState(false);

  useEffect(() => {
    const fetchRecipes = async () => {
      if (!searchQuery) return;

      setLoading(true);
      setApiFetched(false);

      try {
        const response = await axios.get(
          "https://api.edamam.com/api/recipes/v2",
          {
            params: {
              type: "public",
              q: searchQuery,
              app_id: "232df9d3",
              app_key: "dfda2c4f4aa64afe89009b0475f78282",
            },
            headers: {
              "Edamam-Account-User": "kaushik980",
            },
          }
        );

        setRecipes(response.data.hits);
        setApiFetched(true);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [searchQuery]);

  return (
    <div className="p-6 max-w-full mx-auto bg-emerald-100
    "
    style={{
      backgroundImage:
        "url('https://img.freepik.com/free-photo/chopped-parsley-pepper-plate-marble_114579-87273.jpg?t=st=1743841188~exp=1743844788~hmac=514aa4cbbd70b56bbd6d9d8383d6e7c6a5acc2866eea2d7370c1e38a68c52cf6&w=1380')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      
    }}
    >
  
  <h1 className="text-5xl font-extrabold text-center mb-8 p-4 text-emerald-600 bg-white rounded-xl shadow-lg border border-emerald-200">
  🍽️ Recipe Finder
</h1>





      {/* Loading Animation */}
      {loading ? (
        <p className="text-center text-lg text-emerald-600 animate-bounce">
          🔄 Fetching recipes...
        </p>
      ) : (
        <>
          {/* Placeholder before API fetch */}
          {!apiFetched && (
            <div className="flex flex-col items-center text-center text-gray-700">
              <p className="text-gray-600">Try searching for a recipe above!</p>
              
        

              {/* Suggested Popular Recipes */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  {
                    name: "Chicken",
                    img: "https://img.freepik.com/free-photo/chicken-with-mustard-red-peppers_661915-105.jpg?t=st=1743826122~exp=1743829722~hmac=dd6f9ae5a92274118e3d54816b11664c7683ae55d80b73242273d12da0f7db1a&w=1380",
                  },
                  {
                    name: "Pizza",
                    img: "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?t=st=1743826284~exp=1743829884~hmac=46d0b473274773219fa871ec68cb07e233c3e6194567954ec48a23c40319f843&w=826",
                  },
                  {
                    name: "Pasta",
                    img: "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19739.jpg?t=st=1743826219~exp=1743829819~hmac=62d4ce468ea15dbd31f9a3baf9a4a380e2c70c63bccb9368e70a73a6e41d8021&w=1380",
                  },
                  {
                    name: "Biryani",
                    img: "https://img.freepik.com/free-photo/plate-biryani-with-bowl-chicken-vegetables_505751-3813.jpg?t=st=1743825323~exp=1743828923~hmac=c04ea949cd05353888a061d31dd38fe98406f7166d9a78fbd3796e57833d0a3a&w=1380",
                  },
                  {
                    name: "Paneer Tikka",
                    img: "https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-chili_2829-19997.jpg?t=st=1743825479~exp=1743829079~hmac=7951bce4bb6d68c097c851dc71384b6e280a5d5d2835e915b8a2470b922573ae&w=1380",
                  },
                  {
                    name: "Salad",
                    img: "https://img.freepik.com/free-photo/side-view-vegan-salad-plate-with-various-vegetables-fork-tomatoes-with-stem-dark-background_179666-47243.jpg?t=st=1743825583~exp=1743829183~hmac=1f6462f31a5b6d33e217d3b469c2480ddcbe5ba8783430950544ec94008d2ec0&w=1380",
                  },
                  {
                    name: "Juice",
                    img: "https://img.freepik.com/free-photo/glass-orange-juice-fresh-fruit-floor-with-ice-cubes_1150-23633.jpg?t=st=1743828763~exp=1743832363~hmac=6c8d5be9d44a4f29c0db507f175cdc9c48c83c9c2d1a6e2d018e594a171b8a07&w=740",
                  },
                  {
                    name: "Cakes",
                    img: "https://img.freepik.com/free-photo/ai-generated-cake-picture_23-2150649466.jpg?t=st=1743828974~exp=1743832574~hmac=3bd60f6e76f5d9bf1b33da664d05575cfa4bf4bc5f6000733b17ebc1bb523e26&w=1380",
                  },
                  {
                    name: "Mashroom",
                    img: "https://img.freepik.com/free-photo/baked-potatoes-with-garlic-herbs-fried-chanterelles-cast-iron-skillet-top-view_2829-17379.jpg?t=st=1743829183~exp=1743832783~hmac=def2348ea2312d3c9d8528d5d908d96549c7fecd07b909becd3549faf03b9aff&w=1380",
                  },
                  {
                    name: "Paneer Butter Masala",
                    img: "https://img.freepik.com/free-photo/vertical-shot-traditional-indian-paneer-butter-masala-cheese-cottage-curry-black-surface_181624-32001.jpg?t=st=1743829256~exp=1743832856~hmac=23f44b106fdb49c342704d7be3062b3a15193ee194006f21bb92ee188bc7c03f&w=740",
                  },
                  {
                    name: "Fish Curry",
                    img: "https://img.freepik.com/free-photo/top-view-delicious-fish-meal_23-2148734691.jpg?t=st=1743829394~exp=1743832994~hmac=818d81c5c534292c84afde128bea053ab7151d354a7a55fc890badf8a4499ebe&w=996",
                  },
                  {
                    name: "Momos",
                    img: "https://img.freepik.com/free-photo/delicious-food-table_23-2150857744.jpg?t=st=1743829496~exp=1743833096~hmac=b5494c23d05694cf764d181a8413d6a343fdea3727a8d9db39ff3dfdccd921ed&w=1380",
                  },
                  
                ].map((item, i) => (
                  <div
                    key={i}
                    onClick={() => setSearchQuery(item.name)}
                    className="cursor-pointer shadow-lg rounded-xl overflow-hidden hover:scale-105 transition duration-300"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-36 object-cover"
                    />
                    <h3 className="text-center font-semibold text-gray-800 py-2">
                      {item.name}
                    </h3>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* Display Recipes after API fetch */}
          {apiFetched && recipes.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {recipes.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src={item.recipe.image}
                    alt={item.recipe.label}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h2 className="text-lg font-semibold text-gray-800 truncate">
                      {item.recipe.label}
                    </h2>
                    <p className="text-gray-500 text-sm mt-2">
                      🔥 Calories: {item.recipe.calories.toFixed(0)}
                    </p>
                    <a
                      href={item.recipe.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 block text-center bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 rounded-lg transition"
                    >
                      View Recipe 🍲
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No results message */}
          {apiFetched && recipes.length === 0 && (
            <p className="text-center text-gray-500">
              ❌ No recipes found for "{searchQuery}"
            </p>
          )}
        </>
      )}
      
    </div>
    
  );
};

export default RecipeList;
