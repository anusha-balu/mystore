import React, { useState, useEffect } from "react";
import "./Rightsidecategoryview.css";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import ProductCard from "../../ProductCard/ProductCard";
import Descriptioncard from "../../Descriptioncard/Descriptioncard";
import { makeStyles } from "@material-ui/core/styles";
import Person from "../../Persons/Person/Person";
import UserInput from "../UserInputOutput/UserInput";
import UserOutput from "../UserInputOutput/UserOutput";
import Validation from "../../Validation/Validation";
import Char from "../../Char";
import Radium, { StyleRoot } from "radium";
import Errorboundary from "../../Errorboundary/Errorboundary";
import Persons from "../../Persons/Persons";
import Cockpit from "../../Cockpit/Cockpit";
import { object } from "prop-types";
import FitnessIndicator from "../../Fitness/FitnessIndicator";
const useStyles = makeStyles(theme => ({
  marginzero: {
    margin: 0
  }
}));
const Rightsidecategoryview = props => {
  useEffect(() => {
    console.log("Rightsidecategoryview useeffect");
  });
  const handleClose = event => {};
  const classes = useStyles();
  const [persons, updatepersons] = React.useState({
    persons: [
      { id: "asd1", name: "anusha", age: 1 },
      { id: "as2", name: "frd1", age: 2 },
      { id: "as3", name: "frd2", age: 3 }
    ],
    otherState: "some other value",
    showPersons: true,
    showCockpit: true
  });
  const [username, updateUsername] = React.useState("kirloskar");
  const [password, updatePassword] = React.useState("");

  console.log("current persons...", persons);
  const switchNamHandler = newname => {
    console.log("called switchhandler", newname);
    // const p = { ...persons.persons[0], name: "frd0" }; //creates a new object. this will not change the state at posn 0
    const p = persons.persons.map(data =>
      data.name === "anusha" ? { name: newname, age: 4 } : data
    );
    updatepersons({
      persons: p,
      // persons: p,
      otherState: persons.otherState
    });
  };
  const switchNamHandlerwithoutargument = () => {
    console.log("called switchNamHandlerwithoutargument");
    // const p = { ...persons.persons[0], name: "frd0" }; //creates a new object. this will not change the state at posn 0
    const p = persons.persons.map(data =>
      data.name === "anusha" ? { name: "honey", age: 4 } : data
    );
    updatepersons({
      ...persons,
      persons: p
    });
  };

  const nameChangeHandler = (event, id) => {
    console.log("called handler", id);
    const personIndex = persons.persons.findIndex(data => data.id === id);
    const tobechanged = persons.persons[personIndex];
    tobechanged.name = event.target.value;
    const newPersonsarray = [...persons.persons];
    newPersonsarray[personIndex] = tobechanged;

    // const p = persons.persons.map(data => {
    //   return { name: event.target.value, age: data.age };
    // });
    updatepersons({
      ...persons,
      persons: newPersonsarray
      // persons: p,
      // otherState: persons.otherState
    });
  };
  const usernameChangeHandler = event => {
    updateUsername(event.target.value);
  };
  const toggleDisplay = () => {
    updatepersons({
      ...persons,
      showPersons: !persons.showPersons
    });
  };
  const deleteindex = ind => {
    const newpersons = [...persons.persons];
    newpersons.splice(ind, 1);
    updatepersons({
      ...persons,
      persons: newpersons
    });
  };
  const passwordhandler = event => {
    console.log("called pwd");
    updatePassword(event.target.value);
  };

  const style = {
    border: "1px solid blue",
    backgroundColor: "green",
    color: "white",
    padding: "8px",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "violet",
      color: "black"
    }
  };
  console.log("pwd is...", [...password]);
  let person = null;
  if (persons.showPersons) {
    person = (
      <div>
        <Persons
          persons={persons.persons}
          deleteindex={deleteindex}
          nameChangeHandler={nameChangeHandler}
        ></Persons>
        {/* {persons.persons.map((data, index) => {
          return (
            <Person
              // click={switchNamHandlerwithoutargument}
              click={() => deleteindex(index)}
              name={data.name}
              age={data.age}
              key={data.id}
              onchange={event => nameChangeHandler(event, data.id)}
            />
          );
        })} */}

        {/* <Person
          click={switchNamHandlerwithoutargument}
          name={persons.persons[1].name}
          age={persons.persons[1].age}
        />
        <Person name={persons.persons[2].name} age={persons.persons[2].age}>
          My hobbies are
        </Person> */}
      </div>
    );
    style.backgroundColor = "red";
    style[":hover"] = {
      backgroundColor: "lightgreen",
      color: "black"
    };
  } else {
    console.log("inside else...", persons.showPersons);
    person = <div>no display</div>;
  }
  const list = [...password].map((pwd, index) => (
    <div>
      <Char key={index} clicked={() => deletechar(index)}>
        {pwd}
      </Char>
    </div>
  ));
  const deletechar = index => {
    const pwd = [...password];
    console.log("clked delete..", pwd);
    pwd.splice(index, 1);
    console.log("after splice..", pwd.join(""));
    updatePassword(pwd.join(""));
  };
  const styleMain = {
    "@media(max-width: 500px)": {
      width: "100%"
    }
  };

  return (
    // <StyleRoot>
    <div className="container" style={styleMain}>
      <div className="box" style={{ background: "#ffffff" }}>
        <button
          style={{
            border: "1px solid blue",
            padding: "8px",
            cursor: "pointer"
          }}
          onClick={() => switchNamHandler("pranu")}
        >
          Click
        </button>
        <button
          style={{
            border: "1px solid blue",
            padding: "8px",
            cursor: "pointer"
          }}
          onClick={() => switchNamHandlerwithoutargument()}
        >
          Click
        </button>
        {/* <Person
          click={() => switchNamHandler("hanu")}
          name={persons.persons[0].name}
          age={persons.persons[0].age}
          key={persons.persons[0].id}
          onchange={event => nameChangeHandler(event, persons.persons[0].id)}
        /> */}
      </div>
      <div className="box stack-top1" style={{ background: "#ffffff" }}>
        <input onChange={passwordhandler} value={password}></input>
        <Validation pwd={password}></Validation>
        {list}
        {/* <Grid
          container
          direction="row"
          spacing={1}
          classes={{ "spacing-xs-1": classes.marginzero }}
        >
          <Grid item container xs={5}>
            <Grid
              item
              sm={12}
              onClick={handleClose}
              style={{ padding: "20px" }}
            >
              <ProductCard
                image="/herbssmall.jpg"
                title={"Herbs"}
                height={"130"}
              ></ProductCard>
            </Grid>
          </Grid>
          <Grid item container xs={7} spacing={1} style={{ padding: "20px" }}>
            <Grid
              item
              sm={12}
              onClick={handleClose}
              style={{ padding: "10px" }}
            > */}
        {/* <Descriptioncard desc={" Turmeric is medicinal herb that boost immunity"}></Descriptioncard> */}
        {/* </Grid>
            <Grid
              item
              sm={12}
              onClick={handleClose}
              style={{ padding: "10px" }}
            >
              <Descriptioncard
                desc={" Turmeric is medicinal herb that boost immunity"}
              ></Descriptioncard>
            </Grid>
            <Grid
              item
              sm={12}
              onClick={handleClose}
              style={{ padding: "10px" }}
            > */}
        {/* <Descriptioncard desc={" Turmeric is medicinal herb that boost immunity"}></Descriptioncard> */}
        {/* </Grid>
          </Grid>
        </Grid> */}
      </div>
      <div
        className="box stack-top2"
        style={{
          background: "#ffffff"
          // flexGrow: "1",
          // flexShrink: "1",
          // display: "flex",
          // flexWrap: "wrap",
          // overflow: "hidden"
        }}
      >
        {persons.showCockpit === true ? (
          <FitnessIndicator name={persons.persons[0].name}></FitnessIndicator>
        ) : null}
        {/* <UserInput
            handler={usernameChangeHandler}
            currentName={username}
          ></UserInput>
          <UserOutput name={username}></UserOutput>
          <UserOutput name={username}></UserOutput>
          <UserOutput name={username}></UserOutput> */}

        {/* <Grid
          container
          spacing={0}
          direction="row"
          classes={{ "spacing-xs-1": classes.marginzero }}
        >
          <Grid item sm={4} onClick={handleClose}>
            <ProductCard
              image="/4095926.jpg"
              title={"Herbs"}
              height={"70"}
              {...props}
            ></ProductCard>
          </Grid>
          <Grid item sm={4} onClick={handleClose}>
            <ProductCard
              image="/5926.jpg"
              title={"Herbs"}
              {...props}
            ></ProductCard>
          </Grid>
          <Grid item sm={4} onClick={handleClose}>
            <ProductCard
              image="/5926.jpg"
              title={"Herbs"}
              {...props}
            ></ProductCard>
          </Grid>
          <Grid item sm={4} onClick={handleClose}>
            <ProductCard
              image="/4095926.jpg"
              title={"Herbs"}
              {...props}
            ></ProductCard>
          </Grid>
          <Grid item sm={4} onClick={handleClose}>
            <ProductCard
              image="/herbssmall.jpg"
              title={"Herbs"}
              {...props}
            ></ProductCard>
          </Grid>
          <Grid item sm={4} onClick={handleClose}>
            <ProductCard
              image="/4095926.jpg"
              title={"Herbs"}
              {...props}
            ></ProductCard>
          </Grid>
          <Grid item sm={4} onClick={handleClose}>
            <ProductCard
              image="/herbssmall.jpg"
              title={"Herbs"}
              {...props}
            ></ProductCard>
          </Grid>
          <Grid item sm={4} onClick={handleClose}>
            <ProductCard
              image="/herbssmall.jpg"
              title={"Herbs"}
              {...props}
            ></ProductCard>
          </Grid>
          <Grid item sm={4} onClick={handleClose}>
            <ProductCard
              image="/34468.jpg"
              title={"Herbs"}
              {...props}
            ></ProductCard>
          </Grid>
        </Grid> */}
      </div>
      <div className="box stack-top3" style={{ background: "#ffffff" }}>
        <button
          onClick={() => {
            console.log("on remove click..", persons);
            const newobj = Object.assign({}, persons, {
              showCockpit: !persons.showCockpit
            });
            updatepersons(newobj);
          }}
        >
          Remove
        </button>
        {persons.showCockpit === true ? (
          <Cockpit
            toggleDisplay={toggleDisplay}
            // showPersons={persons.showPersons}
            // personsLength={persons.persons.length}
          ></Cockpit>
        ) : null}
        {person}
      </div>
    </div>
  );
};
export default // Radium(
Rightsidecategoryview;
// );
