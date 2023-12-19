import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Home extends React.Component {
  state = {
    skills: [
      {
        id: 1,
        name: "Javascript",
        description: "Javascript description",
        image: require("../images/js.png")
      },
      {
        id: 2,
        name: "Vue",
        description: "Vue description",
        image: require("../images/vue.png")
      },
      {
        id: 3,
        name: "React",
        description: "React description",
        image: require("../images/react.png")
      },
      {
        id: 4,
        name: "Svelte",
        description: "Svelte description",
        image: require("../images/sv.png")
      },
    ]
  }
  render() {
    const { skills } = this.state;
    return (
      <div>
        <MainLayout>
          <h1 style={{ paddingLeft: "6rem" }}>Homepage</h1>
          <div style={container}>
            { skills.map(item => 
            <div key={item.id} style={card}>
              <Link to={`/detail/${item.id}`}>
                <img style={img} src={item.image} alt={item.name}/>
              </Link>
              <h3>{item.name}</h3>
            </div>)}
          </div>
        </MainLayout>
      </div>
    )
  }
}

export default Home;

const container = {
  display: "flex",
  padding: "0 6rem",
  justifyContent: "space-between"
}

const card = {
  width: "20%",
  height: "15rem"
}

const img = {
  width: "100%",
  height: "100%"
}