import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
// import { Route, Switch } from "react-router-dom";
// import Welcome from "../components/Welcome";
// import Leftside from "../components/Leftside";
// import { withRouter } from "react-router-dom";
// import { useEffect, useState, Fragment } from "react";
// import Commonlayout from "../components/Commonlayout/Commonlayout";
// import Radium, { StyleRoot } from "radium";
// import Errorboundary from "../components/Errorboundary/Errorboundary";
// import Layout from "../components/Layout/Layout";
// import BurgerBuilder from "../containers/BurgerBuilder/BurgerBuilder";
import Expenses from "../components/ExpenseTracker/Expenses/Expenses";
import NewExpense from "../components/ExpenseTracker/Newexpense/NewExpense";
import Button from "../components/ExpenseTracker/UI/Button";
import AddUsers from "../components/ExpenseTracker/Users/AddUsers";
import UsersList from "../components/ExpenseTracker/Users/UsersList";
import Wrapper from "../components/Helpers/Wrapper";
import Login from "../components/ExpenseTracker/Login/Login";
import MainHeader from "../components/ExpenseTracker/Login/MainHeader";
import Home from "../components/ExpenseTracker/Login/Home";
import AuthContext from "../context/auth-context";
import Header from "../components/FoodLayout/Header";
import Meals from "../components/FoodMeals/Meals";
import Cart from "../components/FoodCart/Cart";
import CartProvider from "../context/CartProvider";
import Users from "../components/FoodMeals/MealItem/Users/Users";
import UserFinder from "../components/FoodMeals/MealItem/Users/UserFinder";
import ErrorBoundary from "../components/ErrorBoundary";
import MovieList from "../components/Movies/MovieList";
import AddMovie from "../components/Movies/AddMovie";
import ForwardCounter from "../components/counter/ForwardCounter";
import BackwardCounter from "../components/counter/BackwardCounter";
import NewTask from "../components/Task/NewTask";
import Tasks from "../components/Task/Tasks";
import useHttp from "../hooks/use-http";
import SimpleInput from "../components/SimpleInput";
import BasicForm from "../components/BasicForm";
const DUMMMY_EXPENSES = [
  {
    id: "e1",
    title: "Clothes",
    amount: 1316,
    date: new Date(2021, 7, 14)
  },
  {
    id: "e2",
    title: "Vegetables",
    amount: 1000,
    date: new Date(2021, 7, 14)
  },
  {
    id: "e3",
    title: "Detergents",
    amount: 255,
    date: new Date(2021, 6, 15)
  },
  {
    id: "e4",
    title: "Groceries",
    amount: 255,
    date: new Date(2021, 6, 20)
  }
];
const dummyMovies = [
  {
    id: 1,
    title: "Some Dummy Movie",
    openingText: "This is the opening text of the movie",
    releaseDate: "2021-05-18"
  },
  {
    id: 2,
    title: "Some Dummy Movie 2",
    openingText: "This is the second opening text of the movie",
    releaseDate: "2021-05-19"
  }
];

