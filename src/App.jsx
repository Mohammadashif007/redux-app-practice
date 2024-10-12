import Recipes from "./components/Recipes";
import { useGetProductApiQuery } from "./redux/api/productApi/productApi";

function App() {
    const { data, isLoading, isSuccess } = useGetProductApiQuery();
    console.log(data);
    return (
        <div className="grid grid-cols-3">
              <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
            {isLoading?  
                <span className="loading loading-spinner loading-lg"></span>: null
            }

            {data &&
                isSuccess &&
                data.map((recipe) => (
                    <Recipes key={recipe.id} recipe={recipe}></Recipes>
                ))}
        </div>
    );
}

export default App;