const App = props => {
  const [expenses, setexpenses] = useState(DUMMMY_EXPENSES);
  const [expenseapp, setexpenseapp] = useState(true);
  const [usersList, setusersList] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showCart, setshowCart] = useState(false);
  const [vegan, setvegan] = useState(true);
  const [allowSelection, setAllowSelection] = useState(false);
  const [switchUsers, setSwitchUsers] = useState(false);
  const [movies, setmovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [added, setAdded] = useState(false);
  const [tasks, setTasks] = useState([]);

  const { isLoadingHttp, errorHttp, sendRequest: fetchTask } = useHttp();
  //if you are passing url ie requestConfig as parameter to useHttp, it is send as props
  //requestConfig is object , which will chagne on every app re-render
  //which results in usehttp to be called
  //we need to make sure that url and transformedTask are not re-created when app re-renders
  //so we used usecallback for transformedTask and for url we send as argument to sendRequest

  //useeffect required for login app
  useEffect(() => {
    if (localStorage.getItem("loggedIn") === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const addExpenseHandler = newExpense => {
    console.log("Expense added to existing...", newExpense);
    // const existingExpense = [...expenses];
    // existingExpense.push(newExpense);

    // setexpenses(existingExpense);
    // setexpenses([newExpense, ...expenses]);
    setexpenses(prv => {
      return [newExpense, ...prv];
    });
  };

  const deleteItemHandler = id => {
    console.log("For deletion in app.js", id);
    setexpenses(prv => {
      const updatedExpense = prv.filter(exp => exp.id !== id);
      return updatedExpense;
    });
  };
  const switchAppHandler = () => {
    setexpenseapp(prv => !prv);
  };
  const addUserHandler = (username, age) => {
    setusersList(prv => {
      return [
        ...prv,
        { name: username, age: age, id: Math.random().toString() }
      ];
    });
  };
  const logoutHandler = () => {
    console.log("logout");
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
  };
  const loginHandler = (email, pwd) => {
    console.log("email..", email, "pwd  ...", pwd);
    localStorage.setItem("loggedIn", "1");
    setIsLoggedIn(true);
  };

  const showCartHandler = () => {
    setshowCart(true);
  };
  const showPageHandler = () => {
    console.log("Clicked");
    setshowCart(false);
  };
  const showVegan = useCallback(() => {
    if (allowSelection === true) setvegan(prev => !prev);
  }, [
    allowSelection /* based on the dependency allowSelection the stored showVegan will change ie whenever allowSelection changes showvegan will also be recreated and stored*/
  ]); /*when we pass this showvegan to buttton since we have used usecallback 
  this will not create a new object on ever render. so loginbutton will not be reevaluated everytime*/
  const foodTypeSelectionHandler = useCallback(() => {
    setAllowSelection(prv => !prv);
  }, []);
  const switchUsersHandler = () => {
    setSwitchUsers(prv => !prv);
  };

  // async function fetchMoviesHandler() {
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // const response = await fetch("https://swapi.dev/api/films/");
      const response = await fetch(
        "https://react-my-burger-44816-default-rtdb.firebaseio.com/movies.json"
      );
      console.log("Response ok..", response.ok);
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const data = await response.json();
      console.log("data", data);
      // const transformed = data.results.map(movieData => {
      //   return {
      //     // id: movieData.episode_id,
      //     title: movieData.title,
      //     releaseDate: movieData.release_date,
      //     openingText: movieData.opening_crawl
      //   };
      // });
      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          releaseDate: data[key].release_date,
          openingText: data[key].opening_crawl
        });
      }
      // setmovies(transformed);
      setmovies(loadedMovies);
      setIsLoading(false);
      console.log("transformed..", loadedMovies);
    } catch (error) {
      setError(error.message);
    }
  }, []);
  useEffect(() => {
    console.log("useeffect ran");
    fetchMoviesHandler(); //whenever state changes this component is reevaluated ,useeffect runs which changes the state,then agian useffect runs the cycle continues and results in infinite loop
  }, [fetchMoviesHandler, added]); //if i add  [] it wud run for the very first time.so we add a dependency, the best way is to add the method as dependency is fetchMoviesHandler, if the handler changes we will run the useeffect thats the thought, but here when the app.js rerender the method is created newly everytime so useffect wud run. to prevent the behavious we use usecallback

  // .then(response => {
  //   {
  //     console.log("Status....", response.status); //what ever returned from first then will be returend to second then
  //     console.log("Status....", response.ok); //eventhough the response.ok is false error will not be thrown. for that we need axios. but here we will try implemnting with fetch itself by throwing error
  //     if (!response.ok) return response.ok;
  //     else return response.json();
  //   }
  // })
  // .then(data => {
  //   if (data === false) {
  //     console.log("throwing error");
  //     return false;
  //   } else {
  //     const transformed = data.results.map(movieData => {
  //       return {
  //         id: movieData.episode_id,
  //         title: movieData.title,
  //         releaseDate: movieData.release_date,
  //         openingText: movieData.opening_crawl
  //       };
  //     });
  //     console.log("Results...", data.results);
  //     setmovies(transformed);
  //     setIsLoading(false);
  //   }
  // });
  // if (result === false) {
  //   console.log("throwing error finally");
  //   throw new Error("soemthing went wrong");
  // }
  // }
  console.log("SwitchUsers...", switchUsers);
  let content = <p>found no movies</p>;
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  if (error) {
    //if error is truth ie if it has some value
    content = <p>{error}</p>;
  }
  if (movies.length > 0) {
    content = <MovieList movies={movies}></MovieList>;
  }
  const addMovieHandler = async movie => {
    setAdded(prv => prv);
    console.log("movie...", movie);
    try {
      const response = await fetch(
        "https://react-my-burger-44816-default-rtdb.firebaseio.com/movies.json",
        {
          method: "POST",
          body: JSON.stringify(movie), //to convert javascript object to json
          headers: { "Content-Type": "application/json" }
        }
      );

      console.log("response.ok...", response.ok);
      if (!response.ok) {
        throw new Error("Some thing went wrong");
      }
      const data = await response.json();
      console.log("Data after adding...", data);

      setAdded(prv => !prv);
    } catch (error) {
      console.log("Error...");
    }
  };
  // const fetchTask = async () => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       "https://react-my-burger-44816-default-rtdb.firebaseio.com/tasks.json"
  //     );
  //     if (!response.ok) {
  //       throw new Error("Request failed!");
  //     }
  //     const data = await response.json();
  //     const loadedTasks = [];
  //     for (const taskKey in data) {
  //       loadedTasks.push({ id: taskKey, text: data[taskKey].text });
  //     }

  //     setTasks(loadedTasks);
  //   } catch (err) {
  //     setError(err.message || "Something went wrong! while fetching tasks");
  //   }
  //   setIsLoading(false);
  // };
  useEffect(() => {
    const transformTasks = taskobj => {
      const loadedTasks = [];
      for (const taskKey in taskobj) {
        const t1 = taskobj[taskKey];
        const t2 = taskobj[taskKey].text;
        loadedTasks.push({ id: taskKey, text: taskobj[taskKey].text });
      }
      setTasks(loadedTasks);
    };
    fetchTask(
      {
        url:
          "https://react-my-burger-44816-default-rtdb.firebaseio.com/tasks.json"
      },
      transformTasks
    );
  }, [fetchTask]);
  const addTaskHandler = task => {
    setTasks(prv => [...prv].concat(task));
  };
  return (
    // <StyleRoot>
    <React.Fragment>
      {!expenseapp && <Button onClick={switchAppHandler}>Switch</Button>}
      {!expenseapp && (
        <div>
          <h2>Let's get started</h2>
          <NewExpense onAddExpense={addExpenseHandler} />
          <Expenses expenses={expenses} deleteItem={deleteItemHandler} />
        </div>
      )}
      {!expenseapp && (
        <Wrapper>
          <AddUsers onAddUser={addUserHandler}></AddUsers>
          <UsersList users={usersList}></UsersList>
        </Wrapper>
      )}
      {!expenseapp && (
        <AuthContext.Provider
          value={{
            //just need a value here
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler
          }}
        >
          <MainHeader
          // isAuthenticated={isLoggedIn} //removed since we are using context
          // onLogout={logoutHandler} //removed since we are using context
          />
          <main>
            {!isLoggedIn && <Login onLogin={loginHandler} />}
            {isLoggedIn && <Home onLogout={logoutHandler} />}
          </main>
        </AuthContext.Provider>
      )}
      <ErrorBoundary>
        {!expenseapp && (
          <div>
            <section>
              <AddMovie addMovie={addMovieHandler}></AddMovie>
            </section>
            <section>
              <Button onClick={fetchMoviesHandler}>Show</Button>
            </section>
            <section>
              {/* {!isLoading && movies.length > 0 && (
            <MovieList movies={movies}></MovieList>
          )} */}
              {/* {!isLoading && movies.length === 0 && <p>No movies</p>}
          {isLoading && <p>Loading...</p>}
          {isLoading && error && <p>{error}</p>} */}
              {content}
            </section>
          </div>
        )}

        <CartProvider>
          {showCart && <Cart showPageHandler={showPageHandler}></Cart>}
          <Header
            showCartHandler={showCartHandler}
            switchUsersHandler={switchUsersHandler}
          ></Header>

          <main>
            {switchUsers && <UserFinder></UserFinder>}
            {!switchUsers && (
              <Meals
                vegan={vegan}
                showVegan={showVegan}
                foodTypeSelectionHandler={foodTypeSelectionHandler}
              ></Meals>
            )}
          </main>
        </CartProvider>

        {!expenseapp && (
          <div>
            <ForwardCounter></ForwardCounter>
            <BackwardCounter></BackwardCounter>
          </div>
        )}
        {!expenseapp && (
          <div>
            <NewTask addTaskHandler={addTaskHandler}></NewTask>
            <Tasks
              tasks={tasks}
              error={error}
              loading={isLoading}
              onFetch={fetchTask}
            ></Tasks>
            <SimpleInput></SimpleInput>
            <BasicForm></BasicForm>
          </div>
        )}
      </ErrorBoundary>
    </React.Fragment>
  );
};

export default // Radium(
// withRouter(
App;
// )
// ;
// );
